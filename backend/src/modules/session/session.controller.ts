import { SessionService } from './session.service';
import { Controller, Delete } from '@nestjs/common';
import { Auth } from '../../libs/decorators/auth.decorator';
import { currentUserType } from '../../libs/types/current-user.type';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { currentUser } from '../../libs/decorators/currentUser.decorator';

@ApiTags('sessions')
@ApiBearerAuth()
@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Delete()
  @Auth({ allow: 'authenticated' })
  @ApiOperation({ summary: 'Logout and remove user session' })
  @ApiResponse({ status: 200, description: 'Session removed successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Session not found' })
  remove(@currentUser() user: currentUserType) {
    return this.sessionService.remove(user.session);
  }
}
