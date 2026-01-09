import { Body, Controller, Get, Post, } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@Controller('/users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'List of users' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }
}
