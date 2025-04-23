import express from 'express';
import type { Request } from 'express';
import cors from 'cors';
import { prisma } from './lib/prisma';
import { z } from 'zod'
const Port = 8000;

const app = express();
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json())

const UserSchema = z.object({
  email: z.string().email().max(50),
  message: z.string()
})

app.post('/api/sendmessage', async (req: Request, res: any) => {

  const InputValidation = UserSchema.safeParse(req.body)
  
  if(!InputValidation.success){
    return res.status(400).json({
      message: "Zod validation failed",
      Error: InputValidation.error.flatten().fieldErrors
    })
  }
  const { email, message } =InputValidation.data;

  try {
    await prisma.users.create({
      data: { email: email, message: message },
    });

    return res.status(200).json({
      Success: true,
      Message: "Data added to the DB"
    });

  } catch (error) {
    console.error('Error occured while adding data to DB : ', error)

    return res.status(500).json({
      Success: false
    })
  }
});

app.listen(Port, () => {
  console.log(`Server Listening on Port: ${Port}`);
});
