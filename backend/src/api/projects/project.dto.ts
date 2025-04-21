import { z } from "zod";

export const projectResultDTO = z.object({
  id: z.number(),
  name: z.string(),
});

export const createProjectBodyDTO = z.object({
  name: z.string(),
});
