import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelEntity } from './entity/channel.entity';
import { ParticipantEntity } from 'src/participant/entity/participant.entity';
import { ParticipantService } from 'src/participant/participant.service';
import { RecordService } from 'src/record/record.service';
import { RecordEntity } from 'src/record/entity/record.entity';
import { RecordMap } from 'src/common/common.type';

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

  @Post('/:id/participants/sync-record')
  @HttpCode(HttpStatus.OK)
  async channelParticipantsSyncRecord(@Param() input) {
    const { id } = input;

    const participants = await this.participantService.findManyByChannelId(id);
    const records = await this.recordService.findManyByChannelId(id);

    const map: RecordMap = this.channelService.channelParticipantsSyncRecord(
      participants,
      records,
    );

    for (const [participantId, v] of Object.entries(map)) {
      const input = {
        winCount: v.totalRecord.total.winCount || 0,
        looseCount: v.totalRecord.total.looseCount || 0,
        multiplePremisesWinCount: v.totalRecord.multiplePremise.winCount || 0,
        multiplePremisesLooseCount: v.totalRecord.multiplePremise.looseCount || 0,
      };

      await this.participantService.syncParticipantRecord(participantId, input);
    }

    Logger.debug(JSON.stringify(map));
    Logger.log(`[채널 ${id}] 참여자 정보가 정상적으로 갱신되었습니다.`);

    return {};
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
