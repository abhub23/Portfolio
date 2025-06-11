import express from 'express';
import type { Request } from 'express';
import cors from 'cors';
import { prisma } from './lib/prisma';
import { z } from 'zod';
import { resend } from './lib/resend';
import fs from 'fs/promises';
import path from 'path';
const Port = 8000;

const app = express();
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());

const UserSchema = z.object({
  email: z.string().email().max(50),
  message: z.string(),
});

const getDate = () => {
  const date = new Date().toDateString();
  const arr = date.split(' ');
  arr[0] = arr[0] + ',';
  return arr.join(' ');
};

//Server check
app.get('/', (_, res) => {
  res.json({ message: 'Server is alive' });
});

app.post('/api/sendmessage', async (req: Request, res: any) => {
  const InputValidation = UserSchema.safeParse(req.body);

  if (!InputValidation.success) {
    return res.status(400).json({
      message: 'Zod validation failed',
      Error: InputValidation.error.flatten().fieldErrors,
    });
  }
  const { email, message } = InputValidation.data;

  try {
    await prisma.users.create({
      data: { email: email, message: message },
    });

    const templatePath = path.join(__dirname, 'temp.html');
    let htmlTemplate = await fs.readFile(templatePath, 'utf-8');

    htmlTemplate = htmlTemplate
      .replace('{{email}}', email)
      .replace('{{email}}', email)
      .replace('{{message}}', message)
      .replace('{{date}}', getDate());

    await resend.emails.send({
      from: 'contact@abdullahtech.dev',
      to: 'abdullahmukri25@gmail.com',
      subject: `Hey Abdullah you got a message from ${email}`,
      html: htmlTemplate,
    });

    return res.status(200).json({
      Success: true,
      Message: 'Data added to the DB',
    });
  } catch (error) {
    console.error('Error occured while adding data to DB : ', error);

    return res.status(500).json({
      Success: false,
    });
  }
});

app.listen(Port, () => {
  console.log(`Server Listening on Port: ${Port}`);
});
