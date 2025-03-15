import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PageInfoResponse {
  @ApiProperty({ description: 'Current page number', example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ description: 'Number of items per page', example: 10 })
  @Expose()
  limit: number;

  @ApiProperty({
    description: 'Indicates if there are previous pages',
    example: false,
  })
  @Expose()
  hasBefore: boolean;

  @ApiProperty({
    description: 'Indicates if there are next pages',
    example: true,
  })
  @Expose()
  hasNext: boolean;

  @ApiProperty({ description: 'Total number of records', example: 100 })
  @Expose()
  totalCount: number;
}

export class PaginatorResponse<T> {
  @ApiProperty({ description: 'Array of paginated items' })
  @Expose()
  items: T[];

  @ApiProperty({ description: 'Pagination metadata' })
  @Expose()
  @Type(() => PageInfoResponse)
  pageInfo: PageInfoResponse;
}

class CursorBasedPageInfoResponse {
  @Expose()
  cursor: string;

  @Expose()
  direction: string;

  @Expose()
  limit: number;

  @Expose()
  hasBefore: boolean;

  @Expose()
  hasNext: boolean;

  @Expose()
  totalCount: number;
}

export class CursorBasedPaginatorResponse<T> {
  @Expose()
  items: T[];

  @Expose()
  pageInfo: CursorBasedPageInfoResponse;
}
