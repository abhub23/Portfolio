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
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();
const main = async () => {
    try {
        await prisma.users.create({
            data: { id: 1, email: 'test@gmail.com', message: 'testing' },
        });
        console.log('prisma init data');
    }
    catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
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
        await prisma.$disconnect();
    }
};
main();
