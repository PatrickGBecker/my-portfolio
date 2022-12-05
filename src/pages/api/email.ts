import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface IGetEmail {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (inputs: IGetEmail) => {
  try {
    const {data} = await axios.post(`/api/email`, inputs);
    return data;
  } catch (err) {
    console.log(err);
  }
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
 
console.log('req body', req.body)

  if (req.method === 'POST') {
    const msg = {
      to: process.env.EMAIL, // Change to your recipient
      from: process.env.VERIFIED_EMAIL, // Change to your verified sender
      replyTo: req.body.email,
      subject: `Contact form from ${req.body.name}`,
      text: req.body.message,
    };
    sgMail.send(msg).then(() => {
      console.log('Email sent');
    });
    return res.status(200);
  } else {
    res.status(500).send({ error: 'Issue' });
  }
  return res.status(404)
}