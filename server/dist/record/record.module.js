"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const participant_service_1 = require("../participant/participant.service");
const participant_entity_1 = require("../participant/entity/participant.entity");
const record_entity_1 = require("./entity/record.entity");
const channel_entity_1 = require("../channel/entity/channel.entity");
const record_controller_1 = require("./record.controller");
const channel_service_1 = require("../channel/channel.service");
const record_service_1 = require("./record.service");
let RecordModule = class RecordModule {
};
exports.RecordModule = RecordModule;
exports.RecordModule = RecordModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([record_entity_1.RecordEntity, channel_entity_1.ChannelEntity, participant_entity_1.ParticipantEntity]),
        ],
        controllers: [record_controller_1.RecordController],
        providers: [record_service_1.RecordService, channel_service_1.ChannelService, participant_service_1.ParticipantService],
    })
], RecordModule);
//# sourceMappingURL=record.module.js.map