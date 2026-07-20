export type Plan = {
  label: string;
  price: string;
  priceNote?: string;
  sessions: string;
  validity: string;
  services: string[];
  chooseOne?: string;
  highlight: boolean;
  tagline?: string;
};

export const plans: Plan[] = [
  {
    label: "Welcome Offer",
    price: "FREE",
    sessions: "1 Session",
    validity: "1 Din Ki Validity",
    services: ["SARTHI Service"],
    highlight: false,
    tagline: "Try karo, phir decide karo!",
  },
  {
    label: "Basic",
    price: "₹99",
    sessions: "1 Session",
    validity: "2 Din Ki Validity",
    services: ["SARTHI Service", "URJA Service", "UMANG Service"],
    chooseOne: "Koi bhi ek choose karein",
    highlight: false,
  },
  {
    label: "Regular",
    price: "₹300",
    priceNote: "@ ₹60/session",
    sessions: "5 Sessions",
    validity: "3 Mahine Ki Validity",
    services: ["SARTHI Service", "URJA Service", "UMANG Service", "SARAL SERVICE"],
    highlight: false,
  },
  {
    label: "Super",
    price: "₹600",
    priceNote: "@ ₹54/session",
    sessions: "11 Sessions",
    validity: "6 Mahine Ki Validity",
    services: ["SARTHI Service", "URJA Service", "UMANG Service", "SARAL SERVICE", "SMRITI SERVICE"],
    highlight: true,
    tagline: "Sabse popular plan!",
  },
  {
    label: "Premium",
    price: "₹900",
    priceNote: "@ ₹50/session",
    sessions: "18 Sessions",
    validity: "6 Mahine Ki Validity",
    services: [
      "SARTHI Service",
      "URJA Service",
      "UMANG Service",
      "SARAL Service",
      "SMRITI Service",
      "SAKHA Service",
    ],
    highlight: false,
    tagline: "Sabse zyada value!",
  },
];