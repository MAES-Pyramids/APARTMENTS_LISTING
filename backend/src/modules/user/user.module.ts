import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../../configs/database/database.module';
import { User } from './entities/user.entity';
import { HelperModule } from '../../libs/utils/helper/helper.module';
import { UserTransformer } from './transformer/user.transformer';

@Module({
  imports: [DatabaseModule.forFeature([User]), HelperModule],
  controllers: [UserController],
  providers: [UserService, UserTransformer],
  exports: [UserService, UserTransformer],
})
export class UserModule {}
