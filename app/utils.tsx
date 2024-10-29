import { GuestData, RSVPGroup } from "./types";

export const validateRSVPGroup = (data: any): data is RSVPGroup => {
  // Helper function to validate GuestData
  const isValidGuest = (guest: any): guest is GuestData => {
    return (
      typeof guest === "object" &&
      guest !== null &&
      typeof guest.name === "string" &&
      (guest.id === undefined ||
        typeof guest.id === "string" ||
        typeof guest.id === "number") &&
      (guest.comments === undefined || typeof guest.comments === "string") &&
      (guest.diet === undefined ||
        (Array.isArray(guest.diet) &&
          guest.diet.every((item: unknown) => typeof item === "string")))
    );
  };

  // Validate the RSVPGroup
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.email === "string" &&
    typeof data.name === "string" &&
    Array.isArray(data.guests) &&
    data.guests.every(isValidGuest) &&
    typeof data.number === "number"
  );
};
