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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantEntity = void 0;
const common_entity_1 = require("../../common/common.entity");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const channel_entity_1 = require("../../channel/entity/channel.entity");
let ParticipantEntity = class ParticipantEntity extends common_entity_1.BaseEntity {
};
exports.ParticipantEntity = ParticipantEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => channel_entity_1.ChannelEntity, (channel) => channel.participant),
    __metadata("design:type", channel_entity_1.ChannelEntity)
], ParticipantEntity.prototype, "channel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ParticipantEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "winCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "looseCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "multiplePremisesWinCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "multiplePremisesLooseCount", void 0);
exports.ParticipantEntity = ParticipantEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'participant' })
], ParticipantEntity);
//# sourceMappingURL=participant.entity.js.map