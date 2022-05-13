"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderModule = void 0;
const common_1 = require("@nestjs/common");
const envConfig_module_1 = require("./config/envConfig.module");
const postgres_module_1 = require("./database/postgres/postgres.module");
let ProviderModule = class ProviderModule {
};
ProviderModule = __decorate([
    (0, common_1.Module)({
        imports: [envConfig_module_1.EnvConfigModule, postgres_module_1.PostgresModule],
    })
], ProviderModule);
exports.ProviderModule = ProviderModule;
//# sourceMappingURL=provider.module.js.map