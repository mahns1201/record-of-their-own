import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordEntity } from './entity/record.entity';
import { ParticipantService } from 'src/participant/participant.service';
import { ChannelService } from 'src/channel/channel.service';

@Controller('record')
export class RecordController {
  constructor(
    private recordService: RecordService,
    private channelService: ChannelService,
    private participantService: ParticipantService,
  ) {}

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() input): Promise<RecordEntity> {
    const { id } = input;

    const result = await this.recordService.findOne(id);

    return result;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findMany(): Promise<RecordEntity[]> {
    const result = await this.recordService.findMany();

    return result;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body): Promise<RecordEntity> {
    const {
      channelId,
      winnerId,
      looserId,
      totalGameCount,
      winGameCount,
      outcome,
    } = body;

    const channel = await this.channelService.findOne(channelId);
    const winner = await this.participantService.findOne(winnerId);
    const looser = await this.participantService.findOne(looserId);

    const input = {
      channel,
      winner,
      looser,
      totalGameCount,
      winGameCount,
      outcome,
    };

    const result = await this.recordService.create(input);

    return result;
  }
}
