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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        try {
            const author = await this.usersService.getByEmail(email);
            await this.verifyPassword(password, author.password);
            return author;
        }
        catch (error) {
            throw new common_1.HttpException('Wrong credential provided', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async register(registerDto) {
        const { password } = registerDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const createdUser = await this.usersService.create({
            ...registerDto,
            password: hashedPassword,
        });
        return createdUser;
    }
    async verifyPassword(authorPassword, HashedPassword) {
        const result = await bcrypt.compare(authorPassword, HashedPassword);
        if (!result)
            throw new common_1.HttpException('Wrong password provided', common_1.HttpStatus.BAD_REQUEST);
    }
    getCookieWithJwt(authorId) {
        const payload = { authorId };
        const token = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_SECRET_KEY'),
            expiresIn: `${this.configService.get('JWT_TOKEN_EXPIRATION_TIME')}s`,
        });
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}`;
    }
    removeCookieWithJwt() {
        return `Authentication=; HttpOnly; Path=/; Max-Age=;`;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
