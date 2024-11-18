
import { PrismaClient } from "@prisma/client";
import { Group, Guest } from "@prisma/client/wasm";

const prisma = new PrismaClient();
export const searchForGuest = async (searchTerm: string) => {
  'use server'
    const guests = await prisma.guest.findMany({where: {name: {
      contains: searchTerm,
      mode: 'insensitive',
    }}, include: {group: true}
  })
    return guests
  }
  export const searchForGroup = async (searchTerm: string) => {
    'use server'
    const groups = await prisma.group.findMany({where: {email: {
      contains: searchTerm,
      mode: 'insensitive',
    }
  }, include: {guests: true}
  
  })
    return groups
  }