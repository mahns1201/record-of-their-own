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
exports.ParticipantController = void 0;
const common_1 = require("@nestjs/common");
const participant_service_1 = require("./participant.service");
const channel_service_1 = require("../channel/channel.service");
let ParticipantController = class ParticipantController {
    constructor(participantService, channelService) {
        this.participantService = participantService;
        this.channelService = channelService;
    }
    async findOne(input) {
        const { id } = input;
        const result = await this.participantService.findOne(id);
        return result;
    }
    async syncParticipantRecord(paramInput, bodyInput) {
        const { id } = paramInput;
        const result = await this.participantService.syncParticipantRecord(id, bodyInput);
        return result;
    }
    async findMany() {
        const result = await this.participantService.findMany();
        return result;
    }
    async create(input) {
        const { name, channelId } = input;
        const channel = await this.channelService.findOne(channelId);
        const result = await this.participantService.create({ name, channel });
        return result;
    }
};
exports.ParticipantController = ParticipantController;
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/:id/sync-record'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "syncParticipantRecord", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "create", null);
exports.ParticipantController = ParticipantController = __decorate([
    (0, common_1.Controller)('participant'),
    __metadata("design:paramtypes", [participant_service_1.ParticipantService,
        channel_service_1.ChannelService])
], ParticipantController);
//# sourceMappingURL=participant.controller.js.map