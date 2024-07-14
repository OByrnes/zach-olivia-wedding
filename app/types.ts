// types.ts
export interface GuestData {
  name?: string;
  comments?: string;
  diet?: string[];
}

export interface RSVPGroup {
  email: string;
  name: string;
  guests: GuestData[];
  number: number;
}
