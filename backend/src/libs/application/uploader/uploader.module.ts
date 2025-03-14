import '@libs/utils/dotenv';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { File } from './entities/file.entity';
import { FileRepository } from './repositories/file.repository';
import { UploaderController } from './controllers/uploader.controller';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([File])],
  providers: [FileRepository],
  controllers: [UploaderController],
})
export class UploaderModule {}
