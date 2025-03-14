import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentService: ApartmentsService) {}

  @Post()
  @Auth({ allow: 'admin' })
  async createApartment(@Body() createApartmentDto: CreateApartmentInput) {
    return await this.apartmentService.createApartment(createApartmentDto);
  }

  @Get('')
  @Serialize(PaginatorResponse, ApartmentShortResponseDto)
  async geApartments(
    @Query('filter') filter: FilterApartmentsInput,
    @Query('sort') sort: SortApartmentInput,
    @Query('paginate') paginate: PaginatorInput,
  ) {
    return await this.apartmentService.searchApartments(filter, sort, paginate);
  }

  @Get('/:apartmentId')
  @Serialize(ApartmentResponseDto)
  async getApartment(@Param() { apartmentId }: ApartmentIdInput) {
    return await this.apartmentService.getApartment(apartmentId);
  }
}
