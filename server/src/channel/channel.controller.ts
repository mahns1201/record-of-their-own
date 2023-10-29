import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelEntity } from './entity/channel.entity';
import { ParticipantEntity } from 'src/participant/entity/participant.entity';
import { ParticipantService } from 'src/participant/participant.service';
import { RecordService } from 'src/record/record.service';
import { RecordEntity } from 'src/record/entity/record.entity';

@Controller('channel')
export class ChannelController {
  constructor(
    private channelService: ChannelService,
    private participantService: ParticipantService,
    private recordService: RecordService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findMany(): Promise<ChannelEntity[]> {
    const result = await this.channelService.findMany();

    return result;
  }

  @Get('/:id/participants')
  @HttpCode(HttpStatus.OK)
  async findChannelParticipants(@Param() input): Promise<ParticipantEntity[]> {
    const { id } = input;

    const result = await this.participantService.findManyByChannelId(id);

    return result;
  }

  @Get('/:id/records')
  @HttpCode(HttpStatus.OK)
  async findChannelRecords(@Param() input): Promise<RecordEntity[]> {
    const { id } = input;

    const result = await this.recordService.findManyByChannelId(id);

    return result;
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() input): Promise<ChannelEntity> {
    const { id } = input;

    const result = await this.channelService.findOne(id);

    return result;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() input): Promise<ChannelEntity> {
    const result = await this.channelService.create(input);

    return result;
  }

  @Post('join')
  @HttpCode(HttpStatus.CREATED)
  async join(@Body() input): Promise<object> {
    const { id, password } = input;
    const channel = await this.channelService.findOne(id);

    const result = password === channel.password ? 'SUCCESS' : 'FAIL';

    return { result };
  }
}
