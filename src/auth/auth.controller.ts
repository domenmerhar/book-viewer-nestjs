import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(@Body() userDto: UserDto) {
    return userDto;
  }

  @Post('/signin')
  singin(@Body() userDto: UserDto) {
    return userDto;
  }
}
