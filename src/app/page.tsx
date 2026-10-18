import WarcraftHome from "@/components/WarcraftHome";
import { buildPageMetadata } from "@/lib/seo";
export const metadata = buildPageMetadata({
  title: "Blackout-WoW 255 — Una nueva era",
  description: "Descubre Blackout-WoW 255: T1–T35, 35 raids custom, 45+ World Bosses, Evoker, Demon Hunter y Monk. PvE + PvP, progresión justa y No Pay to Win.",
  pathname: "/",
});
export default function HomePage() { return <WarcraftHome/>; }
