export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: "home" | "work" | "school" | "sun" | "people";
}

export const services: Service[] = [
  {
    id: "wonen",
    number: "01",
    title: "Wonen",
    description: "Ruimte voor rust en overzicht in je dagelijks leven.",
    icon: "home",
  },
  {
    id: "werken",
    number: "02",
    title: "Werken",
    description:
      "Kijken wat je nodig hebt om op je werk tot je recht te komen.",
    icon: "work",
  },
  {
    id: "school",
    number: "03",
    title: "School",
    description: "Samen zoeken naar een omgeving waarin leren mogelijk is.",
    icon: "school",
  },
  {
    id: "vrije-tijd",
    number: "04",
    title: "Vrije tijd",
    description: "Ontdekken wat je energie geeft en wat bij je past.",
    icon: "sun",
  },
  {
    id: "relaties",
    number: "05",
    title: "Relaties",
    description: "Meer begrip tussen jou en de mensen om je heen.",
    icon: "people",
  },
];

export const approach = [
  {
    number: "01",
    title: "Jij bent het vertrekpunt",
    text: "Vanuit wie je bent, kijken we waar jij en je omgeving tegenaan lopen. Wat gaat goed? En wat kost je veel energie?",
  },
  {
    number: "02",
    title: "Eerst ruimte, dan groeien",
    text: "We kijken eerst naar je omgeving. Want niemand kan groeien als die alleen maar aan het overleven is.",
  },
  {
    number: "03",
    title: "Samen kijken wat werkt",
    text: "Daarna kijken we naar wat je wilt leren of veranderen. Op een manier die bij jou past en je de meeste kans op succes geeft.",
  },
] as const;

export interface Resource {
  title: string;
  description: string;
  href: string;
  category: string;
}
export const resources: Resource[] = [
  {
    title: "Uitleg over de diagnose",
    description: "Een document met uitleg over de diagnose autisme.",
    href: "/files/diagnose-autisme.pdf",
    category: "PDF · Document",
  },
  {
    title: "Moet ik het even voor je uittekenen?",
    description:
      "Mijn masterthesis over de rol van verbeelding in het wederzijds begrip tussen mensen met autisme en hun belangrijke anderen.",
    href: "/files/uittekenen.pdf",
    category: "Onderzoek",
  },
  {
    title: "Als anderen autisme vermoeden",
    description:
      "Een brief voor mensen bij wie anderen autisme vermoeden, met vragen en uitleg over diagnostisch onderzoek.",
    href: "/files/brief-verdenking-autisme.pdf",
    category: "PDF · Document",
  },
  {
    title: "Brief voor grootouders",
    description:
      "Een brief over begrip en steun voor grootouders van een kleinkind met autisme.",
    href: "/files/brief-voor-grootouders.pdf",
    category: "PDF · Document",
  },
  {
    title: "Steun voor partners en hun naasten",
    description:
      "Een brief voor familie en vrienden van iemand met een partner die mogelijk autisme heeft. Over begrip en steun voor het gezin.",
    href: "/files/brief-voor-naasten-van-partners.pdf",
    category: "PDF · Document",
  },
  {
    title: "Autisme? Dat heeft toch iedereen…",
    description:
      "Een artikel over herkenbare kenmerken van autisme en de invloed van de omgeving op het dagelijks leven.",
    href: "/files/iedereen-autisme.pdf",
    category: "PDF · Document",
  },
  {
    title: "Autisme en zintuigen",
    description:
      "Uitleg over overgevoeligheid, ondergevoeligheid en wisselende gevoeligheid voor zintuiglijke prikkels.",
    href: "/files/autisme-en-zintuigen.pdf",
    category: "PDF · Document",
  },
  {
    title: "Klachtenregeling",
    description: "Informatie over de klachtenregeling via ZZP-er in de zorg.",
    href: "https://www.zzp-erindezorg.nl/klachtenregeling",
    category: "Praktische informatie",
  },
  {
    title: "Over de IBVA",
    description:
      "Informatie over de beroepsvereniging voor autismespecialisten.",
    href: "https://www.ibva.info/",
    category: "Beroepsvereniging",
  },
  {
    title: "Wegwijzer Autisme",
    description:
      "Een overzicht van producten en diensten voor mensen met autisme en hun naasten. Zoek naar passend aanbod in jouw omgeving.",
    href: "https://www.wegwijzer-autisme.nl/",
    category: "Praktische informatie",
  },
];
