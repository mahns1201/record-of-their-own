import { BaseEntity } from 'src/common/common.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ChannelEntity } from 'src/channel/entity/channel.entity';

@Entity({ name: 'participant' })
export class ParticipantEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ChannelEntity, (channel) => channel.participant)
  channel: ChannelEntity;

  @Column()
  @IsNotEmpty()
  name: string;
}
