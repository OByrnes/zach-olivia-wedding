import { PrismaClient } from "@prisma/client";
import { Group, Guest } from "@prisma/client/wasm";
import styles from "./GuestInfo.module.css";
import Link from "next/link";
import { getGuest } from "../api/guests";

interface GroupWithGuests extends Group {
  guests: Guest[];
}

export default async function GroupInfo({
  params,
}: {
  params: { guest_id: string };
}) {
  const group = await getGuest(params.guest_id);
  return (
    <div className={styles.container}>
      <h1>Guest Information</h1>

      <div key={group?.id}>
        <h2>{`Group of: ${group?.name} `}</h2>
        <p>Email: {group?.email}</p>
        <p>Total number of guests in group: {group?.number}</p>
        <Link href={`/group/${group?.id}`}>Edit group</Link>
        <h3>Guests:</h3>
        <ul>
          {group?.guests.map((guest: Guest) => (
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
}
