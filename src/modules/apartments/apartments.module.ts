import { Module } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { ApartmentsController } from './apartments.controller';
import { DatabaseModule } from '../../configs/database/database.module';
import { Apartment } from './entities/apartment.entity';

@Module({
  imports: [DatabaseModule.forFeature([Apartment])],
  providers: [ApartmentsService],
  controllers: [ApartmentsController],
})
export class ApartmentsModule {}
