"use client";

import { useTranslation } from "react-i18next";

const classes = ["Paladin", "Warrior", "DK", "Mage", "Rogue", "Priest", "Shaman", "Druid", "Hunter", "Warlock"];
const expansions = ["Cataclysm", "MoP", "WoD", "Legion", "BfA", "Shadowlands", "Dragonflight", "The War Within"];
const copy = {
  es: {
    eyebrow: "10 HECHIZOS CUSTOM POR CLASE",
    title: "Tu clase. Un nuevo arsenal.",
    description: "Seleccionamos solo las habilidades que encajan con cada clase, funcionan correctamente y mantienen el equilibrio del juego.",
    origin: "HABILIDADES DE DISTINTAS EXPANSIONES",
    more: "y más",
  },
  en: {
    eyebrow: "10 CUSTOM SPELLS PER CLASS",
    title: "Your class. A new arsenal.",
    description: "We select only abilities that fit each class, work properly and preserve the balance of the game.",
    origin: "ABILITIES FROM DIFFERENT EXPANSIONS",
    more: "and more",
  },
  pt: {
    eyebrow: "10 FEITIÇOS CUSTOM POR CLASSE",
    title: "Sua classe. Um novo arsenal.",
    description: "Selecionamos apenas habilidades que combinam com cada classe, funcionam corretamente e mantêm o equilíbrio do jogo.",
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
        {classes.map((name, index) => (
          <li key={name}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{name}</li>
        ))}
      </ul>
      <div className="class-spells-origins">
        <span className="lore-kicker">{c.origin}</span>
        <p>{expansions.join(" · ")} <em>· {c.more}</em></p>
      </div>
    </section>
  );
}
