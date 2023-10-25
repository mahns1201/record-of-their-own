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

@Controller('channel')
export class ChannelController {
  constructor(private channelService: ChannelService) {}

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() input): Promise<ChannelEntity> {
    const { id } = input;

    const result = await this.channelService.findOne(id);

    return result;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findMany(): Promise<ChannelEntity[]> {
    const result = await this.channelService.findMany();

    return result;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() input): Promise<ChannelEntity> {
    const result = await this.channelService.create(input);

    return result;
  }
}
