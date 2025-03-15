import { Injectable } from '@nestjs/common';
import { InjectBaseRepository } from '../../libs/decorators/inject-base-repository.decorator';
import { Apartment } from './entities/apartment.entity';
import { BaseRepository } from '../../libs/types/base-repository';
import { CreateApartmentInput } from './dtos/inputs/create-apartment.input';
import { ErrorCodeEnum } from '../../libs/application/exceptions/error-code.enum';
import { ILike, Raw } from 'typeorm';
import { FilterApartmentsInput } from './dtos/inputs/filter-apartment.input';
import { SortApartmentInput } from './dtos/inputs/sort-apartment.input';
import { PaginatorInput } from '../../libs/application/paginator/paginator.input';
import { ApartmentSortByEnum } from './enums/apartment.enum';
import { SortTypeEnum } from '../../libs/application/paginator/paginator.types';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectBaseRepository(Apartment)
    private readonly apartmentRepo: BaseRepository<Apartment>,
  ) {}

  // TODO: Ensure that the image URL is actually stored in the database and exists as a file.
  async createApartment(input: CreateApartmentInput) {
    return this.apartmentRepo.createOne(input);
  }

  public async searchApartments(
    filter: FilterApartmentsInput = {},
    sort: SortApartmentInput = {
      sortType: SortTypeEnum.DESC,
      sortBy: ApartmentSortByEnum.CREATED_AT,
    },
    paginate: PaginatorInput = {},
  ) {
    const { sortBy, sortType } = sort;
    const { searchKey = '', city } = filter || {};
    const { page = 1, limit = 15 } = paginate || {};

    const trimmedSearchKey = searchKey?.trim() || null;

    const baseConditions: Record<string, any> = {
      ...(city && {
        unitAddress: Raw((alias) => `${alias} @> '{"city": "${city}"}'::jsonb`),
      }),
    };

    const searchConditions = trimmedSearchKey
      ? [{ ...baseConditions, unitName: ILike(`%${trimmedSearchKey}%`) }]
      : [baseConditions];

    return this.apartmentRepo.findPaginated(
      searchConditions,
      { [sortBy]: sortType },
      page,
      limit,
    );
  }
  // TODO: handle update watch count with queue to ensure no race conation
  public async getApartment(apartmentId: string) {
    const apartment = await this.apartmentRepo.findOneOrError(
      { id: apartmentId },
      ErrorCodeEnum.APARTMENT_NOT_FOUND,
    );

    return apartment;
  }
}
