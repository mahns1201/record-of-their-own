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
exports.ChannelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const channel_entity_1 = require("./entity/channel.entity");
const typeorm_2 = require("typeorm");
let ChannelService = class ChannelService {
    constructor(channelRepository) {
        this.channelRepository = channelRepository;
    }
    async findOne(id) {
        const channel = await this.channelRepository.findOne({ where: { id } });
        return channel;
    }
    async findMany() {
        const channels = await this.channelRepository.find();
        return channels;
    }
    async create(input) {
        const { name, password } = input;
        const newChannel = this.channelRepository.create({
            name,
            password,
        });
        const savedChannel = await this.channelRepository.save(newChannel);
        return savedChannel;
    }
    channelParticipantsSyncRecord(participantList, recordList) {
        const map = {};
        const participantIds = participantList.map((p) => {
            map[p.id] = {
                totalRecord: {
                    total: {
                        winCount: 0,
                        looseCount: 0,
                    },
                    multiplePremise: {
                        winCount: 0,
                        looseCount: 0,
                    },
                },
            };
            return p.id;
        });
        participantIds.forEach((participantId) => {
            recordList.forEach((record) => {
                switch (participantId) {
                    case record.winner.id:
                        {
                            map[participantId].totalRecord.total.winCount +=
                                record.outcome.match(/w/g)?.length || 0;
                            map[participantId].totalRecord.total.looseCount +=
                                record.outcome.match(/l/g)?.length || 0;
                            if (record.totalGameCount !== 1) {
                                map[participantId].totalRecord.multiplePremise.winCount += 1;
                            }
                        }
                        break;
                    case record.looser.id:
                        {
                            map[participantId].totalRecord.total.winCount +=
                                record.outcome.match(/l/g)?.length || 0;
                            map[participantId].totalRecord.total.looseCount +=
                                record.outcome.match(/w/g)?.length || 0;
                            if (record.totalGameCount !== 1) {
                                map[participantId].totalRecord.multiplePremise.looseCount += 1;
                            }
                        }
                        break;
                    default:
                        break;
                }
            });
        });
        return map;
    }
    channelParticipantsSyncRelativeRecord(participantList, recordList) {
        const map = {};
        const participantIds = participantList.map((p) => {
            participantList.forEach((pp) => {
                if (p.id === pp.id)
                    return;
                if (!map[p.id]) {
                    map[p.id] = { relativeRecord: {} };
                }
                if (!map[p.id].relativeRecord[pp.id]) {
                    map[p.id].relativeRecord[pp.id] = {
                        total: {
                            winCount: 0,
                            looseCount: 0,
                        },
                        multiplePremise: {
                            winCount: 0,
                            looseCount: 0,
                        },
                    };
                }
            });
            return p.id;
        });
        participantIds.forEach((participantId) => {
            recordList.forEach((record) => {
                const winnerId = record.winner.id;
                const looserId = record.looser.id;
                switch (participantId) {
                    case winnerId:
                        {
                            map[participantId].relativeRecord[looserId].total.winCount +=
                                record.outcome.match(/w/g)?.length || 0;
                            map[participantId].relativeRecord[looserId].total.looseCount +=
                                record.outcome.match(/l/g)?.length || 0;
                            if (record.totalGameCount !== 1) {
                                map[participantId].relativeRecord[looserId].multiplePremise.winCount += 1;
                            }
                        }
                        break;
                    case looserId:
                        {
                            map[participantId].relativeRecord[winnerId].total.winCount +=
                                record.outcome.match(/l/g)?.length || 0;
                            map[participantId].relativeRecord[winnerId].total.looseCount +=
                                record.outcome.match(/w/g)?.length || 0;
                            if (record.totalGameCount !== 1) {
                                map[participantId].relativeRecord[winnerId].multiplePremise.looseCount += 1;
                            }
                        }
                        break;
                    default:
                        break;
                }
            });
        });
        return map;
    }
};
exports.ChannelService = ChannelService;
exports.ChannelService = ChannelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(channel_entity_1.ChannelEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChannelService);
//# sourceMappingURL=channel.service.js.map