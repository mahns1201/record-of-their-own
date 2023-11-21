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
exports.ChannelEntity = void 0;
const common_entity_1 = require("../../common/common.entity");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const participant_entity_1 = require("../../participant/entity/participant.entity");
const record_entity_1 = require("../../record/entity/record.entity");
let ChannelEntity = class ChannelEntity extends common_entity_1.BaseEntity {
};
exports.ChannelEntity = ChannelEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ChannelEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => participant_entity_1.ParticipantEntity, (participant) => participant.channel),
    __metadata("design:type", participant_entity_1.ParticipantEntity)
], ChannelEntity.prototype, "participant", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => record_entity_1.RecordEntity, (record) => record.channel),
    __metadata("design:type", record_entity_1.RecordEntity)
], ChannelEntity.prototype, "record", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({}),
    __metadata("design:type", String)
], ChannelEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ChannelEntity.prototype, "password", void 0);
exports.ChannelEntity = ChannelEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'channel' }),
    (0, typeorm_1.Unique)(['name'])
], ChannelEntity);
//# sourceMappingURL=channel.entity.js.map