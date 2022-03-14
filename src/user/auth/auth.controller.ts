import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from 'src/dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(@Body() body: SignupDto) {
    return this.authService.signup();
  }
}
