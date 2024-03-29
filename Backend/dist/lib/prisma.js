"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
/* Copy and pasted from prisma docs */
var client_1 = require("@prisma/client");
var prismaClientSingleton = function () {
    return new client_1.PrismaClient();
};
var globalForPrisma = globalThis;
exports.prisma = (_a = globalForPrisma.prisma) !== null && _a !== void 0 ? _a : prismaClientSingleton();
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = exports.prisma;
//# sourceMappingURL=prisma.js.map