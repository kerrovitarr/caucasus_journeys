<<<<<<< HEAD
# caucasus_journeys
=======
# Armenia & Georgia Journeys

Premium boutique travel website for curated group journeys to Armenia and Georgia, with formed-group requests and forming-group interest registration.

## Run locally

```bash
npm install
npm run dev
```

The MVP uses static TypeScript data files and local images in `public/images`.

## Editable content

- `src/data/tours.ts` for tour categories, featured tour, route and itinerary
- `src/data/inspiration.ts` for article cards
- `src/data/gallery.ts` for gallery images and categories
- `src/data/photoBriefs.ts` for real-photo sourcing notes
- `src/data/travelStyles.ts` for solo, family, private and formed-group travel formats
- `src/data/navigation.ts` for navigation and contact email

## Contact form

The contact form validates required fields and opens a prefilled email draft to the address in `src/data/navigation.ts`.
This is safe for an early static launch because no backend is required, but a proper form service such as Formspree, Resend, Supabase or a CRM integration should replace it before paid traffic or larger campaigns.

## Legal pages

`/imprint`, `/privacy` and `/terms` contain useful draft notices, but final company address, jurisdiction, cancellation, liability, payment and provider-specific privacy wording should be reviewed before broad public advertising.

## Deployment approach

Recommended path for this Next.js project:

1. Connect the project to a Git repository.
2. Deploy with Vercel for the smoothest Next.js workflow, or Netlify if password-protected previews are the priority.
3. Use a protected preview/staging URL while gathering feedback.
4. Connect a custom domain only when legal/contact details are final enough for public sharing.
5. Continue working in branches: preview URLs show unfinished work, while the production branch stays stable.

To temporarily hide the site, use hosting-level protection or pause/remove the production domain rather than deleting the project.
>>>>>>> 1603e21 (Initial version)
