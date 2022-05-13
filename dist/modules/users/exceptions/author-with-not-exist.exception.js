"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class AuthorNotFoundException extends common_1.NotFoundException {
    constructor(notFound) {
        super(`Author with this ${notFound} not exist`);
    }
}
exports.AuthorNotFoundException = AuthorNotFoundException;
//# sourceMappingURL=author-with-not-exist.exception.js.map