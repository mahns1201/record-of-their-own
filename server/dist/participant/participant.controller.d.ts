import { ParticipantService } from './participant.service';
import { ChannelService } from 'src/channel/channel.service';
export declare class ParticipantController {
    private participantService;
    private channelService;
    constructor(participantService: ParticipantService, channelService: ChannelService);
    findOne(input: any): Promise<import("./entity/participant.entity").ParticipantEntity>;
    syncParticipantRecord(paramInput: any, bodyInput: any): Promise<{
        winCount: any;
        looseCount: any;
        multiplePremisesWinCount: any;
        multiplePremisesLooseCount: any;
        id: number;
        channel: import("../channel/entity/channel.entity").ChannelEntity;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
    } & import("./entity/participant.entity").ParticipantEntity>;
    findMany(): Promise<import("./entity/participant.entity").ParticipantEntity[]>;
    create(input: any): Promise<import("./entity/participant.entity").ParticipantEntity>;
}
