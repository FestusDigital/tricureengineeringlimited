import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createServiceRecommendation } from "./service-adviser.server";

const adviserInput = z.object({
  site: z.string().trim().min(10).max(1200),
  waterNeeds: z.string().trim().min(10).max(1200),
  constraints: z.string().trim().min(3).max(1200),
});

export const recommendServices = createServerFn({ method: "POST" })
  .inputValidator((data) => adviserInput.parse(data))
  .handler(async ({ data }) => createServiceRecommendation(data));