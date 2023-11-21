import { Repository } from 'typeorm';
import { ParticipantEntity } from './entity/participant.entity';
export declare class ParticipantService {
    private participantRepository;
    constructor(participantRepository: Repository<ParticipantEntity>);
    findOne(id: any): Promise<ParticipantEntity>;
    syncParticipantRecord(id: any, input: any): Promise<{
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
    } & ParticipantEntity>;
    findMany(): Promise<ParticipantEntity[]>;
    findManyByChannelId(channelId: any): Promise<ParticipantEntity[]>;
    create(input: any): Promise<ParticipantEntity>;
}
