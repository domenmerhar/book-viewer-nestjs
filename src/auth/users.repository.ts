import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async signup(createUserDto: CreateUserDto): Promise<User> {
    const { username, password } = createUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    return await this.save({
      username,
      password: hashedPassword,
    });
  }

  async signin(createUserDto: CreateUserDto): Promise<User> {
    const { username, password } = createUserDto;

    const user = await this.findOneBy({ username });
    if (!user && !bcrypt.compare(user.password, password))
      throw new BadRequestException(`User does not exist`);

    return user;
  }
}
