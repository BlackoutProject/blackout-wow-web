import ServerContent from '@/components/ServerContent';
import {buildPageMetadata} from '@/lib/seo';
export const metadata = buildPageMetadata({
  title: "Servidor WoW custom WotLK 3.3.5a",
  description:
    "Descubre Blackout-WoW 255: T1–T35, 35 raids, 45+ World Bosses, tres clases custom y 10 hechizos custom para cada clase de WotLK.",
  pathname: "/servidor",
  keywords: [
    "servidor WoW Latinoamérica",
    "Blackout WoW WotLK",
    "WoW custom 3.3.5",
  ],
});
export default function Page(){return <ServerContent/>;}
