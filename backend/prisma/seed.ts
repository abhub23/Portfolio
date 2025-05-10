{
  /* 

What is seed.ts?
The seed.ts file is used to add sample data (like test users, posts, etc.) into your database. This is called "seeding" your database.

Think of it like this:
“I just created an empty database. Now I want to fill it with some sample data so I can test my app.”
That’s what seed.ts is for. 

*/
}

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async() =>  {
  try {
     await prisma.users.create({
    data: { id: 1, email: 'test@gmail.com', message: 'testing' },
    });
    console.log('prisma init data');
  } catch (error) {
    console.error('Error occcured in prisma: ', error);
  } finally{
    prisma.$disconnect();
  }
  
}

main()

