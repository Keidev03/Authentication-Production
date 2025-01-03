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
exports.DAuthIdentifier = void 0;
const class_validator_1 = require("class-validator");
const common_1 = require("../../../common");
class DAuthIdentifier {
}
exports.DAuthIdentifier = DAuthIdentifier;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Identifier is required' }),
    (0, class_validator_1.Matches)(/^[^\s@]+@[^\s@]+\.[^\s@]+$|^\+?[0-9]{7,15}$/, { message: 'Identifier must be a valid email or phone number' }),
    __metadata("design:type", String)
], DAuthIdentifier.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DAuthIdentifier.prototype, "TL", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(common_1.EPurpose, { message: 'Purpose must be either "register" or "login"' }),
    __metadata("design:type", String)
], DAuthIdentifier.prototype, "purpose", void 0);
//# sourceMappingURL=authIdentifier.dto.js.map