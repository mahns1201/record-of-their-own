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
exports.RecordController = void 0;
const common_1 = require("@nestjs/common");
const record_service_1 = require("./record.service");
const participant_service_1 = require("../participant/participant.service");
const channel_service_1 = require("../channel/channel.service");
let RecordController = class RecordController {
    constructor(recordService, channelService, participantService) {
        this.recordService = recordService;
        this.channelService = channelService;
        this.participantService = participantService;
    }
    async findOne(input) {
        const { id } = input;
        const result = await this.recordService.findOne(id);
        return result;
    }
    async findMany() {
        const result = await this.recordService.findMany();
        return result;
    }
    async create(body) {
        const { channelId, winnerId, looserId, totalGameCount, winGameCount, outcome, } = body;
        const channel = await this.channelService.findOne(channelId);
        const winner = await this.participantService.findOne(winnerId);
        const looser = await this.participantService.findOne(looserId);
        const input = {
            channel,
            winner,
            looser,
            totalGameCount,
            winGameCount,
            outcome,
        };
        const result = await this.recordService.create(input);
        return result;
    }
};
exports.RecordController = RecordController;
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "create", null);
exports.RecordController = RecordController = __decorate([
    (0, common_1.Controller)('record'),
    __metadata("design:paramtypes", [record_service_1.RecordService,
        channel_service_1.ChannelService,
        participant_service_1.ParticipantService])
], RecordController);
//# sourceMappingURL=record.controller.js.map