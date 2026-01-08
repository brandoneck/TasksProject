import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;
    
    @IsNumber()
    @Max(100)
    age: number;
}