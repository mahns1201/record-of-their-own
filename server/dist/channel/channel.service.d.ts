import { ChannelEntity } from './entity/channel.entity';
import { Repository } from 'typeorm';
import { RecordMap, relativeRecordMap } from 'src/common/common.type';
export declare class ChannelService {
    private channelRepository;
    constructor(channelRepository: Repository<ChannelEntity>);
    findOne(id: any): Promise<ChannelEntity>;
    findMany(): Promise<ChannelEntity[]>;
    create(input: any): Promise<ChannelEntity>;
    channelParticipantsSyncRecord(participantList: any, recordList: any): RecordMap;
    channelParticipantsSyncRelativeRecord(participantList: any, recordList: any): relativeRecordMap;
}
