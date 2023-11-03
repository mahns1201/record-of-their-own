import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelEntity } from './entity/channel.entity';
import { Repository } from 'typeorm';
import { RecordMap, relativeRecordMap } from 'src/common/common.type';

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
            {
              map[participantId].totalRecord.total.winCount +=
                record.outcome.match(/w/g)?.length || 0;

              map[participantId].totalRecord.total.looseCount +=
                record.outcome.match(/l/g)?.length || 0;

              if (record.totalGameCount !== 1) {
                map[participantId].totalRecord.multiplePremise.winCount += 1;
              }
            }
            break;

          case record.looser.id:
            {
              map[participantId].totalRecord.total.winCount +=
                record.outcome.match(/l/g)?.length || 0;

              map[participantId].totalRecord.total.looseCount +=
                record.outcome.match(/w/g)?.length || 0;

              if (record.totalGameCount !== 1) {
                map[participantId].totalRecord.multiplePremise.looseCount += 1;
              }
            }
            break;

          default:
            break;
        }
      });
    });

    return map;
  }

  channelParticipantsSyncRelativeRecord(participantList, recordList) {
    const map: relativeRecordMap = {};

    const participantIds = participantList.map((p) => {
      participantList.forEach((pp) => {
        if (p.id === pp.id) return;

        if (!map[p.id]) {
          map[p.id] = { relativeRecord: {} };
        }

        if (!map[p.id].relativeRecord[pp.id]) {
          map[p.id].relativeRecord[pp.id] = {
            total: {
              winCount: 0,
              looseCount: 0,
            },
            multiplePremise: {
              winCount: 0,
              looseCount: 0,
            },
          };
        }
      });

      return p.id;
    });

    participantIds.forEach((participantId) => {
      recordList.forEach((record) => {
        const winnerId = record.winner.id;
        const looserId = record.looser.id;

        switch (participantId) {
          case winnerId:
            {
              map[participantId].relativeRecord[looserId].total.winCount +=
                record.outcome.match(/w/g)?.length || 0;

              map[participantId].relativeRecord[looserId].total.looseCount +=
                record.outcome.match(/l/g)?.length || 0;

              if (record.totalGameCount !== 1) {
                map[participantId].relativeRecord[
                  looserId
                ].multiplePremise.winCount += 1;
              }
            }
            break;

          case looserId:
            {
              map[participantId].relativeRecord[winnerId].total.winCount +=
                record.outcome.match(/l/g)?.length || 0;

              map[participantId].relativeRecord[winnerId].total.looseCount +=
                record.outcome.match(/w/g)?.length || 0;

              if (record.totalGameCount !== 1) {
                map[participantId].relativeRecord[
                  winnerId
                ].multiplePremise.looseCount += 1;
              }
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
