import { BaseEntity } from 'src/common/common.entity';
import {
  Column,
  Entity,
  ManyToOne,
  // OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ChannelEntity } from 'src/channel/entity/channel.entity';
import { ParticipantEntity } from 'src/participant/entity/participant.entity';

@Entity({ name: 'record' })
export class RecordEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ChannelEntity, (channel) => channel.record)
  channel: ChannelEntity;

  @ManyToOne(() => ParticipantEntity, (participant) => participant.id)
  winner: ParticipantEntity;

  @ManyToOne(() => ParticipantEntity, (participant) => participant.id)
  looser: ParticipantEntity;

  @Column()
  @IsNotEmpty()
  totalGameCount: number;

  @Column()
  @IsNotEmpty()
  winGameCount: number;

  @Column()
  @IsNotEmpty()
  outcome: string;
}
