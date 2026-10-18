import TermsContent from '@/components/TermsContent';
import {buildPageMetadata} from '@/lib/seo';
export const metadata = buildPageMetadata({
  title: "Términos y condiciones",
  description:
    "Reglas del servidor BLACKOUT WOW: respeto, multiboxing, PvP, loot, cuentas, comercio, privacidad y sanciones. Consulta la normativa oficial antes de jugar.",
  pathname: "/terminos-y-condiciones",
  keywords: [
    "reglas servidor WoW",
    "normativa private server",
    "términos Blackout WoW",
  ],
});
export default function Page(){return <TermsContent/>;}
