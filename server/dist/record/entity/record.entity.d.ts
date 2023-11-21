import { BaseEntity } from 'src/common/common.entity';
import { ChannelEntity } from 'src/channel/entity/channel.entity';
import { ParticipantEntity } from 'src/participant/entity/participant.entity';
export declare class RecordEntity extends BaseEntity {
    id: number;
    channel: ChannelEntity;
    winner: ParticipantEntity;
    looser: ParticipantEntity;
    totalGameCount: number;
    winGameCount: number;
    outcome: string;
}
