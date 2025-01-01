
import { PrismaClient } from "@prisma/client";

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

  export const getGuests = async () => {
    'use server'
    const GroupData = await prisma.group.findMany({
      
      include: {
        guests: true,
      },
    })
    const mappedGuests = GroupData.map(group => ({...group, isGuest: false, guests: group.guests.map(guest => ({...guest,name: guest.name || group.name, email: group.email, number: group.number, isGuest: true}))}))
    return mappedGuests
  }

  export const deleteGuests = async (idsToDelete: number[]) => {
    'use server'
    const deletedGuests = await prisma.guest.deleteMany({where: {id: {
      in: idsToDelete
  }}})
  return deletedGuests
  }
  export const deleteGroup = async (idsToDelete: number[]) => {
    'use server'
    const deleteGroup = await prisma.group.deleteMany({where: {id: {
      in: idsToDelete
  }}})
  return deleteGroup
  } 