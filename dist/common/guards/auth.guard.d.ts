declare const AuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AuthGuard extends AuthGuard_base {
    constructor();
    handleRequest(err: any, user: any): any;
}
export {};
