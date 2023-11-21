import { ChannelService } from './channel.service';
import { ChannelEntity } from './entity/channel.entity';
import { ParticipantEntity } from 'src/participant/entity/participant.entity';
import { ParticipantService } from 'src/participant/participant.service';
import { RecordService } from 'src/record/record.service';
import { RecordEntity } from 'src/record/entity/record.entity';
export declare class ChannelController {
    private channelService;
    private participantService;
    private recordService;
    constructor(channelService: ChannelService, participantService: ParticipantService, recordService: RecordService);
    findMany(): Promise<ChannelEntity[]>;
    channelParticipantsSyncRecord(input: any): Promise<{}>;
    findChannelParticipants(input: any): Promise<ParticipantEntity[]>;
    findChannelRecords(input: any): Promise<RecordEntity[]>;
    findOne(input: any): Promise<ChannelEntity>;
    create(input: any): Promise<ChannelEntity>;
    join(input: any): Promise<object>;
}
