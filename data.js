/* =========================================================================
   TRIP DATA, Greece 2026
   v3: stays / budget / flights removed. Maria's Chania additions integrated.
   Sites and beaches grouped by city in the renderer.
   ========================================================================= */

window.TRIP_DATA = {

  meta: {
    title: "Greece 2026",
    subtitle: "Athens, Chios, Crete",
    dateRange: "June 6 to June 21, 2026",
    travelers: "7 adults",
    countdownTarget: "2026-06-06T00:00:00",
    intro: "Sixteen days across the Greek mainland and islands. Athens for the ancients and late nights, Chios for mastic villages and the quiet Aegean, Crete for wild beaches and Chania's Venetian harbor. A reference site, not a booking site: travel arrangements are handled separately.",
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
        notes: "Daytime sailings depart Piraeus around 7:00 AM to 8:00 AM. Overnight sailings depart late evening with cabin options. Book a cabin for the overnight or you will not sleep. Board 60 minutes before departure. Piraeus Gate E1 or E2 (confirm on your ticket)."
      },
      {
        leg: "Crete (Chania) to Athens",
        date: "Jun 19, 2026",
        operator: "ANEK Lines or Minoan Lines",
        site: "https://www.anek.gr",
        duration: "8 to 9 hours overnight",
        cost: "EUR 40 to 150 pp",
        notes: "Departs Souda port (15 min from Chania) around 9:00 PM, arrives Piraeus around 6:00 AM. Cabins recommended for sleep."
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

  stays: [
    {
      leg: "Athens, arrival leg",
      name: "Alke Homme apartment",
      city: "Athens",
      neighborhood: "Makrygianni, under the Acropolis",
      address: "Lempesi 6, Makrygianni, Athens",
      phone: "",
      checkIn: "Saturday, Jun 6, 2026",
      checkOut: "Tuesday, Jun 9, 2026",
      checkInTime: "Per Vrbo host instructions",
      nights: 3,
      booking: "Vrbo #5563-3418276611, via the Lohse family",
      links: [
        { label: "Vrbo trip page", url: "https://www.vrbo.com/trips/egti-197-W8I-26QX" },
        { label: "Google Maps", url: "https://www.google.com/maps/search/Lempesi+6+Athens" }
      ]
    },
    {
      leg: "Chios",
      name: "Grecian Castle Hotel",
      city: "Chios",
      neighborhood: "Enoseos Avenue, seaside",
      address: "Enoseos Avenue, Chios, Chios Island, 82100 Greece",
      phone: "+30 22710 44740",
      checkIn: "Tuesday, Jun 9, 2026",
      checkOut: "Sunday, Jun 14, 2026",
      checkInTime: "2:00 PM",
      checkOutTime: "11:00 AM",
      nights: 5,
      booking: "Hotels.com itinerary #73329640415083, 2 rooms suite",
      links: [
        { label: "Hotel website", url: "https://www.greciancastle.gr" },
        { label: "Google Maps", url: "https://www.google.com/maps/search/Grecian+Castle+Hotel+Chios" }
      ]
    },
    {
      leg: "Crete",
      name: "Vrbo villa in Agioi Apostoloi",
      city: "Chania (Crete)",
      neighborhood: "Agioi Apostoloi, 5 km west of Old Town",
      address: "Drakonianou 6, Agioi Apostoloi, Chania 73100",
      phone: "",
      checkIn: "Sunday, Jun 14, 2026",
      checkOut: "Friday, Jun 19, 2026",
      checkInTime: "Per Vrbo host instructions",
      nights: 5,
      booking: "Vrbo property 11694637, Unit 6738192. Host: Tsichlaki Maria (Be On Holidays)",
      links: [
        { label: "Vrbo listing", url: "https://www.vrbo.com/11694637ha" },
        { label: "Google Maps", url: "https://www.google.com/maps/search/Drakonianou+6+Agioi+Apostoloi+Chania" }
      ]
    },
    {
      leg: "Athens, departure leg",
      name: "Athens apartment, Syngrou Avenue",
      city: "Athens",
      neighborhood: "Koukaki / Neos Kosmos, south of the Acropolis",
      address: "Leoforos Sygrou 29, Athens 11743",
      phone: "",
      checkIn: "Friday, Jun 19, 2026",
      checkOut: "Sunday, Jun 21, 2026",
      checkInTime: "Per host instructions",
      nights: 2,
      booking: "",
      links: [
        { label: "Google Maps", url: "https://www.google.com/maps/search/Leoforos+Sygrou+29+Athens+11743" }
      ]
    }
  ],

  /* ICS calendar events: flights, check-ins, anchor activities */
  events: [
    { date: "2026-06-06", time: "10:35 AM", end: "11:35 AM", title: "Arrive ATH: United 1710 from Chicago", description: "John, Maria, Athan, Piper, Gigi land at Athens airport.", location: "Athens International Airport (ATH)" },
    { date: "2026-06-06", time: "4:50 PM", end: "5:50 PM", title: "Arrive ATH: Delta 9185 from Amsterdam", description: "Alex and Kinzie land at Athens airport.", location: "Athens International Airport (ATH)" },
    { date: "2026-06-06", time: "3:00 PM", end: "4:00 PM", title: "Check in: Alke Homme apartment, Athens", description: "Lempesi 6, Makrygianni, Athens.", location: "Lempesi 6, Athens" },
    { date: "2026-06-08", time: "8:00 AM", end: "10:30 AM", title: "Acropolis tour, 8:00 AM entry", description: "Pre-booked timed entry. Wear hat, bring water.", location: "Acropolis of Athens" },
    { date: "2026-06-09", time: "9:55 AM", end: "10:40 AM", title: "Flight ATH to Chios (JKH)", description: "Domestic flight, ~45 min.", location: "Athens airport (ATH)" },
    { date: "2026-06-09", time: "2:00 PM", end: "3:00 PM", title: "Check in: Grecian Castle Hotel, Chios", description: "Enoseos Avenue, Chios. 5 nights.", location: "Enoseos Avenue, Chios" },
    { date: "2026-06-14", time: "11:00 AM", end: "11:30 AM", title: "Check out: Grecian Castle Hotel", description: "Taxi to Chios airport for the 11:50 AM flight.", location: "Enoseos Avenue, Chios" },
    { date: "2026-06-14", time: "11:50 AM", end: "12:35 PM", title: "Flight Chios (JKH) to Chania (CHQ)", description: "Domestic flight.", location: "Chios airport (JKH)" },
    { date: "2026-06-14", time: "2:00 PM", end: "3:00 PM", title: "Check in: Vrbo villa, Agioi Apostoloi, Crete", description: "Drakonianou 6, Agioi Apostoloi, Chania.", location: "Drakonianou 6, Agioi Apostoloi, Chania" },
    { date: "2026-06-17", time: "6:00 AM", end: "4:00 PM", title: "Samaria Gorge hike (hikers)", description: "Bus to Omalos, 16 km downhill hike, ferry from Agia Roumeli to Sfakia, bus back to Chania.", location: "Samaria Gorge National Park" },
    { date: "2026-06-19", time: "11:00 AM", end: "11:30 AM", title: "Check out: Crete villa", description: "Taxi to Chania airport (CHQ).", location: "Drakonianou 6, Agioi Apostoloi, Chania" },
    { date: "2026-06-19", time: "1:40 PM", end: "2:30 PM", title: "Flight Chania (CHQ) to Athens (ATH)", description: "Domestic flight, ~50 min.", location: "Chania airport (CHQ)" },
    { date: "2026-06-19", time: "4:00 PM", end: "5:00 PM", title: "Check in: Athens apartment, Syngrou", description: "Leoforos Sygrou 29, Athens. 2 nights.", location: "Leoforos Sygrou 29, Athens" },
    { date: "2026-06-21", time: "12:35 PM", end: "1:35 PM", title: "Depart Athens: flight to Chicago", description: "John, Maria, Athan, Piper, Gigi. Arrive SLC 10:48 PM.", location: "Athens International Airport (ATH)" },
    { date: "2026-06-21", time: "1:40 PM", end: "2:40 PM", title: "Depart Athens (Alex, Kinzie)", description: "1:40 PM departure, arrive SLC 7:30 PM.", location: "Athens International Airport (ATH)" }
  ],

  days: [
    /* ATHENS LEG 1 */
    {
      id: "athens-d1",
      city: "Athens",
      date: "Saturday, Jun 6, 2026",
      title: "Arrive Athens, settle, walk Plaka",
      summary: "Arrival day. Two flights land at different times. The play is keep it loose, walk a little to fight jet lag, eat early-ish by Greek standards, sleep hard.",
      weather: "June average 31C high, 21C low. Sun sets around 8:50 PM. Expect heat from 1:00 PM to 6:00 PM.",
      slots: [
        {
          time: "Arrivals",
          headline: "Two flights landing today",
          description: "Plan to meet at the apartment once everyone has settled. Athens airport (ATH) is about 35 to 45 minutes from central Athens by taxi (flat rate EUR 40 daytime, EUR 55 nighttime).",
          options: [
            { name: "United 1710 from Chicago, ~10:35 AM", detail: "John, Maria, Athan, Piper, and Gigi. Earlier arrival, can check in or stash bags and start the day light." },
            { name: "Delta 9185 from Amsterdam, ~4:50 PM", detail: "Alex and Kinzie. Later arrival, likely heads straight to the apartment to settle." }
          ]
        },
        {
          time: "Check-in",
          headline: "Athens base, Alke Homme apartment near the Acropolis",
          description: "Three-night Vrbo apartment in Makrygianni, the neighborhood right under the Acropolis. Booked through the Lohse family (James and Heidi). Walking distance to the Acropolis, Plaka, and Monastiraki. Itinerary #5563-3418276611. Check-in Jun 6, check-out Jun 9.",
          options: [
            { name: "Address", detail: "Lempesi 6, Makrygianni, Athens" },
            { name: "Vrbo itinerary", detail: "#5563-3418276611" },
            { name: "Booked by", detail: "James Lohse (jamesklohse@gmail.com), shared with Maria via Heidi Lohse" }
          ],
          links: [
            { label: "Vrbo trip page", url: "https://www.vrbo.com/trips/egti-197-W8I-26QX" },
            { label: "Google Maps", url: "https://www.google.com/maps/search/Lempesi+6+Athens" }
          ]
        },
        {
          time: "Late afternoon",
          headline: "Settle, freshen up, light walk through Plaka",
          description: "Once everyone is in, take a 30 minute walk through Plaka to acclimate. The neighborhood is at the foot of the Acropolis, all cobblestones and bougainvillea.",
          options: [
            { name: "Plaka loop", detail: "Start at Syntagma, walk down Ermou, cut south into Plaka, wander to Anafiotika (the white-and-blue island-style cluster on the Acropolis slope), return via Adrianou." },
            { name: "Monastiraki square", detail: "Lively, food stalls, flea market on weekends. Souvlaki at Bairaktaris if you want a quick bite." }
          ]
        },
        {
          time: "8:00 PM onward",
          headline: "First dinner near the apartment",
          description: "Stay close, eat well, in bed by 10:30 PM. Three vetted options:",
          mealOptions: ["Geros Tou Moria", "Klimataria", "Karamanlidika tou Fani"]
        }
      ],
      reservations: ["Dinner if you have a strong preference"],
      whatToBring: ["Light layer for evening", "Comfortable shoes for cobblestones", "Phone charger"],
      walking: "About 2 to 3 km of casual walking",
      tip: "Greek dinners run late. 9:30 PM is normal. On the first night, fight the impulse to push past 10:00 PM."
    },

    {
      id: "athens-d2",
      city: "Athens",
      date: "Sunday, Jun 7, 2026",
      title: "Full day in Athens, light exploring",
      summary: "First full day, no reservations on the books. Acropolis is tomorrow. Today is for walking, eating, getting your bearings.",
      weather: "June high 31C, low 21C. Many small shops closed Sunday, but museums and tavernas are open.",
      slots: [
        {
          time: "Morning",
          headline: "Pick one easy outing",
          description: "Three solid options depending on the group's energy:",
          options: [
            { name: "Anafiotika and Plaka wander", detail: "Coffee somewhere, slow walk through the white-and-blue island-style neighborhood under the Acropolis, end at Monastiraki." },
            { name: "National Archaeological Museum", detail: "EUR 12. World-class Bronze Age and Classical collection. The gold Mask of Agamemnon, the Jockey of Artemision, the Antikythera Mechanism. 2 hours minimum.", links: [{ label: "Website", url: "https://www.namuseum.gr" }] },
            { name: "Benaki Museum of Greek Culture", detail: "EUR 12. Cooler indoor option. Greek decorative arts from antiquity to today.", links: [{ label: "Website", url: "https://www.benaki.org" }] }
          ]
        },
        {
          time: "1:30 PM",
          headline: "Lunch",
          description: "Sunday brings shorter hours at some spots. These three are reliably open:",
          mealOptions: ["Karamanlidika tou Fani", "Lolos All Day", "Tzitzikas kai Mermigas"]
        },
        {
          time: "Afternoon",
          headline: "Light second outing or siesta",
          description: "Heat peaks 2:00 PM to 6:00 PM. Best to be inside or napping.",
          options: [
            { name: "Siesta", detail: "Truly. Tomorrow is the Acropolis day, fresh legs help." },
            { name: "Panathenaic Stadium", detail: "EUR 5. The marble Olympic stadium, only stadium in the world built entirely of marble. 1 hour with audio guide.", links: [{ label: "Website", url: "https://www.panathenaicstadium.gr" }] },
            { name: "Ancient Agora", detail: "EUR 10. Temple of Hephaestus inside is the best-preserved Doric temple in Greece. 1.5 hours, shaded paths.", links: [{ label: "Tickets", url: "https://hhticket.gr" }] }
          ]
        },
        {
          time: "7:30 PM",
          headline: "Sunset rooftop or early dinner",
          description: "Pick one:",
          options: [
            { name: "360 Cocktail Bar", detail: "Direct Acropolis view from Monastiraki Square. Cocktails EUR 13 to 16.", links: [{ label: "Reserve", url: "https://three-sixty.gr" }] },
            { name: "A for Athens", detail: "More casual, same view direction." }
          ]
        },
        {
          time: "9:30 PM",
          headline: "Dinner",
          description: "Three picks:",
          mealOptions: ["Tzitzikas kai Mermigas", "Taverna Saita", "Klimataria"]
        }
      ],
      reservations: ["Rooftop for sunset if going to 360"],
      whatToBring: ["Sun hat", "Water bottle", "Sunscreen", "Comfortable shoes"],
      walking: "About 4 to 5 km",
      tip: "Sundays many small shops close. The Central Market is closed too, save it for a weekday if interested."
    },

    {
      id: "athens-d3",
      city: "Athens",
      date: "Monday, Jun 8, 2026",
      title: "Acropolis day",
      summary: "The big-ticket day. Acropolis tour is on the books. Beat the heat at first entry, decompress at the museum, siesta through the worst sun, sunset rooftop, late dinner.",
      weather: "June high 31C, low 21C. Marble at the Acropolis hits 40C+ by noon. Hat and 2L of water are not optional.",
      slots: [
        {
          time: "8:00 AM",
          headline: "Acropolis at first entry",
          description: "Pre-book the 8:00 AM timed slot at hhticket.gr. EUR 30 pp. Allow 2 to 2.5 hours. Enter via the main west gate. The Propylaia, Parthenon, Erechtheion with the Caryatids, and Temple of Athena Nike are the headliners.",
          links: [
            { label: "Book Acropolis tickets", url: "https://hhticket.gr" },
            { label: "Official Acropolis info", url: "https://odysseus.culture.gr" }
          ],
          alternatives: [
            { name: "Guided tour", detail: "EUR 60 to 90 pp via GetYourGuide. Worth it for historical context across the group." }
          ]
        },
        {
          time: "11:00 AM",
          headline: "Acropolis Museum",
          description: "Across the street from the south slope. EUR 20 pp. The glass top floor frames the actual Parthenon and houses the original sculptures (replicas are on the building itself). Plan 1.5 to 2 hours.",
          links: [
            { label: "Book museum tickets", url: "https://etickets.theacropolismuseum.gr" },
            { label: "Museum website", url: "https://www.theacropolismuseum.gr" }
          ],
          tip: "Top-floor café has Parthenon views and decent coffee."
        },
        {
          time: "1:30 PM",
          headline: "Lunch in Koukaki or Makrygianni",
          description: "Walkable from the museum. Note Mani Mani is closed Mondays, so save it for another trip:",
          mealOptions: ["Lolos All Day", "Diporto", "Karamanlidika tou Fani"]
        },
        {
          time: "Afternoon (3:00 PM to 5:30 PM)",
          headline: "Siesta or one more ruin",
          description: "Take a siesta. The sun is at its worst, and you have a late dinner ahead. If anyone has energy:",
          options: [
            { name: "Siesta", detail: "A 90-minute lie-down resets the day." },
            { name: "Ancient Agora", detail: "EUR 10. The Temple of Hephaestus inside is the best-preserved Doric temple in Greece. 1.5 hours.", links: [{ label: "Tickets", url: "https://hhticket.gr" }] },
            { name: "Benaki Museum", detail: "EUR 12. Cooler indoor option.", links: [{ label: "Website", url: "https://www.benaki.org" }] }
          ]
        },
        {
          time: "7:30 PM",
          headline: "Sunset rooftop drink",
          description: "Athens has perhaps the best urban sunsets in Europe, with the Acropolis backlit gold. Pick one:",
          options: [
            { name: "360 Cocktail Bar", detail: "Direct Acropolis view from Monastiraki Square. Cocktails EUR 13 to 16.", links: [{ label: "Reserve", url: "https://three-sixty.gr" }] },
            { name: "A for Athens", detail: "More casual, same view direction." },
            { name: "Lycabettus Hill", detail: "Highest point in Athens. Funicular up (EUR 10), café at the top." }
          ]
        },
        {
          time: "9:30 PM",
          headline: "Dinner",
          description: "Late by US standards, perfectly normal in Athens:",
          mealOptions: ["Kuzina", "Tzitzikas kai Mermigas", "Klimataria"]
        }
      ],
      reservations: ["Acropolis 8:00 AM slot, book 2 weeks ahead", "Acropolis Museum, any time slot", "Dinner if choosing Kuzina (rooftop, popular)"],
      whatToBring: ["Sun hat, wide brim", "2L water bottle per person", "Sunscreen SPF 50", "Shoes with grip (Acropolis marble is slick)", "Light cardigan for air-conditioned museum"],
      walking: "About 5 to 6 km total",
      tip: "Modest dress requested at the Acropolis. Selfie sticks are technically banned."
    },

    {
      id: "athens-d4",
      city: "Athens",
      date: "Tuesday, Jun 9, 2026",
      title: "Fly to Chios, 9:55 AM",
      summary: "Early travel day. Flight to Chios at 9:55 AM means an airport arrival around 8:00 AM, so an early breakfast at the hotel and a taxi out. Most of today is logistics.",
      weather: "Same as yesterday. Light layer for the plane.",
      slots: [
        {
          time: "Early morning",
          headline: "Hotel breakfast, taxi to ATH",
          description: "Aim to leave the hotel by 7:00 AM to 7:15 AM for an Athens airport arrival around 7:45 AM to 8:00 AM (taxi flat rate EUR 40 daytime). Domestic flights need check-in 60 to 90 min before departure."
        },
        {
          time: "9:55 AM",
          headline: "Flight to Chios",
          description: "Domestic flight. About 45 minutes flying time. Land Chios airport (JKH) mid-morning. The Grecian Castle Hotel is about 10 minutes from the airport by taxi."
        }
      ],
      reservations: ["Taxi from hotel to ATH (book night before or use Uber/FreeNow)"],
      whatToBring: ["Snacks for early morning", "Phone charged"],
      walking: "Light"
    },

    /* CHIOS */
    {
      id: "chios-d1",
      city: "Chios",
      date: "Tuesday, Jun 9, 2026",
      title: "Arrive Chios, Grecian Castle Hotel, easy first evening",
      summary: "Land Chios late morning. Chios is quieter than the famous Cyclades, more lived-in, less touristed. Tonight is about settling, a quiet dinner, walking the waterfront.",
      weather: "Slightly cooler than Athens, sea breeze. June high 29C, low 21C.",
      slots: [
        {
          time: "Check-in",
          headline: "Grecian Castle Hotel, 2:00 PM",
          description: "Chios base for 5 nights, Jun 9 to 14. Booked through Hotels.com under Maria's account. 7 adults across 2 rooms (suite layout). Quiet seaside setting, walking distance to Chios Town center and harbor. About 10 minutes by taxi from Chios airport.",
          options: [
            { name: "Address", detail: "Enoseos Avenue, Chios, Chios Island, 82100 Greece" },
            { name: "Phone", detail: "+30 22710 44740" },
            { name: "Hotels.com itinerary", detail: "#73329640415083" },
            { name: "Check-out", detail: "11:00 AM, Sunday Jun 14" }
          ],
          links: [{ label: "Grecian Castle Hotel", url: "https://www.greciancastle.gr" }]
        },
        {
          time: "Evening",
          headline: "Dinner near Chios Town waterfront",
          description: "Three traditional Chian options, all walking or short taxi from the hotel:",
          mealOptions: ["Hotzas", "Pyxari", "Ouzeri Theodosiou"]
        },
        {
          time: "After dinner",
          headline: "Stroll the harbor",
          description: "Chios Town's harbor is the social spine. Locals do the volta (evening walk) along the waterfront from 9:00 PM onward. Stop at the castle (free outside, EUR 4 for the Justiniani Museum inside) which is lit at night."
        }
      ],
      reservations: [],
      whatToBring: ["Light jacket, the harbor catches a breeze"],
      walking: "1 to 2 km",
      tip: "Try mastiha liqueur after dinner. The island's signature digestif, distilled from the mastic tree resin. Served chilled."
    },

    {
      id: "chios-d2",
      city: "Chios",
      date: "Wednesday, Jun 10, 2026",
      title: "Chios Town, Kambos estates, beach afternoon",
      summary: "Orientation day. Get the lay of Chios Town in the morning, lunch at one of the walled citrus estates in Kambos, swim at the closest beaches in the afternoon.",
      weather: "Same. Sea is around 22C in early June, swimmable.",
      slots: [
        {
          time: "9:30 AM",
          headline: "Chios Town walking tour",
          description: "Hit the highlights: the castle and Justiniani Museum, the Korais Library, the Argenti Folklore Museum, and the Maritime Museum. Stop at any Mastihashop branch to taste mastic products.",
          links: [
            { label: "Mastihashop", url: "https://www.mastihashop.com" },
            { label: "Korais Library", url: "https://koraeslibrary.gr" }
          ]
        },
        {
          time: "1:00 PM",
          headline: "Lunch in Kambos, the walled citrus estates",
          description: "Kambos is the neighborhood 4 km south of Chios Town, where wealthy Genoese and Greek merchants built walled estates with citrus orchards in the 14th to 19th centuries. Lunch in one of these gardens:",
          mealOptions: ["Mavrokordatiko", "Perivoli", "To Kechrimpari"]
        },
        {
          time: "4:00 PM",
          headline: "Afternoon at the beach",
          description: "Closest swimmable beaches to base:",
          options: [
            { name: "Karfas", detail: "8 km south, sandy, family-friendly, sun loungers, beach bars and tavernas." },
            { name: "Megas Limnionas", detail: "10 km south, pebble-and-sand, mellow local vibe." },
            { name: "Vrontados", detail: "5 km north, smaller bay, near Daskalopetra (Homer's Stone)." }
          ]
        },
        {
          time: "9:00 PM",
          headline: "Dinner back in Chios Town",
          description: "After the beach, a shower, then dinner:",
          mealOptions: ["Pelagos", "Nostos", "Yperion"]
        }
      ],
      reservations: ["Kambos lunch"],
      whatToBring: ["Swimsuit", "Beach towel", "Sunscreen", "Cash for loungers"],
      walking: "3 to 4 km in town, plus beach"
    },

    {
      id: "chios-d3",
      city: "Chios",
      date: "Thursday, Jun 11, 2026",
      title: "Nea Moni monastery and the mountain villages",
      summary: "Driving day inland. The 11th-century UNESCO monastery, the abandoned village of Anavatos, lunch with valley views at Avgonima, swim at a west-coast cove on the way back.",
      weather: "Cooler in the mountains, can be windy. Long pants helpful at the monastery.",
      slots: [
        {
          time: "9:30 AM",
          headline: "Nea Moni Monastery",
          description: "11th-century UNESCO World Heritage Site, 14 km west of Chios Town. The katholikon has some of the finest surviving Byzantine mosaics anywhere. EUR 4 entry. Active monastery so modest dress required.",
          links: [
            { label: "Nea Moni info", url: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=1822" }
          ]
        },
        {
          time: "11:30 AM",
          headline: "Anavatos, the abandoned village",
          description: "Called the Mystras of the Aegean. A vertical Byzantine village clinging to a 300 meter cliff, abandoned after the 1822 Ottoman massacre. Free. Solemn, photogenic, takes about 45 minutes."
        },
        {
          time: "1:30 PM",
          headline: "Lunch in Avgonima",
          description: "Stone-built village 4 km from Anavatos, with tavernas overlooking the valley.",
          mealOptions: ["Pyrgos Avgonima", "Oi Myloi"]
        },
        {
          time: "3:30 PM",
          headline: "Swim on the west coast",
          description: "Drive 15 to 20 minutes down to the coast:",
          options: [
            { name: "Lithi beach", detail: "Sand-and-pebble, taverna on the sand, small fishing harbor." },
            { name: "Elinda", detail: "Crescent cove with calm water. Quieter than Lithi." }
          ]
        },
        {
          time: "9:00 PM",
          headline: "Dinner back in Chios Town",
          description: "Keep it easy after the mountain day:",
          mealOptions: ["Hotzas", "To Kechrimpari"]
        }
      ],
      reservations: [],
      whatToBring: ["Long pants or wrap for monastery", "Walking shoes for Anavatos", "Sunscreen", "Swimsuit"],
      walking: "4 to 5 km total including the village climbs",
      tip: "The road to Nea Moni is narrow with no shoulder. Drive 30 to 40 kph. Sound your horn before blind corners."
    },

    {
      id: "chios-d4",
      city: "Chios",
      date: "Friday, Jun 12, 2026",
      title: "The mastic villages of the south",
      summary: "South Chios is the only place on earth where mastic resin is commercially produced. Painted Pyrgi, the medieval fortress-grid of Mesta, and the Mastic Museum. End at Mavra Volia, the black-pebble beach.",
      weather: "Hotter in the south, less breeze. June high 32C in the interior villages.",
      slots: [
        {
          time: "9:30 AM",
          headline: "Pyrgi, the painted village",
          description: "About 40 minutes south of Chios Town. Pyrgi's facades are decorated with xysta, a black-and-white geometric pattern scratched into wet plaster. The whole medieval grid is a photograph. Free."
        },
        {
          time: "11:30 AM",
          headline: "Mastic Museum",
          description: "5 minutes outside Pyrgi. Modern museum on the cultivation and processing of mastic. Hour-long visit. EUR 6.",
          links: [
            { label: "Tickets and info", url: "https://piop.gr/en/mastiha-museum" }
          ]
        },
        {
          time: "1:30 PM",
          headline: "Lunch in Mesta",
          description: "Mesta is the best-preserved mastic village, a defensive fortress-grid of stone houses with vaulted passageways:",
          mealOptions: ["To Apomero", "Mesainos", "Roussiko"]
        },
        {
          time: "3:30 PM",
          headline: "Olympi Cave (Sykia)",
          description: "10 minutes from Mesta. Underground chamber discovered in 1985. Stalactites, columns, 60 meter depth. EUR 6 entry."
        },
        {
          time: "5:00 PM",
          headline: "Mavra Volia beach",
          description: "Near Emporios, the southern tip. Mavra Volia means black pebbles, the beach is made of small black volcanic stones. Three coves linked by paths. No facilities, bring water and shoes."
        },
        {
          time: "8:30 PM",
          headline: "Dinner in Emporios or back in Chios Town",
          description: "Emporios has seaside tavernas. Or drive back (45 min):",
          mealOptions: ["Pelagos", "Nostos"]
        }
      ],
      reservations: ["Lunch in Mesta"],
      whatToBring: ["Water shoes for Mavra Volia", "Hat (no shade in the south)", "2L water", "Cash for the cave"],
      walking: "4 km in the villages",
      tip: "Buy mastiha products at the village shops, not the airport. Cheaper and village-specific blends."
    },

    {
      id: "chios-d5",
      city: "Chios",
      date: "Saturday, Jun 13, 2026",
      title: "Volissos and the empty northwest beaches, or rest day",
      summary: "Last full day on Chios. Two paths: drive northwest to the least-visited part of the island (Volissos castle + Homer's reputed birthplace + empty beaches), or have a relaxed day at the hotel and a favorite from earlier in the week.",
      weather: "Coast can be windy in the afternoon, the meltemi picks up.",
      slots: [
        {
          time: "Morning",
          headline: "Pick a shape for the day",
          description: "",
          options: [
            { name: "Volissos + northwest beaches", detail: "45 min drive. Climb the medieval castle (free), wander cobbled lanes. Lunch at Limnia harbor below. Afternoon at Managros, Lefkathia, or Trahili beach (all long, all quiet, almost no people in June)." },
            { name: "Rest day at the hotel + favorite beach", detail: "Pool morning. Lunch in town. Repeat the best beach from earlier in the week. Energy preservation move before the Crete transit." },
            { name: "Boat charter half-day", detail: "Several operators in Chios Town run private charters, EUR 350 to 600 for the group depending on boat size." }
          ]
        },
        {
          time: "9:00 PM",
          headline: "Goodbye Chios dinner",
          description: "Last night on the island. Go for a favorite:",
          mealOptions: ["Pelagos", "Mavrokordatiko (book lunch instead if not done)", "Hotzas"]
        }
      ],
      reservations: ["Boat charter, book 1 to 2 days ahead"],
      whatToBring: ["Beach kit", "Sunscreen", "Cash"],
      walking: "Depends on choice"
    },

    {
      id: "chios-d6",
      city: "Chios",
      date: "Sunday, Jun 14, 2026",
      title: "Check out of Grecian Castle, fly to Chania at 11:50 AM",
      summary: "Morning transit day. Flight to Chania at 11:50 AM means an airport arrival by 10:00 AM. Quick breakfast, taxi to the airport, then island-hop south.",
      weather: "Same.",
      slots: [
        {
          time: "Morning",
          headline: "Check out and travel to Chios airport",
          description: "Aim to leave the hotel by 9:30 AM. Chios airport (JKH) is about 10 minutes by taxi. Domestic check-in 60 to 90 min before departure."
        },
        {
          time: "11:50 AM",
          headline: "Flight to Chania",
          description: "Domestic flight. Land Chania airport (CHQ) early afternoon. About 20 minutes by taxi to central Chania."
        }
      ],
      reservations: ["Hotel checkout", "Taxi to JKH"],
      whatToBring: ["Snacks for the journey", "Water"],
      walking: "Light"
    },

    /* CRETE */
    {
      id: "crete-d1",
      city: "Crete",
      date: "Sunday, Jun 14, 2026",
      title: "Arrive Chania, first evening in Nea Chora",
      summary: "Land Chania mid-afternoon, settle, walk Nea Chora, eat seafood by the water.",
      weather: "Crete is hotter and drier than Chios. June Chania high 28C, low 19C, but inland and at noon expect 32C+.",
      slots: [
        {
          time: "Check-in",
          headline: "Crete base, Vrbo villa in Agioi Apostoloi",
          description: "Five-night Vrbo villa in Agioi Apostoloi, a beach suburb on the western edge of Chania about 5 km from the Old Town. Quiet residential streets, two coves with sandy beaches walking distance away, easy drives to Balos, Elafonisi, and the Samaria trailhead. Property ID 11694637, Unit 6738192. Host: Tsichlaki Maria (Be On Holidays). Check-in Jun 14, check-out Jun 19.",
          options: [
            { name: "Address", detail: "Drakonianou 6, Agioi Apostoloi, Chania 73100" },
            { name: "Property", detail: "Vrbo 11694637, Unit 6738192" },
            { name: "Host", detail: "Tsichlaki Maria, Be On Holidays" }
          ],
          links: [
            { label: "Vrbo listing", url: "https://www.vrbo.com/11694637ha" },
            { label: "Google Maps", url: "https://www.google.com/maps/search/Drakonianou+6+Agioi+Apostoloi+Chania" }
          ]
        },
        {
          time: "Afternoon",
          headline: "Settle, drop bags, freshen up",
          description: "Unpack, get oriented, sort out groceries if you want to stock the villa kitchen."
        },
        {
          time: "Evening",
          headline: "Easy first dinner in Nea Chora",
          description: "Nea Chora is the seafood quarter, a short walk west of the Old Town. Walk along the beachfront promenade. Three picks:",
          mealOptions: ["Kariatis", "Mikrolimano", "Oasis Souvlaki"]
        }
      ],
      reservations: [],
      whatToBring: [],
      walking: "Light",
      tip: "Order a delivery from a Chania supermarket (My Market, Vergina) for stocking the stay: coffee, breakfast items, water, wine."
    },

    {
      id: "crete-d2",
      city: "Crete",
      date: "Monday, Jun 15, 2026",
      title: "Chania Old Town and the Venetian harbor",
      summary: "Discovery day in the old town. The Venetian harbor, the lighthouse, Stivanadika (the leather-makers' alley), the indoor market, dinner along the water.",
      weather: "Same. Old town is shaded by tall buildings, very walkable until 2:00 PM.",
      slots: [
        {
          time: "10:00 AM",
          headline: "Walk the Venetian harbor and Old Town",
          description: "Park at the public lot near the bus station. Walk the harbor from the lighthouse end (about 1 km out and back along the seawall) back to Firkas Fortress (Maritime Museum inside, EUR 4). Cut into Stivanadika, the alley of leather workshops. Loop through Splantzia, the Turkish quarter, with the Mosque of Ahmet Aga. Beyond the harborfront, the winding cobblestone streets behind the harbor are filled with quiet shops and cafes tucked away, great for escaping the crowds.",
          links: [
            { label: "Maritime Museum of Crete", url: "https://mar-mus-crete.gr" }
          ]
        },
        {
          time: "1:30 PM",
          headline: "Lunch in the Old Town",
          description: "Cretan tavernas along the main Limani, from Georgia's recommendations (Chania local, family friend):",
          mealOptions: ["Christoforos", "Salis", "Tamam", "Apostolis"]
        },
        {
          time: "3:30 PM",
          headline: "Indoor market and afternoon",
          description: "The Agora (Demotiki Agora) is a cross-shaped covered market from 1913, with cheese, olive oil, raki, spices, fresh produce. Then siesta, or museum.",
          options: [
            { name: "Archaeological Museum of Chania", detail: "EUR 6, Minoan to Roman finds.", links: [{ label: "Website", url: "https://amch.gr" }] },
            { name: "Pool / beach time", detail: "Walk to Nea Chora for a swim, 10 minutes from the harbor." }
          ]
        },
        {
          time: "8:30 PM",
          headline: "Dinner with the harbor view",
          description: "Ta Chalkina is the live-music option, worth calling ahead to find out which nights musicians are playing:",
          mealOptions: ["Ta Chalkina", "Salis", "Well of the Turk", "Zepos"]
        },
        {
          time: "After dinner",
          headline: "Walk the harbor at night",
          description: "The lit Venetian lighthouse, the boats, the cocktail bars along Akti Tombazi. Stop for ice cream at Iordanis or pastry at Hatzis."
        }
      ],
      reservations: ["Dinner: Tamam, Well of the Turk, Ta Chalkina fill up Friday and Saturday"],
      whatToBring: ["Sandals", "Cash for the market"],
      walking: "5 to 6 km in town"
    },

    {
      id: "crete-d3",
      city: "Crete",
      date: "Tuesday, Jun 16, 2026",
      title: "Balos Lagoon day trip",
      summary: "Full day boat trip to one of the most famous beaches in Greece. Georgia's tip: skip the large ferry and book a private or small cruise from the Chania harbor. Less crowded, more flexible, and you can see multiple beaches in one day.",
      weather: "Same, but the boat is exposed. Wind picks up afternoon.",
      slots: [
        {
          time: "9:00 AM",
          headline: "Drive to Kissamos port (or skip if booking private from Chania)",
          description: "Standard ferry: 40 min west to Kissamos port. Park EUR 5. Private charter from Chania harbor: walk the harborfront and find one of the boats advertising trips to all the beaches in one day."
        },
        {
          time: "10:30 AM",
          headline: "Ferry or charter to Gramvousa and Balos",
          description: "Standard ferry: Cretan Daily Cruises, EUR 40 to 45 pp. Stops first at Gramvousa island for about 2 hours, then continues to Balos for about 3 hours. Private charter from Chania: EUR 80 to 150 pp, less crowded, more flexible.",
          links: [
            { label: "Cretan Daily Cruises", url: "https://www.cretandailycruises.com" }
          ]
        },
        {
          time: "1:30 PM to 4:30 PM",
          headline: "Balos Lagoon",
          description: "The shallow lagoon is photogenic but crowded by midday on the large ferry. Walk left along the beach for thinner crowds."
        },
        {
          time: "5:45 PM",
          headline: "Boat back",
          description: "Standard ferry arrives Kissamos about 6:45 PM. Private charter returns to Chania harbor."
        },
        {
          time: "9:00 PM",
          headline: "Dinner",
          description: "Back to Chania:",
          mealOptions: ["Ta Chalkina", "Mikrolimano", "Salis"]
        }
      ],
      reservations: ["Cretan Daily Cruises, book 2 to 3 days ahead. Private charter, walk the Chania harbor day-of or book ahead."],
      whatToBring: ["Water shoes", "Sunscreen", "Hat", "Cash", "Light layer for the boat"],
      walking: "Up to 4 km",
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
          time: "FOR HIKERS, 5:30 AM",
          headline: "KTEL bus from Chania to Omalos",
          description: "KTEL bus departs Chania bus station 6:15 AM. EUR 8 each way. Arrives Omalos around 7:45 AM. Most tour companies along the Chania harbor also offer Samaria packages with transport included, EUR 30 to 45 pp.",
          links: [
            { label: "KTEL bus schedule", url: "https://www.e-ktel.com" },
            { label: "Gorge official", url: "https://www.samaria.gr" }
          ]
        },
        {
          time: "FOR HIKERS, 8:00 AM to 2:00 PM",
          headline: "Samaria Gorge hike",
          description: "16 km, strenuous, mostly downhill. Descent (Xyloskalo) is steep wooden steps for the first 2 km. Pass the abandoned Samaria village mid-hike. Squeeze through Sideroportes (Iron Gates) where the gorge narrows to 4 meters wide and walls rise 300m. Exit at Agia Roumeli on the Libyan Sea. Natural spring midway, no other amenities."
        },
        {
          time: "FOR HIKERS, 2:00 PM to 5:30 PM",
          headline: "Lunch at Agia Roumeli, ferry to Sfakia",
          description: "Agia Roumeli is car-free. Quick swim, lunch, board the ferry at 3:00 PM to Chora Sfakion. KTEL bus from Sfakia to Chania departs around 7:00 PM, arrives 9:00 PM.",
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
            { name: "Pool / villa day", detail: "Loungers, swim, late breakfast." },
            { name: "Nea Chora beach", detail: "Walk to Nea Chora. Lunch at Mikrolimano." },
            { name: "Botanical Park of Crete", detail: "20 minutes drive. 20 hectares of fruit trees and herbs.", links: [{ label: "Website", url: "https://www.botanical-park.com" }] },
            { name: "Manousakis Nostos Winery", detail: "Family-run winery in Vatolakkos, 20 min from Chania. Tour, tasting, lunch from their land. Partners with the Salis restaurant.", links: [{ label: "Website", url: "https://nostoswines.com" }] },
            { name: "Akrotiri peninsula", detail: "Drive 20 min east, Marathi beach for lunch, Stavros for the Zorba beach, Agia Triada monastery." }
          ]
        },
        {
          time: "9:30 PM",
          headline: "Easy group dinner",
          description: "Hikers will be wrecked. Keep dinner near base and casual:",
          mealOptions: ["Ta Meraklikia", "Mikrolimano", "Oasis Souvlaki (takeaway)"]
        }
      ],
      reservations: ["KTEL bus to Omalos, book day before", "Manousakis winery tour if interested"],
      whatToBring: ["FOR HIKERS: hiking shoes, 2L water minimum, hat, snacks, layer for altitude, camera, EUR 60 cash", "FOR RELAXERS: pool / beach kit"],
      walking: "Hikers: 16 km. Relaxers: 1 to 4 km",
      tip: "Hikers: trekking poles save your knees on the descent. Buy or rent from Chania outdoor shops the day before."
    },

    {
      id: "crete-d5",
      city: "Crete",
      date: "Thursday, Jun 18, 2026",
      title: "Elafonisi pink beach day",
      summary: "Last full day in Crete. Elafonisi is the famous pink-sand beach 73 km southwest. Long drive each way, but the destination is unforgettable. Several picturesque villages along the way, plus a chapel built into a cave reached by stairs cut into the mountainside.",
      weather: "Same. Elafonisi can be windy in the afternoon, lagoon stays warm.",
      slots: [
        {
          time: "8:30 AM",
          headline: "Drive to Elafonisi (with stops)",
          description: "About 1.5 hours. Mostly mountain roads. Several picturesque villages worth stopping in. The chapel built into a cave on the way is a memorable photo and rest stop. Leave early to claim parking (EUR 3 cash) and beach space."
        },
        {
          time: "10:00 AM to 1:30 PM",
          headline: "Elafonisi beach and lagoon",
          description: "Pink sand from crushed shells. Shallow lagoon, waist-deep for 100 meters out. Cross the sandbar to the small island for fewer people. Bring or rent a beach umbrella, no natural shade."
        },
        {
          time: "1:30 PM (alt)",
          headline: "Walk to Kedrodasos for a quieter swim",
          description: "10 minute walk south from Elafonisi parking. Sand-and-cedar trees, no facilities, almost no people."
        },
        {
          time: "2:30 PM",
          headline: "Lunch at a mountain village on the way back",
          description: "Mountain tavernas worth stopping at:",
          mealOptions: ["Innachorion (Elos village)", "Spilio (Falassarna road)"]
        },
        {
          time: "Sunset",
          headline: "Optional: I Koukouvagia in Halepa",
          description: "On the way back, detour to Halepa, a historic Chania suburb of grand 19th-century mansions. Eleftherios Venizelos (who led the revolution to liberate Crete from the Ottomans) lived here. I Koukouvagia is a pastry shop and café on a hill with one of the best sunset views in Chania."
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
      reservations: ["Private chef if interested, 3+ days ahead", "Restaurant dinner Thursday night"],
      whatToBring: ["Beach umbrella or rent on-site", "Water shoes", "Snacks for the drive", "Cash"],
      walking: "2 km on the beach",
      tip: "Elafonisi is a Natura 2000 protected site. Don't take pink sand home, it's illegal and damages the ecosystem."
    },

    {
      id: "crete-d6",
      city: "Crete",
      date: "Friday, Jun 19, 2026",
      title: "Last morning in Chania, fly to Athens at 1:40 PM",
      summary: "Final morning in Crete. Flight to Athens at 1:40 PM means a leisurely morning, then check out and head to the airport.",
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
          time: "11:30 AM",
          headline: "Check out, taxi to Chania airport (CHQ)",
          description: "About 20 minutes by taxi from central Chania. Check-in 60 to 90 min before departure. Quick lunch at the airport or in town beforehand."
        },
        {
          time: "1:40 PM",
          headline: "Flight to Athens",
          description: "Domestic flight, about 50 min. Land Athens (ATH) mid-afternoon. Taxi to Athens hotel, EUR 40 daytime flat rate."
        }
      ],
      reservations: ["Hotel checkout", "Taxi to CHQ"],
      whatToBring: ["Snacks for the journey"],
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
          time: "Check-in",
          headline: "Athens leg 2 stay, Koukaki / Neos Kosmos area",
          description: "Two-night stay on Syngrou Avenue, the main artery running south from the Acropolis toward the coast. Koukaki and Neos Kosmos sit on either side, both walkable to Plaka, the Acropolis Museum, and the Stavros Niarchos Foundation. Quieter than Plaka itself, easy to get around. Check-in Jun 19, check-out Jun 21.",
          options: [
            { name: "Address", detail: "Leoforos Sygrou 29, Athens 11743" },
            { name: "Area", detail: "Koukaki / Neos Kosmos, south of the Acropolis" }
          ],
          links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/Leoforos+Sygrou+29+Athens+11743" }
          ]
        },
        {
          time: "Late afternoon",
          headline: "Settle in",
          description: "Land ATH around 2:30 PM to 3:00 PM. Taxi from ATH to the apartment, EUR 40 daytime flat rate. Drop bags, freshen up, rest before dinner."
        },
        {
          time: "Evening",
          headline: "Dinner",
          description: "Pick a Psyrri or Monastiraki spot, all 10 to 15 minutes by taxi from Syngrou:",
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
            { name: "National Archaeological Museum", detail: "If skipped on leg 1. EUR 12.", links: [{ label: "Website", url: "https://www.namuseum.gr" }] },
            { name: "Panathenaic Stadium", detail: "EUR 5. The only stadium in the world built entirely of marble.", links: [{ label: "Website", url: "https://www.panathenaicstadium.gr" }] },
            { name: "Anafiotika and Plaka wander", detail: "Coffee, last shopping, walk slowly." }
          ]
        },
        {
          time: "4:00 PM",
          headline: "Drive or tour to Cape Sounion",
          description: "70 km south, 90 min drive along the Athens Riviera. Two ways:",
          options: [
            { name: "Drive yourself", detail: "Rent a car for the day. Park at the Sounion lot, EUR 20 entry per person." },
            { name: "Half-day tour", detail: "EUR 45 to 60 pp with transport included.", links: [{ label: "GetYourGuide Sounion tours", url: "https://www.getyourguide.com/cape-sounion-l30019" }] }
          ]
        },
        {
          time: "Sunset (~8:50 PM)",
          headline: "Sunset at the Temple of Poseidon",
          description: "Arrive 45 minutes before sunset to get a position. The temple sits 60 meters above the sea. Lord Byron carved his name on a column in 1810."
        },
        {
          time: "9:30 PM",
          headline: "Last dinner in Greece",
          description: "Go special:",
          mealOptions: ["Aleria", "Little Tree (lighter)", "Klimataria (with live music)"]
        }
      ],
      reservations: ["Dinner if Aleria"],
      whatToBring: ["Camera", "Light jacket for the open cliff"],
      walking: "2 to 3 km plus Sounion site",
      tip: "Sounion site closes at sunset, but parking lot is open later. Plan to be back at the car within 30 minutes of sunset."
    },

    {
      id: "athens2-d3",
      city: "Athens",
      date: "Sunday, Jun 21, 2026",
      title: "Depart Athens",
      summary: "Travel home day. Two flights leaving, different times.",
      weather: "Same.",
      slots: [
        {
          time: "Morning",
          headline: "Breakfast and last gifts",
          description: "Two stops worth making if there is time:",
          options: [
            { name: "Krinos for loukoumades", detail: "Since 1923. Traditional Greek honey-soaked donuts." },
            { name: "Mastihashop for gifts", detail: "Mastic products from Chios.", links: [{ label: "Website", url: "https://www.mastihashop.com" }] }
          ]
        },
        {
          time: "Departures",
          headline: "Two flights home",
          description: "Plan airport arrivals 2.5 to 3 hours before international departure. Athens airport (ATH) is 35 to 45 min from central Athens, taxi EUR 40 daytime.",
          options: [
            { name: "12:35 PM to Chicago", detail: "John, Maria, Athan, Piper, and Gigi. Arrive SLC at 10:48 PM." },
            { name: "1:40 PM departure", detail: "Alex and Kinzie. Arrive SLC at 7:30 PM." }
          ]
        }
      ],
      reservations: ["Taxi to ATH (book night before for early-morning rides)"],
      whatToBring: ["Patience"],
      walking: "Light",
      tip: "Mastic liqueur, olive oil, and any liquid souvenirs must go in checked baggage if flying."
    }
  ],

  /* ========== RESTAURANTS ========== */
  restaurants: [
    /* ATHENS */
    { name: "Geros Tou Moria", city: "Athens", area: "Plaka", cuisine: "Traditional Greek", description: "Tucked into a quiet Plaka lane in a 19th-century mansion, this institution has fed politicians, pop stars, and three generations of Athenians the classics: lamb kleftiko in parchment, moussaka, stifado. The terrace under bougainvillea is the move at sunset.", why: "Lonely Planet, Athens Insider, repeat appearances on every classic Plaka list.", phone: "+30 210 322 1753", address: "Mnisikleous 27, Plaka, Athens 105 56", price: "EUR 25 to 40 pp", hours: "12:00 PM to 12:30 AM daily", signatures: ["Lamb kleftiko", "Moussaka", "Walnut honey cake"], vibe: "Romantic, traditional, terraced", bestFor: ["Group dinner", "First night"], reservations: "Recommended weekends", website: "https://gerostoumoria.com" },
    { name: "Klimataria", city: "Athens", area: "Plateia Theatrou", cuisine: "Traditional with live music", description: "An old Athenian taverna where the food is solid and the entertainment is the point. Accordion and bouzouki most nights, dancing tables by 11:00 PM. A real Greek dinner-as-event.", why: "Recommended by Conde Nast Traveller for live-music tavernas. A favorite of Athenians on Saturday nights.", phone: "+30 210 321 6629", address: "Plateia Theatrou 2, Athens", price: "EUR 25 to 40 pp", hours: "8:00 PM to 2:00 AM, Wed to Sun", signatures: ["Mezedes platter", "Lamb chops", "Live music"], vibe: "Old-school, lively, group-friendly", bestFor: ["Group celebration", "Big night out"], reservations: "Required weekends", website: "https://www.klimataria.com.gr" },
    { name: "Karamanlidika tou Fani", city: "Athens", area: "Near Central Market", cuisine: "Anatolian Greek deli", description: "A deli-restaurant with the cured meats of the Karamanli Greeks (Greeks from central Anatolia displaced in 1923). Pastourma, sucuk, smoked cheeses, plus cooked dishes. Sit at the counter.", why: "Featured in the New York Times, Anthony Bourdain Parts Unknown.", phone: "+30 210 325 4184", address: "Sokratous 1 and Evripidou, Athens", price: "EUR 20 to 35 pp", hours: "12:30 PM to 12:00 AM daily", signatures: ["Pastourma platter", "Smyrna sucuk", "Saganaki with cherry sauce"], vibe: "Deli-bistro, casual", bestFor: ["Lunch", "Pre-dinner snack with wine"], reservations: "Walk-in usually fine", website: "https://karamanlidika.gr" },
    { name: "Kuzina", city: "Athens", area: "Psyrri", cuisine: "Modern Greek", description: "A stylish restaurant on a pedestrian street with a glass elevator up to a rooftop with one of the best Acropolis views in Athens.", why: "Michelin Guide listed. Top of TripAdvisor for years.", phone: "+30 210 324 0133", address: "Adrianou 9, Athens 105 55", price: "EUR 35 to 60 pp", hours: "12:00 PM to 12:00 AM daily", signatures: ["Slow-cooked lamb", "Sea bream carpaccio", "Mastiha panna cotta"], vibe: "Upscale, scenic", bestFor: ["Sunset dinner"], reservations: "Required for rooftop", website: "https://kuzina.gr" },
    { name: "Tzitzikas kai Mermigas", city: "Athens", area: "Syntagma", cuisine: "Modern Greek meze", description: "Bright, energetic, packed every night. The name means the cricket and the ant. Mezedes are the play, order eight or ten dishes for the table.", why: "Voted best meze restaurant by Greek media multiple years.", phone: "+30 210 324 7607", address: "Mitropoleos 12 to 14, Athens", price: "EUR 25 to 40 pp", hours: "12:30 PM to 12:00 AM daily", signatures: ["Phyllo-wrapped feta with sesame and honey", "Lamb chops", "Cretan cheese pies"], vibe: "Lively, modern, communal", bestFor: ["Group dinner"], reservations: "Recommended", website: "https://tzitzikas-mermigas.gr" },
    { name: "Mani Mani", city: "Athens", area: "Makrygianni", cuisine: "Peloponnesian", description: "Refined Peloponnesian cooking on an upstairs floor of an Acropolis-area townhouse. Quieter than Plaka, more thoughtful menu.", why: "Michelin Guide listed.", phone: "+30 210 921 8180", address: "Falirou 10, Makrygianni, Athens 117 42", price: "EUR 30 to 50 pp", hours: "1:00 PM to 11:00 PM, closed Mondays", signatures: ["Pork with prunes and saffron", "Pasta with Mani sausage", "Custard pie"], vibe: "Refined, intimate", bestFor: ["Lunch after Acropolis"], reservations: "Recommended", website: "https://www.manimani.com.gr" },
    { name: "Lolos All Day", city: "Athens", area: "Koukaki", cuisine: "Modern Greek bistro", description: "Bright, contemporary bistro in Koukaki, near the Acropolis Museum. Open all day for coffee, brunch, lunch, dinner.", why: "Recommended by Eater Athens.", phone: "+30 211 411 8924", address: "Veikou 22, Koukaki, Athens", price: "EUR 25 to 40 pp", hours: "9:00 AM to 1:00 AM daily", signatures: ["Slow-cooked pork", "Octopus carpaccio", "Greek salad reimagined"], vibe: "Bistro, all-day", bestFor: ["Lunch"], reservations: "Not required", website: "" },
    { name: "Diporto", city: "Athens", area: "Central Market", cuisine: "Old-school taverna, lunch only", description: "No menu, no signs, no English. A basement cellar in the central market with barrels of wine and whatever the cook made that day, usually chickpea soup, grilled sardines, salad.", why: "Featured by Anthony Bourdain, Eater World 38.", phone: "+30 210 321 1463", address: "Theatrou 2 and Sofokleous (look for the barrels)", price: "EUR 15 to 25 pp", hours: "8:00 AM to 6:00 PM, closed Sundays and August", signatures: ["Chickpea soup", "Grilled sardines", "Wine from the barrel"], vibe: "Cellar, communal", bestFor: ["Lunch"], reservations: "Walk in", website: "" },
    { name: "Aleria", city: "Athens", area: "Metaxourgeio", cuisine: "Modern Greek tasting menu", description: "Special-occasion restaurant in a restored neoclassical mansion. Tasting menu of contemporary Greek cooking, beautiful courtyard for summer dining.", why: "Michelin Guide listed.", phone: "+30 210 522 2633", address: "Megalou Alexandrou 57, Metaxourgeio", price: "EUR 60 to 100 pp tasting menu", hours: "7:30 PM to 11:30 PM, closed Sundays", signatures: ["6 or 8 course tasting menu", "Cretan goat with honey", "Mastic dessert"], vibe: "Special occasion, elegant courtyard", bestFor: ["Last night", "Celebration"], reservations: "Required, days ahead", website: "https://www.aleria.gr" },
    { name: "Little Tree Books and Coffee", city: "Athens", area: "Makrygianni", cuisine: "Cafe, lighter food", description: "A bookshop-cafe with a small kitchen turning out smart lunch plates.", why: "Recommended by Wallpaper, Eater Athens.", phone: "+30 210 924 3762", address: "Kavalloti 2, Makrygianni, Athens", price: "EUR 10 to 20 pp", hours: "10:00 AM to 10:00 PM daily", signatures: ["Brunch plates", "Wine by the glass", "Cheese boards"], vibe: "Cafe-bookshop, quiet", bestFor: ["Lunch break"], reservations: "Walk-in", website: "" },
    { name: "360 Cocktail Bar", city: "Athens", area: "Monastiraki Square", cuisine: "Cocktails, light bites", description: "Rooftop cocktail bar with a 360-degree view of Athens, the Acropolis directly across.", why: "Repeatedly named best rooftop bar in Athens.", phone: "+30 210 321 0006", address: "Ifestou 2, Monastiraki, Athens", price: "Cocktails EUR 13 to 16", hours: "10:00 AM to 2:00 AM daily", signatures: ["Negroni Bianco", "Aegean Spritz"], vibe: "Rooftop, polished", bestFor: ["Pre-dinner drinks", "Sunset"], reservations: "Required for sunset", website: "https://three-sixty.gr" },
    { name: "Taverna Saita", city: "Athens", area: "Plaka", cuisine: "Traditional", description: "A cellar taverna in Plaka with vaulted ceilings, doing classics well. Less touristy than its neighbors.", why: "Recommended by Athens Insider and Time Out Athens.", phone: "+30 210 322 8839", address: "Kydathineon 21, Plaka, Athens", price: "EUR 20 to 35 pp", hours: "12:30 PM to 12:00 AM daily", signatures: ["Bekri meze", "Saganaki", "House wine"], vibe: "Cellar, traditional", bestFor: ["Casual dinner"], reservations: "Walk-in usually fine", website: "" },
    { name: "Avli", city: "Athens", area: "Psyrri", cuisine: "Mezedes, ouzeri", description: "A hidden courtyard taverna in a Psyrri alley. Cheap, cheerful, deeply local.", why: "Cult favorite for late-night eating.", phone: "+30 210 321 7642", address: "Agiou Dimitriou 12, Psyrri, Athens", price: "EUR 15 to 25 pp", hours: "12:00 PM to 2:00 AM daily", signatures: ["Saganaki", "Mussels", "Fried zucchini"], vibe: "Courtyard, loud, late", bestFor: ["Late night"], reservations: "Walk-in", website: "" },
    { name: "Ariston", city: "Athens", area: "Syntagma", cuisine: "Bakery, savory pies", description: "Since 1910. Standing-room bakery doing tyropita, spanakopita, bougatsa. Family-run for four generations.", why: "Athens institution.", phone: "+30 210 322 7626", address: "Voulis 10, Syntagma, Athens", price: "EUR 2 to 5 per pie", hours: "7:00 AM to 6:30 PM, closed Sundays", signatures: ["Tyropita", "Bougatsa", "Spanakopita"], vibe: "Bakery, no seating", bestFor: ["Breakfast"], reservations: "Walk-up", website: "" },
    { name: "Lukumades", city: "Athens", area: "Aiolou", cuisine: "Greek donuts", description: "Modern lukumades shop doing the traditional honey-and-walnut version plus 20 other toppings. Six pieces for EUR 4.", why: "Best-known dessert stop in Athens.", phone: "+30 210 321 0880", address: "Aiolou 21, Athens", price: "EUR 4 to 8", hours: "10:00 AM to 2:00 AM", signatures: ["Classic honey-walnut lukumades", "Ice cream-stuffed", "Nutella"], vibe: "Dessert spot", bestFor: ["Post-dinner sweet"], reservations: "No", website: "https://lukumades.com" },

    /* CHIOS */
    { name: "Hotzas", city: "Chios", area: "Chios Town", cuisine: "Traditional Chian", description: "Oldest taverna in Chios, in a stone building a short walk from the harbor. Family-run for over 80 years. Skip the menu, ask what's good today.", why: "Featured in The Guardian and Conde Nast as the soul of Chios dining.", phone: "+30 2271 042787", address: "Georgiou Kondyli 3, Chios Town", price: "EUR 15 to 30 pp", hours: "7:00 PM to 12:00 AM, closed Sundays", signatures: ["Lamb in lemon sauce", "Sfougato", "Wild greens", "House wine"], vibe: "Old-school, stone walls", bestFor: ["First Chios dinner"], reservations: "Recommended", website: "" },
    { name: "Pelagos", city: "Chios", area: "Chios Town waterfront", cuisine: "Modern seafood", description: "Modern seafood restaurant on the harbor. The plating is precise, the fish is from the morning catch.", why: "The best contemporary cooking in Chios.", phone: "+30 2271 029990", address: "Aigaiou 17, Chios Town waterfront", price: "EUR 25 to 45 pp", hours: "12:30 PM to 12:00 AM daily", signatures: ["Whole grilled fish", "Octopus carpaccio", "Sea bass crudo"], vibe: "Modern, harbor-view", bestFor: ["Sunset dinner"], reservations: "Recommended", website: "" },
    { name: "Nostos", city: "Chios", area: "Chios Town waterfront", cuisine: "Mediterranean", description: "Reliable waterfront restaurant with a broader Mediterranean menu. Good middle-ground option.", why: "Top reviews on TripAdvisor and Greek food sites.", phone: "+30 2271 044567", address: "Aigaiou 88, Chios Town", price: "EUR 20 to 35 pp", hours: "12:00 PM to 12:00 AM daily", signatures: ["Spaghetti with seafood", "Grilled lamb", "Cretan rusks salad"], vibe: "Modern, harbor view", bestFor: ["Group dinner"], reservations: "Recommended weekends", website: "" },
    { name: "Mavrokordatiko", city: "Chios", area: "Kambos", cuisine: "Garden taverna in a walled estate", description: "Walled 18th-century estate with citrus orchards, where you eat at tables among the trees.", why: "Featured in Conde Nast Traveler's Hidden Greece issue.", phone: "+30 2271 032900", address: "Kambos area, signposted from Karfas road", price: "EUR 25 to 40 pp", hours: "1:00 PM to 11:00 PM daily, closed in winter", signatures: ["Mavrokordatos lamb", "Orange leaves stuffed with rice", "Citrus dessert"], vibe: "Garden estate, slow", bestFor: ["Special lunch"], reservations: "Required", website: "" },
    { name: "Pyxari", city: "Chios", area: "Chios Town waterfront", cuisine: "Grill, seafood", description: "Lively waterfront grill, the place locals go on Friday nights. Whole grilled fish, lamb chops, big salads.", why: "Repeatedly recommended by Chios locals.", phone: "+30 2271 040800", address: "Aigaiou waterfront, Chios Town", price: "EUR 20 to 35 pp", hours: "7:00 PM to 2:00 AM daily", signatures: ["Whole sea bream grilled", "Lamb chops", "Mixed grill"], vibe: "Loud, lively, group-friendly", bestFor: ["Group dinner"], reservations: "Walk-in works", website: "" },
    { name: "To Kechrimpari", city: "Chios", area: "Chios Town", cuisine: "Ouzeri, meze", description: "Tiny ouzeri where the play is tsipouro and small plates. Cheap, cash-only, local.", why: "Local lore favorite, often missed by tourists.", phone: "+30 2271 026364", address: "Aigaiou waterfront, Chios Town", price: "EUR 12 to 22 pp", hours: "12:00 PM to 12:00 AM daily", signatures: ["Fried calamari", "Cheese saganaki", "Tsipouro"], vibe: "Old-school ouzeri", bestFor: ["Pre-dinner drink-and-snack"], reservations: "Walk-in", website: "" },
    { name: "Ouzeri Theodosiou", city: "Chios", area: "Chios Town, Neorion waterfront", cuisine: "Ouzeri", description: "Classic ouzeri since 1955. Stainless tables, paper-covered, ouzo and meze. Lunch only.", why: "Generational Chios spot.", phone: "+30 2271 027875", address: "Neorion (waterfront), Chios Town", price: "EUR 12 to 20 pp", hours: "12:00 PM to 6:00 PM, closed Sundays", signatures: ["Grilled octopus", "Fava", "House ouzo"], vibe: "Working-class classic", bestFor: ["Long lunch"], reservations: "Walk-in", website: "" },
    { name: "To Apomero", city: "Chios", area: "Mesta village (south)", cuisine: "Traditional Chian", description: "Stone-walled taverna inside the medieval village of Mesta. Cooks lamb, kid, wild greens, all on a wood grill.", why: "On every best of South Chios list.", phone: "+30 2271 076700", address: "Mesta main square", price: "EUR 15 to 25 pp", hours: "12:00 PM to 11:00 PM, closed Mondays", signatures: ["Grilled lamb", "Wild greens", "Trahanas soup"], vibe: "Village square", bestFor: ["Lunch on the mastic-villages day"], reservations: "Recommended weekends", website: "" },
    { name: "Mesainos", city: "Chios", area: "Mesta village", cuisine: "Traditional", description: "The other Mesta taverna, square-side, popular with locals.", why: "Local choice in Mesta.", phone: "+30 2271 076050", address: "Mesta, near central square", price: "EUR 15 to 25 pp", hours: "12:00 PM to 11:00 PM daily", signatures: ["Mastic-flavored lamb", "Spoon sweets", "Local cheese pies"], vibe: "Village square", bestFor: ["Lunch alternative in Mesta"], reservations: "Walk-in", website: "" },
    { name: "Roussiko", city: "Chios", area: "Pyrgi village", cuisine: "Local Chian", description: "Family-run, in the painted village of Pyrgi. The grandmother is in the kitchen.", why: "Word-of-mouth favorite.", phone: "+30 2271 072690", address: "Pyrgi village center", price: "EUR 12 to 22 pp", hours: "12:00 PM to 10:00 PM daily", signatures: ["Stuffed cabbage rolls", "Lamb stew", "Garden vegetables"], vibe: "Family kitchen", bestFor: ["Lunch in Pyrgi"], reservations: "Walk-in", website: "" },
    { name: "Pyrgos Avgonima", city: "Chios", area: "Avgonima village", cuisine: "Mountain taverna", description: "Stone-built taverna in the mountain village of Avgonima, with a sunset-facing terrace over the valley.", why: "Often called the best sunset dining spot on the island.", phone: "+30 2271 042175", address: "Avgonima village", price: "EUR 18 to 30 pp", hours: "12:00 PM to 11:00 PM, summer daily", signatures: ["Lamb chops grilled over wood", "Mountain salad", "Honey-mastiha dessert"], vibe: "Mountain terrace, sunset", bestFor: ["Mountain-day lunch"], reservations: "Recommended", website: "" },
    { name: "Oi Myloi", city: "Chios", area: "Avgonima area", cuisine: "Traditional", description: "Garden taverna with windmills on the property. Quiet, shaded, traditional menu.", why: "Local favorite, often quieter than Pyrgos.", phone: "+30 2271 032247", address: "Near Avgonima", price: "EUR 15 to 25 pp", hours: "12:00 PM to 10:00 PM", signatures: ["Garden vegetables", "Cheese pies", "Stuffed peppers"], vibe: "Garden, shaded", bestFor: ["Mountain-day lunch"], reservations: "Walk-in", website: "" },
    { name: "Yperion", city: "Chios", area: "Chios Town", cuisine: "Modern Greek", description: "Newer entry, modern Greek with a focus on Aegean ingredients. Good plating, smart wine list.", why: "Strong reviews from food publications.", phone: "+30 2271 044566", address: "Chios Town center", price: "EUR 20 to 35 pp", hours: "7:00 PM to 12:00 AM, closed Tuesdays", signatures: ["Grouper carpaccio", "Slow-cooked goat", "Seasonal vegetable plates"], vibe: "Modern", bestFor: ["Quieter dinner"], reservations: "Recommended", website: "" },

    /* CRETE */
    { name: "Christoforos", city: "Crete", source: "Georgia (Chania local)", area: "Chania Old Harbor (end past the mosque)", cuisine: "Traditional Cretan", description: "Long-running family taverna at the far end of the Venetian harbor, past the mosque. Famous for traditional Cretan cuisine. The locals' end-of-the-harbor pick.", why: "Georgia's strong recommendation. The classic Chania harbor meal.", phone: "", address: "End of Akti Tombazi past the mosque, Chania Old Harbor", price: "EUR 25 to 40 pp", hours: "12:00 PM to 12:00 AM daily", signatures: ["Cretan lamb", "Stuffed vegetables", "Local cheese plates"], vibe: "Traditional, harborfront", bestFor: ["Classic Cretan dinner"], reservations: "Recommended weekends", website: "" },
    { name: "Salis", city: "Crete", source: "Georgia (Chania local)", area: "Chania Old Harbor", cuisine: "Modern Cretan, seafood fusion", description: "Polished modern Cretan on the harbor front, with a great Cretan-fusion menu and excellent seafood. Georgia's note: love the lavraki, and Georgia knows the owners. Partners with the Manousakis Nostos Winery family.", why: "Michelin Guide listed.", phone: "+30 2821 105168", address: "Akti Tombazi 16, Chania Old Harbor", price: "EUR 30 to 50 pp", hours: "12:00 PM to 12:00 AM daily", signatures: ["Lavraki (sea bass)", "Snails Bourbouristoi", "Slow-cooked goat", "Cretan cheese plate"], vibe: "Refined, harbor view", bestFor: ["Special night", "Seafood dinner"], reservations: "Required", website: "https://www.salischania.gr" },
    { name: "Apostolis", city: "Crete", source: "Georgia (Chania local)", area: "Chania Old Harbor", cuisine: "Seafood", description: "Long-standing harbor taverna famous for fresh seafood. Whole fish by weight, octopus, calamari.", why: "Georgia's recommendation. Original harbor seafood house.", phone: "", address: "Akti Enoseos, Chania Old Harbor", price: "EUR 25 to 45 pp", hours: "12:00 PM to 12:00 AM daily", signatures: ["Whole grilled fish", "Octopus", "Calamari"], vibe: "Harborfront, classic", bestFor: ["Fish dinner"], reservations: "Recommended", website: "" },
    { name: "Ta Neoria", city: "Crete", source: "Georgia (Chania local)", area: "Chania Old Harbor", cuisine: "Seafood, fresh catch", description: "Another harbor seafood spot, known for very fresh fish. A favorite of Georgia and her husband Kostas, specifically Kostas's pick.", why: "Personal recommendation from Georgia and Kostas, Chania locals.", phone: "", address: "Akti Enoseos, Chania Old Harbor", price: "EUR 25 to 40 pp", hours: "12:00 PM to 12:00 AM daily", signatures: ["Fresh catch of the day", "Grilled octopus", "Seafood meze"], vibe: "Harborfront, fresh-fish focus", bestFor: ["Seafood lunch or dinner"], reservations: "Walk-in works", website: "" },
    { name: "Ta Chalkina", city: "Crete", source: "Georgia (Chania local)", area: "Chania Old Harbor", cuisine: "Cretan, meat-focused, live music", description: "Harbor-side restaurant with a lyra player most nights. Best for pork and beef dishes. Georgia's note: skip the lamb chops, they disappoint here. Call ahead to find out which nights musicians are performing for the best traditional Cretan music.", why: "Best Chania music-dinner combo.", phone: "+30 2821 041570", address: "Akti Tombazi 29, Chania", price: "EUR 25 to 40 pp", hours: "12:00 PM to 12:00 AM daily", signatures: ["Pork dishes", "Beef stifado", "Cretan pilafi", "Live lyra music"], vibe: "Lively, harbor, live music", bestFor: ["Group dinner with music"], reservations: "Recommended, ask about music schedule", website: "https://www.ta-chalkina.gr" },
    { name: "Zepos", city: "Crete", source: "Georgia (Chania local)", area: "Chania Old Harbor", cuisine: "Traditional Cretan, small plates", description: "Harbor taverna known for small plate options and traditional Cretan cooking. Order many things, share, drink raki.", why: "Georgia's recommendation. Strong small-plate format for sharing.", phone: "", address: "Akti Enoseos, Chania Old Harbor", price: "EUR 20 to 35 pp", hours: "12:00 PM to 12:00 AM daily", signatures: ["Cretan mezedes platter", "Local cheese", "Snails", "Raki"], vibe: "Traditional, small-plate sharing", bestFor: ["Group meze night"], reservations: "Recommended", website: "" },
    { name: "Spilio Taverna", city: "Crete", source: "Georgia (Chania local)", area: "Above Falassarna beach", cuisine: "Traditional Cretan", description: "Mountain road taverna above Falassarna beach, run by two siblings. Homemade traditional Cretan food with amazing views over the bay.", why: "Georgia's strong recommendation. Family-run, two siblings run the place.", phone: "", address: "Road above Falassarna beach", price: "EUR 18 to 30 pp", hours: "12:00 PM to 10:00 PM, summer daily", signatures: ["Homemade Cretan classics", "Garden vegetables", "Local lamb"], vibe: "Mountain road, view, family-run", bestFor: ["Lunch on the Falassarna day"], reservations: "Walk-in", website: "" },
    { name: "Tamam", city: "Crete", area: "Chania Old Town", cuisine: "Cretan with Anatolian influence", description: "Restaurant inside a former 16th-century Turkish bath, with vaulted ceilings and a hidden courtyard.", why: "Michelin Guide listed.", phone: "+30 2821 096080", address: "Zampeliou 49, Chania Old Town", price: "EUR 20 to 35 pp", hours: "7:00 PM to 12:00 AM daily", signatures: ["Lamb with quince", "Smoked aubergine", "Sea bass in vine leaves"], vibe: "Vaulted ceilings, historic", bestFor: ["Special Chania dinner"], reservations: "Required, days ahead in summer", website: "https://www.tamamchania.com" },
    { name: "To Maridaki", city: "Crete", area: "Chania Old Town", cuisine: "Seafood meze, classic", description: "Loud, crowded, beloved, on a side street with tables on the cobbles. Fried smelt, grilled octopus, raki on the house.", why: "Constant local recommendation.", phone: "+30 2821 008880", address: "Daskalogianni 33, Chania", price: "EUR 20 to 35 pp", hours: "12:00 PM to 12:00 AM daily", signatures: ["Fried smelt (maridaki)", "Grilled octopus", "Dakos salad"], vibe: "Loud, lively, on the cobbles", bestFor: ["Classic Chania meal"], reservations: "Walk-in, expect a wait", website: "" },
    { name: "Well of the Turk", city: "Crete", area: "Chania Old Town (Splantzia)", cuisine: "Mediterranean with Levantine touches", description: "Romantic restaurant in the former Turkish quarter, around an actual Ottoman well in the courtyard. Live oud music some nights.", why: "Recommended by Conde Nast.", phone: "+30 2821 054547", address: "Kalinikou Sarpaki 1 to 3, Chania", price: "EUR 25 to 45 pp", hours: "7:00 PM to 12:00 AM, closed Sundays", signatures: ["Lamb shoulder slow-roasted", "Hummus with confit lamb", "Smoked aubergine"], vibe: "Courtyard, intimate", bestFor: ["Quieter group dinner"], reservations: "Required", website: "" },
    { name: "Kariatis", city: "Crete", area: "Chania Old Harbor (Plateia Katechaki)", cuisine: "Italian-Greek", description: "Italian-Greek crossover, the place to go when someone wants pizza or pasta. Wood-fired pizza, fresh pasta, harbor view.", why: "Best pizza in Chania.", phone: "+30 2821 055600", address: "Plateia Katechaki 12, Chania", price: "EUR 25 to 40 pp", hours: "12:30 PM to 12:00 AM daily", signatures: ["Margherita pizza", "Fresh tagliatelle with truffle", "Tiramisu"], vibe: "Italian-Greek, harbor view", bestFor: ["Pasta night"], reservations: "Recommended", website: "" },
    { name: "Mikrolimano", city: "Crete", area: "Nea Chora (Chania)", cuisine: "Seafood", description: "Family-run seafood taverna right on Nea Chora beach. Toes-in-sand tables, fish from the morning.", why: "Best Nea Chora seafood for value.", phone: "+30 2821 057062", address: "Akti Papanikoli 19, Nea Chora, Chania", price: "EUR 20 to 35 pp", hours: "12:00 PM to 12:00 AM daily", signatures: ["Whole grilled fish", "Octopus", "Calamari"], vibe: "Beachfront, casual", bestFor: ["Seafood night"], reservations: "Walk-in", website: "" },
    { name: "Ta Meraklikia", city: "Crete", area: "Kato Daratso (Chania suburbs)", cuisine: "Traditional Cretan", description: "Neighborhood taverna in Kato Daratso. Local, cheap, traditional. The post-Samaria 'don't make me drive' option.", why: "Local find.", phone: "+30 2821 091900", address: "Kato Daratso, Chania", price: "EUR 15 to 25 pp", hours: "12:00 PM to 12:00 AM daily", signatures: ["Lamb chops", "Wild greens", "House wine"], vibe: "Neighborhood, no frills", bestFor: ["Easy night"], reservations: "Walk-in", website: "" },
    { name: "Oasis Souvlaki", city: "Crete", area: "Chania center", cuisine: "Souvlaki, fast", description: "The go-to souvlaki in Chania. Pork or chicken in pita with tzatziki, fries, tomato. EUR 4 a wrap. Open late.", why: "Local favorite, always packed late night.", phone: "+30 2821 088666", address: "Mousouron 2, Chania", price: "EUR 5 to 12 pp", hours: "11:00 AM to 4:00 AM daily", signatures: ["Pork souvlaki pita", "Chicken gyros", "Fries"], vibe: "Fast, casual, late", bestFor: ["Lunch on the move", "Late night"], reservations: "No", website: "" },
    { name: "Pelagos Marathi", city: "Crete", area: "Marathi beach (Akrotiri peninsula)", cuisine: "Beachfront seafood", description: "Toes-in-sand seafood taverna on Marathi beach, 20 minutes from Chania. Post-swim lunch destination.", why: "Top of Chania-area beachfront lunch lists.", phone: "+30 2821 064004", address: "Marathi beach, Akrotiri", price: "EUR 25 to 40 pp", hours: "12:00 PM to 10:00 PM, summer daily", signatures: ["Whole grilled bream", "Fish soup", "Greek salad"], vibe: "Beach taverna", bestFor: ["Lunch on Akrotiri day"], reservations: "Recommended summer weekends", website: "" },
    { name: "I Koukouvagia", city: "Crete", source: "Georgia (Chania local)", area: "Halepa (Chania suburb on a hill)", cuisine: "Pastry shop and cafe with sunset view", description: "Pastry shop and café on a hill in Halepa, the historic Chania suburb of grand mansions. One of the best sunset views in the area. Famous for sweets, coffee, and the view.", why: "Georgia's recommendation. Halepa was Eleftherios Venizelos's home and the German WWII cemetery is nearby, adding historical layers.", phone: "", address: "Halepa hill, Chania", price: "EUR 5 to 15 pp", hours: "9:00 AM to 12:00 AM daily", signatures: ["Greek coffee", "Traditional sweets", "Sunset view"], vibe: "Hilltop cafe, sunset", bestFor: ["Late afternoon coffee with view"], reservations: "Walk-in", website: "" },
    { name: "Tara Agia Roumeli", city: "Crete", area: "Agia Roumeli (end of Samaria Gorge)", cuisine: "Taverna", description: "Where the Samaria hikers stagger after 16 km. Family-run, on the water, simple Cretan menu.", why: "The Samaria hiker's reward.", phone: "+30 2825 091231", address: "Agia Roumeli waterfront", price: "EUR 15 to 25 pp", hours: "11:00 AM to 10:00 PM, summer daily", signatures: ["Grilled fish", "Greek salad", "Cold Mythos beer"], vibe: "Post-hike paradise", bestFor: ["Lunch after Samaria"], reservations: "No", website: "" },
    { name: "Innachorion", city: "Crete", area: "Elos village", cuisine: "Mountain Cretan", description: "Mountain village taverna on the road back from Elafonisi. Whole roast chestnut-fed pork, wild greens, raki from the still.", why: "Cretan-blog favorite for the post-Elafonisi stop.", phone: "+30 2822 061111", address: "Elos main square", price: "EUR 15 to 25 pp", hours: "12:00 PM to 10:00 PM, summer daily", signatures: ["Roast pork", "Stamnagathi", "Local cheese"], vibe: "Mountain village", bestFor: ["Late lunch returning from Elafonisi"], reservations: "Walk-in", website: "" }
  ],

  /* ========== SITES ========== */
  sites: [
    /* ATHENS */
    { name: "Acropolis", city: "Athens", type: "Archaeological site, UNESCO", description: "The fortified rock at the center of Athens, crowned by the Parthenon (447 to 432 BC). Also the Erechtheion with the Caryatid porch, the Propylaia, and the Temple of Athena Nike.", cost: "EUR 30 pp, timed entry", hours: "8:00 AM to 8:00 PM summer (last entry 7:00 PM)", whenToVisit: "8:00 AM first slot for cool and few crowds.", website: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2384", tickets: "https://hhticket.gr", tips: "Modest dress. No selfie sticks. Bring water. Shoes with grip." },
    { name: "Acropolis Museum", city: "Athens", type: "Museum", description: "Modern museum across from the south slope. Houses the original sculptures from the site. The glass top floor frames the actual Parthenon.", cost: "EUR 20 pp", hours: "9:00 AM to 8:00 PM (Fridays to 10:00 PM)", website: "https://www.theacropolismuseum.gr", tickets: "https://etickets.theacropolismuseum.gr", tips: "Top floor cafe has Parthenon views." },
    { name: "Ancient Agora and Temple of Hephaestus", city: "Athens", type: "Archaeological site", description: "The civic and commercial heart of ancient Athens. The Temple of Hephaestus (449 BC) is the best-preserved Doric temple in Greece, nearly intact.", cost: "EUR 10 pp", hours: "8:00 AM to 8:00 PM", website: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2485", tickets: "https://hhticket.gr", tips: "Shaded paths, easier in heat than the Acropolis." },
    { name: "Roman Agora and Tower of the Winds", city: "Athens", type: "Archaeological site", description: "The Roman-era marketplace. The Tower of the Winds (1st c. BC) is an octagonal marble clocktower, the world's oldest meteorological station.", cost: "EUR 8 pp", hours: "8:00 AM to 8:00 PM", website: "https://odysseus.culture.gr", tickets: "https://hhticket.gr", tips: "30 to 45 minute visit." },
    { name: "National Archaeological Museum", city: "Athens", type: "Museum", description: "World-class collection of Greek antiquities. The Mask of Agamemnon, the Jockey of Artemision, the Antikythera Mechanism. Allow 2.5 to 3 hours.", cost: "EUR 12 pp", hours: "9:00 AM to 8:00 PM, closed Tue mornings", website: "https://www.namuseum.gr", tickets: "Buy at the door or online", tips: "Metro Line 1 (green) to Viktoria." },
    { name: "Olympieion (Temple of Olympian Zeus)", city: "Athens", type: "Archaeological site", description: "The largest temple ever built in Greece. Started in the 6th century BC, finished by Hadrian. Only 15 of the original 104 columns remain (17m tall).", cost: "EUR 8 pp", hours: "8:00 AM to 8:00 PM", website: "https://odysseus.culture.gr", tickets: "https://hhticket.gr", tips: "30 minute visit." },
    { name: "Panathenaic Stadium", city: "Athens", type: "Historical site", description: "The only stadium in the world built entirely of marble. Site of the first modern Olympic Games (1896).", cost: "EUR 5 pp, audio guide included", hours: "8:00 AM to 7:00 PM", website: "https://www.panathenaicstadium.gr", tickets: "Buy at the gate", tips: "Climb to the top of the stands for the view." },
    { name: "Benaki Museum of Greek Culture", city: "Athens", type: "Museum", description: "Greek decorative arts from prehistory to the 20th century. Three floors. Excellent café on the roof.", cost: "EUR 12 pp", hours: "10:00 AM to 6:00 PM (Thu to 12:00 AM), closed Tuesdays", website: "https://www.benaki.org", tickets: "At the door", tips: "Free on Thursdays." },
    { name: "Cape Sounion, Temple of Poseidon", city: "Athens", type: "Archaeological site", description: "5th century BC marble temple on a cliff over the Aegean, 70 km south. Famous for its sunset.", cost: "EUR 20 pp", hours: "9:30 AM to sunset", website: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2476", tickets: "https://hhticket.gr", tips: "Arrive 45 min before sunset." },

    /* CHIOS */
    { name: "Nea Moni Monastery (UNESCO)", city: "Chios", type: "Religious site, UNESCO", description: "11th-century monastery 14 km into the mountains from Chios Town. The katholikon has some of the finest surviving Byzantine mosaics anywhere. Active monastery.", cost: "EUR 4 pp", hours: "8:00 AM to 1:00 PM and 4:00 PM to 8:00 PM daily", website: "https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=1822", tickets: "At the door", tips: "Modest dress required." },
    { name: "Mastic Museum", city: "Chios", type: "Museum", description: "Modern museum on the cultivation, harvesting, and processing of mastic. Run by the Piraeus Bank Group Cultural Foundation.", cost: "EUR 6 pp", hours: "10:00 AM to 6:00 PM, closed Tuesdays", website: "https://piop.gr/en/mastiha-museum", tickets: "At the door", tips: "1 hour visit. Shop downstairs has the best mastic product selection." },
    { name: "Olympi Cave (Sykia Cave)", city: "Chios", type: "Cave", description: "Underground chamber discovered in 1985 when a quarry blast opened the roof. Stalactites, columns, 60 meter deep chamber.", cost: "EUR 6 pp", hours: "11:00 AM to 6:00 PM, closed Mondays", website: "", tickets: "At the entrance", tips: "Light layer, cave is 16C year-round." },
    { name: "Pyrgi (the painted village)", city: "Chios", type: "Historic village", description: "Medieval village in south Chios where every facade is decorated with xysta, a black-and-white geometric pattern scratched into wet plaster.", cost: "Free", hours: "Always open", website: "", tickets: "", tips: "Avoid midday in summer." },
    { name: "Mesta (medieval mastic village)", city: "Chios", type: "Historic village", description: "Best-preserved of the south Chios mastic villages. Built as a defensive fortress with houses fused into the outer wall.", cost: "Free", hours: "Always open", website: "", tickets: "", tips: "No cars allowed in." },
    { name: "Anavatos (abandoned village)", city: "Chios", type: "Historic village (ruin)", description: "Vertical Byzantine village on a 300m cliff, abandoned after the 1822 Ottoman massacre. Called the Mystras of the Aegean.", cost: "Free", hours: "Always open", website: "", tickets: "", tips: "Real shoes, path is uneven." },
    { name: "Daskalopetra (Homer's Stone)", city: "Chios", type: "Historic site", description: "A massive boulder above Vrontados, traditionally said to be where Homer taught his students.", cost: "Free", hours: "Always open", website: "", tickets: "", tips: "Combine with a coffee in Vrontados harbor." },
    { name: "Justiniani Museum (Chios Castle)", city: "Chios", type: "Museum", description: "Inside the medieval Castle of Chios. Byzantine icons, frescoes, Venetian and Ottoman period artifacts.", cost: "EUR 2 pp", hours: "8:00 AM to 3:00 PM, closed Mondays", website: "", tickets: "At the museum", tips: "Walk through the castle precinct after." },
    { name: "Korais Library", city: "Chios", type: "Library, museum", description: "One of the largest libraries in Greece. The Argenti Folklore Museum is in the same building, with Chiot traditional dress and folk art.", cost: "EUR 2 pp", hours: "8:00 AM to 2:00 PM, closed Sundays", website: "https://koraeslibrary.gr", tickets: "At the door", tips: "45 minute stop." },

    /* CRETE */
    { name: "Samaria Gorge", city: "Crete", type: "National park, hike", source: "Georgia (Chania local)", description: "16 km gorge through the White Mountains, ending at the Libyan Sea. Begins at Omalos plateau (1230m) and descends through pine forest, past the abandoned Samaria village, through the Iron Gates where walls narrow to 4 meters and rise 300m. Strenuous, 4 to 7 hours, mostly downhill. Ends at Agia Roumeli, only reachable by foot or boat. Historically a strategic position for the Cretan resistance during WWII, where locals hid British soldiers and helped them escape after the German invasion of Crete.", cost: "EUR 10 pp entry, plus EUR 16 bus + EUR 15 ferry exit = ~EUR 41 pp total", hours: "6:00 AM to 2:00 PM last entry, May through October", website: "https://www.samaria.gr", tickets: "Pay at the gate", tips: "Real hiking shoes, 2L water minimum. Natural spring midway, no other amenities. Most tour companies on the Chania harbor sell packages with transport included." },
    { name: "Balos Lagoon", city: "Crete", type: "Beach, natural site", source: "Georgia (Chania local)", description: "Shallow turquoise lagoon between Cape Tigani and the Balos peninsula. Reached by ferry from Kissamos port or rough dirt road. Georgia's tip: skip the large ferry and book a private or small cruise from the Chania harbor (boats anchored at the main Limani advertise multi-beach trips).", cost: "EUR 40 to 45 pp standard ferry, EUR 80 to 150 pp private charter, EUR 1 lagoon entry", hours: "Ferry departs Kissamos 10:30 AM, returns 5:45 PM", website: "https://www.cretandailycruises.com", tickets: "Book ferry online or charter at Chania harbor", tips: "Water shoes essential." },
    { name: "Elafonisi Beach", city: "Crete", type: "Beach", description: "Pink-sand beach (color from crushed shells) on the southwest tip. Shallow lagoon, perfect for non-swimmers. Protected Natura 2000 site. On the drive: several picturesque villages, plus a chapel built into a cave reached by stairs cut into the mountainside.", cost: "Free, EUR 3 parking", hours: "Always open", website: "", tickets: "", tips: "73 km from Chania, 1.5 hr drive. Don't take sand home." },
    { name: "Chania Old Town", city: "Crete", type: "Historic quarter", description: "Venetian-era walled town built on the foundations of ancient Kydonia. The Venetian harbor with the lighthouse and Firkas Fortress, the cobbled lanes of Stivanadika, the Splantzia Turkish quarter. Beyond the harborfront, the winding cobblestone streets behind the harbor are filled with quiet shops and cafes tucked away, great for escaping the crowds.", cost: "Free", hours: "Always open", website: "", tickets: "", tips: "Park outside the walls and walk in." },
    { name: "Halepa neighborhood", city: "Crete", type: "Historic quarter", source: "Georgia (Chania local)", description: "Suburb of Chania on a hill east of the center, lined with grand 19th-century mansions, many built by foreign diplomats. The home of Eleftherios Venizelos, who led the revolution that liberated Crete from the Ottomans and later served as Prime Minister of Greece. The German cemetery for paratroopers killed in the WWII invasion of Crete (1941) is in the same neighborhood. The café I Koukouvagia on the hill has one of the best sunset views in town.", cost: "Free to walk", hours: "Always open", website: "", tickets: "", tips: "Late afternoon walk + sunset at I Koukouvagia + dinner in Old Town is the easy combo." },
    { name: "Manousakis Nostos Winery", city: "Crete", type: "Winery", source: "Georgia (Chania local)", description: "Family-run winery in Vatolakkos, 20 minutes from Chania. Ted Manousakis (who lives in northern Virginia) founded it; his daughter and son-in-law run it, with the son-in-law as chef. All food is sourced from their own land or locally. Tours, tastings, and a strong food menu. The Manousakis family are partners with the owners of the Salis restaurant in Chania harbor.", cost: "Tasting EUR 15 to 30 pp, food extra", hours: "11:00 AM to 10:00 PM, summer daily", website: "https://nostoswines.com", tickets: "Book tour ahead", tips: "Half-day visit. Good rest-day option for non-hikers on Samaria day." },
    { name: "Maritime Museum of Crete", city: "Crete", type: "Museum", description: "Inside Firkas Fortress at the western end of the Chania harbor. Cretan naval history, models of Greek ships through the ages, photos of the 1941 Battle of Crete.", cost: "EUR 4 pp", hours: "9:00 AM to 4:00 PM", website: "https://mar-mus-crete.gr", tickets: "At the door", tips: "1 hour visit." },
    { name: "Archaeological Museum of Chania", city: "Crete", type: "Museum", description: "Newly relocated to a purpose-built building outside the old town. Minoan to Roman finds from western Crete.", cost: "EUR 6 pp", hours: "8:30 AM to 4:00 PM, closed Tuesdays", website: "https://amch.gr", tickets: "At the door", tips: "Roman mosaics in the lower gallery are the highlight." },
    { name: "Botanical Park & Gardens of Crete", city: "Crete", type: "Garden, walking park", description: "20 hectares of fruit trees, herbs, and medicinal plants in a steep ravine, with a creek and walking paths.", cost: "EUR 6.50 pp", hours: "9:00 AM to sunset, April to October", website: "https://www.botanical-park.com", tickets: "At the entrance", tips: "20 minutes from Chania. Comfortable walking shoes." },
    { name: "Agia Triada Monastery (Akrotiri)", city: "Crete", type: "Religious site", description: "17th-century Venetian-period monastery on the Akrotiri peninsula, surrounded by olive groves. Active monastery making its own olive oil and wine.", cost: "EUR 2.50 pp", hours: "8:00 AM to 7:00 PM", website: "", tickets: "At the door", tips: "Modest dress. Buy a bottle of the monastery olive oil." }
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
    { name: "Nea Chora", city: "Crete", source: "Georgia (Chania local)", distance: "10 to 15 min walk west of Chania harbor", surface: "Sand", facilities: "Loungers, tavernas, lifeguard summer, showers", description: "Chania's city beach, popular because it's a short walk from the Old Harbor. Sandy, with lots of tavernas and cafes close by.", vibe: "City beach, convenient", bestFor: ["Easy mornings from Old Town"], website: "" },
    { name: "Kalamaki", city: "Crete", source: "Georgia (Chania local)", distance: "About 10 min from Chania harbor, on main bus line", surface: "Sand", facilities: "Tavernas behind it, easy access", description: "Small sandy lagoon with relatively shallow, clear water. Nice tavernas behind the beach. Easy reach from the city via the main bus line, no car needed.", vibe: "Small lagoon, calm water", bestFor: ["Half-day swim", "No-car option"], website: "" },
    { name: "Iguana Beach", city: "Crete", source: "Georgia (Chania local)", distance: "West of Chania", surface: "Sand", facilities: "Beach bar, loungers", description: "Smaller beach west of Chania, less crowded than Agia Marina or Platanias.", vibe: "Mellow, less touristy", bestFor: ["Beach day with fewer crowds"], website: "" },
    { name: "Loutraki Beach", city: "Crete", source: "Georgia (Chania local)", distance: "West of Chania (near Kolymbari)", surface: "Sand and pebble", facilities: "Tavernas, loungers", description: "Quiet beach near Kolymbari, on the western edge of the Chania bay. Clear water, less developed.", vibe: "Quieter, scenic", bestFor: ["Calm swim"], website: "" },
    { name: "Marathi", city: "Crete", source: "Georgia (Chania local)", distance: "20 km east (Akrotiri peninsula)", surface: "Sand", facilities: "Tavernas, loungers, sheltered cove", description: "Two adjacent coves on the Akrotiri peninsula, with fine sand and shallow water. Pelagos Marathi taverna for lunch.", vibe: "Sheltered cove, family", bestFor: ["Akrotiri day lunch + swim"], website: "" },
    { name: "Agia Marina", city: "Crete", source: "Georgia (Chania local)", distance: "About 9 km west of Chania", surface: "Sand", facilities: "Full tourist services, loungers, restaurants, water sports", description: "Long sandy beach in a developed tourist village west of Chania. Full amenities, watersports, family-oriented hotels and restaurants.", vibe: "Developed, family-tourist", bestFor: ["Full-service beach day"], website: "" },
    { name: "Platanias", city: "Crete", source: "Georgia (Chania local)", distance: "11 km west of Chania", surface: "Sand", facilities: "Full tourist services, restaurants, bars, water sports", description: "Larger beach town west of Chania, with a long sandy beach and lively beachfront strip of restaurants and bars. Lots of nightlife.", vibe: "Tourist town, lively", bestFor: ["Beach + lively evening"], website: "" },
    { name: "Stavros (Zorba beach)", city: "Crete", source: "Georgia (Chania local)", distance: "17 km north (Akrotiri)", surface: "Sand and small pebble", facilities: "Tavernas, loungers", description: "Filming location for Zorba the Greek (1964). A perfect lagoon-shape bay backed by a vertical mountain. Calm, clear, relatively shallow water.", vibe: "Cinematic, sheltered", bestFor: ["Akrotiri day"], website: "" },
    { name: "Seitan Limania", city: "Crete", distance: "22 km northeast (Akrotiri)", surface: "Pebble", facilities: "None", description: "Dramatic fjord-like bay cut into vertical cliffs. Steep 15 minute descent down a goat path.", vibe: "Wild, dramatic, hike-in", bestFor: ["Adventurous swimmers"], website: "" },
    { name: "Balos Lagoon", city: "Crete", source: "Georgia (Chania local)", distance: "60 km northwest", surface: "White sand and turquoise lagoon", facilities: "One beach taverna, minimal shade", description: "Possibly the most famous beach in Greece. Reached by ferry from Kissamos (90 min). Georgia's tip: book a private or small charter boat from Chania harbor instead of the large crowded ferry.", vibe: "Postcard, busy by midday", bestFor: ["Full-day Balos trip"], website: "https://www.cretandailycruises.com" },
    { name: "Falassarna", city: "Crete", source: "Georgia (Chania local)", distance: "55 km west (about 30 min drive)", surface: "Long sand beach (3 km)", facilities: "Tavernas, loungers, water sports, Spilio Taverna on the road above", description: "Long western beach with clear turquoise water and ancient ruins nearby. Famous for sunsets. Don't miss Spilio Taverna on the road above, run by two siblings, with homemade traditional Cretan cuisine and amazing views.", vibe: "Long, dramatic sunsets", bestFor: ["Sunset", "Day trip"], website: "" },
    { name: "Elafonisi", city: "Crete", source: "Georgia (Chania local)", distance: "73 km southwest", surface: "Pink sand", facilities: "Loungers, snack bar, minimal shade", description: "Famous pink-sand beach with a shallow lagoon. Sandbar connects to a small island. Natura 2000 protected. On the drive: several picturesque villages, plus a chapel built into a cave reached by stairs cut into the mountainside.", vibe: "Postcard, family-friendly water", bestFor: ["Day trip"], website: "" },
    { name: "Kedrodasos", city: "Crete", distance: "75 km southwest (next to Elafonisi)", surface: "Sand, cedar trees", facilities: "None, wild", description: "10 minute walk south from Elafonisi parking. Sand-and-cedar trees, no facilities, almost no people. The local escape from Elafonisi crowds.", vibe: "Wild, quiet", bestFor: ["Quiet alternative to Elafonisi"], website: "" }
  ],

  /* ========== PACKING ========== */
  packing: {
    intro: "Two bags: carry-on holds the things you cannot afford to lose or be without if your checked bag goes missing. Checked bag holds everything else and the bulky stuff. Tap to check off, your progress saves to this device.",
    carryOn: [
      {
        section: "Documents and money (never check these)",
        items: [
          "Passport (valid through at least Dec 2026)",
          "Driver's license or backup ID",
          "Printed copy of passport, stashed separately",
          "Photo of passport in your phone's Photos and in cloud",
          "Credit cards (notify your bank of travel dates Jun 6 to 21)",
          "Backup credit card in a separate pocket",
          "Cash: $100 to $200 USD plus EUR 50 to 100 if you have it from home",
          "Travel insurance card and policy number",
          "Printed copies of all confirmations (Athens Vrbo, Grecian Castle, Crete Vrbo, return flights)"
        ]
      },
      {
        section: "Electronics (TSA requires these in carry-on)",
        items: [
          "Phone + charging cable",
          "EU plug adapter, Type C or Type F (Greek outlets)",
          "Power bank, 10,000 to 20,000 mAh (lithium batteries are NOT allowed in checked bags)",
          "Wireless or wired earbuds",
          "Laptop or tablet if bringing one",
          "Any spare batteries or vapes (also banned from checked bags)"
        ]
      },
      {
        section: "Medications and health",
        items: [
          "Prescription medications in original bottles",
          "Copy of any prescriptions (in case you need a refill abroad)",
          "Ibuprofen / Tylenol",
          "Imodium (changes in diet hit hard)",
          "Antihistamines (Benadryl or Zyrtec)",
          "Band-aids and blister bandages (especially if hiking Samaria)",
          "Hand sanitizer (under 3.4 oz / 100 ml)",
          "Tissues or a small pack of wet wipes"
        ]
      },
      {
        section: "Personal items",
        items: [
          "Glasses, contacts, or both",
          "Contact lens solution (3.4 oz / 100 ml or smaller)",
          "Sunglasses",
          "Lip balm with SPF",
          "Travel-size toothbrush and toothpaste (if checked bag goes missing)",
          "Hairbrush or comb",
          "Personal hygiene essentials for one day"
        ]
      },
      {
        section: "One day of clothes (in case checked bag is delayed)",
        items: [
          "One full outfit: shirt, shorts or pants, underwear, socks",
          "One pair of swim trunks or swimsuit",
          "Light layer for the plane (cardigan, hoodie, or wrap)"
        ]
      },
      {
        section: "Plane comfort",
        items: [
          "Empty refillable water bottle (fill after security)",
          "Snacks: nuts, jerky, granola bars (no fresh fruit or meat into the EU)",
          "Eye mask",
          "Compression socks if you're prone to swelling",
          "Book, downloaded shows, or a magazine",
          "Pen for landing cards"
        ]
      }
    ],
    checked: [
      {
        section: "Tops (June in Greece: 85 to 95 F)",
        items: [
          "5 to 7 t-shirts (quick-dry or linen; cotton dries slowly in humidity)",
          "2 tank tops or sleeveless options",
          "1 long-sleeve linen or button-down for cool evenings and monasteries",
          "1 nicer top for dinners in Athens or Chania",
          "1 light cardigan or wrap for AC and evening breeze"
        ]
      },
      {
        section: "Bottoms",
        items: [
          "2 pairs shorts (athletic and casual)",
          "1 pair lightweight pants or linen trousers (for monasteries and cooler evenings)",
          "1 sundress or skirt (optional)",
          "1 pair of jeans if you must, but linen pants are better in this heat"
        ]
      },
      {
        section: "Swim and beach",
        items: [
          "2 swimsuits or swim trunks (one always dry)",
          "Cover-up, sarong, or beach dress",
          "Quick-dry beach towel (the Vrbos usually have towels, but for sand they get destroyed)",
          "Reef-safe sunscreen, SPF 50+ (Greece has expensive sunscreen, buy at home)",
          "Aftersun gel or aloe"
        ]
      },
      {
        section: "Shoes (2 to 3 pairs, no more)",
        items: [
          "Comfortable walking shoes or trail runners (cobblestones, ruins, Samaria if hiking)",
          "Sandals: Tevas, Bedrocks, or Birks (beach, casual dinner, taverna)",
          "1 nicer pair for evenings (optional)"
        ]
      },
      {
        section: "Sleep and lounge",
        items: [
          "Pajamas or sleepwear (light, the apartments may not have great AC)",
          "5 to 7 pairs underwear (plan to wash mid-trip)",
          "5 to 7 pairs socks (lighter pairs, plus 1 athletic if hiking)"
        ]
      },
      {
        section: "Toiletries (full-size, in checked bag)",
        items: [
          "Shampoo and conditioner",
          "Body wash or bar soap",
          "Toothpaste (full-size)",
          "Deodorant",
          "Razor and shaving cream",
          "Skincare and any nightly routine items",
          "Hair styling tools (dual-voltage or with EU plug)",
          "Bug spray (mosquitoes appear in evenings, especially Crete countryside)"
        ]
      },
      {
        section: "Day kit and outdoor gear",
        items: [
          "Packable daypack, 15 to 25 L",
          "Wide-brim hat or packable sun hat",
          "Refillable water bottle",
          "Dry bag or zip pouch for boat days (Balos, ferry trips)",
          "Small umbrella (Athens rare summer showers)"
        ]
      },
      {
        section: "If hiking Samaria Gorge (Jun 17)",
        items: [
          "Trail runners or supportive hiking shoes",
          "Moisture-wicking socks (avoid blisters on the 10-mile downhill)",
          "Hiking poles, foldable (huge help for descent)",
          "2 L water capacity total (bottles or bladder)",
          "Electrolyte powder packets",
          "Trail snacks: bars, dried fruit, nuts"
        ]
      },
      {
        section: "Optional extras",
        items: [
          "Reusable shopping bag (for markets, beach runs)",
          "Travel laundry soap or detergent sheets",
          "Clothesline (the apartments may have one already)",
          "Snorkel mask if you snorkel",
          "Small gifts if you're meeting Maria's family or Kostas and Georgia"
        ]
      }
    ]
  },

  /* ========== PHRASES ========== */
  phrases: [
    {
      section: "Greetings and basics",
      lede: "Greeks lead with the greeting. Saying kalimera as you walk into a shop or taverna immediately shifts the energy.",
      items: [
        { gr: "Γειά σας", trans: "YAH-sas", en: "Hello / goodbye (formal or to a group)" },
        { gr: "Γειά σου", trans: "YAH-soo", en: "Hi / bye (informal, one person)" },
        { gr: "Γειά", trans: "Yah", en: "Hi (casual, very common)" },
        { gr: "Καλημέρα", trans: "ka-lee-MEH-ra", en: "Good morning (until ~12 PM)" },
        { gr: "Καλό μεσημέρι", trans: "ka-LO me-see-MEH-ree", en: "Good afternoon (~1 PM to 5 PM)" },
        { gr: "Καλησπέρα", trans: "ka-lee-SPEH-ra", en: "Good evening (after ~5 PM)" },
        { gr: "Καληνύχτα", trans: "ka-lee-NEEKH-ta", en: "Good night" },
        { gr: "Χαίρω πολύ", trans: "HEH-ro po-LEE", en: "Pleased to meet you" },
        { gr: "Τι κάνεις;", trans: "Tee KAH-nis?", en: "How are you? (informal)" },
        { gr: "Τι κάνετε;", trans: "Tee KAH-ne-te?", en: "How are you? (formal)" },
        { gr: "Καλά, ευχαριστώ", trans: "ka-LA, ef-ha-ree-STO", en: "Fine, thank you" }
      ]
    },
    {
      section: "Polite essentials",
      lede: "The four words that make every interaction smoother.",
      items: [
        { gr: "Παρακαλώ", trans: "pa-ra-ka-LO", en: "Please / you're welcome / hello (on phone)" },
        { gr: "Ευχαριστώ", trans: "ef-ha-ree-STO", en: "Thank you" },
        { gr: "Ευχαριστώ πολύ", trans: "ef-ha-ree-STO po-LEE", en: "Thank you very much" },
        { gr: "Ναί", trans: "Neh", en: "Yes (sounds like 'no' but means yes)" },
        { gr: "Όχι", trans: "OH-hee", en: "No" },
        { gr: "Συγγνώμη", trans: "see-GHNO-mee", en: "Excuse me / sorry / pardon" },
        { gr: "Με συγχωρείτε", trans: "Me seen-ho-REE-te", en: "I beg your pardon (formal)" },
        { gr: "Μιλάτε αγγλικά;", trans: "mee-LA-te ang-glee-KA?", en: "Do you speak English?" },
        { gr: "Δεν καταλαβαίνω", trans: "Then ka-ta-la-VEH-no", en: "I don't understand" },
        { gr: "Δεν μιλάω ελληνικά", trans: "Then mee-LA-o e-lee-nee-KA", en: "I don't speak Greek" },
        { gr: "Πιο αργά παρακαλώ", trans: "Pyo ar-GA pa-ra-ka-LO", en: "More slowly please" }
      ]
    },
    {
      section: "Restaurants and tavernas",
      lede: "Greek tavernas reward a few words. The waiter will warm up the second you try.",
      items: [
        { gr: "Έναν λογαριασμό παρακαλώ", trans: "EH-nan lo-ga-rias-MO pa-ra-ka-LO", en: "The bill, please" },
        { gr: "Στην υγειά μας", trans: "Steen ee-YA mas", en: "Cheers (to our health)" },
        { gr: "Γιαμας", trans: "YAH-mas", en: "Cheers (casual, most common)" },
        { gr: "Νόστιμο", trans: "NO-stee-mo", en: "Delicious" },
        { gr: "Πολύ νόστιμο", trans: "Po-LEE NO-stee-mo", en: "Very delicious" },
        { gr: "Νερό", trans: "Ne-RO", en: "Water" },
        { gr: "Παγωμένο νερό", trans: "pa-go-MEH-no ne-RO", en: "Cold water" },
        { gr: "Κρασί", trans: "Kra-SEE", en: "Wine" },
        { gr: "Κόκκινο κρασί", trans: "KO-kee-no kra-SEE", en: "Red wine" },
        { gr: "Λευκό κρασί", trans: "lef-KO kra-SEE", en: "White wine" },
        { gr: "Μπίρα", trans: "BEE-ra", en: "Beer" },
        { gr: "Ψωμί", trans: "Pso-MEE", en: "Bread" },
        { gr: "Καφές", trans: "ka-FES", en: "Coffee" },
        { gr: "Φραπέ", trans: "fra-PEH", en: "Frappé (iced coffee)" },
        { gr: "Φραπέ μέτριο", trans: "fra-PEH MEH-tree-o", en: "Frappé, medium sweet (default order)" },
        { gr: "Ελληνικός καφές", trans: "e-lee-nee-KOS ka-FES", en: "Greek coffee" },
        { gr: "Μενού παρακαλώ", trans: "Me-NU pa-ra-ka-LO", en: "Menu please" },
        { gr: "Τι προτείνετε;", trans: "Tee pro-TEE-ne-te?", en: "What do you recommend?" },
        { gr: "Είμαι χορτοφάγος", trans: "EE-meh hor-to-FA-gos", en: "I am vegetarian" },
        { gr: "Χωρίς...", trans: "Ho-REES...", en: "Without... (allergies, etc.)" }
      ]
    },
    {
      section: "Food and dishes you'll see",
      lede: "Menu words worth recognizing so you can read past the English translation.",
      items: [
        { gr: "Σαλάτα", trans: "sa-LA-ta", en: "Salad" },
        { gr: "Ψάρι", trans: "PSA-ree", en: "Fish" },
        { gr: "Χταπόδι", trans: "hta-PO-dee", en: "Octopus" },
        { gr: "Λαβράκι", trans: "la-VRA-kee", en: "Sea bass" },
        { gr: "Αρνί", trans: "ar-NEE", en: "Lamb" },
        { gr: "Χοιρινό", trans: "hee-ree-NO", en: "Pork" },
        { gr: "Μοσχάρι", trans: "mos-HA-ree", en: "Beef" },
        { gr: "Κοτόπουλο", trans: "ko-TO-poo-lo", en: "Chicken" },
        { gr: "Πατάτες", trans: "pa-TA-tes", en: "Potatoes" },
        { gr: "Φέτα", trans: "FE-ta", en: "Feta cheese" },
        { gr: "Τζατζίκι", trans: "tzat-ZEE-kee", en: "Yogurt-cucumber dip" },
        { gr: "Μεζέδες", trans: "me-ZE-des", en: "Small plates" },
        { gr: "Σουβλάκι", trans: "soov-LA-kee", en: "Grilled meat skewer" },
        { gr: "Γύρος", trans: "YEE-ros", en: "Gyro (rotating meat)" },
        { gr: "Σπανακόπιτα", trans: "spa-na-KO-pee-ta", en: "Spinach pie" },
        { gr: "Τυρόπιτα", trans: "tee-RO-pee-ta", en: "Cheese pie" },
        { gr: "Παγωτό", trans: "pa-go-TO", en: "Ice cream" },
        { gr: "Γλυκό", trans: "ghlee-KO", en: "Sweet / dessert" }
      ]
    },
    {
      section: "Directions and getting around",
      lede: "Useful when reading signs and asking the way.",
      items: [
        { gr: "Πού είναι...;", trans: "Poo EE-neh...?", en: "Where is...?" },
        { gr: "Αριστερά", trans: "a-ree-ste-RA", en: "Left" },
        { gr: "Δεξιά", trans: "dek-see-A", en: "Right" },
        { gr: "Ευθεία", trans: "ef-THEE-a", en: "Straight" },
        { gr: "Εδώ", trans: "e-DHO", en: "Here" },
        { gr: "Εκεί", trans: "e-KEE", en: "There" },
        { gr: "Κοντά", trans: "kon-DA", en: "Near" },
        { gr: "Μακριά", trans: "ma-kree-A", en: "Far" },
        { gr: "Παραλία", trans: "pa-ra-LEE-a", en: "Beach" },
        { gr: "Λιμάνι", trans: "lee-MA-nee", en: "Port / harbor" },
        { gr: "Πλατεία", trans: "pla-TEE-a", en: "Square" },
        { gr: "Δρόμος", trans: "DHRO-mos", en: "Street / road" },
        { gr: "Λεωφόρος", trans: "le-o-FO-ros", en: "Avenue (you'll see this on signs)" },
        { gr: "Αεροδρόμιο", trans: "a-e-ro-DHRO-mee-o", en: "Airport" },
        { gr: "Σταθμός", trans: "stath-MOS", en: "Station" },
        { gr: "Στάση", trans: "STA-see", en: "Stop (bus stop)" },
        { gr: "Ταξί", trans: "ta-XEE", en: "Taxi" },
        { gr: "Στο κέντρο", trans: "Sto KEN-dro", en: "To the center" },
        { gr: "Πόσο μακριά;", trans: "PO-so ma-kree-A?", en: "How far?" }
      ]
    },
    {
      section: "Shopping, money, time",
      lede: "Useful at markets, kiosks, and ticket booths.",
      items: [
        { gr: "Πόσο κάνει;", trans: "PO-so KA-nee?", en: "How much (is this)?" },
        { gr: "Πόσο κάνουν;", trans: "PO-so KA-noon?", en: "How much (are these)?" },
        { gr: "Ακριβό", trans: "a-kree-VO", en: "Expensive" },
        { gr: "Φτηνό", trans: "ftee-NO", en: "Cheap" },
        { gr: "Δεκτές κάρτες;", trans: "Dhek-TES KAR-tes?", en: "Do you accept cards?" },
        { gr: "Μετρητά", trans: "me-tree-TA", en: "Cash" },
        { gr: "Απόδειξη", trans: "a-PO-dee-ksee", en: "Receipt" },
        { gr: "Τι ώρα είναι;", trans: "Tee O-ra EE-neh?", en: "What time is it?" },
        { gr: "Τι ώρα ανοίγει;", trans: "Tee O-ra a-NEE-yee?", en: "What time does it open?" },
        { gr: "Τι ώρα κλείνει;", trans: "Tee O-ra KLEE-nee?", en: "What time does it close?" },
        { gr: "Σήμερα", trans: "SEE-me-ra", en: "Today" },
        { gr: "Αύριο", trans: "AV-ree-o", en: "Tomorrow" },
        { gr: "Τώρα", trans: "TO-ra", en: "Now" },
        { gr: "Αργότερα", trans: "ar-GHO-te-ra", en: "Later" }
      ]
    },
    {
      section: "Numbers",
      lede: "Read these aloud once and they'll stick. You'll use them every time you order or pay.",
      items: [
        { gr: "Μηδέν", trans: "mee-DHEN", en: "0" },
        { gr: "Ένα", trans: "EH-na", en: "1" },
        { gr: "Δύο", trans: "DHEE-o", en: "2" },
        { gr: "Τρία", trans: "TREE-a", en: "3" },
        { gr: "Τέσσερα", trans: "TES-se-ra", en: "4" },
        { gr: "Πέντε", trans: "PEN-de", en: "5" },
        { gr: "Έξι", trans: "EK-see", en: "6" },
        { gr: "Επτά", trans: "ep-TA", en: "7" },
        { gr: "Οκτώ", trans: "ok-TO", en: "8" },
        { gr: "Εννέα", trans: "en-NEH-a", en: "9" },
        { gr: "Δέκα", trans: "DHE-ka", en: "10" },
        { gr: "Είκοσι", trans: "EE-ko-see", en: "20" },
        { gr: "Πενήντα", trans: "pe-NEEN-da", en: "50" },
        { gr: "Εκατό", trans: "e-ka-TO", en: "100" }
      ]
    },
    {
      section: "Days of the week",
      items: [
        { gr: "Δευτέρα", trans: "dhef-TE-ra", en: "Monday" },
        { gr: "Τρίτη", trans: "TREE-tee", en: "Tuesday" },
        { gr: "Τετάρτη", trans: "te-TAR-tee", en: "Wednesday" },
        { gr: "Πέμπτη", trans: "PEM-ptee", en: "Thursday" },
        { gr: "Παρασκευή", trans: "pa-ras-ke-VEE", en: "Friday" },
        { gr: "Σάββατο", trans: "SA-va-to", en: "Saturday" },
        { gr: "Κυριακή", trans: "kee-ree-a-KEE", en: "Sunday" }
      ]
    },
    {
      section: "Emergencies and help",
      lede: "Worth memorizing before you need them.",
      items: [
        { gr: "Βοήθεια!", trans: "vo-EE-thee-a!", en: "Help!" },
        { gr: "Χρειάζομαι βοήθεια", trans: "hree-A-zo-meh vo-EE-thee-a", en: "I need help" },
        { gr: "Καλέστε γιατρό", trans: "ka-LES-te ya-TRO", en: "Call a doctor" },
        { gr: "Καλέστε αστυνομία", trans: "ka-LES-te a-stee-no-MEE-a", en: "Call the police" },
        { gr: "Νοσοκομείο", trans: "no-so-ko-MEE-o", en: "Hospital" },
        { gr: "Φαρμακείο", trans: "far-ma-KEE-o", en: "Pharmacy" },
        { gr: "Πονάει εδώ", trans: "po-NA-ee e-DHO", en: "It hurts here" },
        { gr: "Έχω αλλεργία στο/στα...", trans: "EH-ho a-ler-YEE-a sto/sta...", en: "I'm allergic to..." },
        { gr: "Χάθηκα", trans: "HA-thee-ka", en: "I'm lost" },
        { gr: "Πρεσβεία", trans: "pres-VEE-a", en: "Embassy" },
        { gr: "Πυροσβεστική", trans: "pee-ros-ve-stee-KEE", en: "Fire department" }
      ]
    },
    {
      section: "Beach and sea",
      lede: "Greek summer vocabulary.",
      items: [
        { gr: "Θάλασσα", trans: "THA-la-sa", en: "Sea" },
        { gr: "Άμμος", trans: "A-mos", en: "Sand" },
        { gr: "Βότσαλο", trans: "VO-tsa-lo", en: "Pebble" },
        { gr: "Ομπρέλα", trans: "om-BRE-la", en: "Umbrella" },
        { gr: "Ξαπλώστρα", trans: "ksa-PLO-stra", en: "Sun lounger" },
        { gr: "Αντηλιακό", trans: "an-dee-lee-a-KO", en: "Sunscreen" },
        { gr: "Καρχαρίας", trans: "kar-ha-REE-as", en: "Shark (you won't see one but it's a fun word)" },
        { gr: "Ηλιοβασίλεμα", trans: "ee-lee-o-va-SEE-le-ma", en: "Sunset" },
        { gr: "Καπνός", trans: "kap-NOS", en: "Smoke (smoking is allowed on most outdoor patios)" },
        { gr: "Καύσωνας", trans: "KAF-so-nas", en: "Heatwave" }
      ]
    },
    {
      section: "Pronunciation cheats",
      lede: "Greek looks intimidating but pronunciation rules are consistent. A few patterns to know.",
      items: [
        { gr: "Stress matters", trans: "Always", en: "Greek words are stressed on one specific syllable. The accent mark (Καλημέρα -> Kali-MEH-ra) shows where. Miss it and you'll be misunderstood." },
        { gr: "χ", trans: "kh / h", en: "Like the 'ch' in Scottish 'loch' or German 'Bach' (Χάνια = Khania)" },
        { gr: "γ", trans: "gh", en: "Soft 'g' or 'y' sound depending on the next letter (Γιώργος = Yorgos)" },
        { gr: "δ", trans: "dh", en: "Like the 'th' in 'this' (δεν = dhen)" },
        { gr: "θ", trans: "th", en: "Like the 'th' in 'thin' (θάλασσα = thalassa)" },
        { gr: "ου", trans: "oo", en: "Always 'oo' as in 'food' (μου = moo)" },
        { gr: "ει / οι / υ", trans: "ee", en: "All make the same 'ee' sound as in 'see'" },
        { gr: "αι", trans: "eh", en: "'eh' as in 'bed' (καί = keh, meaning 'and')" }
      ]
    }
  ],

  etiquette: [
    "Greeks eat late. Dinner from 9:00 PM is normal, even later in summer.",
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
