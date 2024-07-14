'use server'
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { RSVPGroup } from '@/app/types';

const prisma = new PrismaClient();

export default async function handleRsvp(RSVPGroup: RSVPGroup) {
  
    const { email, name, number, guests } = RSVPGroup

    try {
      const group = await prisma.group.create({
        data: {
          email,
          name,
          number,
          guests: {
            create: guests.map((guest: any) => ({
              name: guest.name,
              comments: guest.comments,
              diet: guest.diet,
            })),
          },
        },
      });

     return group
    } catch (error) {
      console.log(error)
    }
 
}

export async function getGuestByID(group_id?:string) {
  const guests =  await prisma.group.findUnique({
    where: {
      id: group_id,
    },
   include: {
    guests: true
   }
  })
  return guests
}