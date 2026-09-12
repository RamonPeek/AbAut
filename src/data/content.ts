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
    title: "Over de IBVA",
    description:
      "Informatie over de beroepsvereniging voor autismespecialisten.",
    href: "https://www.ibva.info/",
    category: "Beroepsvereniging",
  },
  {
    title: "Uitleg over de diagnose",
    description: "Een document met uitleg over de diagnose autisme.",
    href: "/files/diagnose-autisme.pdf",
    category: "PDF · Document",
  },
  {
    title: "Moet ik het even voor je uittekenen?",
    description:
      "Meer weten over mijn masterthesis voor de Master SEN Autismespecialist? Neem gerust contact op.",
    href: "mailto:bianca@abaut.nl?subject=Vraag%20over%20je%20masterthesis",
    category: "Onderzoek",
  },
  {
    title: "Klachtenregeling",
    description: "Informatie over de klachtenregeling via ZZP-er in de zorg.",
    href: "https://www.zzp-erindezorg.nl/klachtenregeling",
    category: "Praktische informatie",
  },
];
