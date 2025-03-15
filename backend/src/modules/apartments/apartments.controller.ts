import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ApartmentsService } from './apartments.service';
import { Auth } from '../../libs/decorators/auth.decorator';
import { CreateApartmentInput } from './dtos/inputs/create-apartment.input';
import { Serialize } from '../../libs/interceptors/serialize.interceptor';
import { PaginatorResponse } from '../../libs/application/paginator/paginator.response';
import { ApartmentShortResponseDto } from './dtos/responses/apartment-short-response.dto';
import { ApartmentResponseDto } from './dtos/responses/apartment-response.dto';
import { PaginatorInput } from '../../libs/application/paginator/paginator.input';
import { FilterApartmentsInput } from './dtos/inputs/filter-apartment.input';
import { SortApartmentInput } from './dtos/inputs/sort-apartment.input';
import { ApartmentIdInput } from './dtos/inputs/find-apartment.input';
import { currentUser } from '../../libs/decorators/currentUser.decorator';
import { User } from '../user/entities/user.entity';
import { IsolationLevel, Transactional } from 'typeorm-transactional';

@ApiTags('apartments')
@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentService: ApartmentsService) {}

  @Post()
  @Auth({ allow: 'admin' })
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new apartment (Admin only)' })
  @ApiResponse({
    status: 201,
    description: 'Apartment created successfully',
    type: ApartmentResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @Serialize(ApartmentResponseDto)
  async createApartment(@Body() createApartmentDto: CreateApartmentInput) {
    return await this.apartmentService.createApartment(createApartmentDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get a list of apartments with filtering, sorting, and pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'List of apartments retrieved successfully',
    type: ApartmentShortResponseDto,
  })
  @Serialize(PaginatorResponse, ApartmentShortResponseDto)
  async geApartments(
    @Query('filter') filter: FilterApartmentsInput,
    @Query('sort') sort: SortApartmentInput,
    @Query('paginate') paginate: PaginatorInput,
  ) {
    return await this.apartmentService.searchApartments(filter, sort, paginate);
  }

  @Get('/:apartmentId')
  @ApiOperation({ summary: 'Get details of a specific apartment by ID' })
  @ApiResponse({
    status: 200,
    description: 'Apartment details retrieved successfully',
    type: ApartmentResponseDto,
  })
  @Serialize(ApartmentResponseDto)
  @ApiResponse({ status: 404, description: 'Apartment not found' })
  @Transactional({ isolationLevel: IsolationLevel.SERIALIZABLE })
  async getApartment(
    @Param() { apartmentId }: ApartmentIdInput,
    @currentUser() user: User,
  ) {
    return await this.apartmentService.getApartment(apartmentId, user);
  }
}
