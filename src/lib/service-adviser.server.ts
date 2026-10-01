import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createGatewayFetch } from "./ai-run-id.server";

export type AdviserInput = {
  site: string;
  waterNeeds: string;
  constraints: string;
};

const serviceList = [
  "Borehole Drilling",
  "Hydrogeological and Site Survey",
  "Borehole Construction",
  "Borehole Pump Installation",
  "Borehole Rehabilitation",
  "Borehole Maintenance",
  "Water System Solutions",
];

export async function createServiceRecommendation(data: AdviserInput) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("The service adviser is not configured yet. Please use the enquiry form or WhatsApp.");

  const gateway = createGatewayFetch();
  const openai = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: {
      "Lovable-API-Key": apiKey,
      "X-Lovable-AIG-SDK": "vercel-ai-sdk",
    },
    fetch: gateway.fetch,
  });

  try {
    const result = streamText({
      model: openai.responses("openai/gpt-6-astra"),
      system: `You are the service adviser for Tricure Engineering Limited in Agege, Lagos. Recommend only services from this exact list: ${serviceList.join(", ")}. Give a short, cautious recommendation based only on the visitor's description. Do not invent site findings, prices, timelines, guarantees, availability, coverage, company history, or technical measurements. Do not claim a survey has happened. Say that final suitability requires a conversation and, where relevant, a site assessment. Write two brief paragraphs in plain English. Begin with "Recommended starting point:" and name one to three relevant listed services. Do not use bullet points or any dash character.`,
      prompt: `Site and location details: ${data.site}\nWater needs: ${data.waterNeeds}\nProject constraints: ${data.constraints}`,
      providerOptions: {
        openai: {
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          store: false,
          include: ["reasoning.encrypted_content"],
        },
      },
    });
    const text = (await result.text).trim().replace(/[‐‑‒–—-]/g, " ");
    if (!text) throw new Error("No recommendation was returned. Please try again or contact Tricure on WhatsApp.");
    return text;
  } catch (error) {
    const message = error instanceof Error ? error.message : "The adviser could not complete this request.";
    if (/credit|payment|402/i.test(message)) throw new Error("The AI allowance is currently unavailable. You can still send your details through WhatsApp.");
    if (/rate|429/i.test(message)) throw new Error("The adviser is busy right now. Please wait a moment or continue through WhatsApp.");
    if (/configured yet|No recommendation/.test(message)) throw error;
    throw new Error("The adviser could not complete this request. Your details are still available to send through WhatsApp.");
  }
}