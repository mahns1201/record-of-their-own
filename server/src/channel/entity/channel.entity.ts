import { BaseEntity } from 'src/common/common.entity';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'channel' })
@Unique(['name'])
export class ChannelEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({})
  name: string;

  @Column()
  @IsNotEmpty()
  password: string;
}
