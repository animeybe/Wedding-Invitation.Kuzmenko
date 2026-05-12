export interface GuestFormData {
  name: string;
  guests: number;
  alcohol: "yes" | "no" | "any";
  comment: string;
  isCustomGuests: boolean;
}

export type RSVPStatus = "idle" | "sending" | "success" | "error";
