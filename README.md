# Greece 2026 trip site (v3)

Static site for the Skedros family Greece trip, June 5 to 21, 2026. Deployed to GitHub Pages.

**Live URL**: https://skedros.github.io/Greece/

## What the site has

- **Overview** with countdown and quick links
- **Logistics**: ferries (Athens-Chios, Crete-Athens), car rentals, driving tips. Flights and hotels are handled separately, not on this site.
- **Itinerary**: 19 day cards across 4 sections (Athens arrival, Chios, Crete, Athens departure). Each day has timed slots with a primary plan and 2-4 alternatives, restaurants, driving distances, what to bring.
- **Restaurants**: 46 entries with descriptions, signatures, hours, phone, address, Google Maps + website links
- **Sites + beaches**: 28 sites and 21 beaches, grouped by city (Athens, Chios, Crete)
- **Practical**: emergency contacts, packing checklist (with editable check-off), Useful Greek phrases, etiquette notes
- **Contact form** posting to Formspree, going to athan.skedros@gmail.com

## Setting up the contact form (Formspree)

The form will not work until the Formspree endpoint is configured. Three steps:

1. **Sign up** at https://formspree.io with `athan.skedros@gmail.com`. Free plan is fine for this volume.
2. **Create a form** in the Formspree dashboard. Name it "Greece 2026 RSVP". Copy the endpoint URL, which looks like `https://formspree.io/f/abcd1234`.
3. **Paste the endpoint** into `data.js`. Find the line:

   ```js
   formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
   ```

   Replace `YOUR_FORM_ID` with your form ID. Commit and push.

4. **Verify the first submission**. Submit the form once yourself. Formspree will email you to confirm. Click the link. After that, real submissions go straight to your inbox.

## File structure

```
greece-2026/
  index.html      # shell + nav
  styles.css      # editorial Mediterranean styling
  app.js          # rendering logic, form handler, localStorage for packing checkboxes
  data.js         # all trip data (meta, emergency, logistics, days, restaurants, sites, beaches, packing, phrases, etiquette, form config)
  .nojekyll       # disables Jekyll on GitHub Pages
  README.md       # this file
```

## Editing content

Almost all content lives in `data.js`. To change a restaurant, edit its entry. To add a site, append to the `sites` array. The renderer reads the data on page load.

The only persisted-per-user state is the packing checkbox state (saved to localStorage under key `greece2026.v2`). Each family member's browser has their own state.

## Deploying

```bash
git add .
git commit -m "Update trip site"
git push origin main
```

GitHub Pages will rebuild within 1-2 minutes.

## Sharing with family

> Made a site for the Greece trip in June. Day-by-day itinerary for Athens, Chios, and Crete, plus vetted restaurants, beaches, sites, packing list, useful Greek phrases, and a contact form. Travel arrangements (flights, hotels) are coordinated separately.
>
> https://skedros.github.io/Greece/

## Credits

Maria's Chania recommendations integrated throughout (restaurants, beaches, the Manousakis Nostos winery, the Halepa neighborhood, the cave chapel on the Elafonisi drive, the Samaria WWII history).
