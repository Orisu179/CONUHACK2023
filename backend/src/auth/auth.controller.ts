import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './constants';
import { AuthInfo } from './dto/authinfo.input';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() authInfo: AuthInfo) {
    return this.authService.login(authInfo);
  }
}
