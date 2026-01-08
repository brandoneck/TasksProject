import { IsBoolean, IsString, MinLength } from "class-validator"

export class CreateTaskDto {
    @IsString()
    @MinLength(1)
    title: string
    
    @IsBoolean()
    @MinLength(1)
    completed: boolean
}