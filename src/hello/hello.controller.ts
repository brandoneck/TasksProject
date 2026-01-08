import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller()
export class HelloController {

    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request);
        response.status(200).json({
            message: 'Hello, World!'
        });
    }

    @Get('/notFound')
    @HttpCode(404)
    notFound() {
        return { message: 'Not Found' };
    }

    @Get('/error')
    @HttpCode(500)
    errorPage() {
        return { message: 'Not Found' };
    }
}
