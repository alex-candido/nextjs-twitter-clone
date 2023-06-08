import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) { 
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(405).end();
  }
  
  try {

    const userId = req.method === 'POST' ? req.body.userId : req.query.userId;

    const { currentUser } = await serverAuth(req, res);

    if (!userId || typeof userId !== 'string') {
      throw new Error('Invalid ID');
    }

    const userFollowing = await prisma.user.findUnique({
      where: {
        id: currentUser.id
      }
    });

    const userFollower = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    let updatedFollowingIds = [...(userFollowing?.followingIds || [])];
    let updatedFollowersIds = [...(userFollower?.followersIds|| [])];

    if (req.method === 'POST') {
      updatedFollowingIds.push(userId)
      updatedFollowersIds.push(currentUser.id)

      // NOTIFICATION PART START
      try {
        await prisma.notification.create({
          data: {
            body: 'Someone followed you!',
            userId,
          },
        });

        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            hasNotification: true,
          }
        });
      } catch (error) {
        console.log(error);
      }
      // NOTIFICATION PART END
    }

    if (req.method === 'DELETE') {
      updatedFollowingIds = 
      updatedFollowingIds
      .filter(followingId => followingId !== userId)

      updatedFollowersIds = 
      updatedFollowersIds
      .filter(followersCount => followersCount !== currentUser.id)

    }

    const updatedUserFollowing = await prisma.user.update({
      where: {
        id: currentUser.id
      },
      data: {
        followingIds: updatedFollowingIds
      }
    });

    const updatedUserFollowers = await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        followersIds: updatedFollowersIds
      }
    });

    return res.status(200).json({updatedUserFollowing, updatedUserFollowers});
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}