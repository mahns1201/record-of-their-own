"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const participant_entity_1 = require("./entity/participant.entity");
const participant_controller_1 = require("./participant.controller");
const participant_service_1 = require("./participant.service");
const channel_entity_1 = require("../channel/entity/channel.entity");
const channel_service_1 = require("../channel/channel.service");
let ParticipantModule = class ParticipantModule {
};
exports.ParticipantModule = ParticipantModule;
exports.ParticipantModule = ParticipantModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([participant_entity_1.ParticipantEntity, channel_entity_1.ChannelEntity])],
        controllers: [participant_controller_1.ParticipantController],
        providers: [participant_service_1.ParticipantService, channel_service_1.ChannelService],
    })
], ParticipantModule);
//# sourceMappingURL=participant.module.js.map