"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfigModule = void 0;
const joi = require("joi");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let EnvConfigModule = class EnvConfigModule {
};
EnvConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                validationSchema: joi.object({
                    PORT: joi.number().required(),
                }),
                isGlobal: true,
            }),
        ],
    })
], EnvConfigModule);
exports.EnvConfigModule = EnvConfigModule;
//# sourceMappingURL=envConfig.module.js.map