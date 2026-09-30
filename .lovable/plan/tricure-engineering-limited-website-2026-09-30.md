# Tricure Engineering Limited Website

## Goal
Build a polished, original company website for Tricure Engineering Limited that presents its drilling and water engineering services clearly, uses only accurate supplied business information, and guides visitors toward phone, WhatsApp, location, and service enquiries.

## Site structure
Create six working pages with shared navigation and footer:

1. **Home** with the supplied headline, supporting copy, three contact actions, service strip, company introduction, selected services, process preview, gallery preview, reasons to contact Tricure, and closing contact prompt.
2. **About** with an accurate company overview, practical working approach, communication focus, and real field photography.
3. **Services** with seven editable service categories, varied image and text layouts, concise descriptions, and enquiry actions for each service.
4. **Our Process** with the five supplied stages, careful non guarantee wording, field imagery, and an appointment request option.
5. **Projects** with neutral image categories, clear disclaimers that stock photographs are illustrative, and an accessible mobile friendly lightbox with close and previous or next controls.
6. **Contact** with the exact address, phone, WhatsApp, Google Maps link, service enquiry form, and appointment request form.

Every page will have unique search and sharing metadata, one clear page heading, semantic structure, and accurate local business information.

## Visual direction
Use a restrained technical editorial style shaped by the official logo:

- Deep navy and charcoal foundations with white, cool gray, professional blue, and a lighter water blue used selectively.
- Strong but readable modern typography with measured headings and generous spacing.
- Full width real photography, split editorial layouts, asymmetrical image groupings, restrained borders, and limited shadows.
- Square or lightly rounded geometry rather than repeated floating cards.
- Subtle reveal, menu, button, and gallery transitions with reduced motion support.
- Distinct section compositions so the site does not feel templated.

The five reference sites will inform hierarchy, photography treatment, service discovery, contact flow, and mobile pacing without copying their text, branding, or layouts.

## Logo and imagery
- Extract the supplied official logo from its baked checkerboard background without redesigning, recoloring, stretching, or cropping the identity.
- Prepare versions that remain legible on light and dark areas.
- Derive the browser icon, PNG favicon, and Apple touch icon from the supplied logo, then remove the starter favicon.
- Source approximately 12 to 15 distinct real, legally reusable photographs from reputable libraries such as Unsplash, Pexels, or Wikimedia Commons.
- Use no generated people, machinery, sites, equipment, or project photography.
- Optimize image dimensions and loading, prioritize the opening image, and lazy load images further down each page.
- Describe sourced imagery neutrally and never present it as Tricure project evidence.

## Working interactions
- Desktop and mobile navigation with a working menu and active page state.
- Exact phone links using `tel:+2348052367684`.
- Exact WhatsApp links using `https://wa.me/2348052367684` and the supplied professional message.
- Exact Google Maps link supplied by the client.
- Service enquiry form with validation for every requested field.
- Appointment request form with validation for every requested field.
- Because no message service is configured, valid forms will prepare a detailed WhatsApp request for the visitor to review and send. The site will not claim an email was sent or an appointment was confirmed.
- Accessible gallery lightbox with keyboard controls and mobile support.
- No dead links, placeholder actions, email field, social links, or unsupported claims.

## Content safeguards
- Use only the supplied company name, address, phone, WhatsApp, map, service categories, and process wording.
- Add no invented history, statistics, testimonials, certifications, awards, clients, branches, guarantees, prices, or email address.
- Remove every visible dash character from headings, paragraphs, labels, buttons, captions, menus, and footer text.
- Remove starter branding and user visible references to Lovable, Vite, and React.

## Quality checks
- Check every page on desktop, tablet, and small mobile widths for image cropping, readable type, tap targets, menu behavior, forms, lightbox, and horizontal overflow.
- Test navigation, phone, WhatsApp, Maps, service actions, both request forms, and gallery controls.
- Audit headings, labels, alternative text, keyboard use, focus indicators, contrast, and reduced motion behavior.
- Confirm all images load, metadata is page specific, favicon assets are correct, no starter UI remains, no unsupported claims appear, and no visible dash characters remain.
- Check the preview for build, browser, and runtime errors before completion.

## Technical details
- Keep the existing TanStack Start and Tailwind setup.
- Build shared navigation, footer, contact actions, forms, and gallery from reusable React components.
- Use semantic design tokens in the global stylesheet and the existing interface controls for consistent behavior.
- Store the supplied logo and sourced media through the project asset system; favicon files remain optimized local browser assets.
- Record the site structure and form submission approach in the project guidance file for future maintenance.
