/* =========================================================================
   TRIP DATA, Greece 2026
   v3: stays / budget / flights removed. Maria's Chania additions integrated.
   Sites and beaches grouped by city in the renderer.
   ========================================================================= */

window.TRIP_DATA = {

  meta: {
    title: "Greece 2026",
    subtitle: "Athens, Chios, Crete",
    dateRange: "June 5 to June 21, 2026",
    travelers: "7 adults",
    countdownTarget: "2026-06-05T00:00:00",
    intro: "Seventeen days across the Greek mainland and islands. Athens for the ancients and late nights, Chios for mastic villages and the quiet Aegean, Crete for wild beaches and Chania's Venetian harbor. A reference site, not a booking site: travel arrangements are handled separately.",
    formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
    contactEmail: "athan.skedros@gmail.com"
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
    ferries: [
      {
        leg: "Athens to Chios",
        date: "Jun 7, 2026",
        operator: "Blue Star Ferries",
        site: "https://www.bluestarferries.com",
        duration: "7 to 13 hours depending on route",
        cost: "EUR 39 to 160 pp depending on class (deck, seat, cabin)",
        notes: "Daytime sailings depart Piraeus around 07:00 to 08:00. Overnight sailings depart late evening with cabin options. Book a cabin for the overnight or you will not sleep. Board 60 minutes before departure. Piraeus Gate E1 or E2 (confirm on your ticket)."
      },
      {
        leg: "Crete (Chania) to Athens",
        date: "Jun 19, 2026",
        operator: "ANEK Lines or Minoan Lines",
        site: "https://www.anek.gr",
        duration: "8 to 9 hours overnight",
        cost: "EUR 40 to 150 pp",
        notes: "Departs Souda port (15 min from Chania) around 21:00, arrives Piraeus around 06:00. Cabins recommended for sleep."
      }
    ],
    carRentals: [
      {
        location: "Chios",
        vendors: [
          { name: "Vassilakis Rent a Car", phone: "+30 2271 026620", site: "https://vassilakis-rentacar.gr", cost: "EUR 30 to 50 per day", notes: "Well reviewed local. Delivers to ferry port or airport. Automatic available, request in advance." },
          { name: "Aegean Rent a Car", phone: "+30 2271 041277", site: "", cost: "EUR 35 to 60 per day", notes: "Local Chios operator. Free airport delivery." }
        ]
      },
      {
        location: "Crete (Chania)",
        vendors: [
          { name: "Mike's Rent A Car", phone: "+30 6987 711777", site: "https://www.mikescars.gr", cost: "EUR 25 to 50 per day", notes: "Highly rated local. Free delivery options. Book ahead, June is peak season." },
          { name: "Caravel Rent a Car", phone: "+30 2821 094211", site: "https://www.caravel.gr", cost: "EUR 30 to 55 per day", notes: "Long-standing local. Fleet includes 7-seaters useful for a group." },
          { name: "Bookcars.gr aggregator", phone: "", site: "https://bookcars.gr", cost: "Varies", notes: "Compares local Crete vendors, often cheaper than chains." }
        ]
      }
    ],
    driving: [
      "Greece drives on the right. International Driving Permit required for US licenses. Order from AAA before departure, EUR 20.",
      "Mountain roads on Chios and Crete are narrow and switchbacked. Drive 30 to 40 kph on hairpins. Goats and donkeys cross without warning.",
      "Diesel is typically EUR 0.10 to 0.15 cheaper per liter than petrol. Most rentals are manual, request automatic in advance and expect a EUR 5 to 10 per day premium.",
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
          description: "Stay close, eat well, in bed by 22:30. Three vetted dinner options:",
          mealOptions: ["Geros Tou Moria", "Klimataria", "Karamanlidika tou Fani"]
        }
      ],
      reservations: ["Dinner if Friday night and you have a strong preference"],
      whatToBring: ["Light layer for evening", "Comfortable shoes for cobblestones", "Phone charger"],
      walking: "About 2 to 3 km of casual walking",
      tip: "Greek dinners run late. 21:30 is normal, 22:30 is fine. But on your first night, fight the impulse to push past 22:00."
    },

    {
      id: "athens-d2",
      city: "Athens",
      date: "Saturday, Jun 6, 2026",
      title: "The classic Athens day, Acropolis to Plaka",
      summary: "The big-ticket day. Beat the heat at the Acropolis at first entry, decompress at the museum, siesta through the worst sun, sunset rooftop, late dinner.",
      weather: "June high 31C, low 21C. Marble at the Acropolis hits 40C+ by noon. Hat and 2L of water are not optional.",
      slots: [
        {
          time: "08:00",
          headline: "Acropolis at first entry",
          description: "Pre-book the 08:00 timed slot at hhticket.gr. EUR 30 pp. Allow 2 to 2.5 hours. Enter via the main west gate. The Propylaia, Parthenon, Erechtheion with the Caryatids, and Temple of Athena Nike are the headliners.",
          links: [
            { label: "Book Acropolis tickets", url: "https://hhticket.gr" },
            { label: "Official Acropolis info", url: "https://odysseus.culture.gr" }
          ],
          alternatives: [
            { name: "Late slot at 17:00", detail: "Softer light and thinner crowds. Site closes at 20:00 in summer." },
            { name: "Skip-the-line guided tour", detail: "EUR 60 to 90 pp via GetYourGuide. Worth it for historical context." }
          ]
        },
        {
          time: "11:00",
          headline: "Acropolis Museum",
          description: "Across the street from the south slope. EUR 20 pp. The glass top floor frames the actual Parthenon and houses the original sculptures (replicas are on the building itself). Plan 1.5 to 2 hours.",
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
          description: "The honest answer is take a siesta. If you have the energy:",
          options: [
            { name: "Siesta", detail: "A 90-minute lie-down resets the day." },
            { name: "Ancient Agora", detail: "EUR 10. The Temple of Hephaestus inside is the best-preserved Doric temple in Greece.", links: [{ label: "Tickets", url: "https://hhticket.gr" }] },
            { name: "Benaki Museum", detail: "EUR 12. Cooler indoor option.", links: [{ label: "Website", url: "https://www.benaki.org" }] }
          ]
        },
        {
          time: "19:30",
          headline: "Sunset rooftop drink",
          description: "Athens has perhaps the best urban sunsets in Europe, with the Acropolis backlit gold. Pick one:",
          options: [
            { name: "360 Cocktail Bar", detail: "The classic, direct Acropolis view from Monastiraki. Cocktails EUR 13 to 16.", links: [{ label: "Reserve", url: "https://three-sixty.gr" }] },
            { name: "A for Athens", detail: "More casual, same view direction. Less reservation-needed." },
            { name: "Lycabettus Hill", detail: "Highest point in Athens. Funicular up (EUR 10), café at the top." }
          ]
        },
        {
          time: "21:30",
          headline: "Dinner",
          description: "Late by US standards, perfectly normal in Athens:",
          mealOptions: ["Tzitzikas kai Mermigas", "Kuzina", "Klimataria"]
        }
      ],
      reservations: ["Acropolis 08:00 slot, book 2 weeks ahead", "Acropolis Museum, any time slot", "Rooftop for sunset if a Saturday", "Dinner if choosing Kuzina"],
      whatToBring: ["Sun hat, wide brim", "2L water bottle per person", "Sunscreen SPF 50", "Shoes with grip (Acropolis marble is slick)", "Light cardigan for air-conditioned museum"],
      walking: "About 5 to 6 km total",
      tip: "Modest dress is requested at the Acropolis. Selfie sticks are technically banned."
    },

    {
      id: "athens-d3",
      city: "Athens",
      date: "Sunday, Jun 7, 2026",
      title: "Last morning in Athens, transit to Chios",
      summary: "Travel day. Get one more ruin or market or museum in before the transfer. Travel logistics are coordinated separately.",
      weather: "Same as yesterday. Light layer for the evening if traveling by ferry.",
      slots: [
        {
          time: "Morning",
          headline: "Pick one, then pack",
          description: "Three solid options for the last morning:",
          options: [
            { name: "National Archaeological Museum", detail: "EUR 12. World-class Bronze Age and Classical collection. 2 hours minimum.", links: [{ label: "Website", url: "https://www.namuseum.gr" }] },
            { name: "Central Market (Varvakios)", detail: "Free, sensory overload. Closed Sundays, pivot to museum on this day." },
            { name: "Easy walk + cafe", detail: "Coffee at Little Tree, walk the National Garden, see Hadrian's Arch and the Temple of Olympian Zeus." }
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
          headline: "Travel to Chios",
          description: "If on the Blue Star ferry: 7 to 13 hour sailing depending on route. Daytime departures around 07:00 to 08:00 from Piraeus, overnight options leave late evening. Book a cabin if overnight or you will not sleep. See the Logistics tab for the operator and booking link.",
          links: [
            { label: "Blue Star Ferries", url: "https://www.bluestarferries.com" }
          ]
        }
      ],
      reservations: [],
      whatToBring: ["Snacks for the journey", "Earplugs and eye mask for overnight travel"],
      walking: "Light, depends on morning choice"
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
          description: "Chios Town's harbor is the social spine. Locals do the volta (evening walk) along the waterfront from 21:00 onward. Stop at the castle (free outside, EUR 4 for the Justiniani Museum inside) which is lit at night."
        }
      ],
      reservations: ["Dinner Friday or Saturday only"],
      whatToBring: ["Light jacket, the harbor catches a breeze"],
      walking: "1 to 2 km",
      tip: "Try mastiha liqueur after dinner. The island's signature digestif, distilled from the mastic tree resin (only grown in south Chios). Served chilled."
    },

    {
      id: "chios-d2",
      city: "Chios",
      date: "Monday, Jun 8, 2026",
      title: "Chios Town, Kambos estates, beach afternoon",
      summary: "Orientation day. Get the lay of Chios Town in the morning, lunch at one of the walled citrus estates in Kambos, swim at the closest beaches in the afternoon.",
      weather: "Same. Sea is around 22C in early June, swimmable.",
      slots: [
        {
          time: "09:30",
          headline: "Chios Town walking tour",
          description: "Hit the highlights: the castle and Justiniani Museum, the Korais Library, the Argenti Folklore Museum, and the Maritime Museum. Stop at any Mastihashop branch to taste mastic products.",
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
          description: "Closest swimmable beaches to base:",
          options: [
            { name: "Karfas", detail: "8 km south, sandy, family-friendly, sun loungers, beach bars and tavernas." },
            { name: "Megas Limnionas", detail: "10 km south, pebble-and-sand, mellow local vibe." },
            { name: "Vrontados", detail: "5 km north, smaller bay, near Daskalopetra (Homer's Stone)." }
          ]
        },
        {
          time: "21:00",
          headline: "Dinner back in Chios Town",
          description: "After the beach, a shower, then dinner:",
          mealOptions: ["Pelagos", "Nostos", "Yperion"]
        }
      ],
      reservations: ["Kambos lunch, weekends only"],
      whatToBring: ["Swimsuit", "Beach towel", "Sunscreen", "Cash for loungers"],
      walking: "3 to 4 km in town, plus beach"
    },

    {
      id: "chios-d3",
      city: "Chios",
      date: "Tuesday, Jun 9, 2026",
      title: "Nea Moni monastery and the mountain villages",
      summary: "Driving day inland. The 11th-century UNESCO monastery, the abandoned village of Anavatos, lunch with valley views at Avgonima, swim at a west-coast cove on the way back. Note: Mastic Museum is closed Tuesdays.",
      weather: "Cooler in the mountains, can be windy. Long pants helpful at the monastery.",
      slots: [
        {
          time: "09:30",
          headline: "Nea Moni Monastery",
          description: "11th-century UNESCO World Heritage Site, 14 km west of Chios Town. The katholikon has some of the finest surviving Byzantine mosaics anywhere. EUR 4 entry. Active monastery so modest dress required: covered shoulders for everyone, covered knees for women.",
          links: [
            { label: "Nea Moni info", url: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=1822" }
          ]
        },
        {
          time: "11:30",
          headline: "Anavatos, the abandoned village",
          description: "Called the 'Mystras of the Aegean.' A vertical Byzantine village clinging to a 300 meter cliff, abandoned after the 1822 Ottoman massacre. Free. Solemn, photogenic, takes about 45 minutes."
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
          description: "Drive 15 to 20 minutes down to the coast:",
          options: [
            { name: "Lithi beach", detail: "Sand-and-pebble, taverna on the sand, small fishing harbor next door." },
            { name: "Elinda", detail: "Crescent cove with calm water. Quieter than Lithi." }
          ]
        },
        {
          time: "21:00",
          headline: "Dinner back in Chios Town",
          description: "Keep it easy after the mountain day:",
          mealOptions: ["Hotzas", "To Kechrimpari"]
        }
      ],
      reservations: ["Avgonima lunch on summer Saturdays only"],
      whatToBring: ["Long pants or wrap for monastery", "Walking shoes for Anavatos", "Sunscreen", "Swimsuit"],
      walking: "4 to 5 km total including the village climbs",
      tip: "The road to Nea Moni is narrow with no shoulder. Drive 30 to 40 kph. Sound your horn before blind corners."
    },

    {
      id: "chios-d4",
      city: "Chios",
      date: "Wednesday, Jun 10, 2026",
      title: "The mastic villages of the south",
      summary: "South Chios is the only place on earth where mastic resin is commercially produced. Painted Pyrgi, the medieval fortress-grid of Mesta, and the Mastic Museum. End at Mavra Volia, the black-pebble beach.",
      weather: "Hotter in the south, less breeze. June high 32C in the interior villages.",
      slots: [
        {
          time: "09:30",
          headline: "Pyrgi, the painted village",
          description: "About 40 minutes south of Chios Town. Pyrgi's facades are decorated with xysta, a black-and-white geometric pattern scratched into wet plaster. The whole medieval grid is a photograph. Free."
        },
        {
          time: "11:30",
          headline: "Mastic Museum",
          description: "5 minutes outside Pyrgi. Modern museum on the cultivation and processing of mastic. Hour-long visit. EUR 6.",
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
          description: "10 minutes from Mesta. Otherworldly underground chamber discovered in 1985. Stalactites, columns, 60 meter depth. EUR 6 entry. Closed Mondays."
        },
        {
          time: "17:00",
          headline: "Mavra Volia beach",
          description: "Near Emporios, the southern tip. 'Mavra Volia' means 'black pebbles,' the beach is made of small black volcanic stones. Three coves linked by paths. No facilities, bring water and shoes."
        },
        {
          time: "20:30",
          headline: "Dinner in Emporios or back in Chios Town",
          description: "Emporios has seaside tavernas. Or drive back (45 min):",
          mealOptions: ["Pelagos", "Nostos"]
        }
      ],
      reservations: ["Lunch in Mesta on weekends"],
      whatToBring: ["Water shoes for Mavra Volia", "Hat (no shade in the south)", "2L water", "Cash for the cave"],
      walking: "4 km in the villages",
      tip: "Buy mastiha products at the village shops, not the airport. Cheaper and village-specific blends."
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
          description: "About 45 minutes from Chios Town. Climb the castle (free, 15 minutes up), wander the cobbled lanes. Volissos was reputedly Homer's birthplace."
        },
        {
          time: "13:00",
          headline: "Lunch at Limnia harbor",
          description: "5 minutes downhill from Volissos, the tiny fishing harbor of Limnia has two seafront tavernas with fresh catch."
        },
        {
          time: "15:00",
          headline: "Pick a northwest beach",
          description: "Three nearby beaches, all long, all quiet:",
          options: [
            { name: "Managros", detail: "10 minute drive. 1.5 km sand beach, one taverna, almost no people in June." },
            { name: "Lefkathia", detail: "Smaller cove next to Managros." },
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
      reservations: [],
      whatToBring: ["Beach umbrella if possible, no shade", "Water, snacks", "Sunscreen"],
      walking: "2 km in Volissos, plus beach",
      tip: "The road to Volissos has a few one-lane sections through villages."
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
            { name: "Repeat favorite beach", detail: "Whichever beach the group rated highest earlier in the week." },
            { name: "New beach: Komi or Mavra Volia again", detail: "Komi is sand, family-friendly, in the south." },
            { name: "Daskalopetra and Vrontados", detail: "Short morning to the 'Stone of Homer' (free)." }
          ]
        },
        {
          time: "13:30",
          headline: "Slow lunch",
          description: "Mix-and-match:",
          mealOptions: ["Hotzas", "Mavrokordatiko", "To Kechrimpari"]
        },
        {
          time: "18:00",
          headline: "Sunset drinks, Chios Town waterfront",
          description: "Several waterfront bars line the harbor. Pick one with shade and a view, order a tsipouro or a frappé."
        },
        {
          time: "21:00",
          headline: "Dinner",
          description: "Return to a favorite or try something new:",
          mealOptions: ["Pelagos", "Nostos", "Pyxari"]
        }
      ],
      reservations: [],
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
            { name: "Inousses island day trip", detail: "Small ferry from Chios Town (EUR 5 to 8 each way, 1 hour). Tiny, traditional, almost no tourists." },
            { name: "North Chios drive", detail: "Drive up the east coast to Marmaro, Kardamyla, Nagos beach. Lunch in Kardamyla harbor." },
            { name: "Boat charter half-day", detail: "Several operators in Chios Town run private boat charters along the east coast, EUR 350 to 600 for the group." }
          ]
        },
        {
          time: "21:00",
          headline: "Goodbye dinner",
          description: "Hit the favorite from the week:",
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
      title: "Arrive Chania, first evening in Nea Chora",
      summary: "Travel day from Chios to Crete (arrangements coordinated separately). Once settled in Chania, the first evening is best kept easy: walk Nea Chora, eat seafood by the water.",
      weather: "Crete is hotter and drier than Chios. June Chania high 28C, low 19C, but inland and at noon expect 32C+.",
      slots: [
        {
          time: "Evening",
          headline: "Easy first dinner in Nea Chora",
          description: "Nea Chora is the seafood quarter, a short walk west of the Old Town:",
          mealOptions: ["Kariatis", "Mikrolimano", "Oasis Souvlaki"]
        }
      ],
      reservations: [],
      whatToBring: ["Snacks for the journey"],
      walking: "Light",
      tip: "Order a delivery from a Chania supermarket (My Market, Vergina) for your stay's stocking. Cheaper than restaurants for breakfast."
    },

    {
      id: "crete-d2",
      city: "Crete",
      date: "Monday, Jun 15, 2026",
      title: "Chania Old Town and the Venetian harbor",
      summary: "Discovery day in the old town. The Venetian harbor, the lighthouse, Stivanadika (the leather-makers' alley), the indoor market, dinner along the water.",
      weather: "Same. Old town is shaded by tall buildings, very walkable until 14:00, then hot.",
      slots: [
        {
          time: "10:00",
          headline: "Walk the Venetian harbor and Old Town",
          description: "Park at the public lot near the bus station. Walk the harbor from the lighthouse end (about 1 km out and back along the seawall) back to Firkas Fortress (Maritime Museum inside, EUR 4). Cut into Stivanadika, the alley of leather workshops. Loop through Splantzia, the Turkish quarter, with the Mosque of Ahmet Aga. Beyond the harborfront, the winding cobblestone streets behind the harbor are filled with quiet shops and cafes tucked away, great for escaping the crowds.",
          links: [
            { label: "Maritime Museum of Crete", url: "https://mar-mus-crete.gr" }
          ]
        },
        {
          time: "13:30",
          headline: "Lunch in the Old Town",
          description: "Cretan tavernas at a range of price points. Maria's family recommendations are along the main Limani:",
          mealOptions: ["Christoforos", "Salis", "Tamam", "Apostolis"]
        },
        {
          time: "15:30",
          headline: "Indoor market and afternoon",
          description: "The Agora (Demotiki Agora) is a cross-shaped covered market from 1913, with cheese, olive oil, raki, spices, fresh produce. Then siesta, or museum.",
          options: [
            { name: "Archaeological Museum of Chania", detail: "EUR 6, Minoan to Roman finds, in a former Venetian monastery.", links: [{ label: "Website", url: "https://amch.gr" }] },
            { name: "Pool / beach time", detail: "Walk to Nea Chora for a swim, 10 minutes from the harbor." }
          ]
        },
        {
          time: "20:30",
          headline: "Dinner with the harbor view",
          description: "Atmospheric options on or near the water. Ta Chalkina is the live-music option, worth calling ahead to find out which nights musicians are playing for the best Cretan music experience:",
          mealOptions: ["Ta Chalkina", "Salis", "Well of the Turk", "Zepos"]
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
      summary: "Full day boat trip to one of the most famous beaches in Greece. The lagoon between Cape Tigani and the Balos peninsula has a sandbar that glows turquoise. Maria's tip: skip the large ferry and book a private or small cruise from the Chania harbor. Less crowded, more flexible, and you can see multiple beaches in one day.",
      weather: "Same, but the boat is exposed. Wind picks up afternoon.",
      slots: [
        {
          time: "09:00",
          headline: "Drive to Kissamos port (or skip if booking private from Chania)",
          description: "If on the standard ferry: about 40 minutes west of Chania to Kissamos port. Park at the port lot, EUR 5. If on a private charter from Chania harbor: walk the harborfront and find one of the boats advertising trips to all the beaches in one day."
        },
        {
          time: "10:30",
          headline: "Ferry or charter to Gramvousa and Balos",
          description: "Standard ferry: Cretan Daily Cruises. EUR 40 to 45 pp. The boat stops first at Gramvousa island for about 2 hours, time to swim and climb to the Venetian fortress. Then continues to Balos for about 3 hours. Private charter from Chania: typically EUR 80 to 150 pp, less crowded, more flexible.",
          links: [
            { label: "Cretan Daily Cruises (large ferry)", url: "https://www.cretandailycruises.com" }
          ]
        },
        {
          time: "13:30 to 16:30",
          headline: "Balos Lagoon",
          description: "The shallow lagoon is photogenic but crowded by midday on the large ferry. Walk left along the beach for thinner crowds. Bring lunch (boat has a small snack bar, expensive) or eat at the one beach taverna."
        },
        {
          time: "17:45",
          headline: "Boat back to Kissamos or Chania",
          description: "Standard ferry arrives Kissamos about 18:45. Private charter returns to Chania harbor."
        },
        {
          time: "21:00",
          headline: "Dinner",
          description: "Kissamos has good seaside tavernas if you don't want to drive on a tired day. Or back to Chania:",
          mealOptions: ["Ta Chalkina", "Mikrolimano", "Salis"]
        }
      ],
      reservations: ["Cretan Daily Cruises, book 2 to 3 days ahead in June. Private charter, walk the Chania harbor day-of or book 1 to 2 days ahead."],
      whatToBring: ["Water shoes (lagoon floor is shell and rock)", "Sunscreen (no shade on the boat)", "Hat", "Cash for snacks and the fortress climb", "Light layer for the windy boat ride"],
      walking: "Up to 4 km if you do the Gramvousa fortress climb",
      tip: "Alternative: drive yourself to Balos via the rough dirt road from Kaliviani. 45 minutes of bad road, no boat needed."
    },

    {
      id: "crete-d4",
      city: "Crete",
      date: "Wednesday, Jun 17, 2026",
      title: "Group splits: Samaria Gorge hikers, relaxers",
      summary: "The group divides. Hikers do Samaria, one of the great hikes in Europe: 16 km strenuous downhill through a national park, finishing at the Libyan Sea. The gorge was a strategic position for the Cretan resistance in WWII, where locals hid British soldiers and helped them escape after the Germans took Crete. Relaxers stay near base.",
      weather: "Gorge bottom is hotter than the top. Plan 30C at the gorge floor by midday.",
      slots: [
        {
          time: "FOR HIKERS, 05:30",
          headline: "KTEL bus from Chania to Omalos",
          description: "KTEL bus departs Chania bus station 06:15. EUR 8 each way. Arrives Omalos around 07:45. Book the day before at chaniabus.gr. Buy gorge entry on arrival, EUR 10. Last entry is 14:00. Alternative: most tour companies along the Chania harbor offer Samaria packages with transport included, EUR 30 to 45 pp.",
          links: [
            { label: "KTEL bus schedule", url: "https://www.e-ktel.com" },
            { label: "Gorge official", url: "https://www.samaria.gr" }
          ]
        },
        {
          time: "FOR HIKERS, 08:00 to 14:00",
          headline: "Samaria Gorge hike",
          description: "16 km, strenuous, mostly downhill. Descent (Xyloskalo) is steep wooden steps for the first 2 km. Pass the abandoned Samaria village mid-hike. Squeeze through 'Sideroportes' (Iron Gates) where the gorge narrows to 4 meters wide and walls rise 300m. Exit at Agia Roumeli on the Libyan Sea. Natural spring midway, no other amenities, bring all supplies including lots of water."
        },
        {
          time: "FOR HIKERS, 14:00 to 17:30",
          headline: "Lunch at Agia Roumeli, ferry to Sfakia",
          description: "Agia Roumeli is car-free, reached only by foot or boat. Quick swim, lunch, board the ferry at 15:00 to Chora Sfakion (EUR 15, 1 hour). KTEL bus from Sfakia to Chania departs around 19:00, arrives 21:00.",
          links: [
            { label: "Anendyk ferries", url: "https://www.anendyk.gr" }
          ],
          mealOptions: ["Tara Agia Roumeli"]
        },
        {
          time: "FOR RELAXERS, all day",
          headline: "Pool, beach, gentle outings",
          description: "Several low-key options:",
          options: [
            { name: "Pool / villa day", detail: "Loungers, swim, late breakfast, lunch in." },
            { name: "Nea Chora beach", detail: "Walk to Nea Chora, sun loungers, beachfront tavernas, easy lunch at Mikrolimano." },
            { name: "Botanical Park of Crete", detail: "20 minutes drive. 20 hectares of fruit trees and herbs.", links: [{ label: "Website", url: "https://www.botanical-park.com" }] },
            { name: "Manousakis Nostos Winery", detail: "Family-run winery in Vatolakkos, 20 min from Chania. Tour, tasting, lunch sourced from their land. Partners with the Salis restaurant.", links: [{ label: "Website", url: "https://nostoswines.com" }] },
            { name: "Akrotiri peninsula", detail: "Drive 20 min east, Marathi beach for lunch, Stavros for the Zorba beach, Agia Triada monastery." }
          ]
        },
        {
          time: "21:30",
          headline: "Easy group dinner",
          description: "Hikers will be wrecked. Keep dinner near base and casual:",
          mealOptions: ["Ta Meraklikia", "Mikrolimano", "Oasis Souvlaki (takeaway)"]
        }
      ],
      reservations: ["KTEL bus to Omalos, book day before (or tour company at the harbor)", "Manousakis winery tour if interested"],
      whatToBring: ["FOR HIKERS: real hiking shoes, 2L water minimum, sun hat, snacks, refillable water bottle, light layer for early morning at altitude (Omalos is 1230m), camera, EUR 60 cash for entry+ferry+bus", "FOR RELAXERS: pool / beach kit, book"],
      walking: "Hikers: 16 km. Relaxers: 1 to 4 km",
      tip: "Hikers: trekking poles save your knees on the descent. Buy or rent from Chania outdoor shops the day before."
    },

    {
      id: "crete-d5",
      city: "Crete",
      date: "Thursday, Jun 18, 2026",
      title: "Elafonisi pink beach day",
      summary: "Last full day in Crete. Elafonisi is the famous pink-sand beach 75 km southwest. Long drive each way, but the destination is unforgettable. Several picturesque villages along the way, plus a chapel built into a cave reached by stairs cut into the mountainside.",
      weather: "Same. Elafonisi can be windy in the afternoon, lagoon stays warm.",
      slots: [
        {
          time: "08:30",
          headline: "Drive to Elafonisi (with stops)",
          description: "About 1.5 hours, 73 km. Mostly mountain roads. Several picturesque villages along the route, worth stopping in. Also: a chapel built into a cave on the way, accessible by climbing stairs carved into the mountainside, a great photo and rest stop. Leave early to claim parking (EUR 3 cash) and beach space."
        },
        {
          time: "10:00 to 13:30",
          headline: "Elafonisi beach and lagoon",
          description: "The pink sand comes from crushed shells. The shallow lagoon is warm and waist-deep for 100 meters out. Cross the sandbar to the small island for fewer people. Sun loungers EUR 8 to 15 pair, snack bar with mediocre food. Bring or rent a beach umbrella, no natural shade."
        },
        {
          time: "13:30 (alt)",
          headline: "Walk to Kedrodasos for a quieter swim",
          description: "10 minute walk south from Elafonisi parking. Sand-and-cedar trees, no facilities, almost no people."
        },
        {
          time: "14:30",
          headline: "Lunch at a mountain village on the way back",
          description: "Mountain tavernas worth stopping at:",
          mealOptions: ["Innachorion (Elos village)", "Spilio (Falassarna road)"]
        },
        {
          time: "Sunset",
          headline: "Optional: I Koukouvagia in Halepa",
          description: "On the way back, detour to Halepa, a historic Chania suburb of grand 19th-century mansions. Eleftherios Venizelos (who led the revolution to liberate Crete from the Ottomans) lived here. I Koukouvagia (Η Κουκουβάγια) is a pastry shop and café on a hill with one of the best sunset views in Chania. The German cemetery for paratroopers killed in the WWII invasion of Crete is in the same neighborhood."
        },
        {
          time: "Evening",
          headline: "Final group dinner",
          description: "Last night in Crete:",
          options: [
            { name: "Cook in", detail: "Stock up at the supermarket on the drive back. Grill, salad, wine." },
            { name: "Dinner out in Old Town", detail: "One last harbor sit-down. Book ahead.", mealOptions: ["Ta Chalkina", "Well of the Turk", "Salis"] },
            { name: "Private chef", detail: "Cretan Cooking & Catering or Cookin Crete will bring a chef. EUR 60 to 90 pp.", links: [{ label: "Cookin Crete", url: "https://www.cookincrete.com" }] }
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
      title: "Last morning in Chania, transit to Athens",
      summary: "Travel day from Crete to Athens (arrangements coordinated separately). Last morning options: a final coffee at the harbor, a souvenir run at the indoor market, one more swim at Nea Chora.",
      weather: "Same.",
      slots: [
        {
          time: "Morning",
          headline: "Last morning in Chania",
          description: "Three light options before the transfer:",
          options: [
            { name: "Walk the harbor one last time", detail: "Coffee at Pallas, last photos at the lighthouse, pastry at Hatzis." },
            { name: "Indoor market for souvenirs", detail: "Cheese, olive oil, raki, herbs, mountain honey. Better than airport gifts." },
            { name: "Nea Chora swim", detail: "One last Aegean swim. Walk to the beach, swim, lunch at Mikrolimano." }
          ]
        },
        {
          time: "Midday",
          headline: "Last lunch",
          description: "Quick and easy:",
          mealOptions: ["Oasis Souvlaki", "Mikrolimano", "Kariatis"]
        },
        {
          time: "PM or evening",
          headline: "Travel to Athens",
          description: "If on the ANEK or Minoan ferry: 8 to 9 hour overnight sailing from Souda port. Departs around 21:00, arrives Piraeus around 06:00. Cabin recommended.",
          links: [
            { label: "ANEK Lines", url: "https://www.anek.gr" }
          ]
        }
      ],
      reservations: [],
      whatToBring: ["Snacks for the journey", "Earplugs and eye mask for overnight ferry"],
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
          description: "Pick a Psyrri or Monastiraki spot:",
          mealOptions: ["Kuzina", "Taverna Saita", "Avli"]
        }
      ],
      reservations: [],
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
            { name: "National Archaeological Museum", detail: "If you skipped it on leg 1. EUR 12.", links: [{ label: "Website", url: "https://www.namuseum.gr" }] },
            { name: "Panathenaic Stadium", detail: "EUR 5. The only stadium in the world built entirely of marble.", links: [{ label: "Website", url: "https://www.panathenaicstadium.gr" }] },
            { name: "Anafiotika and Plaka wander", detail: "Coffee, last shopping, walk slowly." }
          ]
        },
        {
          time: "16:00",
          headline: "Drive or tour to Cape Sounion",
          description: "70 km south, 90 min drive along the Athens Riviera. Two ways:",
          options: [
            { name: "Drive yourself", detail: "Rent a car for the day. Park at the Sounion lot, EUR 20 entry per person." },
            { name: "Half-day tour", detail: "EUR 45 to 60 pp with transport included. GetYourGuide or Viator.", links: [{ label: "GetYourGuide Sounion tours", url: "https://www.getyourguide.com/cape-sounion-l30019" }] }
          ]
        },
        {
          time: "Sunset (~20:50)",
          headline: "Sunset at the Temple of Poseidon",
          description: "Arrive 45 minutes before sunset to get a position. The temple sits 60 meters above the sea. Lord Byron carved his name on a column in 1810."
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
      tip: "Sounion site closes at sunset, but parking lot is open later."
    },

    {
      id: "athens2-d3",
      city: "Athens",
      date: "Sunday, Jun 21, 2026",
      title: "Depart Athens",
      summary: "Last morning. Coffee, gifts, then onward (transit arranged separately).",
      weather: "Same.",
      slots: [
        {
          time: "Morning",
          headline: "Breakfast and last gifts",
          description: "Two stops worth making:",
          options: [
            { name: "Krinos for loukoumades", detail: "Since 1923. Traditional Greek honey-soaked donuts." },
            { name: "Mastihashop for gifts", detail: "Mastic products from Chios.", links: [{ label: "Website", url: "https://www.mastihashop.com" }] }
          ]
        }
      ],
      reservations: [],
      whatToBring: ["Patience"],
      walking: "Light",
      tip: "Mastic liqueur should go in checked baggage if you're flying. Olive oil too."
    }
  ],

  /* ========== RESTAURANTS ========== */
  restaurants: [
    /* ATHENS */
    { name: "Geros Tou Moria", city: "Athens", area: "Plaka", cuisine: "Traditional Greek", description: "Tucked into a quiet Plaka lane in a 19th-century mansion, this institution has fed politicians, pop stars, and three generations of Athenians the classics: lamb kleftiko in parchment, moussaka, stifado. The terrace under bougainvillea is the move at sunset.", why: "Lonely Planet, Athens Insider, repeat appearances on every classic Plaka list.", phone: "+30 210 322 1753", address: "Mnisikleous 27, Plaka, Athens 105 56", price: "EUR 25 to 40 pp", hours: "12:00 to 00:30 daily", signatures: ["Lamb kleftiko", "Moussaka", "Walnut honey cake"], vibe: "Romantic, traditional, terraced", bestFor: ["Group dinner", "First night"], reservations: "Recommended weekends", website: "https://gerostoumoria.com" },
    { name: "Klimataria", city: "Athens", area: "Plateia Theatrou", cuisine: "Traditional with live music", description: "An old Athenian taverna where the food is solid and the entertainment is the point. Accordion and bouzouki most nights, dancing tables by 23:00. A real Greek dinner-as-event.", why: "Recommended by Conde Nast Traveller for live-music tavernas. A favorite of Athenians on Saturday nights.", phone: "+30 210 321 6629", address: "Plateia Theatrou 2, Athens", price: "EUR 25 to 40 pp", hours: "20:00 to 02:00, Wed to Sun", signatures: ["Mezedes platter", "Lamb chops", "Live music"], vibe: "Old-school, lively, group-friendly", bestFor: ["Group celebration", "Big night out"], reservations: "Required weekends", website: "https://www.klimataria.com.gr" },
    { name: "Karamanlidika tou Fani", city: "Athens", area: "Near Central Market", cuisine: "Anatolian Greek deli", description: "A deli-restaurant with the cured meats of the Karamanli Greeks (Greeks from central Anatolia displaced in 1923). Pastourma, sucuk, smoked cheeses, plus cooked dishes. Sit at the counter.", why: "Featured in the New York Times, Anthony Bourdain Parts Unknown.", phone: "+30 210 325 4184", address: "Sokratous 1 and Evripidou, Athens", price: "EUR 20 to 35 pp", hours: "12:30 to 24:00 daily", signatures: ["Pastourma platter", "Smyrna sucuk", "Saganaki with cherry sauce"], vibe: "Deli-bistro, casual", bestFor: ["Lunch", "Pre-dinner snack with wine"], reservations: "Walk-in usually fine", website: "https://karamanlidika.gr" },
    { name: "Kuzina", city: "Athens", area: "Psyrri", cuisine: "Modern Greek", description: "A stylish restaurant on a pedestrian street with a glass elevator up to a rooftop with one of the best Acropolis views in Athens.", why: "Michelin Guide listed. Top of TripAdvisor for years.", phone: "+30 210 324 0133", address: "Adrianou 9, Athens 105 55", price: "EUR 35 to 60 pp", hours: "12:00 to 24:00 daily", signatures: ["Slow-cooked lamb", "Sea bream carpaccio", "Mastiha panna cotta"], vibe: "Upscale, scenic", bestFor: ["Sunset dinner"], reservations: "Required for rooftop", website: "https://kuzina.gr" },
    { name: "Tzitzikas kai Mermigas", city: "Athens", area: "Syntagma", cuisine: "Modern Greek meze", description: "Bright, energetic, packed every night. The name means the cricket and the ant. Mezedes are the play, order eight or ten dishes for the table.", why: "Voted best meze restaurant by Greek media multiple years.", phone: "+30 210 324 7607", address: "Mitropoleos 12 to 14, Athens", price: "EUR 25 to 40 pp", hours: "12:30 to 24:30 daily", signatures: ["Phyllo-wrapped feta with sesame and honey", "Lamb chops", "Cretan cheese pies"], vibe: "Lively, modern, communal", bestFor: ["Group dinner"], reservations: "Recommended", website: "https://tzitzikas-mermigas.gr" },
    { name: "Mani Mani", city: "Athens", area: "Makrygianni", cuisine: "Peloponnesian", description: "Refined Peloponnesian cooking on an upstairs floor of an Acropolis-area townhouse. Quieter than Plaka, more thoughtful menu.", why: "Michelin Guide listed.", phone: "+30 210 921 8180", address: "Falirou 10, Makrygianni, Athens 117 42", price: "EUR 30 to 50 pp", hours: "13:00 to 23:00, closed Mondays", signatures: ["Pork with prunes and saffron", "Pasta with Mani sausage", "Custard pie"], vibe: "Refined, intimate", bestFor: ["Lunch after Acropolis"], reservations: "Recommended", website: "https://www.manimani.com.gr" },
    { name: "Lolos All Day", city: "Athens", area: "Koukaki", cuisine: "Modern Greek bistro", description: "Bright, contemporary bistro in Koukaki, near the Acropolis Museum. Open all day for coffee, brunch, lunch, dinner.", why: "Recommended by Eater Athens.", phone: "+30 211 411 8924", address: "Veikou 22, Koukaki, Athens", price: "EUR 25 to 40 pp", hours: "09:00 to 01:00 daily", signatures: ["Slow-cooked pork", "Octopus carpaccio", "Greek salad reimagined"], vibe: "Bistro, all-day", bestFor: ["Lunch"], reservations: "Not required", website: "" },
    { name: "Diporto", city: "Athens", area: "Central Market", cuisine: "Old-school taverna, lunch only", description: "No menu, no signs, no English. A basement cellar in the central market with barrels of wine and whatever the cook made that day, usually chickpea soup, grilled sardines, salad.", why: "Featured by Anthony Bourdain, Eater World 38.", phone: "+30 210 321 1463", address: "Theatrou 2 and Sofokleous (look for the barrels)", price: "EUR 15 to 25 pp", hours: "08:00 to 18:00, closed Sundays and August", signatures: ["Chickpea soup", "Grilled sardines", "Wine from the barrel"], vibe: "Cellar, communal", bestFor: ["Lunch"], reservations: "Walk in", website: "" },
    { name: "Aleria", city: "Athens", area: "Metaxourgeio", cuisine: "Modern Greek tasting menu", description: "Special-occasion restaurant in a restored neoclassical mansion. Tasting menu of contemporary Greek cooking, beautiful courtyard for summer dining.", why: "Michelin Guide listed.", phone: "+30 210 522 2633", address: "Megalou Alexandrou 57, Metaxourgeio", price: "EUR 60 to 100 pp tasting menu", hours: "19:30 to 23:30, closed Sundays", signatures: ["6 or 8 course tasting menu", "Cretan goat with honey", "Mastic dessert"], vibe: "Special occasion, elegant courtyard", bestFor: ["Last night", "Celebration"], reservations: "Required, days ahead", website: "https://www.aleria.gr" },
    { name: "Little Tree Books and Coffee", city: "Athens", area: "Makrygianni", cuisine: "Cafe, lighter food", description: "A bookshop-cafe with a small kitchen turning out smart lunch plates.", why: "Recommended by Wallpaper, Eater Athens.", phone: "+30 210 924 3762", address: "Kavalloti 2, Makrygianni, Athens", price: "EUR 10 to 20 pp", hours: "10:00 to 22:00 daily", signatures: ["Brunch plates", "Wine by the glass", "Cheese boards"], vibe: "Cafe-bookshop, quiet", bestFor: ["Lunch break"], reservations: "Walk-in", website: "" },
    { name: "360 Cocktail Bar", city: "Athens", area: "Monastiraki Square", cuisine: "Cocktails, light bites", description: "Rooftop cocktail bar with a 360-degree view of Athens, the Acropolis directly across.", why: "Repeatedly named best rooftop bar in Athens.", phone: "+30 210 321 0006", address: "Ifestou 2, Monastiraki, Athens", price: "Cocktails EUR 13 to 16", hours: "10:00 to 02:00 daily", signatures: ["Negroni Bianco", "Aegean Spritz"], vibe: "Rooftop, polished", bestFor: ["Pre-dinner drinks", "Sunset"], reservations: "Required for sunset", website: "https://three-sixty.gr" },
    { name: "Taverna Saita", city: "Athens", area: "Plaka", cuisine: "Traditional", description: "A cellar taverna in Plaka with vaulted ceilings, doing classics well. Less touristy than its neighbors.", why: "Recommended by Athens Insider and Time Out Athens.", phone: "+30 210 322 8839", address: "Kydathineon 21, Plaka, Athens", price: "EUR 20 to 35 pp", hours: "12:30 to 24:30 daily", signatures: ["Bekri meze", "Saganaki", "House wine"], vibe: "Cellar, traditional", bestFor: ["Casual dinner"], reservations: "Walk-in usually fine", website: "" },
    { name: "Avli", city: "Athens", area: "Psyrri", cuisine: "Mezedes, ouzeri", description: "A hidden courtyard taverna in a Psyrri alley. Cheap, cheerful, deeply local.", why: "Cult favorite for late-night eating.", phone: "+30 210 321 7642", address: "Agiou Dimitriou 12, Psyrri, Athens", price: "EUR 15 to 25 pp", hours: "12:00 to 02:00 daily", signatures: ["Saganaki", "Mussels", "Fried zucchini"], vibe: "Courtyard, loud, late", bestFor: ["Late night"], reservations: "Walk-in", website: "" },
    { name: "Ariston", city: "Athens", area: "Syntagma", cuisine: "Bakery, savory pies", description: "Since 1910. Standing-room bakery doing tyropita, spanakopita, bougatsa. Family-run for four generations.", why: "Athens institution.", phone: "+30 210 322 7626", address: "Voulis 10, Syntagma, Athens", price: "EUR 2 to 5 per pie", hours: "07:00 to 18:30, closed Sundays", signatures: ["Tyropita", "Bougatsa", "Spanakopita"], vibe: "Bakery, no seating", bestFor: ["Breakfast"], reservations: "Walk-up", website: "" },
    { name: "Lukumades", city: "Athens", area: "Aiolou", cuisine: "Greek donuts", description: "Modern lukumades shop doing the traditional honey-and-walnut version plus 20 other toppings. Six pieces for EUR 4.", why: "Best-known dessert stop in Athens.", phone: "+30 210 321 0880", address: "Aiolou 21, Athens", price: "EUR 4 to 8", hours: "10:00 to 02:00", signatures: ["Classic honey-walnut lukumades", "Ice cream-stuffed", "Nutella"], vibe: "Dessert spot", bestFor: ["Post-dinner sweet"], reservations: "No", website: "https://lukumades.com" },

    /* CHIOS */
    { name: "Hotzas", city: "Chios", area: "Chios Town", cuisine: "Traditional Chian", description: "Oldest taverna in Chios, in a stone building a short walk from the harbor. Family-run for over 80 years. Skip the menu, ask what's good today.", why: "Featured in The Guardian and Conde Nast as the soul of Chios dining.", phone: "+30 2271 042787", address: "Georgiou Kondyli 3, Chios Town", price: "EUR 15 to 30 pp", hours: "19:00 to 24:00, closed Sundays", signatures: ["Lamb in lemon sauce", "Sfougato", "Wild greens", "House wine"], vibe: "Old-school, stone walls", bestFor: ["First Chios dinner"], reservations: "Recommended", website: "" },
    { name: "Pelagos", city: "Chios", area: "Chios Town waterfront", cuisine: "Modern seafood", description: "Modern seafood restaurant on the harbor. The plating is precise, the fish is from the morning catch.", why: "The best contemporary cooking in Chios.", phone: "+30 2271 029990", address: "Aigaiou 17, Chios Town waterfront", price: "EUR 25 to 45 pp", hours: "12:30 to 24:00 daily", signatures: ["Whole grilled fish", "Octopus carpaccio", "Sea bass crudo"], vibe: "Modern, harbor-view", bestFor: ["Sunset dinner"], reservations: "Recommended", website: "" },
    { name: "Nostos", city: "Chios", area: "Chios Town waterfront", cuisine: "Mediterranean", description: "Reliable waterfront restaurant with a broader Mediterranean menu. Good middle-ground option.", why: "Top reviews on TripAdvisor and Greek food sites.", phone: "+30 2271 044567", address: "Aigaiou 88, Chios Town", price: "EUR 20 to 35 pp", hours: "12:00 to 24:00 daily", signatures: ["Spaghetti with seafood", "Grilled lamb", "Cretan rusks salad"], vibe: "Modern, harbor view", bestFor: ["Group dinner"], reservations: "Recommended weekends", website: "" },
    { name: "Mavrokordatiko", city: "Chios", area: "Kambos", cuisine: "Garden taverna in a walled estate", description: "Walled 18th-century estate with citrus orchards, where you eat at tables among the trees.", why: "Featured in Conde Nast Traveler's Hidden Greece issue.", phone: "+30 2271 032900", address: "Kambos area, signposted from Karfas road", price: "EUR 25 to 40 pp", hours: "13:00 to 23:00 daily, closed in winter", signatures: ["Mavrokordatos lamb", "Orange leaves stuffed with rice", "Citrus dessert"], vibe: "Garden estate, slow", bestFor: ["Special lunch"], reservations: "Required", website: "" },
    { name: "Pyxari", city: "Chios", area: "Chios Town waterfront", cuisine: "Grill, seafood", description: "Lively waterfront grill, the place locals go on Friday nights. Whole grilled fish, lamb chops, big salads.", why: "Repeatedly recommended by Chios locals.", phone: "+30 2271 040800", address: "Aigaiou waterfront, Chios Town", price: "EUR 20 to 35 pp", hours: "19:00 to 02:00 daily", signatures: ["Whole sea bream grilled", "Lamb chops", "Mixed grill"], vibe: "Loud, lively, group-friendly", bestFor: ["Group dinner"], reservations: "Walk-in works", website: "" },
    { name: "To Kechrimpari", city: "Chios", area: "Chios Town", cuisine: "Ouzeri, meze", description: "Tiny ouzeri where the play is tsipouro and small plates. Cheap, cash-only, local.", why: "Local lore favorite, often missed by tourists.", phone: "+30 2271 026364", address: "Aigaiou waterfront, Chios Town", price: "EUR 12 to 22 pp", hours: "12:00 to 24:00 daily", signatures: ["Fried calamari", "Cheese saganaki", "Tsipouro"], vibe: "Old-school ouzeri", bestFor: ["Pre-dinner drink-and-snack"], reservations: "Walk-in", website: "" },
    { name: "Ouzeri Theodosiou", city: "Chios", area: "Chios Town, Neorion waterfront", cuisine: "Ouzeri", description: "Classic ouzeri since 1955. Stainless tables, paper-covered, ouzo and meze. Lunch only.", why: "Generational Chios spot.", phone: "+30 2271 027875", address: "Neorion (waterfront), Chios Town", price: "EUR 12 to 20 pp", hours: "12:00 to 18:00, closed Sundays", signatures: ["Grilled octopus", "Fava", "House ouzo"], vibe: "Working-class classic", bestFor: ["Long lunch"], reservations: "Walk-in", website: "" },
    { name: "To Apomero", city: "Chios", area: "Mesta village (south)", cuisine: "Traditional Chian", description: "Stone-walled taverna inside the medieval village of Mesta. Cooks lamb, kid, wild greens, all on a wood grill.", why: "On every best of South Chios list.", phone: "+30 2271 076700", address: "Mesta main square", price: "EUR 15 to 25 pp", hours: "12:00 to 23:00, closed Mondays", signatures: ["Grilled lamb", "Wild greens", "Trahanas soup"], vibe: "Village square", bestFor: ["Lunch on the mastic-villages day"], reservations: "Recommended weekends", website: "" },
    { name: "Mesainos", city: "Chios", area: "Mesta village", cuisine: "Traditional", description: "The other Mesta taverna, square-side, popular with locals.", why: "Local choice in Mesta.", phone: "+30 2271 076050", address: "Mesta, near central square", price: "EUR 15 to 25 pp", hours: "12:00 to 23:00 daily", signatures: ["Mastic-flavored lamb", "Spoon sweets", "Local cheese pies"], vibe: "Village square", bestFor: ["Lunch alternative in Mesta"], reservations: "Walk-in", website: "" },
    { name: "Roussiko", city: "Chios", area: "Pyrgi village", cuisine: "Local Chian", description: "Family-run, in the painted village of Pyrgi. The grandmother is in the kitchen.", why: "Word-of-mouth favorite.", phone: "+30 2271 072690", address: "Pyrgi village center", price: "EUR 12 to 22 pp", hours: "12:00 to 22:00 daily", signatures: ["Stuffed cabbage rolls", "Lamb stew", "Garden vegetables"], vibe: "Family kitchen", bestFor: ["Lunch in Pyrgi"], reservations: "Walk-in", website: "" },
    { name: "Pyrgos Avgonima", city: "Chios", area: "Avgonima village", cuisine: "Mountain taverna", description: "Stone-built taverna in the mountain village of Avgonima, with a sunset-facing terrace over the valley.", why: "Often called the best sunset dining spot on the island.", phone: "+30 2271 042175", address: "Avgonima village", price: "EUR 18 to 30 pp", hours: "12:00 to 23:00, summer daily", signatures: ["Lamb chops grilled over wood", "Mountain salad", "Honey-mastiha dessert"], vibe: "Mountain terrace, sunset", bestFor: ["Mountain-day lunch"], reservations: "Recommended", website: "" },
    { name: "Oi Myloi", city: "Chios", area: "Avgonima area", cuisine: "Traditional", description: "Garden taverna with windmills on the property. Quiet, shaded, traditional menu.", why: "Local favorite, often quieter than Pyrgos.", phone: "+30 2271 032247", address: "Near Avgonima", price: "EUR 15 to 25 pp", hours: "12:00 to 22:00", signatures: ["Garden vegetables", "Cheese pies", "Stuffed peppers"], vibe: "Garden, shaded", bestFor: ["Mountain-day lunch"], reservations: "Walk-in", website: "" },
    { name: "Yperion", city: "Chios", area: "Chios Town", cuisine: "Modern Greek", description: "Newer entry, modern Greek with a focus on Aegean ingredients. Good plating, smart wine list.", why: "Strong reviews from food publications.", phone: "+30 2271 044566", address: "Chios Town center", price: "EUR 20 to 35 pp", hours: "19:00 to 24:00, closed Tuesdays", signatures: ["Grouper carpaccio", "Slow-cooked goat", "Seasonal vegetable plates"], vibe: "Modern", bestFor: ["Quieter dinner"], reservations: "Recommended", website: "" },

    /* CRETE */
    { name: "Christoforos", city: "Crete", area: "Chania Old Harbor (end past the mosque)", cuisine: "Traditional Cretan", description: "Long-running family taverna at the far end of the Venetian harbor, past the mosque. Famous for traditional Cretan cuisine. The locals' end-of-the-harbor pick.", why: "Maria's strong recommendation. The classic Chania harbor meal.", phone: "", address: "End of Akti Tombazi past the mosque, Chania Old Harbor", price: "EUR 25 to 40 pp", hours: "12:00 to 24:00 daily", signatures: ["Cretan lamb", "Stuffed vegetables", "Local cheese plates"], vibe: "Traditional, harborfront", bestFor: ["Classic Cretan dinner"], reservations: "Recommended weekends", website: "" },
    { name: "Salis", city: "Crete", area: "Chania Old Harbor", cuisine: "Modern Cretan, seafood fusion", description: "Polished modern Cretan on the harbor front, with a great Cretan-fusion menu and excellent seafood. Maria's note: love the lavraki, and the family knows the owners. Partners with the Manousakis Nostos Winery family.", why: "Michelin Guide listed.", phone: "+30 2821 105168", address: "Akti Tombazi 16, Chania Old Harbor", price: "EUR 30 to 50 pp", hours: "12:00 to 24:00 daily", signatures: ["Lavraki (sea bass)", "Snails Bourbouristoi", "Slow-cooked goat", "Cretan cheese plate"], vibe: "Refined, harbor view", bestFor: ["Special night", "Seafood dinner"], reservations: "Required", website: "https://www.salischania.gr" },
    { name: "Apostolis", city: "Crete", area: "Chania Old Harbor", cuisine: "Seafood", description: "Long-standing harbor taverna famous for fresh seafood. Whole fish by weight, octopus, calamari.", why: "Maria's recommendation. Original harbor seafood house.", phone: "", address: "Akti Enoseos, Chania Old Harbor", price: "EUR 25 to 45 pp", hours: "12:00 to 24:00 daily", signatures: ["Whole grilled fish", "Octopus", "Calamari"], vibe: "Harborfront, classic", bestFor: ["Fish dinner"], reservations: "Recommended", website: "" },
    { name: "Ta Neoria", city: "Crete", area: "Chania Old Harbor", cuisine: "Seafood, fresh catch", description: "Another harbor seafood spot, known for very fresh fish. A Maria family favorite, specifically Kostas's pick.", why: "Personal recommendation from the Maria/Kostas Chania circle.", phone: "", address: "Akti Enoseos, Chania Old Harbor", price: "EUR 25 to 40 pp", hours: "12:00 to 24:00 daily", signatures: ["Fresh catch of the day", "Grilled octopus", "Seafood meze"], vibe: "Harborfront, fresh-fish focus", bestFor: ["Seafood lunch or dinner"], reservations: "Walk-in works", website: "" },
    { name: "Ta Chalkina", city: "Crete", area: "Chania Old Harbor", cuisine: "Cretan, meat-focused, live music", description: "Harbor-side restaurant with a lyra player most nights. Best for pork and beef dishes. Maria's note: skip the lamb chops, they disappoint here. Call ahead to find out which nights musicians are performing for the best traditional Cretan music.", why: "Best Chania music-dinner combo.", phone: "+30 2821 041570", address: "Akti Tombazi 29, Chania", price: "EUR 25 to 40 pp", hours: "12:00 to 24:00 daily", signatures: ["Pork dishes", "Beef stifado", "Cretan pilafi", "Live lyra music"], vibe: "Lively, harbor, live music", bestFor: ["Group dinner with music"], reservations: "Recommended, ask about music schedule", website: "https://www.ta-chalkina.gr" },
    { name: "Zepos", city: "Crete", area: "Chania Old Harbor", cuisine: "Traditional Cretan, small plates", description: "Harbor taverna known for small plate options and traditional Cretan cooking. Order many things, share, drink raki.", why: "Maria family recommendation. Strong small-plate format for sharing.", phone: "", address: "Akti Enoseos, Chania Old Harbor", price: "EUR 20 to 35 pp", hours: "12:00 to 24:00 daily", signatures: ["Cretan mezedes platter", "Local cheese", "Snails", "Raki"], vibe: "Traditional, small-plate sharing", bestFor: ["Group meze night"], reservations: "Recommended", website: "" },
    { name: "Spilio Taverna", city: "Crete", area: "Above Falassarna beach", cuisine: "Traditional Cretan", description: "Mountain road taverna above Falassarna beach, run by two siblings. Homemade traditional Cretan food with amazing views over the bay.", why: "Maria's strong recommendation. Family-run.", phone: "", address: "Road above Falassarna beach", price: "EUR 18 to 30 pp", hours: "12:00 to 22:00, summer daily", signatures: ["Homemade Cretan classics", "Garden vegetables", "Local lamb"], vibe: "Mountain road, view, family-run", bestFor: ["Lunch on the Falassarna day"], reservations: "Walk-in", website: "" },
    { name: "Tamam", city: "Crete", area: "Chania Old Town", cuisine: "Cretan with Anatolian influence", description: "Restaurant inside a former 16th-century Turkish bath, with vaulted ceilings and a hidden courtyard.", why: "Michelin Guide listed.", phone: "+30 2821 096080", address: "Zampeliou 49, Chania Old Town", price: "EUR 20 to 35 pp", hours: "19:00 to 24:00 daily", signatures: ["Lamb with quince", "Smoked aubergine", "Sea bass in vine leaves"], vibe: "Vaulted ceilings, historic", bestFor: ["Special Chania dinner"], reservations: "Required, days ahead in summer", website: "https://www.tamamchania.com" },
    { name: "To Maridaki", city: "Crete", area: "Chania Old Town", cuisine: "Seafood meze, classic", description: "Loud, crowded, beloved, on a side street with tables on the cobbles. Fried smelt, grilled octopus, raki on the house.", why: "Constant local recommendation.", phone: "+30 2821 008880", address: "Daskalogianni 33, Chania", price: "EUR 20 to 35 pp", hours: "12:00 to 24:00 daily", signatures: ["Fried smelt (maridaki)", "Grilled octopus", "Dakos salad"], vibe: "Loud, lively, on the cobbles", bestFor: ["Classic Chania meal"], reservations: "Walk-in, expect a wait", website: "" },
    { name: "Well of the Turk", city: "Crete", area: "Chania Old Town (Splantzia)", cuisine: "Mediterranean with Levantine touches", description: "Romantic restaurant in the former Turkish quarter, around an actual Ottoman well in the courtyard. Live oud music some nights.", why: "Recommended by Conde Nast.", phone: "+30 2821 054547", address: "Kalinikou Sarpaki 1 to 3, Chania", price: "EUR 25 to 45 pp", hours: "19:00 to 24:00, closed Sundays", signatures: ["Lamb shoulder slow-roasted", "Hummus with confit lamb", "Smoked aubergine"], vibe: "Courtyard, intimate", bestFor: ["Quieter group dinner"], reservations: "Required", website: "" },
    { name: "Kariatis", city: "Crete", area: "Chania Old Harbor (Plateia Katechaki)", cuisine: "Italian-Greek", description: "Italian-Greek crossover, the place to go when someone wants pizza or pasta. Wood-fired pizza, fresh pasta, harbor view.", why: "Best pizza in Chania.", phone: "+30 2821 055600", address: "Plateia Katechaki 12, Chania", price: "EUR 25 to 40 pp", hours: "12:30 to 24:00 daily", signatures: ["Margherita pizza", "Fresh tagliatelle with truffle", "Tiramisu"], vibe: "Italian-Greek, harbor view", bestFor: ["Pasta night"], reservations: "Recommended", website: "" },
    { name: "Mikrolimano", city: "Crete", area: "Nea Chora (Chania)", cuisine: "Seafood", description: "Family-run seafood taverna right on Nea Chora beach. Toes-in-sand tables, fish from the morning.", why: "Best Nea Chora seafood for value.", phone: "+30 2821 057062", address: "Akti Papanikoli 19, Nea Chora, Chania", price: "EUR 20 to 35 pp", hours: "12:00 to 24:00 daily", signatures: ["Whole grilled fish", "Octopus", "Calamari"], vibe: "Beachfront, casual", bestFor: ["Seafood night"], reservations: "Walk-in", website: "" },
    { name: "Ta Meraklikia", city: "Crete", area: "Kato Daratso (Chania suburbs)", cuisine: "Traditional Cretan", description: "Neighborhood taverna in Kato Daratso. Local, cheap, traditional. The post-Samaria 'don't make me drive' option.", why: "Local find.", phone: "+30 2821 091900", address: "Kato Daratso, Chania", price: "EUR 15 to 25 pp", hours: "12:00 to 24:00 daily", signatures: ["Lamb chops", "Wild greens", "House wine"], vibe: "Neighborhood, no frills", bestFor: ["Easy night"], reservations: "Walk-in", website: "" },
    { name: "Oasis Souvlaki", city: "Crete", area: "Chania center", cuisine: "Souvlaki, fast", description: "The go-to souvlaki in Chania. Pork or chicken in pita with tzatziki, fries, tomato. EUR 4 a wrap. Open late.", why: "Local favorite, always packed late night.", phone: "+30 2821 088666", address: "Mousouron 2, Chania", price: "EUR 5 to 12 pp", hours: "11:00 to 04:00 daily", signatures: ["Pork souvlaki pita", "Chicken gyros", "Fries"], vibe: "Fast, casual, late", bestFor: ["Lunch on the move", "Late night"], reservations: "No", website: "" },
    { name: "Pelagos Marathi", city: "Crete", area: "Marathi beach (Akrotiri peninsula)", cuisine: "Beachfront seafood", description: "Toes-in-sand seafood taverna on Marathi beach, 20 minutes from Chania. Post-swim lunch destination.", why: "Top of Chania-area beachfront lunch lists.", phone: "+30 2821 064004", address: "Marathi beach, Akrotiri", price: "EUR 25 to 40 pp", hours: "12:00 to 22:00, summer daily", signatures: ["Whole grilled bream", "Fish soup", "Greek salad"], vibe: "Beach taverna", bestFor: ["Lunch on Akrotiri day"], reservations: "Recommended summer weekends", website: "" },
    { name: "I Koukouvagia", city: "Crete", area: "Halepa (Chania suburb on a hill)", cuisine: "Pastry shop and cafe with sunset view", description: "Pastry shop and café on a hill in Halepa, the historic Chania suburb of grand mansions. One of the best sunset views in the area. Famous for sweets, coffee, and the view.", why: "Maria's recommendation. Halepa was Eleftherios Venizelos's home and the German WWII cemetery is nearby, adding historical layers.", phone: "", address: "Halepa hill, Chania", price: "EUR 5 to 15 pp", hours: "09:00 to 24:00 daily", signatures: ["Greek coffee", "Traditional sweets", "Sunset view"], vibe: "Hilltop cafe, sunset", bestFor: ["Late afternoon coffee with view"], reservations: "Walk-in", website: "" },
    { name: "Tara Agia Roumeli", city: "Crete", area: "Agia Roumeli (end of Samaria Gorge)", cuisine: "Taverna", description: "Where the Samaria hikers stagger after 16 km. Family-run, on the water, simple Cretan menu.", why: "The Samaria hiker's reward.", phone: "+30 2825 091231", address: "Agia Roumeli waterfront", price: "EUR 15 to 25 pp", hours: "11:00 to 22:00, summer daily", signatures: ["Grilled fish", "Greek salad", "Cold Mythos beer"], vibe: "Post-hike paradise", bestFor: ["Lunch after Samaria"], reservations: "No", website: "" },
    { name: "Innachorion", city: "Crete", area: "Elos village", cuisine: "Mountain Cretan", description: "Mountain village taverna on the road back from Elafonisi. Whole roast chestnut-fed pork, wild greens, raki from the still.", why: "Cretan-blog favorite for the post-Elafonisi stop.", phone: "+30 2822 061111", address: "Elos main square", price: "EUR 15 to 25 pp", hours: "12:00 to 22:00, summer daily", signatures: ["Roast pork", "Stamnagathi", "Local cheese"], vibe: "Mountain village", bestFor: ["Late lunch returning from Elafonisi"], reservations: "Walk-in", website: "" }
  ],

  /* ========== SITES ========== */
  sites: [
    /* ATHENS */
    { name: "Acropolis", city: "Athens", type: "Archaeological site, UNESCO", description: "The fortified rock at the center of Athens, crowned by the Parthenon (447 to 432 BC). Also the Erechtheion with the Caryatid porch, the Propylaia, and the Temple of Athena Nike.", cost: "EUR 30 pp, timed entry", hours: "08:00 to 20:00 summer (last entry 19:00)", whenToVisit: "08:00 first slot for cool and few crowds.", website: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2384", tickets: "https://hhticket.gr", tips: "Modest dress. No selfie sticks. Bring water. Shoes with grip." },
    { name: "Acropolis Museum", city: "Athens", type: "Museum", description: "Modern museum across from the south slope. Houses the original sculptures from the site. The glass top floor frames the actual Parthenon.", cost: "EUR 20 pp", hours: "09:00 to 20:00 (Fridays to 22:00)", website: "https://www.theacropolismuseum.gr", tickets: "https://etickets.theacropolismuseum.gr", tips: "Top floor cafe has Parthenon views." },
    { name: "Ancient Agora and Temple of Hephaestus", city: "Athens", type: "Archaeological site", description: "The civic and commercial heart of ancient Athens. The Temple of Hephaestus (449 BC) is the best-preserved Doric temple in Greece, nearly intact.", cost: "EUR 10 pp", hours: "08:00 to 20:00", website: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2485", tickets: "https://hhticket.gr", tips: "Shaded paths, easier in heat than the Acropolis." },
    { name: "Roman Agora and Tower of the Winds", city: "Athens", type: "Archaeological site", description: "The Roman-era marketplace. The Tower of the Winds (1st c. BC) is an octagonal marble clocktower, the world's oldest meteorological station.", cost: "EUR 8 pp", hours: "08:00 to 20:00", website: "https://odysseus.culture.gr", tickets: "https://hhticket.gr", tips: "30 to 45 minute visit." },
    { name: "National Archaeological Museum", city: "Athens", type: "Museum", description: "World-class collection of Greek antiquities. The Mask of Agamemnon, the Jockey of Artemision, the Antikythera Mechanism. Allow 2.5 to 3 hours.", cost: "EUR 12 pp", hours: "09:00 to 20:00, closed Tue mornings", website: "https://www.namuseum.gr", tickets: "Buy at the door or online", tips: "Metro Line 1 (green) to Viktoria." },
    { name: "Olympieion (Temple of Olympian Zeus)", city: "Athens", type: "Archaeological site", description: "The largest temple ever built in Greece. Started in the 6th century BC, finished by Hadrian. Only 15 of the original 104 columns remain (17m tall).", cost: "EUR 8 pp", hours: "08:00 to 20:00", website: "https://odysseus.culture.gr", tickets: "https://hhticket.gr", tips: "30 minute visit." },
    { name: "Panathenaic Stadium", city: "Athens", type: "Historical site", description: "The only stadium in the world built entirely of marble. Site of the first modern Olympic Games (1896).", cost: "EUR 5 pp, audio guide included", hours: "08:00 to 19:00", website: "https://www.panathenaicstadium.gr", tickets: "Buy at the gate", tips: "Climb to the top of the stands for the view." },
    { name: "Benaki Museum of Greek Culture", city: "Athens", type: "Museum", description: "Greek decorative arts from prehistory to the 20th century. Three floors. Excellent café on the roof.", cost: "EUR 12 pp", hours: "10:00 to 18:00 (Thu to 24:00), closed Tuesdays", website: "https://www.benaki.org", tickets: "At the door", tips: "Free on Thursdays." },
    { name: "Cape Sounion, Temple of Poseidon", city: "Athens", type: "Archaeological site", description: "5th century BC marble temple on a cliff over the Aegean, 70 km south. Famous for its sunset.", cost: "EUR 20 pp", hours: "09:30 to sunset", website: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2476", tickets: "https://hhticket.gr", tips: "Arrive 45 min before sunset." },

    /* CHIOS */
    { name: "Nea Moni Monastery (UNESCO)", city: "Chios", type: "Religious site, UNESCO", description: "11th-century monastery 14 km into the mountains from Chios Town. The katholikon has some of the finest surviving Byzantine mosaics anywhere. Active monastery.", cost: "EUR 4 pp", hours: "08:00 to 13:00 and 16:00 to 20:00 daily", website: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=1822", tickets: "At the door", tips: "Modest dress required." },
    { name: "Mastic Museum", city: "Chios", type: "Museum", description: "Modern museum on the cultivation, harvesting, and processing of mastic. Run by the Piraeus Bank Group Cultural Foundation.", cost: "EUR 6 pp", hours: "10:00 to 18:00, closed Tuesdays", website: "https://piop.gr/en/mastiha-museum", tickets: "At the door", tips: "1 hour visit. Shop downstairs has the best mastic product selection." },
    { name: "Olympi Cave (Sykia Cave)", city: "Chios", type: "Cave", description: "Underground chamber discovered in 1985 when a quarry blast opened the roof. Stalactites, columns, 60 meter deep chamber.", cost: "EUR 6 pp", hours: "11:00 to 18:00, closed Mondays", website: "", tickets: "At the entrance", tips: "Light layer, cave is 16C year-round." },
    { name: "Pyrgi (the painted village)", city: "Chios", type: "Historic village", description: "Medieval village in south Chios where every facade is decorated with xysta, a black-and-white geometric pattern scratched into wet plaster.", cost: "Free", hours: "Always open", website: "", tickets: "", tips: "Avoid midday in summer." },
    { name: "Mesta (medieval mastic village)", city: "Chios", type: "Historic village", description: "Best-preserved of the south Chios mastic villages. Built as a defensive fortress with houses fused into the outer wall.", cost: "Free", hours: "Always open", website: "", tickets: "", tips: "No cars allowed in." },
    { name: "Anavatos (abandoned village)", city: "Chios", type: "Historic village (ruin)", description: "Vertical Byzantine village on a 300m cliff, abandoned after the 1822 Ottoman massacre. Called the Mystras of the Aegean.", cost: "Free", hours: "Always open", website: "", tickets: "", tips: "Real shoes, path is uneven." },
    { name: "Daskalopetra (Homer's Stone)", city: "Chios", type: "Historic site", description: "A massive boulder above Vrontados, traditionally said to be where Homer taught his students.", cost: "Free", hours: "Always open", website: "", tickets: "", tips: "Combine with a coffee in Vrontados harbor." },
    { name: "Justiniani Museum (Chios Castle)", city: "Chios", type: "Museum", description: "Inside the medieval Castle of Chios. Byzantine icons, frescoes, Venetian and Ottoman period artifacts.", cost: "EUR 2 pp", hours: "08:00 to 15:00, closed Mondays", website: "", tickets: "At the museum", tips: "Walk through the castle precinct after." },
    { name: "Korais Library", city: "Chios", type: "Library, museum", description: "One of the largest libraries in Greece. The Argenti Folklore Museum is in the same building, with Chiot traditional dress and folk art.", cost: "EUR 2 pp", hours: "08:00 to 14:00, closed Sundays", website: "https://koraeslibrary.gr", tickets: "At the door", tips: "45 minute stop." },

    /* CRETE */
    { name: "Samaria Gorge", city: "Crete", type: "National park, hike", description: "16 km gorge through the White Mountains, ending at the Libyan Sea. Begins at Omalos plateau (1230m) and descends through pine forest, past the abandoned Samaria village, through the Iron Gates where walls narrow to 4 meters and rise 300m. Strenuous, 4 to 7 hours, mostly downhill. Ends at Agia Roumeli, only reachable by foot or boat. Historically a strategic position for the Cretan resistance during WWII, where locals hid British soldiers and helped them escape after the German invasion of Crete.", cost: "EUR 10 pp entry, plus EUR 16 bus + EUR 15 ferry exit = ~EUR 41 pp total", hours: "06:00 to 14:00 last entry, May through October", website: "https://www.samaria.gr", tickets: "Pay at the gate", tips: "Real hiking shoes, 2L water minimum. Natural spring midway, no other amenities. Most tour companies on the Chania harbor sell packages with transport included." },
    { name: "Balos Lagoon", city: "Crete", type: "Beach, natural site", description: "Shallow turquoise lagoon between Cape Tigani and the Balos peninsula. Reached by ferry from Kissamos port or rough dirt road. Maria's tip: skip the large ferry and book a private or small cruise from the Chania harbor (boats anchored at the main Limani advertise multi-beach trips).", cost: "EUR 40 to 45 pp standard ferry, EUR 80 to 150 pp private charter, EUR 1 lagoon entry", hours: "Ferry departs Kissamos 10:30, returns 17:45", website: "https://www.cretandailycruises.com", tickets: "Book ferry online or charter at Chania harbor", tips: "Water shoes essential." },
    { name: "Elafonisi Beach", city: "Crete", type: "Beach", description: "Pink-sand beach (color from crushed shells) on the southwest tip. Shallow lagoon, perfect for non-swimmers. Protected Natura 2000 site. On the drive: several picturesque villages, plus a chapel built into a cave reached by stairs cut into the mountainside.", cost: "Free, EUR 3 parking", hours: "Always open", website: "", tickets: "", tips: "73 km from Chania, 1.5 hr drive. Don't take sand home." },
    { name: "Chania Old Town", city: "Crete", type: "Historic quarter", description: "Venetian-era walled town built on the foundations of ancient Kydonia. The Venetian harbor with the lighthouse and Firkas Fortress, the cobbled lanes of Stivanadika, the Splantzia Turkish quarter. Beyond the harborfront, the winding cobblestone streets behind the harbor are filled with quiet shops and cafes tucked away, great for escaping the crowds.", cost: "Free", hours: "Always open", website: "", tickets: "", tips: "Park outside the walls and walk in." },
    { name: "Halepa neighborhood", city: "Crete", type: "Historic quarter", description: "Suburb of Chania on a hill east of the center, lined with grand 19th-century mansions, many built by foreign diplomats. The home of Eleftherios Venizelos, who led the revolution that liberated Crete from the Ottomans and later served as Prime Minister of Greece. The German cemetery for paratroopers killed in the WWII invasion of Crete (1941) is in the same neighborhood. The café I Koukouvagia on the hill has one of the best sunset views in town.", cost: "Free to walk", hours: "Always open", website: "", tickets: "", tips: "Late afternoon walk + sunset at I Koukouvagia + dinner in Old Town is the easy combo." },
    { name: "Manousakis Nostos Winery", city: "Crete", type: "Winery", description: "Family-run winery in Vatolakkos, 20 minutes from Chania. Ted Manousakis (who lives in northern Virginia) founded it; his daughter and son-in-law run it, with the son-in-law as chef. All food is sourced from their own land or locally. Tours, tastings, and a strong food menu. The Manousakis family are partners with the owners of the Salis restaurant in Chania harbor.", cost: "Tasting EUR 15 to 30 pp, food extra", hours: "11:00 to 22:00, summer daily", website: "https://nostoswines.com", tickets: "Book tour ahead", tips: "Half-day visit. Good rest-day option for non-hikers on Samaria day." },
    { name: "Maritime Museum of Crete", city: "Crete", type: "Museum", description: "Inside Firkas Fortress at the western end of the Chania harbor. Cretan naval history, models of Greek ships through the ages, photos of the 1941 Battle of Crete.", cost: "EUR 4 pp", hours: "09:00 to 16:00", website: "https://mar-mus-crete.gr", tickets: "At the door", tips: "1 hour visit." },
    { name: "Archaeological Museum of Chania", city: "Crete", type: "Museum", description: "Newly relocated to a purpose-built building outside the old town. Minoan to Roman finds from western Crete.", cost: "EUR 6 pp", hours: "08:30 to 16:00, closed Tuesdays", website: "https://amch.gr", tickets: "At the door", tips: "Roman mosaics in the lower gallery are the highlight." },
    { name: "Botanical Park & Gardens of Crete", city: "Crete", type: "Garden, walking park", description: "20 hectares of fruit trees, herbs, and medicinal plants in a steep ravine, with a creek and walking paths.", cost: "EUR 6.50 pp", hours: "09:00 to sunset, April to October", website: "https://www.botanical-park.com", tickets: "At the entrance", tips: "20 minutes from Chania. Comfortable walking shoes." },
    { name: "Agia Triada Monastery (Akrotiri)", city: "Crete", type: "Religious site", description: "17th-century Venetian-period monastery on the Akrotiri peninsula, surrounded by olive groves. Active monastery making its own olive oil and wine.", cost: "EUR 2.50 pp", hours: "08:00 to 19:00", website: "", tickets: "At the door", tips: "Modest dress. Buy a bottle of the monastery olive oil." }
  ],

  /* ========== BEACHES ========== */
  beaches: [
    /* CHIOS */
    { name: "Karfas", city: "Chios", distance: "8 km south of Chios Town", surface: "Sand", facilities: "Sun loungers, tavernas, beach bars, lifeguard summer weekends", description: "Closest sand beach to Chios Town. Family-friendly, organized, with a long beach promenade.", vibe: "Family-friendly, busy, full-service", bestFor: ["First beach day"], website: "" },
    { name: "Megas Limnionas", city: "Chios", distance: "10 km south", surface: "Pebble and sand", facilities: "A few tavernas, some loungers", description: "Just south of Karfas, smaller and quieter. Local crowd.", vibe: "Mellow, local", bestFor: ["Quieter swim"], website: "" },
    { name: "Mavra Volia (black volcanic pebbles)", city: "Chios", distance: "30 km south (Emporios)", surface: "Small black volcanic pebbles", facilities: "None, bring water and shoes", description: "Three coves of jet-black volcanic pebbles, formed by an ancient eruption. Otherworldly at golden hour.", vibe: "Dramatic, quiet, alien", bestFor: ["Photography"], website: "" },
    { name: "Komi", city: "Chios", distance: "30 km south", surface: "Long sand beach", facilities: "Multiple tavernas, loungers, water sports", description: "Long sandy stretch on the southeast coast, popular with Greek families.", vibe: "Family-friendly", bestFor: ["Combining with mastic villages day"], website: "" },
    { name: "Lithi", city: "Chios", distance: "30 km west", surface: "Sand and pebble", facilities: "Three seafront tavernas", description: "Calm bay on the west coast, with a small fishing village.", vibe: "Fishing village, quiet", bestFor: ["Mountain-day afternoon swim"], website: "" },
    { name: "Elinda", city: "Chios", distance: "27 km west", surface: "Pebble", facilities: "Minimal, one small beach bar", description: "Crescent-shaped cove between two headlands, with calm water.", vibe: "Cove, peaceful", bestFor: ["Quiet west-coast option"], website: "" },
    { name: "Managros", city: "Chios", distance: "45 km northwest", surface: "Sand", facilities: "One taverna", description: "1.5 km long sandy beach, almost empty even in June.", vibe: "Long, empty, wild", bestFor: ["Volissos day"], website: "" },
    { name: "Nagos", city: "Chios", distance: "30 km north", surface: "Pebble", facilities: "Tavernas, springs feed the bay", description: "Lush, green setting with mountain springs running into the sea.", vibe: "Lush, mountain-meets-sea", bestFor: ["North Chios day"], website: "" },

    /* CRETE */
    { name: "Nea Chora", city: "Crete", distance: "10 to 15 min walk west of Chania harbor", surface: "Sand", facilities: "Loungers, tavernas, lifeguard summer, showers", description: "Chania's city beach, popular because it's a short walk from the Old Harbor. Sandy, with lots of tavernas and cafes close by.", vibe: "City beach, convenient", bestFor: ["Easy mornings from Old Town"], website: "" },
    { name: "Kalamaki", city: "Crete", distance: "About 10 min from Chania harbor, on main bus line", surface: "Sand", facilities: "Tavernas behind it, easy access", description: "Small sandy lagoon with relatively shallow, clear water. Nice tavernas behind the beach. Easy reach from the city via the main bus line, no car needed.", vibe: "Small lagoon, calm water", bestFor: ["Half-day swim", "No-car option"], website: "" },
    { name: "Iguana Beach", city: "Crete", distance: "West of Chania", surface: "Sand", facilities: "Beach bar, loungers", description: "Smaller beach west of Chania, less crowded than Agia Marina or Platanias.", vibe: "Mellow, less touristy", bestFor: ["Beach day with fewer crowds"], website: "" },
    { name: "Loutraki Beach", city: "Crete", distance: "West of Chania (near Kolymbari)", surface: "Sand and pebble", facilities: "Tavernas, loungers", description: "Quiet beach near Kolymbari, on the western edge of the Chania bay. Clear water, less developed.", vibe: "Quieter, scenic", bestFor: ["Calm swim"], website: "" },
    { name: "Marathi", city: "Crete", distance: "20 km east (Akrotiri peninsula)", surface: "Sand", facilities: "Tavernas, loungers, sheltered cove", description: "Two adjacent coves on the Akrotiri peninsula, with fine sand and shallow water. Pelagos Marathi taverna for lunch.", vibe: "Sheltered cove, family", bestFor: ["Akrotiri day lunch + swim"], website: "" },
    { name: "Agia Marina", city: "Crete", distance: "About 9 km west of Chania", surface: "Sand", facilities: "Full tourist services, loungers, restaurants, water sports", description: "Long sandy beach in a developed tourist village west of Chania. Full amenities, watersports, family-oriented hotels and restaurants.", vibe: "Developed, family-tourist", bestFor: ["Full-service beach day"], website: "" },
    { name: "Platanias", city: "Crete", distance: "11 km west of Chania", surface: "Sand", facilities: "Full tourist services, restaurants, bars, water sports", description: "Larger beach town west of Chania, with a long sandy beach and lively beachfront strip of restaurants and bars. Lots of nightlife.", vibe: "Tourist town, lively", bestFor: ["Beach + lively evening"], website: "" },
    { name: "Stavros (Zorba beach)", city: "Crete", distance: "17 km north (Akrotiri)", surface: "Sand and small pebble", facilities: "Tavernas, loungers", description: "Filming location for Zorba the Greek (1964). A perfect lagoon-shape bay backed by a vertical mountain. Calm, clear, relatively shallow water.", vibe: "Cinematic, sheltered", bestFor: ["Akrotiri day"], website: "" },
    { name: "Seitan Limania", city: "Crete", distance: "22 km northeast (Akrotiri)", surface: "Pebble", facilities: "None", description: "Dramatic fjord-like bay cut into vertical cliffs. Steep 15 minute descent down a goat path.", vibe: "Wild, dramatic, hike-in", bestFor: ["Adventurous swimmers"], website: "" },
    { name: "Balos Lagoon", city: "Crete", distance: "60 km northwest", surface: "White sand and turquoise lagoon", facilities: "One beach taverna, minimal shade", description: "Possibly the most famous beach in Greece. Reached by ferry from Kissamos (90 min). Maria's tip: book a private or small charter boat from Chania harbor instead of the large crowded ferry.", vibe: "Postcard, busy by midday", bestFor: ["Full-day Balos trip"], website: "https://www.cretandailycruises.com" },
    { name: "Falassarna", city: "Crete", distance: "55 km west (about 30 min drive)", surface: "Long sand beach (3 km)", facilities: "Tavernas, loungers, water sports, Spilio Taverna on the road above", description: "Long western beach with clear turquoise water and ancient ruins nearby. Famous for sunsets. Don't miss Spilio Taverna on the road above, run by two siblings, with homemade traditional Cretan cuisine and amazing views.", vibe: "Long, dramatic sunsets", bestFor: ["Sunset", "Day trip"], website: "" },
    { name: "Elafonisi", city: "Crete", distance: "73 km southwest", surface: "Pink sand", facilities: "Loungers, snack bar, minimal shade", description: "Famous pink-sand beach with a shallow lagoon. Sandbar connects to a small island. Natura 2000 protected. On the drive: several picturesque villages, plus a chapel built into a cave reached by stairs cut into the mountainside.", vibe: "Postcard, family-friendly water", bestFor: ["Day trip"], website: "" },
    { name: "Kedrodasos", city: "Crete", distance: "75 km southwest (next to Elafonisi)", surface: "Sand, cedar trees", facilities: "None, wild", description: "10 minute walk south from Elafonisi parking. Sand-and-cedar trees, no facilities, almost no people. The local escape from Elafonisi crowds.", vibe: "Wild, quiet", bestFor: ["Quiet alternative to Elafonisi"], website: "" }
  ],

  /* ========== PACKING ========== */
  packing: [
    { section: "Documents and money", items: ["Passport, valid 6 months past trip", "International Driving Permit (for car rentals)", "Credit cards (notify bank of travel dates)", "Backup credit card stored separately", "Travel insurance card and policy number", "Cash EUR for small tavernas, parking, tips", "Photo or copy of passport in cloud drive", "Travel confirmations (printed or downloaded)"] },
    { section: "Clothing, 5 to 6 days worth and wash once", items: ["5 t-shirts (merino or quick-dry, NOT cotton, dries overnight)", "1 short-sleeve button-down (linen, doubles for nicer dinners and monastery cover)", "2 pairs shorts (one athletic, one chino)", "1 pair lightweight pants (linen, covers dinner + monastery modest dress)", "1 pair swim trunks that double as athletic shorts", "7 pairs underwear + 4 pairs no-show socks + 1 pair hiking socks", "1 light layer: linen overshirt or thin cardigan"] },
    { section: "Shoes, 2 pairs only", items: ["Trail runners (handle Samaria AND every other day)", "Lightweight sandals (Bedrock, Tevas, Birks) for beach and casual dinner"] },
    { section: "Toiletries (refill on arrival)", items: ["Travel-size shampoo, body wash, toothpaste (or buy in Greece)", "Toothbrush, deodorant, razor", "Reef-safe sunscreen SPF 50 (BUY IN GREECE, cheaper at pharmacies)", "Aftersun or aloe", "Prescription medications (carry-on, with scripts)", "Basic first aid: ibuprofen, antihistamines, Imodium", "Lip balm with SPF"] },
    { section: "Tech (one of each)", items: ["Phone + cable + EU adapter (Type C or F)", "10,000 mAh battery pack", "Wired or wireless earbuds", "eSIM or local SIM plan (Airalo, Cosmote)", "Offline maps downloaded"] },
    { section: "Day kit", items: ["Packable daypack 15 to 20L", "Collapsible water bottle 1L", "Wide-brim packable hat", "Sunglasses + case", "Quick-dry travel towel"] }
  ],

  /* ========== PHRASES ========== */
  phrases: [
    { section: "Essentials", items: [ { gr: "Γειά σας", trans: "Yia sas", en: "Hello / goodbye, formal" }, { gr: "Γειά", trans: "Yia", en: "Hi, informal" }, { gr: "Καλημέρα", trans: "Kalimera", en: "Good morning" }, { gr: "Καλησπέρα", trans: "Kalispera", en: "Good evening" }, { gr: "Καληνύχτα", trans: "Kalinichta", en: "Good night" }, { gr: "Παρακαλώ", trans: "Parakalo", en: "Please / you're welcome" }, { gr: "Ευχαριστώ", trans: "Efharisto", en: "Thank you" }, { gr: "Ναί", trans: "Ne", en: "Yes" }, { gr: "Όχι", trans: "Ohi", en: "No" } ] },
    { section: "Polite", items: [ { gr: "Συγγνώμη", trans: "Signomi", en: "Excuse me / sorry" }, { gr: "Με συγχωρείτε", trans: "Me sinhorite", en: "I beg your pardon" }, { gr: "Μιλάτε αγγλικά;", trans: "Milate anglika?", en: "Do you speak English?" }, { gr: "Δεν καταλαβαίνω", trans: "Den katalaveno", en: "I don't understand" } ] },
    { section: "Dining", items: [ { gr: "Έναν λογαριασμό παρακαλώ", trans: "Enan logariasmo parakalo", en: "The bill, please" }, { gr: "Στην υγειά μας", trans: "Stin iyia mas", en: "Cheers" }, { gr: "Νερό", trans: "Nero", en: "Water" }, { gr: "Κρασί", trans: "Krasi", en: "Wine" }, { gr: "Μπίρα", trans: "Bira", en: "Beer" }, { gr: "Ψωμί", trans: "Psomi", en: "Bread" }, { gr: "Νόστιμο", trans: "Nostimo", en: "Delicious" } ] },
    { section: "Directions and basics", items: [ { gr: "Πού είναι...;", trans: "Pou ine...?", en: "Where is...?" }, { gr: "Πόσο κάνει;", trans: "Poso kanei?", en: "How much?" }, { gr: "Αριστερά / Δεξιά", trans: "Aristera / Dexia", en: "Left / Right" }, { gr: "Ευθεία", trans: "Efthia", en: "Straight" }, { gr: "Παραλία", trans: "Paralia", en: "Beach" }, { gr: "Λιμάνι", trans: "Limani", en: "Port" } ] },
    { section: "Numbers", items: [ { gr: "Ένα, δύο, τρία", trans: "Ena, dyo, tria", en: "1, 2, 3" }, { gr: "Τέσσερα, πέντε, έξι", trans: "Tessera, pente, exi", en: "4, 5, 6" }, { gr: "Επτά, οκτώ, εννέα, δέκα", trans: "Epta, okto, ennea, deka", en: "7, 8, 9, 10" } ] }
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
    "Hand gestures: open palm pushed toward someone (moutza) is offensive."
  ],

  /* ========== FORM CONFIG ========== */
  form: {
    title: "Trip preferences and questions",
    intro: "Tell Athan your preferences so he can plan choices for the group. Submissions go directly to athan.skedros@gmail.com.",
    fields: [
      { type: "text", name: "name", label: "Your name", required: true },
      { type: "email", name: "email", label: "Email", required: true },
      { type: "tel", name: "phone", label: "Phone (optional)", required: false },
      { type: "select", name: "joining", label: "Which dates can you join?", options: ["Full trip (Jun 5-21)", "Athens leg 1 only", "Chios only", "Crete only", "Athens leg 2 only", "Partial, will detail in notes"], required: true },
      { type: "checkbox", name: "dietary", label: "Dietary needs (check all that apply)", options: ["No restrictions", "Vegetarian", "Vegan", "Gluten-free", "Dairy-free", "Pescatarian", "Nut allergy", "Shellfish allergy", "Other (note below)"] },
      { type: "checkbox", name: "athens_interests", label: "Athens, which most interest you?", options: ["Acropolis + museums", "Plaka food + walks", "Sunset rooftops", "Cape Sounion", "Markets and shopping", "Skip Athens extras, just basics"] },
      { type: "checkbox", name: "chios_interests", label: "Chios, which most interest you?", options: ["Mastic villages (Pyrgi, Mesta)", "Nea Moni monastery", "Beach days", "Mountain villages + Anavatos", "Volissos / northwest", "Inousses day trip", "All of it"] },
      { type: "radio", name: "samaria", label: "Samaria Gorge on Jun 17 (16 km strenuous downhill hike)?", options: ["I'm hiking the gorge", "I'm doing the relaxed day instead", "Undecided, will choose closer"], required: true },
      { type: "checkbox", name: "crete_interests", label: "Crete, which most interest you?", options: ["Chania Old Town", "Balos Lagoon day trip", "Elafonisi pink beach", "Akrotiri beaches", "Botanical Park", "Manousakis winery", "Pool / rest days", "Cooking class or private chef"] },
      { type: "select", name: "spending_comfort", label: "Spending comfort for restaurants", options: ["I'll go with the group, no preference", "Modest, prefer EUR 15-25 dinners", "Mid-range, EUR 25-40 dinners", "Happy to splurge for special meals"] },
      { type: "textarea", name: "notes", label: "Anything else?", placeholder: "Requests, concerns, things to know..." }
    ],
    successMessage: "Thanks. Your responses have been sent to Athan.",
    errorMessage: "Something went wrong. Please email athan.skedros@gmail.com directly."
  }

};
