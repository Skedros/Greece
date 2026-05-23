# Greece 2026

A static planning site for the Skedros family trip to Athens, Chios, and Crete, June 5 to 21, 2026.

This is the v2 deep build: 19 day-by-day itineraries with vetted morning/midday/lunch/afternoon/sunset/dinner slots, 40+ restaurants, 25+ sites, 19 beaches, every entry linked to its official site and Google Maps, plus a contact form that emails responses to athan.skedros@gmail.com.

## What's in here

- `index.html`, `styles.css`, `app.js`, `data.js`: the site
- `README.md`: this file
- `.nojekyll`: tells GitHub Pages to serve files as-is

All trip content lives in `data.js`. Edit that one file to add a restaurant, change a day, update a phone number. No coding required, just match the existing structure.

## Hosting

The site is a static SPA. Push to GitHub, turn on Pages, done. See step-by-step instructions in chat or the GitHub Pages docs at https://pages.github.com.

## Setting up the contact form

The form on the Contact tab will only work after you configure a Formspree endpoint. This takes 2 minutes.

1. Go to https://formspree.io and sign up with athan.skedros@gmail.com. Free tier covers 50 submissions per month, plenty for a trip-planning form.
2. In your Formspree dashboard, click "+ New Form."
3. Name it "Greece 2026 Trip Form" (or whatever).
4. Confirm the email destination is athan.skedros@gmail.com.
5. Copy the form endpoint URL. It will look like `https://formspree.io/f/abcdefgh` (with your actual unique ID).
6. Open `data.js`. Near the top, find:
   ```js
   formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
   ```
7. Replace `YOUR_FORM_ID` with your unique ID (the part after `/f/` in your Formspree URL). Save.
8. Commit and push. The form is live.
9. The FIRST submission triggers a Formspree confirmation email to athan.skedros@gmail.com. Click the link in that email to verify. After that, every submission lands in your inbox directly.

If the endpoint is not configured, the form shows a warning banner at the top, and submission attempts will display the error message but not actually send.

## What's editable on the site

The site is mostly read-only for v2 to keep the master plan stable. Only a few things are editable, and edits save to the viewer's browser only (each person sees their own state):

- Each day has a "Your notes" block at the bottom, for personal annotations during the trip
- Accommodation address, phone, and confirmation fields (so Athan can fill in details as bookings finalize)
- Budget table estimate and actual columns
- Packing checklist checkboxes (each person tracks their own packing)

Edits do NOT sync between people. They are stored only in the local browser's `localStorage`. To share information, use the contact form or send a message.

## Sections

- Overview: dates, travelers, countdown, intro, quick links to all sections
- Stays: accommodations with editable booking fields, plus emergency phone numbers
- Logistics: inter-city ferries and flights, airport ground transport, car rentals, driving tips
- Athens 1, Chios, Crete, Athens 2: day-by-day itineraries
- Restaurants: 40+ vetted entries with descriptions, signature dishes, phone, hours, website, Google Maps. Filter by city.
- Sites and beaches: 25+ sites and 19 beaches with tickets, hours, links
- Budget + more: budget table (editable), packing checklist (editable), Greek phrases, etiquette tips
- Contact: form that emails responses to Athan via Formspree

## Editing trip data

Open `data.js` in any text editor. The structure is:

```js
window.TRIP_DATA = {
  meta: { ... },
  accommodations: { athens1: {...}, chios: {...}, crete: {...}, athens2: {...} },
  emergency: [ ... ],
  logistics: { interCity: [], airports: [], carRentals: [], driving: [] },
  days: [ ... 18 day objects ... ],
  restaurants: [ ... ],
  sites: [ ... ],
  beaches: [ ... ],
  budget: { categories: [], notes: '' },
  packing: [ ... ],
  phrases: [ ... ],
  etiquette: [ ... ],
  form: { fields: [...], successMessage: '', errorMessage: '' }
};
```

To add a restaurant: copy any existing entry in the `restaurants` array, change the fields, save. The Google Maps link is generated automatically from name + address.

To add a day option: edit the relevant day's `slots` array. Each slot has `time`, `headline`, `description`, and optionally `options[]`, `alternatives[]`, `mealOptions[]`, and `links[]`.

To change form fields: edit the `form.fields` array. Field types supported: `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`.

## Mobile

The site works on phones. The nav scrolls horizontally if needed. Day cards stack cleanly. Forms use full-width inputs.

## Troubleshooting

- Form submit fails: check that you replaced `YOUR_FORM_ID` in `data.js` with your actual Formspree ID. Confirm the first email from Formspree (sent to athan.skedros@gmail.com) was clicked to verify the account.
- Pages 404 after push: wait 1 to 2 minutes for GitHub to build. Refresh.
- Edits to budget/packing/notes vanished: those are stored per-browser, so clearing cookies clears them. They don't sync between devices.
- Restaurant link goes to wrong place on Google Maps: the link is auto-generated from name + address in `data.js`. Edit the address field to make it more specific (include city and country if needed).

## Credits

Built by Athan Skedros for the Skedros family trip, May 2026.
