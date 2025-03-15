import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupInput } from './dtos/inputs/signup.input';
import { AuthResponse } from './dtos/responses/auth.response';
import { LoginInput } from './dtos/inputs/login.input';
import { LocalAuthGuard } from '../../libs/guards/strategy.guards/local.guard';
import { Serialize } from '../../libs/interceptors/serialize.interceptor';
import { JwtAuthenticationGuard } from '../../libs/guards/strategy.guards/jwt.guard';
import { currentUser } from '../../libs/decorators/currentUser.decorator';
import { currentUserType } from '../../libs/types/current-user.type';
import { UserResponse } from '../user/dtos/responses/user.response';
import { SessionService } from '../session/session.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
  ) {}
  @Post('signup')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User signup' })
  @ApiResponse({
    status: 200,
    description: 'User registered successfully',
    type: UserResponse,
  })
  @ApiResponse({ status: 400, description: 'Validation error' })
  @Serialize(UserResponse)
  async signup(@Body() signupInput: SignupInput) {
    return await this.authService.signup(signupInput);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({
    status: 200,
    description: 'User logged in successfully',
    type: AuthResponse,
  })
  @ApiResponse({ status: 401, description: 'Invalid email or password' })
  @Serialize(AuthResponse)
  async login(@Body() _: LoginInput, @currentUser() user: currentUserType) {
    const session = await this.sessionService.create(user);
    return await this.authService.appendAuthTokenToResponse(user, session);
  }

  @Get('me')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthenticationGuard)
  @ApiOperation({ summary: 'Get current authenticated user' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Current user data',
    type: UserResponse,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Serialize(UserResponse)
  async getMe(@currentUser() user: currentUserType) {
    return user;
  }
}
