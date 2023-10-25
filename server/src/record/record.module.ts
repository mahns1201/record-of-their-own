import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantService } from 'src/participant/participant.service';
import { ParticipantEntity } from 'src/participant/entity/participant.entity';
import { RecordEntity } from './entity/record.entity';
import { ChannelEntity } from 'src/channel/entity/channel.entity';
import { RecordController } from './record.controller';
import { ChannelService } from 'src/channel/channel.service';
import { RecordService } from './record.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecordEntity, ChannelEntity, ParticipantEntity]),
  ],
  controllers: [RecordController],
  providers: [RecordService, ChannelService, ParticipantService],
})
export class RecordModule {}
