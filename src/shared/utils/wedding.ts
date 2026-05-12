export const wedding = {
  date: new Date(import.meta.env.VITE_WEDDING_DATE),
  groom: import.meta.env.VITE_GROOM_NAME,
  bride: import.meta.env.VITE_BRIDE_NAME,
  rsvpDeadline: new Date(import.meta.env.VITE_RSVP_DEADLINE),
  venue: {
    name: import.meta.env.VITE_VENUE_NAME,
    address: import.meta.env.VITE_VENUE_ADDRESS,
  },
  get arrivalTime(): string {
    const early = new Date(this.date.getTime() - 60 * 60 * 1000);
    const late = new Date(this.date.getTime() - 30 * 60 * 1000);
    const format = (d: Date) =>
      `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
    return `${format(early)} – ${format(late)}`;
  },
} as const;
