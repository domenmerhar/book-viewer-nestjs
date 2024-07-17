import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(private usersRepository: UsersRepository) {}

  signup(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.signup(createUserDto);
  }
}
