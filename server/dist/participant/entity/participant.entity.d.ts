import { BaseEntity } from 'src/common/common.entity';
import { ChannelEntity } from 'src/channel/entity/channel.entity';
export declare class ParticipantEntity extends BaseEntity {
    id: number;
    channel: ChannelEntity;
    name: string;
    winCount: number;
    looseCount: number;
    multiplePremisesWinCount: number;
    multiplePremisesLooseCount: number;
}
