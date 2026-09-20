export const COUPLE = {
  groom: {
    name: "Vishu",
    full: "Vishwajeet Singh Rathore",
    blurb:
      "Son of Mr. & Mrs. Rathore. An architect by trade, a poet by habit, and the only man who can make Kavya laugh mid-argument.",
  },
  bride: {
    name: "Kavya",
    full: "Kavya Menon",
    blurb:
      "Daughter of Mr. & Mrs. Menon. A classical dancer and doctor who collects vintage postcards and stubborn opinions.",
  },
};

/** Wedding day — swap this for your real date. */
export const WEDDING_DATE = "2026-12-11T19:00:00+05:30";

export type WeddingEvent = {
  name: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  note: string;
};

export const EVENTS: WeddingEvent[] = [
  {
    name: "Mehendi",
    date: "Tue, 8 Dec 2026",
    time: "4:00 PM onwards",
    venue: "Rathore Haveli, Courtyard Lawn",
    address: "Rathore Haveli, Amer Road, Jaipur",
    note: "Bring your palms, we have the henna.",
  },
  {
    name: "Haldi",
    date: "Wed, 9 Dec 2026",
    time: "10:30 AM",
    venue: "Rathore Haveli, Garden Terrace",
    address: "Rathore Haveli, Amer Road, Jaipur",
    note: "Wear yellow, expect turmeric.",
  },
  {
    name: "Sangeet",
    date: "Wed, 9 Dec 2026",
    time: "7:30 PM",
    venue: "Sheesh Mahal Ballroom",
    address: "Sheesh Mahal, Jai Singh Marg, Jaipur",
    note: "Rehearsed dances strongly encouraged.",
  },
  {
    name: "Cocktail",
    date: "Thu, 10 Dec 2026",
    time: "8:00 PM",
    venue: "The Peacock Terrace",
    address: "Peacock Terrace, Hawa Mahal Road, Jaipur",
    note: "Black tie, gold accents.",
  },
  {
    name: "Wedding",
    date: "Fri, 11 Dec 2026",
    time: "7:00 PM · Baraat 6:00 PM",
    venue: "Amber Fort Gardens",
    address: "Amber Fort, Devisinghpura, Jaipur",
    note: "The pheras, under the stars.",
  },
  {
    name: "Reception",
    date: "Sat, 12 Dec 2026",
    time: "8:00 PM",
    venue: "Rambagh Grand Lawn",
    address: "Rambagh Palace, Bhawani Singh Road, Jaipur",
    note: "Dinner, dancing, farewell.",
  },
];

export const mapUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
