/* =========================================================================
   TRIP DATA, Greece 2026
   Deep itinerary with vetted options, full links, form integration.
   To set up the contact form: sign up at formspree.io, create a form
   pointed at athan.skedros@gmail.com, paste the endpoint URL below.
   ========================================================================= */

window.TRIP_DATA = {

  meta: {
    title: "Greece 2026",
    subtitle: "Athens, Chios, Crete",
    dateRange: "June 5 to June 21, 2026",
    travelers: "7 adults",
    countdownTarget: "2026-06-05T00:00:00",
    intro: "Seventeen days across the Greek mainland and islands. Athens for the ancients and late nights, Chios for mastic villages and the quiet Aegean, Crete for wild beaches and a villa above the sea. Built by Athan for the Skedros family.",
    formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
    contactEmail: "athan.skedros@gmail.com"
  },

  accommodations: {
    athens1: {
      label: "Athens, leg 1",
      dates: "Jun 5 to Jun 7, 2026 (2 nights)",
      name: "TBD",
      address: "Address pending",
      phone: "",
      confirmation: "",
      notes: "Booking pending. Target neighborhoods: Plaka, Monastiraki, Koukaki, or Thission for walking access to the Acropolis. Avoid Omonia and Exarcheia after dark with a group."
    },
    chios: {
      label: "Chios",
      dates: "Jun 7 to Jun 14, 2026 (7 nights)",
      name: "TBD, Chios Town area",
      address: "Leof. Enoseos area (placeholder)",
      phone: "",
      confirmation: "",
      notes: "Address pending. Chios Town is the most central base. Karfas (6 km south) is the alternative if going for a beach-front rental."
    },
    crete: {
      label: "Crete, Villa Dioni",
      dates: "Jun 14 to Jun 19, 2026 (5 nights)",
      name: "Villa Dioni",
      address: "Makedonomachon, Glaros, Kato Daratso, Chania 73100",
      phone: "+30 2821 031220",
      confirmation: "Reservation #986661, Vrbo 55761607, Property Code #12726",
      checkIn: "Sunday, Jun 14, 2026 at 4:00 PM or later",
      checkOut: "Friday, Jun 19, 2026 at 10:00 AM or earlier",
      host: "Be On Holidays, Tsichlaki Maria",
      hostEmail: "info@beonholidays.gr",
      website: "https://www.vrbo.com/55761607",
      notes: "Modern villa with private pool. About 4 km west of Chania Old Town, walking distance to Nea Chora beach. Mike's Rent A Car delivers cars to the villa at no charge.",
      confirmed: true
    },
    athens2: {
      label: "Athens, leg 2",
      dates: "Jun 19 to Jun 21, 2026 (2 nights)",
      name: "TBD",
      address: "Address pending",
      phone: "",
      confirmation: "",
      notes: "Last 2 nights. Pick a hotel near a Metro stop on Line 3 for the easy airport run on Jun 21."
    }
  },

  emergency: [
    { label: "Europe-wide emergency (police, ambulance, fire)", value: "112" },
    { label: "Greek police", value: "100" },
    { label: "Tourist police (English speakers)", value: "1571" },
    { label: "Ambulance", value: "166" },
    { label: "Coast Guard", value: "108" },
    { label: "US Embassy Athens", value: "+30 210 721 2951" },
    { label: "US Embassy after-hours", value: "+30 210 729 4444" }
  ],

  logistics: {
    interCity: [
      {
        leg: "Athens to Chios",
        date: "Jun 7, 2026",
        modes: [
          {
            mode: "Ferry, Blue Star Ferries",
            duration: "7 to 13 hours depending on route",
            cost: "EUR 39 to 160 pp depending on class",
            site: "https://www.bluestarferries.com",
            notes: "Daytime sailings depart Piraeus around 07:00 to 08:00. Overnight sailings depart late evening with cabin options. Book cabins early for the long haul."
          },
          {
            mode: "Flight, Aegean or Sky Express",
            duration: "About 50 minutes in the air",
            cost: "EUR 45 to 180 pp",
            site: "https://en.aegeanair.com",
            notes: "ATH to JKH (Chios). Aegean has the better schedule for groups, Sky Express is often cheaper. Book early, June fills up."
          }
        ]
      },
      {
        leg: "Chios to Crete (Chania)",
        date: "Jun 14, 2026",
        modes: [
          {
            mode: "Flight via Athens",
            duration: "About 4 hours total with connection",
            cost: "EUR 90 to 220 pp",
            site: "https://en.aegeanair.com",
            notes: "No direct route exists. Connect through ATH with a 1 to 2 hour layover. Aegean is the standard play. Sky Express works too."
          }
        ]
      },
      {
        leg: "Crete (Chania) to Athens",
        date: "Jun 19, 2026",
        modes: [
          {
            mode: "Flight, Aegean or Sky Express",
            duration: "About 1 hour",
            cost: "EUR 45 to 180 pp",
            site: "https://en.aegeanair.com",
            notes: "CHQ to ATH. Multiple daily, easy. Book a midday flight to allow morning checkout."
          },
          {
            mode: "Ferry, ANEK or Minoan Lines",
            duration: "8 to 9 hours overnight",
            cost: "EUR 40 to 150 pp",
            site: "https://www.anek.gr",
            notes: "Departs Souda port (15 min from Chania) around 21:00, arrives Piraeus around 06:00. Cabins recommended."
          }
        ]
      }
    ],
    airports: [
      {
        name: "Athens Eleftherios Venizelos (ATH)",
        site: "https://www.aia.gr",
        items: [
          { mode: "Taxi", detail: "Flat rate to city center: EUR 40 daytime, EUR 55 night (00:00 to 05:00). Taxis at the official rank are metered to the flat rate." },
          { mode: "Uber, Bolt, FreeNow", detail: "All three apps operate at ATH. Often cheaper than the flat rate, especially in off-peak hours." },
          { mode: "Metro Line 3 (blue)", detail: "EUR 9 pp single ticket. About 40 minutes to Syntagma. Trains run every 30 min." },
          { mode: "Express bus X95", detail: "EUR 6 pp to Syntagma. 60 to 90 minutes depending on traffic. Runs 24 hours." }
        ]
      },
      {
        name: "Chania Ioannis Daskalogiannis (CHQ)",
        site: "https://www.chq-airport.gr",
        items: [
          { mode: "Taxi", detail: "About EUR 30 to 35 to Chania Old Town, EUR 35 to 40 to Villa Dioni. 25 minute drive." },
          { mode: "KTEL bus", detail: "EUR 2.50 pp to Chania bus station, then taxi or walk. Hourly schedule." },
          { mode: "Rental car pickup", detail: "Mike's Rent A Car offers free delivery directly to the airport. The smartest play with luggage and a group of 7." }
        ]
      },
      {
        name: "Chios Island National Airport (JKH)",
        site: "",
        items: [
          { mode: "Taxi", detail: "About EUR 10 to Chios Town. 7 minute drive. Pre-arrange for groups." },
          { mode: "Rental car pickup", detail: "Vassilakis and Aegean Rent a Car typically deliver to the airport at no charge." }
        ]
      }
    ],
    carRentals: [
      {
        location: "Chios",
        vendors: [
          { name: "Vassilakis Rent a Car", phone: "+30 2271 026620", site: "https://vassilakis-rentacar.gr", cost: "EUR 30 to 50 per day", notes: "Well reviewed local. Delivers to ferry port or airport. Automatic available, request in advance." },
          { name: "Aegean Rent a Car", phone: "+30 2271 041277", site: "", cost: "EUR 35 to 60 per day", notes: "Local Chios operator. Free airport delivery." },
          { name: "Budget Chios", phone: "", site: "https://www.budget.com", cost: "EUR 40 to 70 per day", notes: "International chain, predictable, slightly pricier." }
        ]
      },
      {
        location: "Crete (Chania)",
        vendors: [
          { name: "Mike's Rent A Car", phone: "+30 6987 711777", site: "https://www.mikescars.gr", cost: "EUR 25 to 50 per day", notes: "FREE delivery to Villa Dioni. Top-rated locally. Book ahead, June is peak." },
          { name: "Caravel Rent a Car", phone: "+30 2821 094211", site: "https://www.caravel.gr", cost: "EUR 30 to 55 per day", notes: "Long-standing local. Fleet includes 7-seaters useful for the whole group." },
          { name: "Bookcars.gr aggregator", phone: "", site: "https://bookcars.gr", cost: "Varies", notes: "Compares local Crete vendors, often cheaper than chains. Worth checking for the best price." }
        ]
      }
    ],
    driving: [
      "Greece drives on the right. International Driving Permit required for US licenses. Order from AAA before departure, EUR 20.",
      "Mountain roads on Chios and Crete are narrow and switchbacked. Drive 30 to 40 kph on hairpins. Goats and donkeys cross without warning.",
      "Diesel is typically EUR 0.10 to 0.15 cheaper per liter than petrol. Most rentals are manual, request automatic in advance and expect a EUR 5 to 10 per day premium.",
      "Both Blue Star and ANEK ferries take cars if you want to drive between islands, but for this trip flights are smarter given the schedule.",
      "Parking inside Chania Old Town and Chios Town walls is restricted. Park outside the walls (free or EUR 2 per hour) and walk in."
    ]
  },

  days: [
    /* ATHENS LEG 1 */
    {
      id: "athens-d1",
      city: "Athens",
      date: "Friday, Jun 5, 2026",
      title: "Arrive Athens, settle, walk Plaka",
      summary: "Travel day. The play is keep it loose, walk a little to fight jet lag, eat early-ish by Greek standards, sleep hard. Acropolis is tomorrow.",
      weather: "June average 31C high, 21C low. Sun sets around 20:50. Expect heat from 13:00 to 18:00.",
      slots: [
        {
          time: "Afternoon",
          headline: "Land at ATH, transfer to accommodation",
          description: "Allow 60 to 90 minutes from wheels-down to your hotel door. Customs is fast, baggage claim is slow.",
          options: [
            { name: "Taxi at flat rate", detail: "EUR 40 daytime, EUR 55 after 00:00. Take the official rank, not freelancers in the parking lot." },
            { name: "Uber, Bolt, FreeNow", detail: "Often EUR 30 to 35. All three work. App pickup is at the designated rideshare area." },
            { name: "Metro Line 3", detail: "EUR 9 pp. Smart if you packed light. Direct to Syntagma in 40 minutes." }
          ]
        },
        {
          time: "Late afternoon",
          headline: "Settle, freshen up, light walk through Plaka",
          description: "Don't sleep yet, the jet lag will be brutal tomorrow if you do. Take a 30 minute walk through Plaka to acclimate. The neighborhood is at the foot of the Acropolis, all cobblestones and bougainvillea.",
          options: [
            { name: "Plaka loop", detail: "Start at Syntagma, walk down Ermou, cut south into Plaka, wander to Anafiotika (the white-and-blue island-style cluster on the Acropolis slope), return via Adrianou." },
            { name: "Monastiraki square", detail: "Lively, food stalls, flea market on weekends. Souvlaki at Bairaktaris if you want a quick bite." }
          ]
        },
        {
          time: "20:00 onward",
          headline: "Early dinner near the hotel",
          description: "Stay close, eat well, in bed by 22:30. Three vetted dinner options at increasing levels of effort:",
          mealOptions: ["Geros Tou Moria", "Klimataria", "Karamanlidika tou Fani"]
        }
      ],
      reservations: ["Dinner if Saturday night is your priority"],
      whatToBring: ["Light layer for evening", "Comfortable shoes for cobblestones", "Phone charger"],
      walking: "About 2 to 3 km of casual walking",
      tip: "Greek dinners run late. 21:30 is normal, 22:30 is fine. But on your first night, fight the impulse to push past 22:00."
    },

    {
      id: "athens-d2",
      city: "Athens",
      date: "Saturday, Jun 6, 2026",
      title: "The classic Athens day, Acropolis to Plaka",
      summary: "The big-ticket day. Beat the heat at the Acropolis at first entry, decompress at the museum, siesta through the worst sun, sunset rooftop, late dinner. This is the day Athens earns its reputation.",
      weather: "June high 31C, low 21C. Marble at the Acropolis hits 40C+ by noon. Hat and 2L of water are not optional.",
      slots: [
        {
          time: "08:00",
          headline: "Acropolis at first entry",
          description: "Pre-book the 08:00 timed slot at hhticket.gr. EUR 30 pp. Allow 2 to 2.5 hours. Enter via the main west gate (the southern slope entrance opens 90 minutes later). The Propylaia, Parthenon, Erechtheion with the Caryatids, and Temple of Athena Nike are the headliners.",
          links: [
            { label: "Book Acropolis tickets", url: "https://hhticket.gr" },
            { label: "Official Acropolis info", url: "https://odysseus.culture.gr" }
          ],
          alternatives: [
            { name: "Late slot at 17:00", detail: "If 8 AM feels brutal post-flight, the late entry has softer light and thinner crowds. Site closes at 20:00 in summer." },
            { name: "Skip-the-line guided tour", detail: "EUR 60 to 90 pp via GetYourGuide. Worth it if anyone in the group wants historical context." }
          ]
        },
        {
          time: "11:00",
          headline: "Acropolis Museum",
          description: "Across the street from the south slope. EUR 20 pp via etickets.theacropolismuseum.gr. The glass top floor frames the actual Parthenon and houses the original sculptures (replicas are on the building itself). The basement displays excavated foundations under glass floors. Plan 1.5 to 2 hours.",
          links: [
            { label: "Book museum tickets", url: "https://etickets.theacropolismuseum.gr" },
            { label: "Museum website", url: "https://www.theacropolismuseum.gr" }
          ],
          tip: "Top-floor café has Parthenon views and decent coffee."
        },
        {
          time: "13:30",
          headline: "Lunch in Koukaki or Makrygianni",
          description: "Walkable from the museum. Three picks, different price points:",
          mealOptions: ["Mani Mani", "Lolos All Day", "Diporto"]
        },
        {
          time: "Afternoon (15:00 to 17:30)",
          headline: "Siesta or one more ruin",
          description: "The honest answer is take a siesta. The sun is at its worst, and you have a late dinner ahead. If you have the energy, here are options:",
          options: [
            { name: "Siesta", detail: "Truly. A 90-minute lie-down resets the day." },
            { name: "Ancient Agora", detail: "EUR 10. The Temple of Hephaestus inside is the best-preserved Doric temple anywhere in Greece. Stoa of Attalos has a small museum. 1.5 hours.", links: [{ label: "Tickets", url: "https://hhticket.gr" }] },
            { name: "Benaki Museum of Greek Culture", detail: "EUR 12. Cooler indoor option. Greek decorative arts from antiquity to today.", links: [{ label: "Website", url: "https://www.benaki.org" }] }
          ]
        },
        {
          time: "19:30",
          headline: "Sunset rooftop drink",
          description: "Athens has perhaps the best urban sunsets in Europe, with the Acropolis backlit gold. Pick one:",
          options: [
            { name: "360 Cocktail Bar", detail: "The classic, direct Acropolis view from Monastiraki Square. Cocktails EUR 13 to 16. Arrive by 19:30 for sunset seats.", links: [{ label: "Reserve", url: "https://three-sixty.gr" }] },
            { name: "A for Athens", detail: "More casual, same view direction. Smaller, less reservation-needed." },
            { name: "Lycabettus Hill", detail: "Highest point in Athens. Funicular up (EUR 10), café at the top. Best for whoever wants the panorama over a single Acropolis view." }
          ]
        },
        {
          time: "21:30",
          headline: "Dinner",
          description: "Late by US standards, perfectly normal in Athens. Three picks:",
          mealOptions: ["Tzitzikas kai Mermigas", "Kuzina", "Klimataria"]
        }
      ],
      reservations: ["Acropolis 08:00 slot, book 2 weeks ahead", "Acropolis Museum, any time slot", "Rooftop for sunset if a Saturday", "Dinner if choosing Kuzina (rooftop, popular)"],
      whatToBring: ["Sun hat, wide brim", "2L water bottle per person", "Sunscreen SPF 50", "Comfortable shoes with grip (Acropolis marble is slick)", "Light cardigan for air-conditioned museum"],
      walking: "About 5 to 6 km total",
      tip: "Modest dress is requested at the Acropolis (covered shoulders are fine, drone-strap dresses get sideways looks). Selfie sticks are technically banned."
    },

    {
      id: "athens-d3",
      city: "Athens",
      date: "Sunday, Jun 7, 2026",
      title: "Last morning in Athens, depart for Chios",
      summary: "Travel day. Get one more ruin or market or museum in before the afternoon transfer. Allow a 90-minute buffer to port (Piraeus) or airport (ATH).",
      weather: "Same as yesterday. Light layer for the ferry if overnight.",
      slots: [
        {
          time: "Morning",
          headline: "Pick one, then pack",
          description: "Three solid options for the last morning, depending on the group's mood:",
          options: [
            { name: "National Archaeological Museum", detail: "EUR 12. World-class Bronze Age and Classical collection. The gold Mask of Agamemnon, the Antikythera Mechanism, the Jockey of Artemision. 2 hours minimum.", links: [{ label: "Website", url: "https://www.namuseum.gr" }] },
            { name: "Central Market (Varvakios)", detail: "Free, sensory overload. Meat, fish, spices, olives. Diporto for lunch INSIDE the market (no menu, no signs, no English). Closed Sundays — pivot to museum on this day.", links: [{ label: "Market info", url: "https://athenscentralmarket.gr" }] },
            { name: "Easy walk + cafe", detail: "Coffee at Little Tree, walk the National Garden, see Hadrian's Arch and the Temple of Olympian Zeus from outside (EUR 8 if you want to go in)." }
          ]
        },
        {
          time: "Midday",
          headline: "Last lunch in Athens",
          description: "Light, near the hotel, easy to pivot to transfer mode.",
          mealOptions: ["Karamanlidika tou Fani", "Lukumades", "Ariston"]
        },
        {
          time: "PM or evening",
          headline: "Transfer to Chios",
          description: "Depending on booking:",
          options: [
            { name: "Ferry from Piraeus", detail: "Blue Star sailings. 7 to 13 hours depending on the route. Daytime ferries are EUR 39+ for a deck seat, EUR 80+ for an airline-style seat, EUR 160+ for a cabin (4-berth). Overnight ferries: book a cabin or you will not sleep.", links: [{ label: "Book Blue Star", url: "https://www.bluestarferries.com" }] },
            { name: "Flight ATH to JKH", detail: "50 minutes air time, EUR 45 to 180 pp. Aegean and Sky Express both fly the route.", links: [{ label: "Aegean", url: "https://en.aegeanair.com" }, { label: "Sky Express", url: "https://www.skyexpress.gr" }] }
          ]
        }
      ],
      reservations: ["Ferry/flight, book months ahead for June"],
      whatToBring: ["Snacks for the ferry/flight", "Earplugs and eye mask for overnight ferry", "Cash for port snack stands"],
      walking: "Light, depends on morning choice",
      tip: "If the ferry is overnight, board 60 minutes before departure to claim cabin space. Piraeus Gate E1 or E2 for Blue Star, confirm on ticket."
    },

    /* CHIOS */
    {
      id: "chios-d1",
      city: "Chios",
      date: "Sunday, Jun 7, 2026",
      title: "Arrive Chios, slow first evening",
      summary: "Arrival day. Chios is quieter than the famous Cyclades, more lived-in, less touristed. Tonight is about settling, a quiet dinner, walking the waterfront.",
      weather: "Slightly cooler than Athens, sea breeze. June high 29C, low 21C.",
      slots: [
        {
          time: "Evening",
          headline: "Settle, dinner near Chios Town waterfront",
          description: "Three traditional Chian options, all walking distance from anywhere central:",
          mealOptions: ["Hotzas", "Pyxari", "Ouzeri Theodosiou"]
        },
        {
          time: "After dinner",
          headline: "Stroll the harbor",
          description: "Chios Town's harbor is the social spine. Locals do the volta (evening walk) along the waterfront from 21:00 onward. Easy way to feel the place. Stop at the castle (free outside, EUR 4 for the Justiniani Museum inside) which is lit at night."
        }
      ],
      reservations: ["Dinner Friday or Saturday only"],
      whatToBring: ["Light jacket, the harbor catches a breeze"],
      walking: "1 to 2 km",
      tip: "Try mastiha liqueur after dinner. It's the island's signature digestif, distilled from the resin of the mastic tree (only grown in south Chios). Served chilled."
    },

    {
      id: "chios-d2",
      city: "Chios",
      date: "Monday, Jun 8, 2026",
      title: "Chios Town, Kambos estates, beach afternoon",
      summary: "Orientation day. Get the lay of Chios Town in the morning, lunch at one of the walled citrus estates in Kambos, swim at the closest beaches in the afternoon.",
      weather: "Same as yesterday. Sea is around 22C in early June, swimmable.",
      slots: [
        {
          time: "09:30",
          headline: "Chios Town walking tour",
          description: "Hit the highlights: the castle and Justiniani Museum (Byzantine icons), the Korais Library (one of the largest in Greece), the Argenti Folklore Museum, and the Maritime Museum. Stop at any Mastihashop branch to taste mastic products (toothpaste, liqueur, gum, cosmetics).",
          links: [
            { label: "Mastihashop", url: "https://www.mastihashop.com" },
            { label: "Korais Library", url: "https://koraeslibrary.gr" }
          ]
        },
        {
          time: "13:00",
          headline: "Lunch in Kambos, the walled citrus estates",
          description: "Kambos is the neighborhood 4 km south of Chios Town, where wealthy Genoese and Greek merchants built walled estates with citrus orchards in the 14th to 19th centuries. Lunch in one of these gardens is the move:",
          mealOptions: ["Mavrokordatiko", "Perivoli", "To Kechrimpari"]
        },
        {
          time: "16:00",
          headline: "Afternoon at the beach",
          description: "Closest swimmable beaches to base. Pick one:",
          options: [
            { name: "Karfas", detail: "8 km south, sandy, family-friendly, sun loungers EUR 8 to 15 per pair, beach bars and tavernas. Most crowded but most equipped." },
            { name: "Megas Limnionas", detail: "10 km south, pebble-and-sand, mellow local vibe, fewer loungers." },
            { name: "Vrontados", detail: "5 km north, smaller bay, near Daskalopetra (Homer's Stone)." }
          ]
        },
        {
          time: "21:00",
          headline: "Dinner back in Chios Town",
          description: "After the beach, a shower, then dinner. Modern options:",
          mealOptions: ["Pelagos", "Nostos", "Yperion"]
        }
      ],
      reservations: ["Kambos lunch, weekends only"],
      whatToBring: ["Swimsuit", "Beach towel", "Sunscreen", "Cash for loungers (some don't take card)"],
      walking: "3 to 4 km in town, plus beach"
    },

    {
      id: "chios-d3",
      city: "Chios",
      date: "Tuesday, Jun 9, 2026",
      title: "Nea Moni monastery and the mountain villages",
      summary: "Driving day inland. The 11th-century UNESCO monastery, the abandoned village of Anavatos, lunch with valley views at Avgonima, swim at a west-coast cove on the way back. Note: the Mastic Museum is CLOSED Tuesdays, save it for tomorrow.",
      weather: "Cooler in the mountains, can be windy. Long pants helpful at the monastery.",
      slots: [
        {
          time: "09:30",
          headline: "Nea Moni Monastery",
          description: "11th-century UNESCO World Heritage Site, 14 km west of Chios Town up a switchback mountain road. The katholikon has some of the finest surviving Byzantine mosaics anywhere, gold-ground figures of Christ and the apostles. EUR 4 entry. Active monastery so modest dress required: covered shoulders for everyone, covered knees for women (wraps provided at the door).",
          links: [
            { label: "Nea Moni info", url: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=1822" }
          ]
        },
        {
          time: "11:30",
          headline: "Anavatos, the abandoned village",
          description: "Called the 'Mystras of the Aegean.' A vertical Byzantine village clinging to a 300 meter cliff, abandoned after the 1822 Ottoman massacre. Free to walk through. Solemn, photogenic, takes about 45 minutes to climb and wander.",
          links: []
        },
        {
          time: "13:30",
          headline: "Lunch in Avgonima",
          description: "Stone-built village 4 km from Anavatos, with tavernas overlooking the valley.",
          mealOptions: ["Pyrgos Avgonima", "Oi Myloi"]
        },
        {
          time: "15:30",
          headline: "Swim on the west coast",
          description: "Drive 15 to 20 minutes down to the coast. Two options for a quiet afternoon swim:",
          options: [
            { name: "Lithi beach", detail: "Sand-and-pebble, taverna on the sand, small fishing harbor next door." },
            { name: "Elinda", detail: "Crescent cove with calm water and one small beach bar. Quieter than Lithi." }
          ]
        },
        {
          time: "21:00",
          headline: "Dinner back in Chios Town or near base",
          description: "After the mountain day, keep dinner easy:",
          mealOptions: ["Hotzas", "To Kechrimpari"]
        }
      ],
      reservations: ["Avgonima lunch on summer Saturdays only"],
      whatToBring: ["Long pants or wrap for monastery", "Walking shoes for Anavatos (uneven ground)", "Sunscreen", "Swimsuit"],
      walking: "4 to 5 km total including the village climbs",
      tip: "The road to Nea Moni is narrow with no shoulder. Drive 30 to 40 kph. Sound your horn before blind corners."
    },

    {
      id: "chios-d4",
      city: "Chios",
      date: "Wednesday, Jun 10, 2026",
      title: "The mastic villages of the south",
      summary: "South Chios is the only place on earth where mastic resin is commercially produced, and the villages were designed around that economy. Painted Pyrgi, the medieval fortress-grid of Mesta, and the Mastic Museum. End at Mavra Volia, the black-pebble beach.",
      weather: "Hotter in the south, less breeze. June high 32C in the interior villages.",
      slots: [
        {
          time: "09:30",
          headline: "Pyrgi, the painted village",
          description: "About 40 minutes south of Chios Town. Pyrgi's facades are decorated with xysta, a black-and-white geometric pattern scratched into wet plaster. The whole medieval grid is a photograph. Wander, get lost, end at the central church. Free.",
          links: []
        },
        {
          time: "11:30",
          headline: "Mastic Museum",
          description: "5 minutes outside Pyrgi. Modern museum on the cultivation and processing of mastic, the island's signature product. Hour-long visit. EUR 6.",
          links: [
            { label: "Tickets and info", url: "https://piop.gr/en/mastiha-museum" }
          ]
        },
        {
          time: "13:30",
          headline: "Lunch in Mesta",
          description: "Mesta is the best-preserved mastic village, a defensive fortress-grid of stone houses with vaulted passageways. Eat in the square:",
          mealOptions: ["To Apomero", "Mesainos", "Roussiko"]
        },
        {
          time: "15:30",
          headline: "Olympi Cave (Sykia)",
          description: "10 minutes from Mesta. Otherworldly underground chamber discovered in 1985, opened to visitors in 2003. Stalactites, columns, 60 meter depth. EUR 6 entry, 30 minute guided tour every hour. Closed Mondays.",
          links: []
        },
        {
          time: "17:00",
          headline: "Mavra Volia beach",
          description: "Near Emporios, the southern tip. 'Mavra Volia' means 'black pebbles,' the beach is made of small black volcanic stones. Three coves linked by paths. No facilities, bring water and shoes. Otherworldly at golden hour.",
          links: []
        },
        {
          time: "20:30",
          headline: "Dinner in Emporios or back in Chios Town",
          description: "Emporios has a couple of seaside tavernas. Or drive back (45 min) and eat in town:",
          mealOptions: ["Pelagos", "Nostos"]
        }
      ],
      reservations: ["Lunch in Mesta on weekends"],
      whatToBring: ["Water shoes for Mavra Volia", "Hat (no shade in the south)", "2L water", "Cash for the cave"],
      walking: "4 km in the villages",
      tip: "Buy mastiha products at the village shops, not the airport. Cheaper and often village-specific blends."
    },

    {
      id: "chios-d5",
      city: "Chios",
      date: "Thursday, Jun 11, 2026",
      title: "Volissos and the empty northwest beaches",
      summary: "Northwest Chios is the least-visited part of the island. Volissos is a medieval village with a Byzantine castle on the hill, surrounded by long, quiet beaches.",
      weather: "Coast can be windy in the afternoon, the meltemi picks up.",
      slots: [
        {
          time: "10:00",
          headline: "Drive to Volissos",
          description: "About 45 minutes from Chios Town. Climb the castle (free, 15 minutes up), wander the cobbled lanes. Volissos was reputedly Homer's birthplace.",
          links: []
        },
        {
          time: "13:00",
          headline: "Lunch at Limnia harbor",
          description: "5 minutes downhill from Volissos, the tiny fishing harbor of Limnia has two seafront tavernas with fresh catch.",
          mealOptions: ["Pyxari (if not yet visited, return Chios Town)", "Local Limnia tavernas, ask which boat came in today"]
        },
        {
          time: "15:00",
          headline: "Pick a northwest beach",
          description: "Three nearby beaches, all long, all quiet:",
          options: [
            { name: "Managros", detail: "10 minute drive. 1.5 km sand beach, one taverna, almost no people in June." },
            { name: "Lefkathia", detail: "Smaller cove next to Managros, pebble and sand." },
            { name: "Trahili", detail: "Wild and undeveloped. No facilities. Bring everything." }
          ]
        },
        {
          time: "20:30",
          headline: "Dinner back in Chios Town",
          description: "Long drive back, eat near the hotel:",
          mealOptions: ["Pyxari", "Yperion"]
        }
      ],
      reservations: ["None needed"],
      whatToBring: ["Beach umbrella if possible, no shade", "Water, snacks", "Sunscreen"],
      walking: "2 km in Volissos, plus beach",
      tip: "The road to Volissos has a few one-lane sections through villages. Pull over for oncoming cars."
    },

    {
      id: "chios-d6",
      city: "Chios",
      date: "Friday, Jun 12, 2026",
      title: "Slow day, repeat favorites, Chios Town evening",
      summary: "A built-in rest day. Choose a beach you already loved or a new one, slow lunch, easy evening. After 5 days of exploring, a low-effort day prevents burnout.",
      weather: "Same.",
      slots: [
        {
          time: "Morning",
          headline: "Beach of choice or boat day",
          description: "Three modes for the day:",
          options: [
            { name: "Repeat favorite beach", detail: "Whichever beach the group rated highest earlier in the week. Familiar wins on a rest day." },
            { name: "New beach: Komi or Mavra Volia again", detail: "Komi is sand, family-friendly, in the south. Mavra Volia for the black-pebble photo round 2." },
            { name: "Daskalopetra and Vrontados", detail: "Short morning to the 'Stone of Homer' (free), where the poet supposedly taught. Coffee in Vrontados after." }
          ]
        },
        {
          time: "13:30",
          headline: "Slow lunch wherever the morning lands",
          description: "Mix-and-match from any city or beach taverna:",
          mealOptions: ["Hotzas", "Mavrokordatiko (if you skipped it Monday)", "To Kechrimpari"]
        },
        {
          time: "18:00",
          headline: "Sunset drinks, Chios Town waterfront",
          description: "Several waterfront bars line the harbor. Pick one with shade and a view, order a tsipouro or a frappé."
        },
        {
          time: "21:00",
          headline: "Dinner",
          description: "Hit a place you wanted to return to, or try something new:",
          mealOptions: ["Pelagos", "Nostos", "Pyxari"]
        }
      ],
      reservations: ["None needed"],
      whatToBring: ["Beach kit", "Reading material"],
      walking: "Light"
    },

    {
      id: "chios-d7",
      city: "Chios",
      date: "Saturday, Jun 13, 2026",
      title: "Optional day trip or final Chios explore",
      summary: "Last full day on Chios. Three completely different shapes for the day, pick one based on what's missing from the week.",
      weather: "Same.",
      slots: [
        {
          time: "All day",
          headline: "Pick a shape for the day",
          description: "",
          options: [
            { name: "Inousses island day trip", detail: "Small ferry from Chios Town (EUR 5 to 8 each way, 1 hour). Tiny, traditional, almost no tourists. Bring a book. A couple of tavernas, one beach, one museum. Return ferry afternoon." },
            { name: "North Chios drive", detail: "Drive up the east coast to Marmaro, Kardamyla, Nagos beach. Lush, mountainous, with springs feeding the bays. Lunch in Kardamyla harbor." },
            { name: "Boat charter half-day", detail: "Several operators in Chios Town run private boat charters along the east coast, EUR 350 to 600 for the group depending on boat size. Karfas to Komi route. Worth it for a special last day." }
          ]
        },
        {
          time: "21:00",
          headline: "Goodbye dinner",
          description: "Hit the favorite from the week, or go for an upgrade:",
          mealOptions: ["Pelagos", "Mavrokordatiko (book lunch instead if not done)", "Hotzas"]
        }
      ],
      reservations: ["Inousses ferry: walk-up usually fine. Boat charter: book 1 to 2 days ahead."],
      whatToBring: ["Depends on choice"],
      walking: "Depends on choice"
    },

    /* CRETE */
    {
      id: "crete-d1",
      city: "Crete",
      date: "Sunday, Jun 14, 2026",
      title: "Travel to Crete, check in Villa Dioni, first evening in Nea Chora",
      summary: "Big travel day. Chios morning, Athens layover, Chania afternoon, villa by evening. Mike's Rent A Car can deliver to either the airport or the villa.",
      weather: "Crete is hotter and drier than Chios. June Chania high 28C, low 19C, but inland and at noon expect 32C+.",
      slots: [
        {
          time: "Morning",
          headline: "Fly Chios to Athens to Chania",
          description: "Connect through ATH. Allow 4 hours total travel time. Aegean is the standard play. Bags through-checked from JKH to CHQ on a single booking.",
          links: [
            { label: "Aegean", url: "https://en.aegeanair.com" }
          ]
        },
        {
          time: "After 16:00",
          headline: "Check in at Villa Dioni",
          description: "Address: Makedonomachon, Glaros, Kato Daratso, Chania 73100. Host: Be On Holidays, Tsichlaki Maria, +30 2821 031220, info@beonholidays.gr. Confirmation #986661. Check in is 16:00 sharp, the cleaning team finishes at 15:30. Code or key handover per the host's instructions.",
          links: [
            { label: "Vrbo listing", url: "https://www.vrbo.com/55761607" }
          ]
        },
        {
          time: "Evening",
          headline: "Easy first dinner in Nea Chora",
          description: "Nea Chora is the seafood quarter, 5 minutes drive from the villa. Walk along the beachfront promenade. Three picks:",
          mealOptions: ["Kariatis", "Mikrolimano", "Oasis Souvlaki"]
        }
      ],
      reservations: ["Confirm car delivery with Mike's", "Confirm villa check-in time with the host"],
      whatToBring: ["Snacks for the layover", "Confirmation numbers in offline-accessible form"],
      walking: "Light",
      tip: "Order a delivery from a Chania supermarket (My Market, Vergina) for villa stocking. Coffee, breakfast items, water, wine. Cheaper than restaurants for breakfast."
    },

    {
      id: "crete-d2",
      city: "Crete",
      date: "Monday, Jun 15, 2026",
      title: "Chania Old Town and the Venetian harbor",
      summary: "Discovery day in the old town. The Venetian harbor, the lighthouse, Stivanadika (the leather-makers' alley), the indoor market, dinner along the water. Easiest day of the Crete leg.",
      weather: "Same. Old town is shaded by tall buildings, very walkable until 14:00, then hot.",
      slots: [
        {
          time: "10:00",
          headline: "Walk the Venetian harbor and Old Town",
          description: "Park at the public lot near the bus station or use the free lot above the fortress. Walk the harbor from the lighthouse end (about 1 km out and back along the seawall, great photos of the harbor mouth) back to Firkas Fortress (Maritime Museum is inside, EUR 4). Cut into Stivanadika, the alley of leather workshops, narrow as a corridor. Loop through Splantzia, the Turkish quarter, with the Mosque of Ahmet Aga.",
          links: [
            { label: "Maritime Museum of Crete", url: "https://mar-mus-crete.gr" }
          ]
        },
        {
          time: "13:30",
          headline: "Lunch in the Old Town",
          description: "Cretan tavernas at a range of price points:",
          mealOptions: ["Tamam", "To Maridaki", "Salis"]
        },
        {
          time: "15:30",
          headline: "Indoor market and afternoon",
          description: "The Agora (Demotiki Agora) is a cross-shaped covered market from 1913, with cheese, olive oil, raki, spices, fresh produce. Buy souvenirs that aren't junk. Then siesta back at the villa, or museum.",
          options: [
            { name: "Archaeological Museum of Chania", detail: "EUR 6, well curated, Minoan to Roman finds, in a former Venetian monastery.", links: [{ label: "Website", url: "https://amch.gr" }] },
            { name: "Villa pool", detail: "Lounger by the pool with a book wins on hot afternoons." }
          ]
        },
        {
          time: "20:30",
          headline: "Dinner with the harbor view",
          description: "Atmospheric options on or near the water:",
          mealOptions: ["Well of the Turk", "Ta Chalkina", "Salis"]
        },
        {
          time: "After dinner",
          headline: "Walk the harbor at night",
          description: "The lit Venetian lighthouse, the boats, the cocktail bars along Akti Tombazi. Stop for ice cream at Iordanis or pastry at Hatzis."
        }
      ],
      reservations: ["Dinner: Tamam, Well of the Turk, Ta Chalkina all fill up Friday and Saturday"],
      whatToBring: ["Sandals (cobblestones, but flat)", "Cash for the market"],
      walking: "5 to 6 km in town"
    },

    {
      id: "crete-d3",
      city: "Crete",
      date: "Tuesday, Jun 16, 2026",
      title: "Balos Lagoon day trip",
      summary: "Full day boat trip to one of the most famous beaches in Greece. The lagoon between Cape Tigani and the Balos peninsula has a sandbar that glows turquoise from the shallow water. The ferry stops first at Gramvousa, an uninhabited island with a Venetian fortress.",
      weather: "Same, but the boat is exposed. Wind picks up afternoon, ferry can rock on the way back.",
      slots: [
        {
          time: "09:00",
          headline: "Drive to Kissamos port",
          description: "About 40 minutes west of Chania. Park at the port lot, EUR 5 for the day. Ferry desk is at the dock.",
          links: []
        },
        {
          time: "10:30",
          headline: "Ferry to Gramvousa and Balos",
          description: "Cretan Daily Cruises is the operator. EUR 40 to 45 pp depending on date. The boat stops first at Gramvousa island for about 2 hours, time to swim and climb to the Venetian fortress (steep 25 minute climb, panoramic view). Then continues to Balos for about 3 hours.",
          links: [
            { label: "Book Cretan Daily Cruises", url: "https://www.cretandailycruises.com" }
          ]
        },
        {
          time: "13:30 to 16:30",
          headline: "Balos Lagoon",
          description: "The shallow lagoon is photogenic but crowded by midday. Walk left along the beach for thinner crowds. Bring lunch (boat has a small snack bar, expensive) or eat at the one beach taverna (basic, EUR 12 to 18 for a plate).",
          links: []
        },
        {
          time: "17:45",
          headline: "Ferry back to Kissamos",
          description: "Arrive Kissamos about 18:45. Drive back to Chania (40 min) or stay for dinner in Kissamos:"
        },
        {
          time: "21:00",
          headline: "Dinner in Kissamos or back in Chania",
          description: "Kissamos has good seaside tavernas if you don't want to drive on a tired day. Or back to Chania:",
          mealOptions: ["Ta Chalkina (Chania)", "Mikrolimano (Nea Chora, near villa)"]
        }
      ],
      reservations: ["Cretan Daily Cruises, book 2 to 3 days ahead in June"],
      whatToBring: ["Water shoes (lagoon floor is shell and rock)", "Sunscreen (no shade on the boat)", "Hat", "Cash for snacks and the fortress climb", "Light layer for the windy boat ride"],
      walking: "Up to 4 km if you do the Gramvousa fortress climb",
      tip: "Alternative: drive yourself to Balos via the rough dirt road from Kaliviani. 45 minutes of bad road, but you avoid the boat and the crowd. Doesn't work for groups of 7 in one vehicle. The boat is the standard play."
    },

    {
      id: "crete-d4",
      city: "Crete",
      date: "Wednesday, Jun 17, 2026",
      title: "Group splits: Samaria Gorge hikers, villa-pool relaxers",
      summary: "The group divides. Hikers do Samaria, one of the great hikes in Europe: 16 km strenuous downhill through a national park, finishing at the Libyan Sea. Relaxers stay near the villa, beach, pool, maybe Botanical Park. Reunite in the evening for an easy group dinner.",
      weather: "Gorge bottom is hotter than the top. Plan 30C at the gorge floor by midday.",
      slots: [
        {
          time: "FOR HIKERS, 05:30",
          headline: "KTEL bus from Chania to Omalos",
          description: "KTEL bus departs Chania bus station 06:15. EUR 8 each way. Arrives Omalos (gorge entrance) around 07:45. Book the day before at chaniabus.gr. Buy gorge entry on arrival, EUR 10. Last entry is 14:00.",
          links: [
            { label: "KTEL bus schedule", url: "https://www.e-ktel.com" },
            { label: "Gorge official", url: "https://www.samaria.gr" }
          ]
        },
        {
          time: "FOR HIKERS, 08:00 to 14:00",
          headline: "Samaria Gorge hike",
          description: "16 km, strenuous, mostly downhill but the descent (Xyloskalo) is steep wooden steps for the first 2 km. Pass the abandoned Samaria village mid-hike (allow water refill). Squeeze through 'Sideroportes' (Iron Gates) where the gorge narrows to 4 meters wide and walls rise 300m. Exit at Agia Roumeli on the Libyan Sea.",
          links: []
        },
        {
          time: "FOR HIKERS, 14:00 to 17:30",
          headline: "Lunch and beach at Agia Roumeli, then ferry to Sfakia",
          description: "Agia Roumeli is car-free, reached only by foot or boat. Quick swim, lunch at one of the tavernas, board the 17:30 ferry to Chora Sfakion (EUR 15, 1 hour). KTEL bus from Sfakia to Chania departs 19:00, arrives 21:00.",
          links: [
            { label: "Anendyk ferries", url: "https://www.anendyk.gr" }
          ],
          mealOptions: ["Tara Agia Roumeli"]
        },
        {
          time: "FOR RELAXERS, all day",
          headline: "Villa, pool, Nea Chora, optional easy outings",
          description: "Several low-key options:",
          options: [
            { name: "Villa pool day", detail: "The most honest answer. Loungers, swim, late breakfast, lunch at the villa." },
            { name: "Nea Chora beach", detail: "Walk from the villa, 10 minutes. Sun loungers, beachfront tavernas, easy lunch at Mikrolimano." },
            { name: "Botanical Park of Crete", detail: "20 minutes drive from villa. 20 hectares of fruit trees and herbs, a creek walk, restaurant with garden-to-table menu. EUR 6.50 entry. Half day.", links: [{ label: "Website", url: "https://www.botanical-park.com" }] },
            { name: "Akrotiri peninsula", detail: "Drive 20 min east, visit Marathi beach for lunch (Pelagos Marathi taverna), Stavros for the Zorba beach, Agia Triada monastery." }
          ]
        },
        {
          time: "21:30",
          headline: "Easy group dinner",
          description: "Hikers will be wrecked. Keep dinner near the villa and casual:",
          mealOptions: ["Ta Meraklikia", "Mikrolimano", "Oasis Souvlaki (takeaway to the villa)"]
        }
      ],
      reservations: ["KTEL bus to Omalos, book day before", "Ferry from Agia Roumeli, walk-up usually fine but check"],
      whatToBring: ["FOR HIKERS: real hiking shoes, 2L water minimum, sun hat, snacks (lunch is at the bottom), refillable water bottle (springs along the way), light layer for early morning at altitude (Omalos is 1230m), camera, EUR 60 in cash for entry+ferry+bus", "FOR RELAXERS: pool / beach kit, book"],
      walking: "Hikers: 16 km. Relaxers: 1 to 4 km",
      tip: "Hikers: trekking poles save your knees on the descent. Buy or rent from Chania outdoor shops the day before. The hike is mostly downhill, which means lots of pounding on the joints."
    },

    {
      id: "crete-d5",
      city: "Crete",
      date: "Thursday, Jun 18, 2026",
      title: "Elafonisi pink beach day",
      summary: "Last full day in Crete. Elafonisi is the famous pink-sand beach 75 km southwest, with a shallow lagoon and a small island connected by a sandbar. Long drive each way, but the destination is unforgettable. Lunch at a mountain village on the return.",
      weather: "Same. Elafonisi can be windy in the afternoon, lagoon stays warm.",
      slots: [
        {
          time: "08:30",
          headline: "Drive to Elafonisi",
          description: "About 1.5 hours, 73 km. Mostly mountain roads, scenic but slow. Leave early to claim parking (EUR 3 cash) and beach space.",
          links: []
        },
        {
          time: "10:00 to 13:30",
          headline: "Elafonisi beach and lagoon",
          description: "The pink sand comes from crushed shells. The shallow lagoon is warm and waist-deep for 100 meters out, perfect for non-swimmers. Cross the sandbar to the small island for fewer people. Sun loungers EUR 8 to 15 pair, snack bar with mediocre food. Bring or rent a beach umbrella, no natural shade.",
          links: []
        },
        {
          time: "13:30 (alt)",
          headline: "Walk to Kedrodasos for a quieter swim",
          description: "10 minute walk south from Elafonisi parking. Sand-and-cedar trees, no facilities, almost no people. Cretans go here to escape the Elafonisi crowds. Bring everything.",
          links: []
        },
        {
          time: "14:30",
          headline: "Lunch at a mountain village on the way back",
          description: "Two villages worth stopping in:",
          mealOptions: ["Innachorion (Elos village)", "Mountain taverna in Vlatos or Topolia"]
        },
        {
          time: "Evening",
          headline: "Final villa night, group dinner",
          description: "Last night in Crete. Options:",
          options: [
            { name: "Cook at the villa", detail: "Stock up at the supermarket on the drive back. Grill, salad, wine. Skip the restaurant scene." },
            { name: "Dinner out in Old Town", detail: "One last harbor sit-down. Book ahead.", mealOptions: ["Ta Chalkina", "Well of the Turk"] },
            { name: "Private chef at villa", detail: "Cretan Cooking & Catering or Cookin Crete will bring a chef to cook in your kitchen and serve at the table. EUR 60 to 90 pp for a full menu including wine. Book 3+ days ahead.", links: [{ label: "Cookin Crete", url: "https://www.cookincrete.com" }] }
          ]
        }
      ],
      reservations: ["Private chef if interested, 3+ days ahead", "Restaurant dinner Friday night"],
      whatToBring: ["Beach umbrella or rent on-site", "Water shoes (lagoon floor is shells)", "Snacks for the drive", "Cash for parking and lunch"],
      walking: "2 km on the beach",
      tip: "Elafonisi has been protected as a Natura 2000 site. Don't take pink sand home, it's illegal and bad for the ecosystem."
    },

    {
      id: "crete-d6",
      city: "Crete",
      date: "Friday, Jun 19, 2026",
      title: "Check out, fly to Athens",
      summary: "Travel day. Villa checkout is 10:00 sharp. Car return to Mike's. Lunch in town, afternoon flight to Athens.",
      weather: "Same.",
      slots: [
        {
          time: "10:00",
          headline: "Check out Villa Dioni",
          description: "Strip beds, run dishwasher, take trash out, leave keys per host instructions. Confirm departure with Be On Holidays.",
          links: []
        },
        {
          time: "11:00",
          headline: "Return rental car",
          description: "Mike's accepts car returns at airport free of charge, or pick up your bags at the villa and they'll collect.",
          links: []
        },
        {
          time: "12:30",
          headline: "Last lunch in Crete",
          description: "Quick options near airport or in town:",
          mealOptions: ["Oasis Souvlaki", "Kariatis", "Airport food (avoid if possible)"]
        },
        {
          time: "Afternoon",
          headline: "Fly Chania to Athens",
          description: "About 1 hour. Multiple Aegean and Sky Express flights. Book midday-to-early-afternoon departure.",
          links: [
            { label: "Aegean", url: "https://en.aegeanair.com" },
            { label: "Sky Express", url: "https://www.skyexpress.gr" }
          ]
        }
      ],
      reservations: ["Flight"],
      whatToBring: ["Receipts for villa damage deposit return", "Confirmation numbers"],
      walking: "Light"
    },

    /* ATHENS LEG 2 */
    {
      id: "athens2-d1",
      city: "Athens",
      date: "Friday, Jun 19, 2026",
      title: "Arrive Athens, dinner in Psyrri",
      summary: "Light evening after travel. Psyrri is the small-plates and bar district, perfect for a late, casual dinner.",
      weather: "Same as leg 1.",
      slots: [
        {
          time: "Evening",
          headline: "Settle, dinner",
          description: "Pick a Psyrri or Monastiraki spot. Three picks:",
          mealOptions: ["Kuzina", "Taverna Saita", "Avli"]
        }
      ],
      reservations: ["None"],
      whatToBring: [],
      walking: "1 to 2 km"
    },

    {
      id: "athens2-d2",
      city: "Athens",
      date: "Saturday, Jun 20, 2026",
      title: "Cape Sounion sunset, last big day",
      summary: "Anything missed on leg 1 in the morning, then drive (or tour) to Cape Sounion in the late afternoon for the Temple of Poseidon at sunset. Late dinner back in Athens.",
      weather: "Same.",
      slots: [
        {
          time: "Morning",
          headline: "Pick what you missed",
          description: "Three options:",
          options: [
            { name: "National Archaeological Museum", detail: "If you skipped it on leg 1 day 3. EUR 12. World-class.", links: [{ label: "Website", url: "https://www.namuseum.gr" }] },
            { name: "Panathenaic Stadium", detail: "EUR 5. The marble Olympic stadium, only stadium in the world built entirely of marble. 1 hour with audio guide.", links: [{ label: "Website", url: "https://www.panathenaicstadium.gr" }] },
            { name: "Anafiotika and Plaka wander", detail: "Coffee, last shopping, walk slowly." }
          ]
        },
        {
          time: "16:00",
          headline: "Drive or tour to Cape Sounion",
          description: "70 km south, 90 min drive along the Athens Riviera. The Temple of Poseidon stands at the tip of a cliff over the Aegean. Two ways:",
          options: [
            { name: "Drive yourself", detail: "Rent a car for the day from any Athens rental. Park at the Sounion lot, EUR 20 entry per person." },
            { name: "Half-day tour", detail: "EUR 45 to 60 pp with transport included. GetYourGuide or Viator have several daily.", links: [{ label: "GetYourGuide Sounion tours", url: "https://www.getyourguide.com/cape-sounion-l30019" }] }
          ]
        },
        {
          time: "Sunset (~20:50)",
          headline: "Sunset at the Temple of Poseidon",
          description: "Arrive 45 minutes before sunset to get a position. The temple sits 60 meters above the sea, white marble against orange sky. One of the great photographs of Greece. Lord Byron carved his name on a column in 1810, it's still visible.",
          links: []
        },
        {
          time: "21:30",
          headline: "Late dinner back in Athens",
          description: "Last night dinner. Go special:",
          mealOptions: ["Aleria", "Little Tree (lighter)", "Klimataria (with live music)"]
        }
      ],
      reservations: ["Dinner if Aleria"],
      whatToBring: ["Camera", "Light jacket for the open cliff", "Snacks/water on the road"],
      walking: "2 to 3 km plus Sounion site",
      tip: "Sounion site closes at sunset, but parking lot is open later. Plan to be back at the car within 30 minutes of sunset."
    },

    {
      id: "athens2-d3",
      city: "Athens",
      date: "Sunday, Jun 21, 2026",
      title: "Depart Athens",
      summary: "Last morning. Coffee, gifts, transfer. Allow 90 minutes minimum from hotel to airport.",
      weather: "Same.",
      slots: [
        {
          time: "Morning",
          headline: "Breakfast and last gifts",
          description: "Two stops worth making:",
          options: [
            { name: "Krinos for loukoumades", detail: "Since 1923. Traditional Greek honey-soaked donuts, the breakfast of champions.", links: [{ label: "Maps", url: "https://www.google.com/maps/search/?api=1&query=Krinos+Aiolou+87+Athens" }] },
            { name: "Mastihashop for gifts", detail: "Mastic products from Chios. Toothpaste, cosmetics, liqueur, gum. Photogenic packaging.", links: [{ label: "Website", url: "https://www.mastihashop.com" }] }
          ]
        },
        {
          time: "Midday",
          headline: "Transfer to ATH",
          description: "Metro Line 3 is direct, EUR 9 pp. Allow 90 minutes door to gate. Taxi flat EUR 40 daytime."
        }
      ],
      reservations: ["Confirm flights and check in online"],
      whatToBring: ["Patience"],
      walking: "Light",
      tip: "Athens departure tax and any liquids over 100ml in carry-on: be aware. Mastic liqueur should go in checked baggage."
    }
  ],

  /* ========== RESTAURANTS ========== */

  restaurants: [
    /* ATHENS */
    {
      name: "Geros Tou Moria",
      city: "Athens",
      area: "Plaka",
      cuisine: "Traditional Greek",
      description: "Tucked into a quiet Plaka lane in a 19th-century mansion, this institution has fed politicians, pop stars, and three generations of Athenians the classics: lamb kleftiko in parchment, moussaka, stifado. The terrace under bougainvillea is the move at sunset.",
      why: "Lonely Planet, Athens Insider, repeat appearances on every 'classic Plaka' list.",
      phone: "+30 210 322 1753", address: "Mnisikleous 27, Plaka, Athens 105 56",
      price: "EUR 25 to 40 pp", hours: "12:00 to 00:30 daily",
      signatures: ["Lamb kleftiko", "Moussaka", "Walnut honey cake"],
      vibe: "Romantic, traditional, terraced", bestFor: ["Group dinner", "First night"],
      reservations: "Recommended weekends",
      website: "https://gerostoumoria.com"
    },
    {
      name: "Klimataria",
      city: "Athens", area: "Plateia Theatrou", cuisine: "Traditional with live music",
      description: "An old Athenian taverna where the food is solid and the entertainment is the point. Accordion and bouzouki most nights, dancing tables by 23:00. A real Greek dinner-as-event. Order family-style.",
      why: "Recommended by Conde Nast Traveller for live-music tavernas. A favorite of Athenians on Saturday nights.",
      phone: "+30 210 321 6629", address: "Plateia Theatrou 2, Athens",
      price: "EUR 25 to 40 pp", hours: "20:00 to 02:00, Wed to Sun",
      signatures: ["Mezedes platter", "Lamb chops", "Live music"],
      vibe: "Old-school, lively, group-friendly", bestFor: ["Group celebration", "Big night out"],
      reservations: "Required weekends", website: "https://www.klimataria.com.gr"
    },
    {
      name: "Karamanlidika tou Fani",
      city: "Athens", area: "Near Central Market", cuisine: "Anatolian Greek deli",
      description: "A deli-restaurant with the cured meats of the Karamanli Greeks (Greeks from central Anatolia displaced in 1923). Pastourma, sucuk, smoked cheeses, plus cooked dishes. Sit at the counter for the show.",
      why: "Featured in the New York Times, Anthony Bourdain Parts Unknown. The reference for Greek charcuterie in Athens.",
      phone: "+30 210 325 4184", address: "Sokratous 1 and Evripidou, Athens",
      price: "EUR 20 to 35 pp", hours: "12:30 to 24:00 daily",
      signatures: ["Pastourma platter", "Smyrna sucuk", "Saganaki with cherry sauce"],
      vibe: "Deli-bistro, casual, no rush", bestFor: ["Lunch", "Pre-dinner snack with wine"],
      reservations: "Walk-in usually fine", website: "https://karamanlidika.gr"
    },
    {
      name: "Kuzina",
      city: "Athens", area: "Psyrri", cuisine: "Modern Greek",
      description: "A stylish restaurant on a pedestrian street with a glass elevator up to a rooftop with one of the best Acropolis views in Athens. Ground floor for design and a serious wine list, rooftop for the photograph.",
      why: "Michelin Guide listed. Top of TripAdvisor for years. Better than most rooftop tourist traps because the food backs the view.",
      phone: "+30 210 324 0133", address: "Adrianou 9, Athens 105 55",
      price: "EUR 35 to 60 pp", hours: "12:00 to 24:00 daily",
      signatures: ["Slow-cooked lamb", "Sea bream carpaccio", "Mastiha panna cotta"],
      vibe: "Upscale, scenic, design-forward", bestFor: ["Sunset dinner", "Date night within a group"],
      reservations: "Required for rooftop", website: "https://kuzina.gr"
    },
    {
      name: "Tzitzikas kai Mermigas",
      city: "Athens", area: "Syntagma", cuisine: "Modern Greek meze",
      description: "Bright, energetic, packed every night. The name means 'the cricket and the ant.' Mezedes are the play, order eight or ten dishes for the table. Strong Greek wine list by the glass.",
      why: "Voted best meze restaurant by Greek media multiple years. Reliable for tourists AND locals, rare combo.",
      phone: "+30 210 324 7607", address: "Mitropoleos 12 to 14, Athens",
      price: "EUR 25 to 40 pp", hours: "12:30 to 24:30 daily",
      signatures: ["Phyllo-wrapped feta with sesame and honey", "Lamb chops", "Cretan cheese pies"],
      vibe: "Lively, modern, communal", bestFor: ["Group dinner", "First-night easy win"],
      reservations: "Recommended", website: "https://tzitzikas-mermigas.gr"
    },
    {
      name: "Mani Mani",
      city: "Athens", area: "Makrygianni (near Acropolis Museum)", cuisine: "Peloponnesian",
      description: "Refined Peloponnesian cooking on an upstairs floor of an Acropolis-area townhouse. Quieter than Plaka, more thoughtful menu. Excellent for lunch after the museum.",
      why: "Michelin Guide listed. Recommended by Eater, Bon Appétit, every Athens food writer.",
      phone: "+30 210 921 8180", address: "Falirou 10, Makrygianni, Athens 117 42",
      price: "EUR 30 to 50 pp", hours: "13:00 to 23:00, closed Mondays",
      signatures: ["Pork with prunes and saffron", "Pasta with Mani sausage", "Custard pie"],
      vibe: "Refined, intimate, white-tablecloth-ish", bestFor: ["Lunch after Acropolis", "Quiet dinner"],
      reservations: "Recommended", website: "https://www.manimani.com.gr"
    },
    {
      name: "Lolos All Day",
      city: "Athens", area: "Koukaki", cuisine: "Modern Greek bistro",
      description: "A bright, contemporary bistro in Koukaki, near the Acropolis Museum. Open all day for coffee, brunch, lunch, dinner. Smart Greek cooking without the tablecloth formality.",
      why: "Recommended by Eater Athens. The kind of neighborhood place that became a destination because the food is that good.",
      phone: "+30 211 411 8924", address: "Veikou 22, Koukaki, Athens",
      price: "EUR 25 to 40 pp", hours: "09:00 to 01:00 daily",
      signatures: ["Slow-cooked pork", "Octopus carpaccio", "Greek salad reimagined"],
      vibe: "Bistro, all-day, casual but considered", bestFor: ["Lunch", "Solo or duo dinner"],
      reservations: "Not required", website: ""
    },
    {
      name: "Diporto",
      city: "Athens", area: "Central Market", cuisine: "Old-school taverna, lunch only",
      description: "No menu, no signs, no English. A basement cellar in the central market with barrels of wine and whatever the cook made that day, usually chickpea soup, grilled sardines, salad. EUR 15 a head with wine. A pilgrimage.",
      why: "Featured by Anthony Bourdain, Eater World 38, every food publication ever. The last of its kind in Athens.",
      phone: "+30 210 321 1463", address: "Theatrou 2 and Sofokleous (entrance is a stairs going down, look for the barrels)",
      price: "EUR 15 to 25 pp", hours: "08:00 to 18:00, closed Sundays and August",
      signatures: ["Chickpea soup", "Grilled sardines", "Wine from the barrel"],
      vibe: "Cellar, communal, no frills, no apologies", bestFor: ["Lunch", "Story-collectors"],
      reservations: "Impossible, walk in", website: ""
    },
    {
      name: "Aleria",
      city: "Athens", area: "Metaxourgeio", cuisine: "Modern Greek tasting menu",
      description: "Special-occasion restaurant in a restored neoclassical mansion in Metaxourgeio. Tasting menu of contemporary Greek cooking, beautiful courtyard for summer dining. Wine pairings are outstanding.",
      why: "Michelin Guide listed. The 'best last night dinner in Athens' choice for many travel writers.",
      phone: "+30 210 522 2633", address: "Megalou Alexandrou 57, Metaxourgeio, Athens",
      price: "EUR 60 to 100 pp tasting menu", hours: "19:30 to 23:30, closed Sundays",
      signatures: ["6 or 8 course tasting menu", "Cretan goat with honey", "Mastic dessert"],
      vibe: "Special occasion, elegant courtyard, wine-forward", bestFor: ["Last night", "Celebration"],
      reservations: "Required, days ahead", website: "https://www.aleria.gr"
    },
    {
      name: "Little Tree Books and Coffee",
      city: "Athens", area: "Makrygianni", cuisine: "Cafe, lighter food",
      description: "A bookshop-cafe with a small kitchen turning out smart lunch plates. Good wine list. The kind of place to sit for two hours with a book and the dog under the next table.",
      why: "Recommended by Wallpaper, Eater Athens. The slow lunch spot that travelers always remember.",
      phone: "+30 210 924 3762", address: "Kavalloti 2, Makrygianni, Athens",
      price: "EUR 10 to 20 pp", hours: "10:00 to 22:00 daily",
      signatures: ["Brunch plates", "Wine by the glass", "Cheese boards"],
      vibe: "Cafe-bookshop, quiet, perfect for breaks", bestFor: ["Lunch break", "Coffee meeting"],
      reservations: "Walk-in", website: ""
    },
    {
      name: "360 Cocktail Bar",
      city: "Athens", area: "Monastiraki Square", cuisine: "Cocktails, light bites",
      description: "Rooftop cocktail bar with a 360-degree view of Athens, the Acropolis directly across. Pre-dinner drinks before a Plaka dinner. Reserve a sunset table or arrive by 19:30.",
      why: "Repeatedly named best rooftop bar in Athens by tourism press. The view is the show.",
      phone: "+30 210 321 0006", address: "Ifestou 2, Monastiraki, Athens",
      price: "Cocktails EUR 13 to 16", hours: "10:00 to 02:00 daily",
      signatures: ["Negroni Bianco", "Aegean Spritz", "Sharing plates"],
      vibe: "Rooftop, polished, photogenic", bestFor: ["Pre-dinner drinks", "Sunset"],
      reservations: "Required for sunset", website: "https://three-sixty.gr"
    },
    {
      name: "Taverna Saita",
      city: "Athens", area: "Plaka", cuisine: "Traditional",
      description: "A cellar taverna in Plaka with vaulted ceilings, doing classics well. Less touristy than its neighbors despite being inside the tourist zone. Order the bekri meze (drunken pork) and the saganaki.",
      why: "Recommended by Athens Insider and Time Out Athens as the 'real Plaka taverna left.'",
      phone: "+30 210 322 8839", address: "Kydathineon 21, Plaka, Athens",
      price: "EUR 20 to 35 pp", hours: "12:30 to 24:30 daily",
      signatures: ["Bekri meze", "Saganaki", "House wine"],
      vibe: "Cellar, traditional, easy", bestFor: ["Casual dinner", "Group lunch"],
      reservations: "Walk-in usually fine", website: ""
    },
    {
      name: "Avli",
      city: "Athens", area: "Psyrri", cuisine: "Mezedes, ouzeri",
      description: "A hidden courtyard taverna in a Psyrri alley. Cheap, cheerful, deeply local. Mezedes by the dozen, ouzo and tsipouro by the carafe. Everyone ends up here eventually.",
      why: "Repeatedly recommended by Athens locals and on r/Athens. Cult favorite for late-night eating.",
      phone: "+30 210 321 7642", address: "Agiou Dimitriou 12, Psyrri, Athens",
      price: "EUR 15 to 25 pp", hours: "12:00 to 02:00 daily",
      signatures: ["Saganaki", "Mussels", "Fried zucchini"],
      vibe: "Courtyard, loud, late", bestFor: ["Late night", "Cheap and cheerful"],
      reservations: "Walk-in", website: ""
    },
    {
      name: "Ariston",
      city: "Athens", area: "Syntagma", cuisine: "Bakery, savory pies",
      description: "Since 1910. Standing-room bakery doing tyropita, spanakopita, bougatsa. The breakfast or grab-and-go option for one EUR each. Family-run for four generations.",
      why: "Athens institution. National Geographic Food, the 'best bakery in Athens' on every list.",
      phone: "+30 210 322 7626", address: "Voulis 10, Syntagma, Athens",
      price: "EUR 2 to 5 per pie", hours: "07:00 to 18:30, closed Sundays",
      signatures: ["Tyropita (cheese pie)", "Bougatsa (custard pie)", "Spanakopita"],
      vibe: "Bakery, no seating, fast", bestFor: ["Breakfast", "Quick lunch"],
      reservations: "Walk-up", website: ""
    },
    {
      name: "Lukumades",
      city: "Athens", area: "Aiolou", cuisine: "Greek donuts",
      description: "Modern lukumades shop doing the traditional honey-and-walnut version plus 20 other toppings (Nutella, salted caramel, etc.). Six pieces for EUR 4. Open late.",
      why: "Best-known dessert stop in Athens, recommended by every food blogger.",
      phone: "+30 210 321 0880", address: "Aiolou 21, Athens",
      price: "EUR 4 to 8", hours: "10:00 to 02:00",
      signatures: ["Classic honey-walnut lukumades", "Ice cream-stuffed", "Nutella"],
      vibe: "Dessert spot, casual, late-night", bestFor: ["Post-dinner sweet"],
      reservations: "No", website: "https://lukumades.com"
    },
    {
      name: "Krinos",
      city: "Athens", area: "Athinas St", cuisine: "Traditional sweets, since 1923",
      description: "Oldest sweet shop in Athens, family-run for a century. Famous for loukoumades fried to order and bougatsa from Thessaloniki. The kind of place where you sit at a marble counter while old men argue about football.",
      why: "Athens cultural landmark, designated as 'historic shop' by the city. Featured on every 'best of Athens' eats list since the 1990s.",
      phone: "+30 210 321 6852", address: "Aiolou 87, Athens",
      price: "EUR 4 to 7", hours: "06:00 to 23:00 daily",
      signatures: ["Loukoumades with honey", "Bougatsa with custard", "Greek coffee"],
      vibe: "Old-school, marble counter, timeless", bestFor: ["Morning treat", "Cultural moment"],
      reservations: "No", website: ""
    },

    /* CHIOS */
    {
      name: "Hotzas",
      city: "Chios", area: "Chios Town", cuisine: "Traditional Chian",
      description: "Oldest taverna in Chios, in a stone building a short walk from the harbor. Family-run for over 80 years. All the Chian classics: lamb in lemon, sfougato (cheese-and-zucchini frittata), wild greens. Skip the menu, ask what's good today.",
      why: "Featured in The Guardian and Conde Nast as 'the soul of Chios' dining.' Locals' first recommendation.",
      phone: "+30 2271 042787", address: "Georgiou Kondyli 3, Chios Town",
      price: "EUR 15 to 30 pp", hours: "19:00 to 24:00, closed Sundays",
      signatures: ["Lamb in lemon sauce", "Sfougato", "Wild greens (horta)", "House wine"],
      vibe: "Old-school, stone walls, no frills", bestFor: ["First Chios dinner", "Authentic experience"],
      reservations: "Recommended", website: ""
    },
    {
      name: "Pelagos",
      city: "Chios", area: "Chios Town waterfront", cuisine: "Modern seafood",
      description: "Modern seafood restaurant on the harbor. The plating is precise, the fish is from the morning catch, the wine list is the strongest on the island. Sunset table on the terrace is the ask.",
      why: "Recommended by Athens-based food writers as the best contemporary cooking in Chios.",
      phone: "+30 2271 029990", address: "Aigaiou 17, Chios Town waterfront",
      price: "EUR 25 to 45 pp", hours: "12:30 to 24:00 daily",
      signatures: ["Whole grilled fish", "Octopus carpaccio", "Sea bass crudo"],
      vibe: "Modern, harbor-view, smart casual", bestFor: ["Sunset dinner", "Special night"],
      reservations: "Recommended", website: ""
    },
    {
      name: "Nostos",
      city: "Chios", area: "Chios Town waterfront", cuisine: "Mediterranean",
      description: "Reliable waterfront restaurant with a broader Mediterranean menu (some Italian influences). Good middle-ground option when the group has different cravings. Pasta, fish, salads all done well.",
      why: "Top reviews on TripAdvisor and Greek food sites. The 'safe choice' that always delivers.",
      phone: "+30 2271 044567", address: "Aigaiou 88, Chios Town",
      price: "EUR 20 to 35 pp", hours: "12:00 to 24:00 daily",
      signatures: ["Spaghetti with seafood", "Grilled lamb", "Cretan rusks salad"],
      vibe: "Modern, harbor view, family-friendly", bestFor: ["Group dinner", "Mixed cravings"],
      reservations: "Recommended weekends", website: ""
    },
    {
      name: "Mavrokordatiko",
      city: "Chios", area: "Kambos", cuisine: "Garden taverna in a walled estate",
      description: "Walled 18th-century estate with citrus orchards, where you eat at tables among the trees. Slow Cretan cooking, vegetables from the garden. A magical lunch in the right weather.",
      why: "Featured in Conde Nast Traveler's 'Hidden Greece' issue. Local pride.",
      phone: "+30 2271 032900", address: "Kambos area, signposted from Karfas road",
      price: "EUR 25 to 40 pp", hours: "13:00 to 23:00 daily, closed in winter",
      signatures: ["Mavrokordatos lamb", "Orange leaves stuffed with rice", "Citrus dessert"],
      vibe: "Garden estate, slow, romantic", bestFor: ["Special lunch", "Date night"],
      reservations: "Required", website: ""
    },
    {
      name: "Pyxari",
      city: "Chios", area: "Chios Town waterfront", cuisine: "Grill, seafood",
      description: "Lively waterfront grill, the place locals go on Friday nights. Whole grilled fish, lamb chops, big salads. Good for groups, can handle 7 without notice.",
      why: "Repeatedly recommended on r/Chios and local Facebook groups. Live music some weekends.",
      phone: "+30 2271 040800", address: "Aigaiou waterfront, Chios Town",
      price: "EUR 20 to 35 pp", hours: "19:00 to 02:00 daily",
      signatures: ["Whole sea bream grilled", "Lamb chops", "Mixed grill"],
      vibe: "Loud, lively, group-friendly", bestFor: ["Group dinner", "Casual night"],
      reservations: "Walk-in works, busy on weekends", website: ""
    },
    {
      name: "To Kechrimpari",
      city: "Chios", area: "Chios Town", cuisine: "Ouzeri, meze",
      description: "Tiny ouzeri (drinking-and-snacking taverna) where the play is tsipouro and small plates. Order everything fried, plus a tomato salad. Cheap, cash-only, local.",
      why: "Local lore favorite, often missed by tourists, mentioned by Athens writers as the 'real Chios.'",
      phone: "+30 2271 026364", address: "Aigaiou waterfront, Chios Town",
      price: "EUR 12 to 22 pp", hours: "12:00 to 24:00 daily",
      signatures: ["Fried calamari", "Cheese saganaki", "Tsipouro by the carafe"],
      vibe: "Old-school ouzeri, tiny, atmospheric", bestFor: ["Pre-dinner drink-and-snack", "Lunch"],
      reservations: "Walk-in", website: ""
    },
    {
      name: "Ouzeri Theodosiou",
      city: "Chios", area: "Chios Town, Neorion waterfront", cuisine: "Ouzeri",
      description: "Classic ouzeri, since 1955. Stainless tables, paper-covered, ouzo and meze. Get the fava (yellow split pea purée) and grilled octopus. Lunch only.",
      why: "Generational Chios spot. The kind of place that has seen everything and serves the same dishes the same way.",
      phone: "+30 2271 027875", address: "Neorion (waterfront), Chios Town",
      price: "EUR 12 to 20 pp", hours: "12:00 to 18:00, closed Sundays",
      signatures: ["Grilled octopus", "Fava", "House ouzo"],
      vibe: "Working-class classic, lunch institution", bestFor: ["Long lunch", "Local immersion"],
      reservations: "Walk-in", website: ""
    },
    {
      name: "To Apomero",
      city: "Chios", area: "Mesta village (south)", cuisine: "Traditional Chian",
      description: "Stone-walled taverna inside the medieval village of Mesta. Cooks lamb, kid, wild greens, all on a wood grill. Eat in the central square under a plane tree. Time-stops feel.",
      why: "On every 'best of South Chios' list. Slow, traditional, the right kind of village taverna.",
      phone: "+30 2271 076700", address: "Mesta main square",
      price: "EUR 15 to 25 pp", hours: "12:00 to 23:00, closed Mondays",
      signatures: ["Grilled lamb", "Wild greens", "Trahanas soup"],
      vibe: "Village square, stone walls, slow", bestFor: ["Lunch on the mastic-villages day"],
      reservations: "Recommended weekends", website: ""
    },
    {
      name: "Mesainos",
      city: "Chios", area: "Mesta village", cuisine: "Traditional",
      description: "The other Mesta taverna, square-side, popular with locals. Try the masticha-flavored dishes (mastic in lamb, mastic in dessert).",
      why: "Local choice in Mesta. Often used as the alternative to To Apomero when full.",
      phone: "+30 2271 076050", address: "Mesta, near central square",
      price: "EUR 15 to 25 pp", hours: "12:00 to 23:00 daily",
      signatures: ["Mastic-flavored lamb", "Spoon sweets", "Local cheese pies"],
      vibe: "Village square, traditional", bestFor: ["Lunch alternative in Mesta"],
      reservations: "Walk-in", website: ""
    },
    {
      name: "Roussiko",
      city: "Chios", area: "Pyrgi village", cuisine: "Local Chian",
      description: "Family-run, in the painted village of Pyrgi. The grandmother is in the kitchen. Don't expect a menu in English, point at what you want. Cheap and excellent.",
      why: "Word-of-mouth favorite from blog reviewers and Chios locals.",
      phone: "+30 2271 072690", address: "Pyrgi village center",
      price: "EUR 12 to 22 pp", hours: "12:00 to 22:00 daily",
      signatures: ["Stuffed cabbage rolls", "Lamb stew", "Garden vegetables"],
      vibe: "Family kitchen, no frills", bestFor: ["Lunch in Pyrgi"],
      reservations: "Walk-in", website: ""
    },
    {
      name: "Pyrgos Avgonima",
      city: "Chios", area: "Avgonima village (central mountains)", cuisine: "Mountain taverna",
      description: "Stone-built taverna in the mountain village of Avgonima, with a sunset-facing terrace over the valley. Grilled meats, wild greens, mountain wine. A view-restaurant where the food matters.",
      why: "Often called the best sunset dining spot on the island.",
      phone: "+30 2271 042175", address: "Avgonima village",
      price: "EUR 18 to 30 pp", hours: "12:00 to 23:00, summer daily",
      signatures: ["Lamb chops grilled over wood", "Mountain salad", "Honey-mastiha dessert"],
      vibe: "Mountain terrace, sunset, family", bestFor: ["Lunch on the monastery-day", "Sunset stop"],
      reservations: "Recommended", website: ""
    },
    {
      name: "Oi Myloi",
      city: "Chios", area: "Avgonima area", cuisine: "Traditional",
      description: "Garden taverna with windmills (myloi) on the property. Quiet, shaded, traditional menu, the alternative to Pyrgos Avgonima.",
      why: "Local favorite, often quieter than Pyrgos. Strong vegetable dishes.",
      phone: "+30 2271 032247", address: "Near Avgonima",
      price: "EUR 15 to 25 pp", hours: "12:00 to 22:00",
      signatures: ["Garden vegetables", "Cheese pies", "Stuffed peppers"],
      vibe: "Garden, shaded, family", bestFor: ["Mountain-day lunch"],
      reservations: "Walk-in", website: ""
    },
    {
      name: "Yperion",
      city: "Chios", area: "Chios Town", cuisine: "Modern Greek",
      description: "Newer entry to the Chios Town dining scene, modern Greek with a focus on Aegean ingredients. Good plating, smart wine list.",
      why: "Strong reviews from food publications and local media.",
      phone: "+30 2271 044566", address: "Chios Town center",
      price: "EUR 20 to 35 pp", hours: "19:00 to 24:00, closed Tuesdays",
      signatures: ["Grouper carpaccio", "Slow-cooked goat", "Seasonal vegetable plates"],
      vibe: "Modern, well-considered", bestFor: ["Quieter dinner", "Date night"],
      reservations: "Recommended", website: ""
    },

    /* CRETE */
    {
      name: "Tamam",
      city: "Crete", area: "Chania Old Town", cuisine: "Cretan with Anatolian and Sephardic influence",
      description: "Restaurant inside a former 16th-century Turkish bath, with vaulted ceilings and a hidden courtyard. Cretan cooking with Eastern Mediterranean touches: lamb with quince, sea bass in vine leaves, smoked aubergine. Reservations are mandatory in summer.",
      why: "Michelin Guide listed, recommended by The Times, Conde Nast, Vogue Travel.",
      phone: "+30 2821 096080", address: "Zampeliou 49, Chania Old Town",
      price: "EUR 20 to 35 pp", hours: "19:00 to 24:00 daily, summer also lunch",
      signatures: ["Lamb with quince", "Smoked aubergine", "Sea bass in vine leaves"],
      vibe: "Vaulted ceilings, atmospheric, historic", bestFor: ["Special Chania dinner"],
      reservations: "Required, days ahead in summer", website: "https://www.tamamchania.com"
    },
    {
      name: "To Maridaki",
      city: "Crete", area: "Chania Old Town", cuisine: "Seafood meze, classic",
      description: "Loud, crowded, beloved, on a side street with tables on the cobbles. Fried smelt (maridaki, the namesake), grilled octopus, raki on the house. The Chania classic that always satisfies.",
      why: "Constant local recommendation, always near top of Chania TripAdvisor.",
      phone: "+30 2821 008880", address: "Daskalogianni 33, Chania",
      price: "EUR 20 to 35 pp", hours: "12:00 to 24:00 daily",
      signatures: ["Fried smelt (maridaki)", "Grilled octopus", "Dakos salad"],
      vibe: "Loud, lively, on the cobbles", bestFor: ["Group dinner", "Classic Chania meal"],
      reservations: "Walk-in, expect a wait", website: ""
    },
    {
      name: "Salis",
      city: "Crete", area: "Chania Old Harbor", cuisine: "Modern Cretan",
      description: "Polished modern Cretan on the harbor front. Plating is precise, ingredients are island-sourced, wine list deep on Cretan producers. Get a harbor-side table at sunset.",
      why: "Michelin Guide listed. The 'modern' Cretan option in Chania.",
      phone: "+30 2821 105168", address: "Akti Tombazi 16, Chania Old Harbor",
      price: "EUR 30 to 50 pp", hours: "12:00 to 24:00 daily",
      signatures: ["Snails Bourbouristoi", "Slow-cooked goat", "Cretan cheese plate"],
      vibe: "Refined, harbor view, contemporary", bestFor: ["Sunset dinner", "Anniversary"],
      reservations: "Required", website: "https://www.salischania.gr"
    },
    {
      name: "Well of the Turk",
      city: "Crete", area: "Chania Old Town (Splantzia)", cuisine: "Mediterranean with Levantine touches",
      description: "Romantic restaurant in the former Turkish quarter, around an actual Ottoman well in the courtyard. Mediterranean menu, strong on lamb and mezedes. Live oud music some nights.",
      why: "Recommended by Conde Nast, repeatedly in Chania 'best of' lists.",
      phone: "+30 2821 054547", address: "Kalinikou Sarpaki 1 to 3, Chania",
      price: "EUR 25 to 45 pp", hours: "19:00 to 24:00, closed Sundays",
      signatures: ["Lamb shoulder slow-roasted", "Hummus with confit lamb", "Smoked aubergine"],
      vibe: "Courtyard, romantic, intimate", bestFor: ["Date night", "Quieter group dinner"],
      reservations: "Required", website: ""
    },
    {
      name: "Ta Chalkina",
      city: "Crete", area: "Chania Old Harbor", cuisine: "Cretan with live music",
      description: "Harbor-side restaurant with a lyra player most nights. Cretan cooking, generous portions, group-friendly tables. The 'big Cretan dinner with music' option.",
      why: "Tourist-friendly but locally respected. Best place in Chania for the music-dinner combo.",
      phone: "+30 2821 041570", address: "Akti Tombazi 29, Chania",
      price: "EUR 25 to 40 pp", hours: "12:00 to 24:00 daily",
      signatures: ["Lamb stamnagathi (with wild greens)", "Chania pilafi", "Anthotyro cheese"],
      vibe: "Lively, harbor, live music", bestFor: ["Group dinner with show", "Last night"],
      reservations: "Recommended", website: "https://www.ta-chalkina.gr"
    },
    {
      name: "Kariatis",
      city: "Crete", area: "Chania Old Harbor (Plateia Katechaki)", cuisine: "Italian-Greek",
      description: "Italian-Greek crossover, the place to go when someone wants pizza or pasta. Wood-fired pizza, fresh pasta, harbor view. Good for the night when no one can agree on Greek again.",
      why: "Best pizza in Chania, repeatedly. Reliable for kids and pasta-craving travelers.",
      phone: "+30 2821 055600", address: "Plateia Katechaki 12, Chania",
      price: "EUR 25 to 40 pp", hours: "12:30 to 24:00 daily",
      signatures: ["Margherita pizza", "Fresh tagliatelle with truffle", "Tiramisu"],
      vibe: "Italian-Greek, harbor view, group-friendly", bestFor: ["Pasta night", "Group with kids"],
      reservations: "Recommended", website: ""
    },
    {
      name: "Mikrolimano",
      city: "Crete", area: "Nea Chora (Chania)", cuisine: "Seafood",
      description: "Family-run seafood taverna right on Nea Chora beach. Toes-in-sand tables, fish from the morning, octopus drying on lines. Walking distance from Villa Dioni. Sunset spot.",
      why: "Best Nea Chora seafood for value. Strong local repeat business.",
      phone: "+30 2821 057062", address: "Akti Papanikoli 19, Nea Chora, Chania",
      price: "EUR 20 to 35 pp", hours: "12:00 to 24:00 daily",
      signatures: ["Whole grilled fish (by weight)", "Octopus", "Calamari"],
      vibe: "Beachfront, casual, family-run", bestFor: ["Casual dinner near villa", "Seafood night"],
      reservations: "Walk-in, recommended weekends", website: ""
    },
    {
      name: "Ta Meraklikia",
      city: "Crete", area: "Kato Daratso (near Villa Dioni)", cuisine: "Traditional Cretan",
      description: "Neighborhood taverna in Kato Daratso, walking distance from Villa Dioni. Local, cheap, traditional. The post-Samaria 'don't make me drive' option.",
      why: "Local find, repeatedly recommended on neighborhood forums.",
      phone: "+30 2821 091900", address: "Kato Daratso, Chania",
      price: "EUR 15 to 25 pp", hours: "12:00 to 24:00 daily",
      signatures: ["Lamb chops", "Wild greens", "House wine"],
      vibe: "Neighborhood, casual, no frills", bestFor: ["Easy night", "Walk-from-villa dinner"],
      reservations: "Walk-in", website: ""
    },
    {
      name: "Oasis Souvlaki",
      city: "Crete", area: "Chania center", cuisine: "Souvlaki, fast",
      description: "The go-to souvlaki in Chania. Pork or chicken in pita with tzatziki, fries, tomato. EUR 4 a wrap. Open late. The hangover meal and the quick-pre-bed meal.",
      why: "Local favorite, always packed late night. Best ratio of speed-to-quality in Chania.",
      phone: "+30 2821 088666", address: "Mousouron 2, Chania",
      price: "EUR 5 to 12 pp", hours: "11:00 to 04:00 daily",
      signatures: ["Pork souvlaki pita", "Chicken gyros", "Fries"],
      vibe: "Fast, casual, late", bestFor: ["Lunch on the move", "Late night", "Cheap meal"],
      reservations: "No", website: ""
    },
    {
      name: "Pelagos Marathi",
      city: "Crete", area: "Marathi beach (Akrotiri peninsula)", cuisine: "Beachfront seafood",
      description: "Toes-in-sand seafood taverna on Marathi beach, 20 minutes from Chania. The post-swim lunch destination. Fresh catch, simple preparation, perfect setting.",
      why: "Always near the top of Chania-area beachfront lunch lists.",
      phone: "+30 2821 064004", address: "Marathi beach, Akrotiri",
      price: "EUR 25 to 40 pp", hours: "12:00 to 22:00, summer daily",
      signatures: ["Whole grilled bream", "Fish soup", "Greek salad"],
      vibe: "Beach taverna, sand floor, sunset", bestFor: ["Lunch on Akrotiri day"],
      reservations: "Recommended summer weekends", website: ""
    },
    {
      name: "Tara Agia Roumeli",
      city: "Crete", area: "Agia Roumeli (Libyan Sea, end of Samaria Gorge)", cuisine: "Taverna",
      description: "Where the hikers stagger after 16 km. Family-run, on the water, simple Cretan menu. Order a beer, an Greek salad, and grilled fish.",
      why: "The Samaria hiker's reward. Right at the trail exit and the ferry dock.",
      phone: "+30 2825 091231", address: "Agia Roumeli waterfront",
      price: "EUR 15 to 25 pp", hours: "11:00 to 22:00, summer daily",
      signatures: ["Grilled fish", "Greek salad", "Cold Mythos beer"],
      vibe: "Post-hike paradise", bestFor: ["Lunch after Samaria"],
      reservations: "No", website: ""
    },
    {
      name: "Innachorion",
      city: "Crete", area: "Elos village (Innachoria mountains)", cuisine: "Mountain Cretan",
      description: "Mountain village taverna on the road back from Elafonisi. Whole roast chestnut-fed pork, wild greens, raki from the still. The local crowd is mostly old men playing tavli.",
      why: "Cretan-blog favorite for the post-Elafonisi stop.",
      phone: "+30 2822 061111", address: "Elos main square",
      price: "EUR 15 to 25 pp", hours: "12:00 to 22:00, summer daily",
      signatures: ["Roast pork", "Stamnagathi (wild greens)", "Local cheese"],
      vibe: "Mountain village, slow, local", bestFor: ["Late lunch returning from Elafonisi"],
      reservations: "Walk-in", website: ""
    }
  ],

  /* ========== SITES ========== */

  sites: [
    /* ATHENS */
    {
      name: "Acropolis",
      city: "Athens",
      type: "Archaeological site, UNESCO",
      description: "The fortified rock at the center of Athens, crowned by the Parthenon (447 to 432 BC). Also the Erechtheion with the Caryatid porch, the Propylaia (monumental gateway), and the Temple of Athena Nike. THE Greek site. Allow 2 to 2.5 hours.",
      cost: "EUR 30 pp, timed entry",
      hours: "08:00 to 20:00 summer (last entry 19:00)",
      whenToVisit: "08:00 first slot for cool and few crowds. Avoid 11:00 to 16:00 (heat + cruise crowds).",
      website: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2384",
      tickets: "https://hhticket.gr",
      tips: "Modest dress. No selfie sticks. Bring water. Comfortable shoes with grip (marble is slick)."
    },
    {
      name: "Acropolis Museum",
      city: "Athens",
      type: "Museum",
      description: "Modern museum across from the south slope of the Acropolis. Houses the original sculptures from the site (replicas remain on the Parthenon). The glass top floor frames the actual Parthenon and displays the frieze in its original layout. The basement is built over an excavated ancient neighborhood, visible through glass floors.",
      cost: "EUR 20 pp",
      hours: "09:00 to 20:00 (Fridays to 22:00)",
      website: "https://www.theacropolismuseum.gr",
      tickets: "https://etickets.theacropolismuseum.gr",
      tips: "Café on the top floor has Parthenon views and decent coffee. Pair with the Acropolis itself in the same day."
    },
    {
      name: "Ancient Agora and Temple of Hephaestus",
      city: "Athens",
      type: "Archaeological site",
      description: "The civic and commercial heart of ancient Athens, where Socrates argued and Pericles ruled. The Temple of Hephaestus (449 BC) is the best-preserved Doric temple in Greece, nearly intact. The Stoa of Attalos is a 1950s reconstruction housing the on-site museum.",
      cost: "EUR 10 pp",
      hours: "08:00 to 20:00",
      website: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2485",
      tickets: "https://hhticket.gr",
      tips: "Shaded paths, easier in heat than the Acropolis. Combine with Acropolis on a single combo ticket (EUR 30)."
    },
    {
      name: "Roman Agora and Tower of the Winds",
      city: "Athens",
      type: "Archaeological site",
      description: "The Roman-era marketplace, smaller and quieter than the Ancient Agora. The Tower of the Winds (1st c. BC) is an octagonal marble clocktower, the world's oldest meteorological station.",
      cost: "EUR 8 pp",
      hours: "08:00 to 20:00",
      website: "https://odysseus.culture.gr",
      tickets: "https://hhticket.gr",
      tips: "Combine with the Acropolis combo ticket. 30 to 45 minute visit."
    },
    {
      name: "National Archaeological Museum",
      city: "Athens",
      type: "Museum",
      description: "World-class collection of Greek antiquities from the Neolithic to Late Antiquity. The Mask of Agamemnon, the Jockey of Artemision, the Antikythera Mechanism (the ancient computer). Allow 2.5 to 3 hours minimum.",
      cost: "EUR 12 pp",
      hours: "09:00 to 20:00, closed Tue mornings",
      website: "https://www.namuseum.gr",
      tickets: "Buy at the door or online",
      tips: "Not in Plaka. Take Metro Line 1 (green) to Viktoria, then 5 min walk."
    },
    {
      name: "Olympieion (Temple of Olympian Zeus)",
      city: "Athens",
      type: "Archaeological site",
      description: "The largest temple ever built in Greece. Started in the 6th century BC, finished by Hadrian in the 2nd century AD, so it took 700 years. Only 15 of the original 104 columns remain, but they're enormous (17m tall). Hadrian's Arch stands right next to it (free, on the street).",
      cost: "EUR 8 pp",
      hours: "08:00 to 20:00",
      website: "https://odysseus.culture.gr",
      tickets: "https://hhticket.gr",
      tips: "Quick visit, 30 minutes. The view from the perimeter is almost as good as from inside."
    },
    {
      name: "Panathenaic Stadium (Kallimarmaro)",
      city: "Athens",
      type: "Historical site",
      description: "The only stadium in the world built entirely of marble. Site of the first modern Olympic Games (1896), rebuilt on the foundations of the ancient stadium (330 BC). Audio guide takes you through the tunnel and onto the track.",
      cost: "EUR 5 pp, audio guide included",
      hours: "08:00 to 19:00",
      website: "https://www.panathenaicstadium.gr",
      tickets: "Buy at the gate",
      tips: "1 hour visit. Climb to the top of the stands for the view."
    },
    {
      name: "Benaki Museum of Greek Culture",
      city: "Athens",
      type: "Museum",
      description: "Greek decorative arts from prehistory to the 20th century. Three floors, beautifully curated. The Greek Independence and 19th-century galleries are highlights. Excellent café on the roof.",
      cost: "EUR 12 pp",
      hours: "10:00 to 18:00 (Thu to 24:00), closed Tuesdays",
      website: "https://www.benaki.org",
      tickets: "At the door",
      tips: "Free on Thursdays. The textiles and jewelry collection is exceptional."
    },
    {
      name: "Cape Sounion, Temple of Poseidon",
      city: "Athens",
      type: "Archaeological site",
      description: "5th century BC marble temple on a cliff over the Aegean, 70 km south of Athens. Famous for its sunset. Lord Byron carved his name on a column in 1810. Standalone destination, allow a full afternoon.",
      cost: "EUR 20 pp",
      hours: "09:30 to sunset",
      website: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2476",
      tickets: "https://hhticket.gr",
      tips: "Arrive 45 min before sunset for a position. Site officially closes at sunset; parking remains open."
    },

    /* CHIOS */
    {
      name: "Nea Moni Monastery (UNESCO)",
      city: "Chios",
      type: "Religious site, UNESCO",
      description: "11th-century monastery 14 km into the mountains from Chios Town. The katholikon has some of the finest surviving Byzantine mosaics anywhere: gold-ground figures of Christ Pantokrator, the apostles, and Old Testament scenes. Active monastery with a small museum and a memorial chapel for victims of the 1822 Ottoman massacre.",
      cost: "EUR 4 pp",
      hours: "08:00 to 13:00 and 16:00 to 20:00 daily",
      website: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=1822",
      tickets: "At the door",
      tips: "Modest dress required: covered shoulders for everyone, covered knees for women (wraps provided)."
    },
    {
      name: "Mastic Museum",
      city: "Chios",
      type: "Museum",
      description: "Modern museum on the cultivation, harvesting, and processing of mastic, the resin from a shrub that only grows commercially in south Chios. Hands-on, multimedia, very well done. Run by the Piraeus Bank Group Cultural Foundation.",
      cost: "EUR 6 pp",
      hours: "10:00 to 18:00, closed Tuesdays",
      website: "https://piop.gr/en/mastiha-museum",
      tickets: "At the door",
      tips: "1 hour visit. The shop downstairs has the best mastic product selection on the island."
    },
    {
      name: "Olympi Cave (Sykia Cave)",
      city: "Chios",
      type: "Cave",
      description: "Underground chamber discovered in 1985 when a quarry blast opened the roof. Stalactites, columns, a 60 meter deep chamber. Guided tour every hour, takes 30 minutes.",
      cost: "EUR 6 pp",
      hours: "11:00 to 18:00, closed Mondays",
      website: "",
      tickets: "At the entrance",
      tips: "Wear a light layer, cave is 16C year-round."
    },
    {
      name: "Pyrgi (the painted village)",
      city: "Chios",
      type: "Historic village",
      description: "Medieval village in south Chios where every facade is decorated with xysta, a black-and-white geometric pattern scratched into wet plaster. Walking the village is the activity, the central square with the Church of the Holy Apostles is the heart.",
      cost: "Free",
      hours: "Always open",
      website: "",
      tickets: "",
      tips: "Wear shoes with grip, the village floor is polished stone. Avoid midday in summer (no shade in the lanes)."
    },
    {
      name: "Mesta (medieval mastic village)",
      city: "Chios",
      type: "Historic village",
      description: "Best-preserved of the south Chios mastic villages. Built as a defensive fortress with houses fused into the outer wall and vaulted passages between the streets. Inscribed inner courtyards, a central square, no cars allowed in.",
      cost: "Free",
      hours: "Always open",
      website: "",
      tickets: "",
      tips: "Wander, get lost on purpose, the village is small enough that you can't actually get lost."
    },
    {
      name: "Anavatos (abandoned village)",
      city: "Chios",
      type: "Historic village (ruin)",
      description: "Vertical Byzantine village on a 300m cliff, abandoned after the 1822 Ottoman massacre. Called the 'Mystras of the Aegean.' Solemn, photogenic, very steep, takes about 45 minutes to climb and wander.",
      cost: "Free",
      hours: "Always open",
      website: "",
      tickets: "",
      tips: "Real shoes, the path is uneven. Some restoration is happening, parts may be roped off."
    },
    {
      name: "Daskalopetra (Homer's Stone)",
      city: "Chios",
      type: "Historic site",
      description: "A massive boulder above the village of Vrontados, traditionally said to be where Homer taught his students. Almost certainly a Hellenistic sanctuary to Cybele. Free, evocative, 15 minute visit.",
      cost: "Free",
      hours: "Always open",
      website: "",
      tickets: "",
      tips: "Combine with a coffee in Vrontados harbor."
    },
    {
      name: "Justiniani Museum (Chios Castle)",
      city: "Chios",
      type: "Museum",
      description: "Inside the medieval Castle of Chios, in the old Genoese mansion of the Justiniani family. Byzantine icons, frescoes, Venetian and Ottoman period artifacts. The castle walls themselves are free to walk.",
      cost: "EUR 2 pp",
      hours: "08:00 to 15:00, closed Mondays",
      website: "",
      tickets: "At the museum",
      tips: "Combine with a walk through the castle precinct (a residential neighborhood within the walls)."
    },
    {
      name: "Korais Library",
      city: "Chios",
      type: "Library, museum",
      description: "One of the largest libraries in Greece, with over 150,000 volumes. The Adamantios Korais collection (he was a key figure in Greek Enlightenment) is here. The Argenti Folklore Museum is in the same building, with Chiot traditional dress and folk art.",
      cost: "EUR 2 pp",
      hours: "08:00 to 14:00, closed Sundays",
      website: "https://koraeslibrary.gr",
      tickets: "At the door",
      tips: "Worth a 45 minute stop if interested in the Greek Enlightenment."
    },

    /* CRETE */
    {
      name: "Samaria Gorge",
      city: "Crete",
      type: "National park, hike",
      description: "16 km gorge through the White Mountains, ending at the Libyan Sea. Begins at Omalos plateau (1230m) and descends through pine forest, past the abandoned Samaria village, through the 'Iron Gates' where the walls narrow to 4 meters and rise 300m. Strenuous, 4 to 7 hours, mostly downhill. Ends at Agia Roumeli, only reachable by foot or boat.",
      cost: "EUR 10 pp entry, plus EUR 16 bus + EUR 15 ferry exit = ~EUR 41 pp total",
      hours: "06:00 to 14:00 last entry, May through October",
      website: "https://www.samaria.gr",
      tickets: "Pay at the gate",
      tips: "Real hiking shoes, 2L water minimum, sun hat. Trekking poles save the knees on the descent. KTEL bus from Chania departs 06:15 daily, EUR 8."
    },
    {
      name: "Balos Lagoon",
      city: "Crete",
      type: "Beach, natural site",
      description: "Shallow turquoise lagoon between Cape Tigani and the Balos peninsula, on the northwest tip of Crete. Reached by ferry from Kissamos port (90 min) or a rough dirt road. The ferry stops first at Gramvousa, an uninhabited island with a Venetian fortress.",
      cost: "EUR 40 to 45 pp ferry (Cretan Daily Cruises), EUR 1 entry to the lagoon",
      hours: "Ferry departs Kissamos 10:30, returns 17:45",
      website: "https://www.cretandailycruises.com",
      tickets: "Book ferry online or at the port",
      tips: "Water shoes essential, lagoon floor is shell and rock. Walk left from the boat for thinner crowds."
    },
    {
      name: "Elafonisi Beach",
      city: "Crete",
      type: "Beach",
      description: "Pink-sand beach (the color comes from crushed shells) on the southwest tip of Crete. Shallow lagoon, perfect for non-swimmers. A small island connected by a sandbar at low tide. Protected Natura 2000 site.",
      cost: "Free, EUR 3 parking",
      hours: "Always open",
      website: "",
      tickets: "",
      tips: "73 km from Chania, 1.5 hr drive. Bring or rent umbrella, no natural shade. Don't take sand home (illegal and damages the ecosystem)."
    },
    {
      name: "Chania Old Town",
      city: "Crete",
      type: "Historic quarter",
      description: "Venetian-era walled town built on the foundations of ancient Kydonia. The Venetian harbor with the lighthouse and Firkas Fortress, the cobbled lanes of Stivanadika (the leather-makers' alley), the Splantzia Turkish quarter with the Mosque of Ahmet Aga. The single best-preserved Venetian town in Greece.",
      cost: "Free",
      hours: "Always open",
      website: "",
      tickets: "",
      tips: "Park outside the walls (free or EUR 2 per hour at lots near the bus station) and walk in."
    },
    {
      name: "Maritime Museum of Crete",
      city: "Crete",
      type: "Museum",
      description: "Inside Firkas Fortress at the western end of the Chania harbor. Cretan naval history, models of Greek ships through the ages, photos of the 1941 Battle of Crete.",
      cost: "EUR 4 pp",
      hours: "09:00 to 16:00",
      website: "https://mar-mus-crete.gr",
      tickets: "At the door",
      tips: "1 hour visit. Climb to the fortress rooftop for harbor view."
    },
    {
      name: "Archaeological Museum of Chania",
      city: "Crete",
      type: "Museum",
      description: "Newly relocated to a purpose-built building outside the old town. Minoan to Roman finds from western Crete: Linear A tablets, sarcophagi, mosaics, a particularly fine Roman period collection.",
      cost: "EUR 6 pp",
      hours: "08:30 to 16:00, closed Tuesdays",
      website: "https://amch.gr",
      tickets: "At the door",
      tips: "2 hour visit. The Roman mosaics in the lower gallery are the highlight."
    },
    {
      name: "Botanical Park & Gardens of Crete",
      city: "Crete",
      type: "Garden, walking park",
      description: "20 hectares of fruit trees, herbs, and medicinal plants in a steep ravine, with a creek and walking paths. The on-site restaurant cooks with garden ingredients. Half-day visit.",
      cost: "EUR 6.50 pp",
      hours: "09:00 to sunset, April to October",
      website: "https://www.botanical-park.com",
      tickets: "At the entrance",
      tips: "20 minutes from Chania. Comfortable walking shoes, the paths are steep."
    },
    {
      name: "Agia Triada Monastery (Akrotiri)",
      city: "Crete",
      type: "Religious site, working monastery",
      description: "17th-century Venetian-period monastery on the Akrotiri peninsula, surrounded by olive groves. Active monastery making its own olive oil and wine, sold at the small shop. Beautifully proportioned baroque facade.",
      cost: "EUR 2.50 pp",
      hours: "08:00 to 19:00",
      website: "",
      tickets: "At the door",
      tips: "30 minute visit. Modest dress. Buy a bottle of the monastery olive oil to take home."
    }
  ],

  /* ========== BEACHES ========== */

  beaches: [
    /* CHIOS */
    {
      name: "Karfas",
      city: "Chios",
      distance: "8 km south of Chios Town",
      surface: "Sand",
      facilities: "Sun loungers (EUR 8 to 15 pair), tavernas, beach bars, lifeguard summer weekends",
      description: "Closest sand beach to Chios Town. Family-friendly, organized, with a long beach promenade and multiple seafront tavernas. The default beach for the first day.",
      vibe: "Family-friendly, busy, full-service",
      bestFor: ["Easy first beach day", "Families"],
      website: ""
    },
    {
      name: "Megas Limnionas",
      city: "Chios",
      distance: "10 km south",
      surface: "Pebble and sand",
      facilities: "A few tavernas, some loungers, less organized than Karfas",
      description: "Just south of Karfas, smaller and quieter. Local crowd, fewer tourists. Two tavernas right on the beach.",
      vibe: "Mellow, local",
      bestFor: ["Quieter swim", "Locals' favorite"],
      website: ""
    },
    {
      name: "Mavra Volia (black volcanic pebbles)",
      city: "Chios",
      distance: "30 km south (Emporios)",
      surface: "Small black volcanic pebbles",
      facilities: "None, bring water and shoes",
      description: "Three coves of jet-black volcanic pebbles, formed by an ancient eruption. The water is exceptionally clear because there's no sand to muddy it. Otherworldly at golden hour. Bring water shoes (the pebbles are sharp under bare feet) and a beach towel that you don't mind getting black.",
      vibe: "Dramatic, quiet, alien",
      bestFor: ["Photography", "Quiet swim with character"],
      website: ""
    },
    {
      name: "Komi",
      city: "Chios",
      distance: "30 km south",
      surface: "Long sand beach",
      facilities: "Multiple tavernas, loungers, water sports",
      description: "Long sandy stretch on the southeast coast, popular with Greek families. Pair with the mastic villages day for a swim after Mesta.",
      vibe: "Family-friendly",
      bestFor: ["Combining with mastic villages day"],
      website: ""
    },
    {
      name: "Lithi",
      city: "Chios",
      distance: "30 km west",
      surface: "Sand and pebble",
      facilities: "Three seafront tavernas, small fishing harbor next door",
      description: "Calm bay on the west coast, with a small fishing village. Pair with the mountain villages day (Nea Moni, Avgonima) for an afternoon swim.",
      vibe: "Fishing village, quiet",
      bestFor: ["Mountain-day afternoon swim"],
      website: ""
    },
    {
      name: "Elinda",
      city: "Chios",
      distance: "27 km west",
      surface: "Pebble",
      facilities: "Minimal, one small beach bar",
      description: "Crescent-shaped cove between two headlands, with calm water. Quieter than Lithi.",
      vibe: "Cove, peaceful",
      bestFor: ["Quietest west-coast option"],
      website: ""
    },
    {
      name: "Managros",
      city: "Chios",
      distance: "45 km northwest (near Volissos)",
      surface: "Sand",
      facilities: "One taverna, no organized loungers",
      description: "1.5 km long sandy beach, almost empty even in June. The classic 'empty Greek beach' photo.",
      vibe: "Long, empty, wild",
      bestFor: ["Volissos day", "Photographers"],
      website: ""
    },
    {
      name: "Nagos",
      city: "Chios",
      distance: "30 km north",
      surface: "Pebble",
      facilities: "Tavernas, springs feed the bay",
      description: "Lush, green setting with mountain springs running into the sea. Cool water year-round. Pair with the north Chios drive day.",
      vibe: "Lush, mountain-meets-sea",
      bestFor: ["North Chios day"],
      website: ""
    },

    /* CRETE */
    {
      name: "Nea Chora",
      city: "Crete",
      distance: "Walking distance from Villa Dioni (15 min)",
      surface: "Sand",
      facilities: "Loungers, tavernas, lifeguard summer, showers",
      description: "Chania's city beach, surprisingly clean given its location. The closest swim to the villa. Walk along the beachfront promenade to Mikrolimano for lunch.",
      vibe: "City beach, convenient",
      bestFor: ["Easy mornings", "Post-Samaria recovery"],
      website: ""
    },
    {
      name: "Agioi Apostoloi",
      city: "Crete",
      distance: "3 km from Villa Dioni",
      surface: "Sand",
      facilities: "Loungers, tavernas, calm shallow water",
      description: "Sheltered bay with shallow water and a long sandy beach. Family-friendly, the local choice when Nea Chora is too busy.",
      vibe: "Calm, family",
      bestFor: ["Half-day swim from villa"],
      website: ""
    },
    {
      name: "Marathi",
      city: "Crete",
      distance: "20 km east (Akrotiri peninsula)",
      surface: "Sand",
      facilities: "Tavernas, loungers, sheltered cove",
      description: "Two adjacent coves on the Akrotiri peninsula, with fine sand and shallow water. Pelagos Marathi taverna for lunch. The destination on the Akrotiri day.",
      vibe: "Sheltered cove, family",
      bestFor: ["Akrotiri day lunch + swim"],
      website: ""
    },
    {
      name: "Stavros (Zorba beach)",
      city: "Crete",
      distance: "17 km north (Akrotiri)",
      surface: "Sand",
      facilities: "Tavernas, loungers",
      description: "Famous as a filming location for Zorba the Greek (1964). A perfect lagoon-shape bay backed by a vertical mountain. Calm water, dramatic setting.",
      vibe: "Cinematic, sheltered",
      bestFor: ["Akrotiri day", "Photo stop"],
      website: ""
    },
    {
      name: "Seitan Limania",
      city: "Crete",
      distance: "22 km northeast (Akrotiri)",
      surface: "Pebble",
      facilities: "None",
      description: "Dramatic fjord-like bay cut into vertical cliffs. Steep 15 minute descent down a goat path to reach the water. Postcard-perfect but not for everyone.",
      vibe: "Wild, dramatic, hike-in",
      bestFor: ["Adventurous swimmers", "Photographers"],
      website: ""
    },
    {
      name: "Balos Lagoon",
      city: "Crete",
      distance: "60 km northwest",
      surface: "White sand and turquoise lagoon",
      facilities: "One beach taverna, minimal shade",
      description: "Possibly the most famous beach in Greece. Reached by ferry from Kissamos (90 min). Combine with Gramvousa island. Full-day commitment.",
      vibe: "Postcard, busy by midday",
      bestFor: ["Full-day Balos trip"],
      website: "https://www.cretandailycruises.com"
    },
    {
      name: "Falassarna",
      city: "Crete",
      distance: "55 km west",
      surface: "Long sand beach (3 km)",
      facilities: "Tavernas, loungers, water sports",
      description: "Long western beach, famous for sunsets. Ancient harbor ruins at the north end (free to walk). The 'less famous than Balos and Elafonisi but still incredible' option.",
      vibe: "Long, dramatic sunsets",
      bestFor: ["Sunset", "Day trip"],
      website: ""
    },
    {
      name: "Elafonisi",
      city: "Crete",
      distance: "73 km southwest",
      surface: "Pink sand",
      facilities: "Loungers, snack bar, minimal shade",
      description: "Famous pink-sand beach with a shallow lagoon. Sandbar connects to a small island. Natura 2000 protected. Bring umbrella.",
      vibe: "Postcard, family-friendly water",
      bestFor: ["Day trip with the group"],
      website: ""
    },
    {
      name: "Kedrodasos",
      city: "Crete",
      distance: "75 km southwest (next to Elafonisi)",
      surface: "Sand, cedar trees",
      facilities: "None, wild",
      description: "10 minute walk south from Elafonisi parking. Sand-and-cedar trees, no facilities, almost no people. The local escape from Elafonisi crowds.",
      vibe: "Wild, quiet, undeveloped",
      bestFor: ["Quiet alternative to Elafonisi"],
      website: ""
    },
    {
      name: "Sougia",
      city: "Crete",
      distance: "70 km south",
      surface: "Pebble",
      facilities: "Tavernas, rooms, small village",
      description: "Hippie village on the Libyan Sea, end-of-the-road feel. Often used as the alternative Samaria exit point (instead of Agia Roumeli, you can hike to Sougia via a different route).",
      vibe: "Hippie, quiet, end-of-the-road",
      bestFor: ["Off-the-radar swim", "Alt Samaria exit"],
      website: ""
    },
    {
      name: "Loutro",
      city: "Crete",
      distance: "Boat from Chora Sfakion (30 min)",
      surface: "Pebble",
      facilities: "Tavernas, small hotels",
      description: "Car-free village in a bay on the Libyan Sea, accessible only by boat from Sfakia. White-and-blue houses, crystalline water, total quiet. A day or overnight trip.",
      vibe: "Car-free, white-and-blue, completely quiet",
      bestFor: ["Day trip from Sfakia", "Escape"],
      website: ""
    }
  ],

  /* ========== BUDGET ========== */

  budget: {
    categories: [
      { category: "International flights (per person)", est: 1100, actual: 0 },
      { category: "Athens accommodation (4 nights total)", est: 1600, actual: 0 },
      { category: "Chios accommodation (7 nights)", est: 2800, actual: 0 },
      { category: "Crete accommodation (Villa Dioni, 5 nights)", est: 2500, actual: 0 },
      { category: "Inter-island transport (ferries, flights)", est: 1200, actual: 0 },
      { category: "Car rentals (Chios + Crete)", est: 600, actual: 0 },
      { category: "Fuel + parking + tolls", est: 250, actual: 0 },
      { category: "Restaurants + tavernas", est: 2800, actual: 0 },
      { category: "Cafes + snacks + coffee", est: 400, actual: 0 },
      { category: "Sites + museums + tours", est: 700, actual: 0 },
      { category: "Beach loungers + boat trips", est: 500, actual: 0 },
      { category: "Shopping + gifts + mastic", est: 400, actual: 0 },
      { category: "Buffer / contingency", est: 500, actual: 0 }
    ],
    notes: "Estimates are in EUR for the entire group of 7 unless marked per person. Edit any cell to update; totals recalculate live."
  },

  /* ========== PACKING ========== */

  packing: [
    {
      section: "Documents and money",
      items: [
        "Passport, valid 6 months past trip",
        "International Driving Permit (for car rentals)",
        "Vaccination records if requested",
        "Credit cards, notify bank of travel dates",
        "Backup credit card stored separately",
        "Travel insurance card and policy number",
        "Cash EUR for small tavernas, parking, tips",
        "Photo or copy of passport in cloud drive",
        "Vrbo reservation #986661 (Villa Dioni)",
        "Flight and ferry confirmations (printed or downloaded)"
      ]
    },
    {
      section: "Clothing",
      items: [
        "Swimsuits x2",
        "Quick-dry towel (rentals usually provide, useful as backup)",
        "Light layers, evenings can be breezy on Chios",
        "One nice dinner outfit",
        "Sun hat, wide brim",
        "Sunglasses",
        "Light cardigan or shawl (for monasteries, modest dress)",
        "Hiking shoes (Samaria hikers)",
        "Sandals + walking shoes",
        "Water shoes (Mavra Volia, Balos)",
        "Light raincoat (unlikely in June but compact)"
      ]
    },
    {
      section: "Toiletries and health",
      items: [
        "Reef-safe sunscreen, SPF 50",
        "Aftersun or aloe",
        "Insect repellent",
        "Prescription medications (carry-on, with copies of scripts)",
        "Basic first aid: ibuprofen, antihistamines, anti-diarrheal",
        "Electrolyte tablets",
        "Hand sanitizer",
        "Lip balm with SPF",
        "Personal hygiene basics"
      ]
    },
    {
      section: "Electronics",
      items: [
        "Phone + charger",
        "EU plug adapter (Type C or F)",
        "Portable battery pack",
        "Camera + spare battery + SD cards",
        "Headphones",
        "eSIM or local SIM plan (Airalo, Cosmote)",
        "Offline maps downloaded (Google Maps, Maps.me for hiking)"
      ]
    },
    {
      section: "Day pack and misc",
      items: [
        "Refillable water bottle, 1L minimum",
        "Light daypack",
        "Greek phrase notes or app",
        "Snacks for travel days",
        "Earplugs and eye mask for ferries and flights",
        "Book or e-reader",
        "Small notebook + pen",
        "Reusable shopping bag"
      ]
    }
  ],

  /* ========== PHRASES ========== */

  phrases: [
    {
      section: "Essentials",
      items: [
        { gr: "Γειά σας", trans: "Yia sas", en: "Hello / goodbye, formal" },
        { gr: "Γειά", trans: "Yia", en: "Hi, informal" },
        { gr: "Καλημέρα", trans: "Kalimera", en: "Good morning" },
        { gr: "Καλησπέρα", trans: "Kalispera", en: "Good evening" },
        { gr: "Καληνύχτα", trans: "Kalinichta", en: "Good night" },
        { gr: "Παρακαλώ", trans: "Parakalo", en: "Please / you're welcome" },
        { gr: "Ευχαριστώ", trans: "Efharisto", en: "Thank you" },
        { gr: "Ναί", trans: "Ne", en: "Yes" },
        { gr: "Όχι", trans: "Ohi", en: "No" }
      ]
    },
    {
      section: "Polite",
      items: [
        { gr: "Συγγνώμη", trans: "Signomi", en: "Excuse me / sorry" },
        { gr: "Με συγχωρείτε", trans: "Me sinhorite", en: "I beg your pardon" },
        { gr: "Μιλάτε αγγλικά;", trans: "Milate anglika?", en: "Do you speak English?" },
        { gr: "Δεν καταλαβαίνω", trans: "Den katalaveno", en: "I don't understand" }
      ]
    },
    {
      section: "Dining",
      items: [
        { gr: "Έναν λογαριασμό παρακαλώ", trans: "Enan logariasmo parakalo", en: "The bill, please" },
        { gr: "Στην υγειά μας", trans: "Stin iyia mas", en: "Cheers (to our health)" },
        { gr: "Νερό", trans: "Nero", en: "Water" },
        { gr: "Κρασί", trans: "Krasi", en: "Wine" },
        { gr: "Μπίρα", trans: "Bira", en: "Beer" },
        { gr: "Ψωμί", trans: "Psomi", en: "Bread" },
        { gr: "Νόστιμο", trans: "Nostimo", en: "Delicious" }
      ]
    },
    {
      section: "Directions and basics",
      items: [
        { gr: "Πού είναι...;", trans: "Pou ine...?", en: "Where is...?" },
        { gr: "Πόσο κάνει;", trans: "Poso kanei?", en: "How much?" },
        { gr: "Αριστερά / Δεξιά", trans: "Aristera / Dexia", en: "Left / Right" },
        { gr: "Ευθεία", trans: "Efthia", en: "Straight" },
        { gr: "Παραλία", trans: "Paralia", en: "Beach" },
        { gr: "Λιμάνι", trans: "Limani", en: "Port" }
      ]
    },
    {
      section: "Numbers",
      items: [
        { gr: "Ένα, δύο, τρία", trans: "Ena, dyo, tria", en: "1, 2, 3" },
        { gr: "Τέσσερα, πέντε, έξι", trans: "Tessera, pente, exi", en: "4, 5, 6" },
        { gr: "Επτά, οκτώ, εννέα, δέκα", trans: "Epta, okto, ennea, deka", en: "7, 8, 9, 10" }
      ]
    }
  ],

  etiquette: [
    "Greeks eat late. Dinner from 21:00 is normal, even later in summer.",
    "Tipping is appreciated but not mandatory. Round up or 5 to 10 percent in restaurants.",
    "Most tavernas bring complimentary fruit or sweet after the meal. Accept it.",
    "Modest dress at monasteries: covered shoulders and knees, women may be given a wrap.",
    "Tap water is safe in Athens. On Chios and Crete, bottled is preferred.",
    "Sundays many small shops close. Plan supermarket runs Saturday.",
    "Greek hospitality is real. A tsipouro on the house is a gift, not a sales pitch.",
    "Bring small bills. Card is widely accepted but not universal, especially in villages.",
    "Sun is intense June through August. Plan ruins for early morning or late afternoon.",
    "Hand gestures: open palm pushed toward someone (moutza) is offensive. Avoid waving 'stop' that way."
  ],

  /* ========== FORM CONFIG ==========
     Fields shown on the contact / preferences form. Submissions are emailed
     to athan.skedros@gmail.com via Formspree (set the endpoint in meta above).
  */
  form: {
    title: "Trip preferences and questions",
    intro: "Tell Athan your preferences so he can finalize bookings, dietary needs, and group choices. Submissions go directly to athan.skedros@gmail.com.",
    fields: [
      { type: "text", name: "name", label: "Your name", required: true },
      { type: "email", name: "email", label: "Email", required: true },
      { type: "tel", name: "phone", label: "Phone (optional)", required: false },
      { type: "select", name: "joining", label: "Which dates can you join?", options: ["Full trip (Jun 5-21)", "Athens leg 1 only", "Chios only", "Crete only", "Athens leg 2 only", "Partial, will detail in notes"], required: true },
      { type: "checkbox", name: "dietary", label: "Dietary needs (check all that apply)", options: ["No restrictions", "Vegetarian", "Vegan", "Gluten-free", "Dairy-free", "Pescatarian", "Nut allergy", "Shellfish allergy", "Other (note below)"] },
      { type: "checkbox", name: "athens_interests", label: "Athens, which most interest you?", options: ["Acropolis + museums", "Plaka food + walks", "Sunset rooftops", "Cape Sounion", "Markets and shopping", "Skip Athens extras, just basics"] },
      { type: "checkbox", name: "chios_interests", label: "Chios, which most interest you?", options: ["Mastic villages (Pyrgi, Mesta)", "Nea Moni monastery", "Beach days", "Mountain villages + Anavatos", "Volissos / northwest", "Inousses day trip", "All of it"] },
      { type: "radio", name: "samaria", label: "Samaria Gorge on Jun 17 (16 km strenuous downhill hike)?", options: ["I'm hiking the gorge", "I'm doing the relaxed villa day", "Undecided, will choose closer"], required: true },
      { type: "checkbox", name: "crete_interests", label: "Crete, which most interest you?", options: ["Chania Old Town", "Balos Lagoon day trip", "Elafonisi pink beach", "Akrotiri beaches", "Botanical Park", "Pool + villa days", "Cooking class or private chef"] },
      { type: "select", name: "spending_comfort", label: "Spending comfort for restaurants", options: ["I'll go with the group, no preference", "Modest, prefer EUR 15-25 dinners", "Mid-range, EUR 25-40 dinners", "Happy to splurge for special meals"] },
      { type: "radio", name: "athens_booking", label: "Help Athan book your Athens hotel?", options: ["Yes, please book my room", "No, I'll book my own", "Not coming for Athens"] },
      { type: "textarea", name: "special_occasions", label: "Any birthdays, anniversaries, milestones during the trip?", placeholder: "Anniversary on Jun 12, etc." },
      { type: "textarea", name: "notes", label: "Anything else?", placeholder: "Requests, concerns, things to know..." }
    ],
    successMessage: "Thanks. Your responses have been sent to Athan.",
    errorMessage: "Something went wrong. Please email athan.skedros@gmail.com directly."
  }

};
