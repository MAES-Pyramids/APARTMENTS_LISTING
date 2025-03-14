import { Resolver } from '@nestjs/graphql';
import { ApartmentsService } from './apartments.service';

@Resolver()
export class ApartmentsResolver {
  constructor(private readonly apartmentsService: ApartmentsService) {}
}
