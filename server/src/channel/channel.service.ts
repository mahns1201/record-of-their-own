import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelEntity } from './entity/channel.entity';
import { Any, Repository } from 'typeorm';
import { RecordMap } from 'src/common/common.type';

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

  channelParticipantsSyncRecord(participantList, recordList) {
    const map: RecordMap = {};

    const participantIds = participantList.map((p) => {
      map[p.id] = {
        totalRecord: {
          total: {
            winCount: 0,
            looseCount: 0,
          },
          multiplePremise: {
            winCount: 0,
            looseCount: 0,
          },
        },
      };

      return p.id;
    });

    participantIds.forEach((participantId) => {
      recordList.forEach((record) => {
        switch (participantId) {
          case record.winner.id:
            map[participantId].totalRecord.total.winCount +=
              record.outcome.match(/w/g)?.length;

            map[participantId].totalRecord.total.looseCount +=
              record.outcome.match(/l/g)?.length;

            if (record.totalGameCount !== 1) {
              map[participantId].totalRecord.multiplePremise.winCount += 1;
            }

            break;

          case record.looser.id:
            map[participantId].totalRecord.total.winCount +=
              record.outcome.match(/l/g)?.length;

            map[participantId].totalRecord.total.looseCount +=
              record.outcome.match(/w/g)?.length;

            if (record.totalGameCount !== 1) {
              map[participantId].totalRecord.multiplePremise.looseCount += 1;
            }

            break;

          default:
            break;
        }
      });
    });

    return map;
  }
}
