import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {

    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request);
        response.status(200).json({
            message: 'Hello, World!'
        });
    }

    @Get('/new')
    @HttpCode(201)
    somethingNew() {
        return { message: 'Something new' };
    }

    @Get('/notFound')
    @HttpCode(404)
    notFound() {
        return { message: 'Not Found' };
    }

    @Get('/error')
    @HttpCode(500)
    errorPage() {
        return { message: 'Error' };
    }

    @Get('/ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 2;
    }

    @Get('/active/:status')
    getStatus(@Param('status', ParseBoolPipe) status: string) {
        console.log(typeof status);
        return status === 'true';
    }

    @Get('/greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateUserPipe) query: { name: string, age: string }) {
        return `Hello ${query.name}, you are ${query.age} years old!`;

    }
}
