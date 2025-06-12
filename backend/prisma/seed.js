"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
{
    /*
  
  What is seed.ts?
  The seed.ts file is used to add sample data (like test users, posts, etc.) into your database. This is called "seeding" your database.
  
  Think of it like this:
  “I just created an empty database. Now I want to fill it with some sample data so I can test my app.”
  That’s what seed.ts is for.
  
  Prisma.PrismaClientKnownRequestError is to check Unique constraint violation, it will send code "P2002" if theres
  any non-unique field try to insert in for Example: E-mail field
  
  */
}
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.users.create({
            data: { id: 1, email: 'test@gmail.com', message: 'testing' },
        });
        console.log('prisma init data');
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                // Unique constraint violation
                console.error('Unique constraint violation:', error.meta);
            }
            else {
                console.error('Prisma error:', error.message);
            }
        }
        else {
            console.error('Unexpected error:', error);
        }
    }
    finally {
        yield prisma.$disconnect();
    }
});
main();
