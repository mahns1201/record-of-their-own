import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecordEntity } from './entity/record.entity';

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(RecordEntity)
    private recordRepository: Repository<RecordEntity>,
  ) {}

  async findOne(id): Promise<RecordEntity> {
    const record = await this.recordRepository.findOne({
      where: { id },
      relations: ['channel', 'winner', 'looser'],
    });

    return record;
  }

  async findMany(): Promise<RecordEntity[]> {
    const records = await this.recordRepository.find();

    return records;
  }

  async findManyByChannelId(channelId) {
    const records = await this.recordRepository
      .createQueryBuilder('record')
      .leftJoinAndSelect('record.channel', 'channel')
      .leftJoinAndSelect('record.winner', 'winner')
      .leftJoinAndSelect('record.looser', 'looser')
      .where('channel.id = :channelId', { channelId })
      .getMany();

    console.log(records);

    return records;
  }

  async create(input): Promise<RecordEntity> {
    const { channel, winner, looser, totalGameCount, winGameCount, outcome } =
      input;

    const newRecord = this.recordRepository.create({
      channel,
      winner,
      looser,
      totalGameCount,
      winGameCount,
      outcome,
    });

    const savedRecord = await this.recordRepository.save(newRecord);

    return savedRecord;
  }
}
