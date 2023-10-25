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

@Controller('channel')
export class ChannelController {
  constructor(private channelService: ChannelService) {}

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() input) {
    const { id } = input;

    const result = await this.channelService.findOne(id);

    return result;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findMany() {
    const result = await this.channelService.findMany();

    return result;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() input) {
    const result = await this.channelService.create(input);

    return result;
  }
}
