"use client";

import { useTranslation } from "react-i18next";

const classes = ["Paladin", "Warrior", "DK", "Mage", "Rogue", "Priest", "Shaman", "Druid", "Hunter", "Warlock"];
const expansions = ["Cataclysm", "MoP", "WoD", "Legion", "BfA", "Shadowlands", "Dragonflight", "The War Within"];
const copy = {
  es: {
    eyebrow: "10 HECHIZOS CUSTOM POR CLASE",
    title: "Tu clase. Un nuevo arsenal.",
    description: "Para las diez clases de WotLK: habilidades seleccionadas por afinidad, funcionamiento y equilibrio.",
    origin: "HABILIDADES DE DISTINTAS EXPANSIONES",
    more: "y más",
  },
  en: {
    eyebrow: "10 CUSTOM SPELLS PER CLASS",
    title: "Your class. A new arsenal.",
    description: "For the ten WotLK classes: abilities selected for their fit, functionality and balance.",
    origin: "ABILITIES FROM DIFFERENT EXPANSIONS",
    more: "and more",
  },
  pt: {
    eyebrow: "10 FEITIÇOS CUSTOM POR CLASSE",
    title: "Sua classe. Um novo arsenal.",
    description: "Para as dez classes de WotLK: habilidades selecionadas por afinidade, funcionamento e equilíbrio.",
    origin: "HABILIDADES DE DIFERENTES EXPANSÕES",
    more: "e mais",
  },
};

export function ClassSpells() {
  const { i18n } = useTranslation();
  const c = copy[i18n.language as keyof typeof copy] ?? copy.es;
  return (
    <section className="class-spells" id="hechizos-custom" aria-labelledby="spells-title">
      <div className="class-spells-intro">
        <span className="lore-kicker">{c.eyebrow}</span>
        <h2 id="spells-title">{c.title}</h2>
        <p>{c.description}</p>
      </div>
      <ul className="class-spells-classes" aria-label={i18n.language === "es" ? "Clases" : "Classes"}>
        {classes.map(name => (
          <li key={name}><span aria-hidden="true">◆</span>{name}</li>
        ))}
      </ul>
      <div className="class-spells-origins">
        <span className="lore-kicker">{c.origin}</span>
        <p>{expansions.join(" · ")} <em>· {c.more}</em></p>
      </div>
    </section>
  );
}
