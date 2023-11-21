import { BaseEntity } from 'src/common/common.entity';
import { ParticipantEntity } from 'src/participant/entity/participant.entity';
import { RecordEntity } from 'src/record/entity/record.entity';
export declare class ChannelEntity extends BaseEntity {
    id: number;
    participant: ParticipantEntity;
    record: RecordEntity;
    name: string;
    password: string;
}
