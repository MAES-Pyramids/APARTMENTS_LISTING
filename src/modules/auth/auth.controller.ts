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
import { Transactional } from 'typeorm-transactional';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
  ) {}

  @Post('signup')
  @Serialize(UserResponse)
  @HttpCode(HttpStatus.OK)
  @Transactional()
  async signup(@Body() signupInput: SignupInput) {
    return await this.authService.signup(signupInput);
  }

  @Post('login')
  @Serialize(AuthResponse)
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async login(@Body() _: LoginInput, @currentUser() user: currentUserType) {
    const session = await this.sessionService.create(user);
    return await this.authService.appendAuthTokenToResponse(user, session);
  }

  @Get()
  @Serialize(UserResponse)
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthenticationGuard)
  async getMe(@currentUser() user: currentUserType) {
    return user;
  }
}
