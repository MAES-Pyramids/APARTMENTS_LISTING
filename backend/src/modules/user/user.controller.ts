import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('seed')
  @ApiOperation({ summary: 'Seed default admin user' })
  @ApiResponse({
    status: 200,
    description: 'Operation done successfully',
  })
  async seedAdmins() {
    return await this.userService.seedAdmins();
  }
}
