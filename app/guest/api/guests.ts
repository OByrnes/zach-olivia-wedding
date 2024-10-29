import { PrismaClient } from "@prisma/client";
import { Group, Guest } from "@prisma/client/wasm";

const prisma = new PrismaClient();
export const getGuest = async (guest_id: string) => {
    
    const group = await prisma.group.findUnique({
      where: {
        id: Number(guest_id),
      },
      include: {
        guests: true,
      },
    });
  
    return group
  };

export const updateGuest = async (guest_id: string, guest: Guest) => {
  const {name, comments, diet} = guest
  const updated_guest = await prisma.guest.update.update({
    where: { id: parseInt(guest_id as string, 10) },
    data: { name, comments, diet },
  });
  return updated_guest
}

export const updateGroup = async (group_id: string, group: Group) => {
  const {number, email, name} = group
  const updated_group = await prisma.group.update({
    where: {id: parseInt(group_id as string, 10)},
    data: {number, email, name}
  })
  return updated_group
}