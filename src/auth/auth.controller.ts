import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(@Body() userDto: CreateUserDto): Promise<User> {
    return this.authService.signup(userDto);
  }

  @Post('/signin')
  singin(@Body() userDto: CreateUserDto) {
    return userDto;
  }
}
