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

@Entity({ name: 'channel' })
@Unique(['name'])
export class ChannelEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => ParticipantEntity, (participant) => participant.channel)
  participant: ParticipantEntity;

  @Column()
  @IsNotEmpty({})
  name: string;

  @Column()
  @IsNotEmpty()
  password: string;
}
