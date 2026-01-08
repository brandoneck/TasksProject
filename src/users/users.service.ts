import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users: any[] = [
        {id: 1, name: 'John Doe', email: 'john@example.com', age: 30 ,password: 'password123'},
        {id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25, password: 'password456'},
        {id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 28, password: 'password789'}];

    getUsers() {
        return this.users;
    }

    createUser(user: CreateUserDto) {
        this.users.push(user);
        return {
            ...user,
            id: this.users.length+1
        };
    }
}
