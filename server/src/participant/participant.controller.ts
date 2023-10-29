import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ChannelService } from 'src/channel/channel.service';

@Controller('participant')
export class ParticipantController {
  constructor(
    private participantService: ParticipantService,
    private channelService: ChannelService,
  ) {}

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() input) {
    const { id } = input;

    const result = await this.participantService.findOne(id);

    return result;
  }

  @Post('/:id/sync-record')
  @HttpCode(HttpStatus.OK)
  async syncParticipantRecord(@Param() paramInput, @Body() bodyInput) {
    const { id } = paramInput;

    const result = await this.participantService.syncParticipantRecord(
      id,
      bodyInput,
    );

    return result;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findMany() {
    const result = await this.participantService.findMany();

    return result;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() input) {
    const { name, channelId } = input;

    const channel = await this.channelService.findOne(channelId);
    const result = await this.participantService.create({ name, channel });

    return result;
  }
}
