"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const participant_entity_1 = require("./entity/participant.entity");
let ParticipantService = class ParticipantService {
    constructor(participantRepository) {
        this.participantRepository = participantRepository;
    }
    async findOne(id) {
        const participant = await this.participantRepository.findOne({
            where: { id },
            relations: ['channel'],
        });
        return participant;
    }
    async syncParticipantRecord(id, input) {
        const { winCount, looseCount, multiplePremisesWinCount, multiplePremisesLooseCount, } = input;
        const participant = await this.findOne(id);
        const newParticipant = {
            ...participant,
            winCount,
            looseCount,
            multiplePremisesWinCount,
            multiplePremisesLooseCount,
        };
        const savedParticipant = await this.participantRepository.save(newParticipant);
        return savedParticipant;
    }
    async findMany() {
        const participants = await this.participantRepository.find();
        return participants;
    }
    async findManyByChannelId(channelId) {
        const participants = await this.participantRepository
            .createQueryBuilder('participant')
            .leftJoinAndSelect('participant.channel', 'channel')
            .where('channel.id = :channelId', { channelId })
            .getMany();
        return participants;
    }
    async create(input) {
        const { name, channel } = input;
        const newParticipant = this.participantRepository.create({
            name,
            channel,
        });
        const savedParticipant = await this.participantRepository.save(newParticipant);
        return savedParticipant;
    }
};
exports.ParticipantService = ParticipantService;
exports.ParticipantService = ParticipantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(participant_entity_1.ParticipantEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ParticipantService);
//# sourceMappingURL=participant.service.js.map