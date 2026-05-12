/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SCRIPT_URL: string;
  readonly VITE_WEDDING_DATE: string;
  readonly VITE_GROOM_NAME: string;
  readonly VITE_BRIDE_NAME: string;
  readonly VITE_VENUE_NAME: string;
  readonly VITE_VENUE_ADDRESS: string;
  readonly VITE_RSVP_DEADLINE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
