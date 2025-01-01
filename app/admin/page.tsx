import CollapsibleTable from "../components/GuestTable";
import { getGuests, deleteGuests, deleteGroup } from "../search/api/search";
export default async function AdminPage() {
  const guests = await getGuests();
  return (
    <CollapsibleTable
      initialData={guests}
      deleteGuests={deleteGuests}
      deleteGroup={deleteGroup}
    />
  );
}
