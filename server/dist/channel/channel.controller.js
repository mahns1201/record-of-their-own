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
exports.ChannelController = void 0;
const common_1 = require("@nestjs/common");
const channel_service_1 = require("./channel.service");
const participant_service_1 = require("../participant/participant.service");
const record_service_1 = require("../record/record.service");
let ChannelController = class ChannelController {
    constructor(channelService, participantService, recordService) {
        this.channelService = channelService;
        this.participantService = participantService;
        this.recordService = recordService;
    }
    async findMany() {
        const result = await this.channelService.findMany();
        return result;
    }
    async channelParticipantsSyncRecord(input) {
        const { id } = input;
        const participants = await this.participantService.findManyByChannelId(id);
        const records = await this.recordService.findManyByChannelId(id);
        const map = this.channelService.channelParticipantsSyncRecord(participants, records);
        for (const [participantId, v] of Object.entries(map)) {
            const input = {
                winCount: v.totalRecord.total.winCount || 0,
                looseCount: v.totalRecord.total.looseCount || 0,
                multiplePremisesWinCount: v.totalRecord.multiplePremise.winCount || 0,
                multiplePremisesLooseCount: v.totalRecord.multiplePremise.looseCount || 0,
            };
            await this.participantService.syncParticipantRecord(participantId, input);
        }
        const relativeMap = this.channelService.channelParticipantsSyncRelativeRecord(participants, records);
        console.log(JSON.stringify(relativeMap));
        return {};
    }
    async findChannelParticipants(input) {
        const { id } = input;
        const result = await this.participantService.findManyByChannelId(id);
        return result;
    }
    async findChannelRecords(input) {
        const { id } = input;
        const result = await this.recordService.findManyByChannelId(id);
        return result;
    }
    async findOne(input) {
        const { id } = input;
        const result = await this.channelService.findOne(id);
        return result;
    }
    async create(input) {
        const result = await this.channelService.create(input);
        return result;
    }
    async join(input) {
        const { id, password } = input;
        const channel = await this.channelService.findOne(id);
        const result = password === channel.password ? 'SUCCESS' : 'FAIL';
        return { result };
    }
};
exports.ChannelController = ChannelController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('/:id/participants/sync-record'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "channelParticipantsSyncRecord", null);
__decorate([
    (0, common_1.Get)('/:id/participants'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "findChannelParticipants", null);
__decorate([
    (0, common_1.Get)('/:id/records'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "findChannelRecords", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('join'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "join", null);
exports.ChannelController = ChannelController = __decorate([
    (0, common_1.Controller)('channel'),
    __metadata("design:paramtypes", [channel_service_1.ChannelService,
        participant_service_1.ParticipantService,
        record_service_1.RecordService])
], ChannelController);
//# sourceMappingURL=channel.controller.js.map