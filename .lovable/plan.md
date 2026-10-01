# Reliable Enquiries and AI Service Adviser

## Goal
Make every enquiry reach Tricure through WhatsApp, add a no subscription service recommendation experience using the workspace AI allowance, and ensure all website images display after deployment.

## Changes
1. Replace hosted image pointer files with bundled image files so Vercel serves every photograph directly from the website.
2. Edit the Borehole Rehabilitation photograph so workers wear clearly readable Tricure Engineering Limited branded safety vests while preserving a realistic field photo.
3. Improve both existing forms so submission opens a prefilled message to the exact company number, with a copyable fallback if WhatsApp cannot open.
4. Add a focused AI adviser to the Contact page. Visitors describe their site, water needs, and constraints, then receive relevant recommendations drawn only from Tricure's listed services and a tailored WhatsApp enquiry.
5. Keep AI processing on the server, provide clear errors, and avoid invented guarantees, pricing, or technical findings.
6. Test images, form validation, WhatsApp links, AI output, mobile layout, and the production build.

## Cost note
The adviser will use Lovable AI Gateway and its included free monthly allowance. It will not require visitors to subscribe, but usage beyond the workspace allowance can require credits.

## Technical details
- Use a one shot TanStack server function and the OpenAI Responses endpoint with `openai/gpt-6-astra`.
- Keep the API key, system instructions, and model call server side.
- Stream the model call and consume the result server side before returning the recommendation.
- Validate visitor input and restrict recommendations to the seven services already listed on the website.
