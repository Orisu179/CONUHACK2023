import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import { AuthInfo } from './dto/authinfo.input';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  private async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findOneByEmail(email);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(authInfo: AuthInfo) {
    const user = await this.validateUser(authInfo.email, authInfo.password);
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user_id: user.id,
    };
  }
}
