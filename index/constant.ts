export type Plan = {
  label: string;
  price: string;
  priceNote?: string;
  sessions: string;
  validity: string;
  services: string[];
  chooseOne?: string;
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    label: "Welcome Offer",
    price: "NIL",
    sessions: "1 session = Free",
    validity: "Validity - 1 day",
    services: ["* SARTHI Service"],
    highlight: false,
  },
  {
    label: "Basic",
    price: "99",
    sessions: "Session - 1",
    validity: "Validity - 2 days",
    services: ["* SARTHI Service", "* URJA Service", "* UMANG Service"],
    chooseOne: "(Choose any one)",
    highlight: false,
  },
  {
    label: "Regular",
    price: "300",
    priceNote: "(@ 60/session)",
    sessions: "Session - 5",
    validity: "Validity - 3 months",
    services: ["* SARTHI Service", "* URJA Service", "* UMANG Service", "* SARAL SERVICE"],
    highlight: false,
  },
  {
    label: "Super",
    price: "600",
    priceNote: "(@ 54 /session)",
    sessions: "Session - 11",
    validity: "Validity - 6 months",
    services: ["* SARTHI Service", "* URJA Service", "* UMANG Service", "* SARAL SERVICE", "* SMRITI SERVICE"],
    highlight: false,
  },
  {
    label: "Premium",
    price: "900",
    priceNote: "(@ 50 /session)",
    sessions: "Session - 18",
    validity: "Validity - 6 months",
    services: [
      "* SARTHI Service",
      "* URJA Service",
      "* UMANG Service",
      "* SARAL Service",
      "* SMRITI Service",
      "* SAKHA Service",
    ],
    highlight: false,
  },
];