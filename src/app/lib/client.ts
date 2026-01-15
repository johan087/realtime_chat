import { treaty } from "@elysiajs/eden";
import type { App } from "../api/[[...slugs]]/route";

// .api to enter /api prefix
export const client = treaty<App>("localhoost:3000").api;
