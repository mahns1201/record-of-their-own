import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelModule } from './channel/channel.module';
import { ParticipantModule } from './participant/participant.module';
import { RecordModule } from './record/record.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './config/.env',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT, 10),
        database: process.env.MYSQL_DATABASE,
        username: process.env.MYSQL_ROOT_USER,
        password: process.env.MYSQL_ROOT_PASSWORD,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    ChannelModule,
    ParticipantModule,
    RecordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
