import { Module } from '@nestjs/common';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelEntity } from './entity/channel.entity';
import { ParticipantEntity } from 'src/participant/entity/participant.entity';
import { ParticipantService } from 'src/participant/participant.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChannelEntity, ParticipantEntity])],
  controllers: [ChannelController],
  providers: [ChannelService, ParticipantService],
})
export class ChannelModule {}
