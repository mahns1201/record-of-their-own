import { RecordService } from './record.service';
import { RecordEntity } from './entity/record.entity';
import { ParticipantService } from 'src/participant/participant.service';
import { ChannelService } from 'src/channel/channel.service';
export declare class RecordController {
    private recordService;
    private channelService;
    private participantService;
    constructor(recordService: RecordService, channelService: ChannelService, participantService: ParticipantService);
    findOne(input: any): Promise<RecordEntity>;
    findMany(): Promise<RecordEntity[]>;
    create(body: any): Promise<RecordEntity>;
}
