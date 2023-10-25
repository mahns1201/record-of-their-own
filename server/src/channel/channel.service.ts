import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelEntity } from './entity/channel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChannelService {
  constructor(
    @InjectRepository(ChannelEntity)
    private channelRepository: Repository<ChannelEntity>,
  ) {}

  async findOne(id): Promise<ChannelEntity> {
    const channel = await this.channelRepository.findOne({ where: { id } });

    return channel;
  }

  async findMany(): Promise<ChannelEntity[]> {
    const channels = await this.channelRepository.find();

    return channels;
  }

  async create(input): Promise<ChannelEntity> {
    const { name, password } = input;

    const newChannel = this.channelRepository.create({
      name,
      password,
    });

    const savedChannel = await this.channelRepository.save(newChannel);

    return savedChannel;
  }
}
