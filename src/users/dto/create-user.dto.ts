import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
    @ApiProperty({example: 'example@mail.com', description: 'Email'})
    readonly email: string
    
    @ApiProperty({example: '12345678', description: 'Пароль пользователя'})
    readonly password: string
}