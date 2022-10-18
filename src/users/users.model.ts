import { ApiProperty } from "@nestjs/swagger";
import { DataType, Column, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
    email: string,
    password: string
}

@Table({
    tableName: 'users'
})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;
    
    @ApiProperty({example: 'example@mail.com', description: 'Email'})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email: string;

    @ApiProperty({example: '12345678', description: 'Пароль пользователя'})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @ApiProperty({example: 'true', description: 'Забанен ли пользователь'})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    banned: boolean;

    @ApiProperty({example: 'Превышен лимит запросов', description: 'Причина блокировки'})
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    banReason: string;
}