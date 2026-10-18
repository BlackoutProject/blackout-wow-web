import ServerContent from '@/components/ServerContent';
import {buildPageMetadata} from '@/lib/seo';
export const metadata = buildPageMetadata({
  title: "Servidor WoW custom WotLK 3.3.5a",
  description:
    "Blackout-WoW 255: High Rate y estadísticas elevadas. 35 raids, 19 totalmente custom, más de 30 mapas custom, T1–T35 y tres clases custom.",
  pathname: "/servidor",
  keywords: [
    "servidor WoW Latinoamérica",
    "Blackout WoW WotLK",
    "WoW custom 3.3.5",
  ],
});
export default function Page(){return <ServerContent/>;}
