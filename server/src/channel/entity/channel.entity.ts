import { BaseEntity } from 'src/common/common.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ParticipantEntity } from 'src/participant/entity/participant.entity';
import { RecordEntity } from 'src/record/entity/record.entity';

@Entity({ name: 'channel' })
@Unique(['name'])
export class ChannelEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => ParticipantEntity, (participant) => participant.channel)
  participant: ParticipantEntity;

  @OneToMany(() => RecordEntity, (record) => record.channel)
  record: RecordEntity;

  @Column()
  @IsNotEmpty({})
  name: string;

  @Column()
  @IsNotEmpty()
  password: string;
}
