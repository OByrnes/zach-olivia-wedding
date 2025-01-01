// types.ts
export interface GuestData {
  id?:  string | number;
  name: string;
  comments?: string | null;
  diet?: string[];
}

export interface RSVPGroup {
  id?: string | number;
  email: string;
  name: string;
  guests: GuestData[];
  number: number;
}
