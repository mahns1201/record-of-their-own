import { BaseEntity } from 'src/common/common.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsOptional } from 'class-validator';
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

  @Column({ default: 0 })
  @IsOptional()
  winCount: number;

  @Column({ default: 0 })
  @IsOptional()
  looseCount: number;

  @Column({ default: 0 })
  @IsOptional()
  multiplePremisesWinCount: number;

  @Column({ default: 0 })
  @IsOptional()
  multiplePremisesLooseCount: number;
}
