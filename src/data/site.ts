export const site = {
  name: "AbAut",
  url: "https://abaut.nl",
  email: "bianca@abaut.nl",
  specialist: "Bianca Ebeling",
  description:
    "Persoonlijke begeleiding bij autisme. Samen kijken we wat jij nodig hebt om tot je recht te komen. Bij wonen, werken, school, vrije tijd en relaties.",
  quote:
    "Begeleiding kan helpen als wat je kan, wat je wil, wat je doet en wat je moet niet op één lijn liggen.",
  navigation: [
    { label: "Over mij", href: "/over-mij/" },
    { label: "Begeleiding", href: "/begeleiding/" },
    { label: "Links", href: "/links/" },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/biancaebeling/" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/AbAut.autismebegeleiding",
    },
  ],
} as const;
