/* =========================================================================
   KHA MARINE — DATA
   ------------------------------------------------------------------------
   All editable content lives here. Edit text/images/specs without touching
   markup or layout. Each array exports via window.KHA so other JS files
   can read it.
   ========================================================================= */

window.KHA = window.KHA || {};

/* ---------- Boat models -------------------------------------------------
   Categories: patrol | leisure | fishing | utility | passenger | commercial
   Replace `image` with your own photos. Unsplash URLs are placeholders.
   ----------------------------------------------------------------------- */
window.KHA.models = [
  {
    id: "kha-patrol-32",
    name: "KHA Patrol 32",
    category: "patrol",
    categoryLabel: "Patrol / Security",
    length: "9.7 m",
    capacity: "8 personnel",
    use: "Coast guard, security, rapid response",
    description:
      "High-strength fiberglass patrol hull engineered for sustained Gulf operations and demanding sea state.",
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "kha-patrol-44",
    name: "KHA Patrol 44",
    category: "patrol",
    categoryLabel: "Patrol / Security",
    length: "13.4 m",
    capacity: "14 personnel",
    use: "Government deployment, offshore patrol",
    description:
      "Reinforced composite construction with deep-V planing hull built for endurance and command-grade reliability.",
    image: "assets/images/kha-patrol-44.png",
  },
  {
    id: "kha-leisure-28",
    name: "KHA Leisure 28",
    category: "leisure",
    categoryLabel: "Leisure",
    length: "8.5 m",
    capacity: "10 guests",
    use: "Private day cruising, coastal touring",
    description:
      "Refined fiberglass day cruiser with marine-grade finishes and a clean, owner-driven layout.",
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "kha-leisure-38",
    name: "KHA Leisure 38",
    category: "leisure",
    categoryLabel: "Leisure",
    length: "11.6 m",
    capacity: "12 guests",
    use: "Premium leisure, charter, hospitality",
    description:
      "Custom interior fit-out, generous beam, and a composite hull tuned for stable Gulf cruising.",
    image: "assets/images/kha-leisure-38.png",
  },
  {
    id: "kha-fishing-26",
    name: "KHA Fishing 26",
    category: "fishing",
    categoryLabel: "Fishing",
    length: "7.9 m",
    capacity: "6 anglers",
    use: "Sport fishing, inshore / offshore",
    description:
      "Self-bailing fiberglass deck, rod-ready layout, and a hull designed for chop and long days at sea.",
    image: "assets/images/kha-fishing-26.png",
  },
  {
    id: "kha-utility-30",
    name: "KHA Utility 30",
    category: "utility",
    categoryLabel: "Utility",
    length: "9.1 m",
    capacity: "8 + payload",
    use: "Crew transfer, port operations, support",
    description:
      "Workboat-grade composite hull built for heavy duty cycles and continuous operational use.",
    image: "assets/images/kha-utility-30.png",
  },
  {
    id: "kha-passenger-42",
    name: "KHA Passenger 42",
    category: "passenger",
    categoryLabel: "Passenger / Transport",
    length: "12.8 m",
    capacity: "24 passengers",
    use: "Marina transfer, tourism, crew shuttle",
    description:
      "Comfort-tuned cabin layout, low-noise hull, and durable composite finish for daily passenger service.",
    image:
      "https://images.unsplash.com/photo-1527431293370-0cd188ca5d15?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "kha-commercial-50",
    name: "KHA Commercial 50",
    category: "commercial",
    categoryLabel: "Custom Commercial",
    length: "15.2 m",
    capacity: "Configurable",
    use: "Survey, supply, dive, custom mission",
    description:
      "Mission-built composite platform — configured to your operational specification from the keel up.",
    image:
      "https://images.unsplash.com/photo-1500627964684-141351970a7f?auto=format&fit=crop&w=1400&q=70",
  },
];

window.KHA.modelCategories = [
  { id: "all", label: "All Boats" },
  { id: "patrol", label: "Patrol" },
  { id: "leisure", label: "Leisure" },
  { id: "fishing", label: "Fishing" },
  { id: "utility", label: "Utility" },
  { id: "passenger", label: "Passenger" },
  { id: "commercial", label: "Commercial" },
];

/* ---------- Services ---------------------------------------------------- */
window.KHA.services = [
  {
    num: "01",
    title: "Custom Boat Manufacturing",
    body: "Fiberglass boats built to client specification — patrol, leisure, fishing, commercial, government.",
  },
  {
    num: "02",
    title: "Fiberglass Fabrication",
    body: "Marine-grade composite layup, hand-finished hulls, structural reinforcement, and quality-controlled molds.",
  },
  {
    num: "03",
    title: "Boat Maintenance",
    body: "Scheduled and emergency maintenance programs that keep your fleet operational across Gulf conditions.",
  },
  {
    num: "04",
    title: "Refits & Upgrades",
    body: "Hull refinishing, deck rework, electrical re-commissioning, layout reconfiguration, and full re-fit-out.",
  },
  {
    num: "05",
    title: "Hull Repair",
    body: "Structural fiberglass and gelcoat repair, impact damage assessment, lamination correction, and water-ingress recovery.",
  },
  {
    num: "06",
    title: "Marine Electrical",
    body: "Wiring inspections, navigation electronics, lighting, communications, and 12/24V system support.",
  },
  {
    num: "07",
    title: "Mechanical Coordination",
    body: "Engine, drive, steering, and fuel-system coordination with trusted mechanical partners.",
  },
  {
    num: "08",
    title: "Fleet Support",
    body: "Multi-vessel maintenance and uptime programs for government, commercial, and operational fleets.",
  },
  {
    num: "09",
    title: "Marine Consultation",
    body: "Hull selection, design review, build planning, and long-term operational guidance for marine programs.",
  },

  {
    num: "010 - UPON REQUEST ONLY",
    title: "Steel Vessel Production",
    body: "Regional coastal and offshore projects continue to drive demand for steel vessels such as landing crafts, barges, and support craft. A production focused model enables scalable delivery of durable, project-ready marine assets for infrastructure and logistics operations.",
  },
];

/* ---------- Maintenance items ------------------------------------------ */
window.KHA.maintenance = [
  {
    title: "Preventive Maintenance",
    body: "Scheduled inspection and service plans calibrated to your operational cycle.",
  },
  {
    title: "Hull Inspection",
    body: "Above and below the waterline assessment of fiberglass integrity, stress points, and finish condition.",
  },
  {
    title: "Fiberglass Repair",
    body: "Composite repair, lamination correction, and reinforcement where loads concentrate.",
  },
  {
    title: "Gelcoat Repair",
    body: "Surface restoration to original finish standard — colour, gloss, and protection.",
  },
  {
    title: "Detailing",
    body: "Hull, deck, and interior detailing for owner-grade presentation and protective finish.",
  },
  {
    title: "Electrical Systems",
    body: "Inspection and recommissioning of 12/24V systems, lighting, navigation, and communications.",
  },
  {
    title: "Mechanical Coordination",
    body: "Engine, drive, and steering checks coordinated with mechanical partners.",
  },
  {
    title: "Annual Service Plans",
    body: "Year-long programs covering scheduled service, inspections, and priority response.",
  },
  {
    title: "Emergency Response",
    body: "Rapid assessment and response for unscheduled marine events and damage.",
  },
  {
    title: "Fleet Maintenance",
    body: "Operational uptime programs for government, commercial, and patrol fleets.",
  },
];

/* ---------- Stats ------------------------------------------------------- */
window.KHA.stats = [
  { num: "20+", label: "Years on Gulf Waters" },
  { num: "300+", label: "Vessels Delivered" },
  { num: "7", label: "Emirates Served" },
  { num: "24/7", label: "Marine Support" },
];

/* ---------- Elite client logos -----------------------------------------
   Replace the SVG paths with your real logo files in /assets/logos/.
   Each entry duplicates twice in the ribbon for seamless loop.
   ----------------------------------------------------------------------- */
window.KHA.clients = [
  { name: "Dubai Police", file: "assets/logos/dubai-police-logo-black.png" },
  {
    name: "UAE Civil Defense",
    file: "assets/logos/Dubai-civil-defense-logo-black.png",
  },
  { name: "ADNOC", file: "assets/logos/adnoc-logo-black.png" },
  {
    name: "Government of Dubai",
    file: "assets/logos/dubai-government-logo-black.png",
  },
  { name: "UAE Coast Guard", file: "assets/logos/coast-guards-logo-black.png" },
  {
    name: "Abu Dhabi Ports",
    file: "assets/logos/abudhabi-ports-logo-black.png",
  },
];

/* ---------- Projects / case studies ------------------------------------ */
window.KHA.projects = [
  {
    title: "Government Patrol Fleet Build",
    tag: "Patrol",
    body: "Multi-vessel fiberglass patrol program for sustained Gulf operations.",
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1400&q=70",
  },
  {
    title: "Commercial Fleet Maintenance",
    tag: "Maintenance",
    body: "Annual maintenance and uptime program covering hull, electrical, and operational support.",
    image: "assets/images/commercial-fleet-project.png",
  },
  {
    title: "Custom Leisure Build",
    tag: "Leisure",
    body: "Owner-specified fiberglass leisure vessel with custom interior fit-out.",
    image: "assets/images/custom-leisure-built-projects.png",
  },
  {
    title: "Maintenance & Refit Project",
    tag: "Refit",
    body: "Full hull refinish, deck rework, and systems re-commissioning on a 12 m vessel.",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=70",
  },
  {
    title: "Fiberglass Hull Repair",
    tag: "Repair",
    body: "Structural fiberglass restoration and lamination correction returning a vessel to operational standard.",
    image: "assets/images/fiberglass-hull-repair-projects.png",
  },
  {
    title: "Utility Workboat Program",
    tag: "Utility",
    body: "Composite utility workboats configured for port operations and crew transfer.",
    image:
      "https://images.unsplash.com/photo-1500627964684-141351970a7f?auto=format&fit=crop&w=1400&q=70",
  },
];

/* ---------- FAQs (used on Contact / Maintenance) ----------------------- */
window.KHA.faqs = [
  {
    q: "Where is KHA Marine based?",
    a: "Our facilities are located in the United Arab Emirates, serving clients across the Gulf and beyond.",
  },
  {
    q: "Do you build custom boats?",
    a: "Yes — every KHA Marine project starts with a consultation and is engineered to operational and aesthetic specification.",
  },
  {
    q: "What materials do you use?",
    a: "Marine-grade fiberglass and composite materials selected for Gulf temperature, salinity, and load conditions.",
  },
  {
    q: "Do you support government and commercial fleets?",
    a: "Yes — patrol, security, port, and commercial fleets are a core focus of our work.",
  },
  {
    q: "Can you maintain boats not built by KHA Marine?",
    a: "Yes — our maintenance, fiberglass repair, and refit services are open to vessels of all manufacturers.",
  },
  {
    q: "How do I request a quote?",
    a: "Use the contact form, WhatsApp us directly, or call. We respond to inquiries within one working day.",
  },
];

/* ---------- Process timeline ------------------------------------------- */
window.KHA.process = [
  {
    num: "01",
    title: "Consultation",
    body: "We begin with operational, aesthetic, and budget alignment — establishing what the vessel must do.",
  },
  {
    num: "02",
    title: "Design & Hull Planning",
    body: "Hull selection, layout planning, and engineering review tailored to mission profile.",
  },
  {
    num: "03",
    title: "Mold & Fiberglass Prep",
    body: "Mold preparation, surface readiness, and gelcoat application under controlled conditions.",
  },
  {
    num: "04",
    title: "Composite Layup",
    body: "Hand-finished fiberglass layup with marine-grade resin systems and quality control at every layer.",
  },
  {
    num: "05",
    title: "Structural Reinforcement",
    body: "Reinforcement at stress points, stringers, transom, and load-bearing bulkheads.",
  },
  {
    num: "06",
    title: "Systems & Fit-Out",
    body: "Electrical, mechanical, deck hardware, interior, and finish work.",
  },
  {
    num: "07",
    title: "Finishing",
    body: "Surface fairing, paint, gelcoat finish, and presentation-grade detailing.",
  },
  {
    num: "08",
    title: "Quality Inspection",
    body: "Multi-stage inspection — hull integrity, systems function, sea trial.",
  },
  {
    num: "09",
    title: "Delivery & Support",
    body: "Hand-over, owner training, and continuing maintenance and service support.",
  },
];
