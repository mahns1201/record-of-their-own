"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelModule = void 0;
const common_1 = require("@nestjs/common");
const channel_controller_1 = require("./channel.controller");
const channel_service_1 = require("./channel.service");
const typeorm_1 = require("@nestjs/typeorm");
const channel_entity_1 = require("./entity/channel.entity");
const participant_entity_1 = require("../participant/entity/participant.entity");
const participant_service_1 = require("../participant/participant.service");
const record_entity_1 = require("../record/entity/record.entity");
const record_service_1 = require("../record/record.service");
let ChannelModule = class ChannelModule {
};
exports.ChannelModule = ChannelModule;
exports.ChannelModule = ChannelModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([channel_entity_1.ChannelEntity, participant_entity_1.ParticipantEntity, record_entity_1.RecordEntity])
        ],
        controllers: [channel_controller_1.ChannelController],
        providers: [channel_service_1.ChannelService, participant_service_1.ParticipantService, record_service_1.RecordService],
    })
], ChannelModule);
//# sourceMappingURL=channel.module.js.map