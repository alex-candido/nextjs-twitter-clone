import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const postId = req.method === 'POST' ? req.body.postId : req.query.postId;
    const { currentUser } = await serverAuth(req,res);
    const { body } = req.body;
    
    const comment = await prisma?.comment.create({
      data: {
        body,
        userId: currentUser.id,
        postId
      }
    })

  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}