import { ApiProperty } from "@nestjs/swagger";
import { DataType, Column, Model, Table, BelongsToMany } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
    value: string,
    description: string
}

@Table({
    tableName: 'roles'
})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;
    
    @ApiProperty({example: 'Админ', description: 'Значение роли пользователя'})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    value: string;

    @ApiProperty({example: 'Может делать все', description: 'Описание роли'})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}