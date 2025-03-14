import { Module } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { ApartmentsController } from './apartments.controller';
import { DatabaseModule } from '../../configs/database/database.module';
import { Apartment } from './entities/apartment.entity';

@Module({
  imports: [DatabaseModule.forFeature([Apartment])],
  controllers: [ApartmentsController],
  providers: [ApartmentsService],
})
export class ApartmentsModule {}
