import { Repository } from 'typeorm';
import { RecordEntity } from './entity/record.entity';
export declare class RecordService {
    private recordRepository;
    constructor(recordRepository: Repository<RecordEntity>);
    findOne(id: any): Promise<RecordEntity>;
    findMany(): Promise<RecordEntity[]>;
    findManyByChannelId(channelId: any): Promise<RecordEntity[]>;
    create(input: any): Promise<RecordEntity>;
}
