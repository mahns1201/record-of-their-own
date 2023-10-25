import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParticipantEntity } from './entity/participant.entity';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(ParticipantEntity)
    private participantRepository: Repository<ParticipantEntity>,
  ) {}

  async findOne(id) {
    const participant = await this.participantRepository.findOne({
      where: { id },
      relations: ['channel'],
    });

    return participant;
  }

  async findMany() {
    const participants = await this.participantRepository.find();

    return participants;
  }

  async create(input) {
    const { name, channel } = input;

    const newParticipant = this.participantRepository.create({
      name,
      channel,
    });

    const savedParticipant =
      await this.participantRepository.save(newParticipant);

    return savedParticipant;
  }
}
