import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    controllers: [
        
    ],
    providers: [
        
    ],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'nest-course',
            autoLoadModels: true,
            models: []
        })
    ],
})
export class AppModule {

}