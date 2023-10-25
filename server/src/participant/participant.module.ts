import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantEntity } from './entity/participant.entity';
import { ParticipantController } from './participant.controller';
import { ParticipantService } from './participant.service';
import { ChannelEntity } from 'src/channel/entity/channel.entity';
import { ChannelService } from 'src/channel/channel.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParticipantEntity, ChannelEntity])],
  controllers: [ParticipantController],
  providers: [ParticipantService, ChannelService],
})
export class ParticipantModule {}
