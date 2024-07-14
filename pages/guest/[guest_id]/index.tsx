// pages/groupInfo.tsx
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import { Group, Guest } from "@prisma/client/wasm";
import styles from "./GuestInfo.module.css";
const prisma = new PrismaClient();

interface GroupWithGuests extends Group {
  guests: Guest[];
}
type Props = {
  group: GroupWithGuests;
};

const GroupInfo: React.FC<Props> = ({ group }) => {
  return (
    <div className={styles.container}>
      <h1>Guest Information</h1>

      <div key={group.id}>
        <h2>{group.name}</h2>
        <p>Email: {group.email}</p>
        <p>Number of Guests: {group.number}</p>
        <h3>Guests:</h3>
        <ul>
          {group.guests.map((guest) => (
            <div key={guest.id} className={styles.card}>
              <li>
                <p>Name: {guest.name}</p>
                <p>Comments: {guest.comments}</p>
                <p>Dietary Restrictions: {guest.diet.join(", ")}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { guest_id } = context.params as { guest_id: string };
  const group = await await prisma.group.findUnique({
    where: {
      id: Number(guest_id),
    },
    include: {
      guests: true,
    },
  });

  return {
    props: {
      group,
    },
  };
};

export default GroupInfo;
