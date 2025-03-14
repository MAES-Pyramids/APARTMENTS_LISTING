import { Module } from '@nestjs/common';
import { ApartmentsService } from './services/apartments.service';
import { ApartmentsResolver } from './resolvers/apartments.resolver';

@Module({
  providers: [ApartmentsResolver, ApartmentsService],
})
export class ApartmentsModule {}
