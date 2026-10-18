import WarcraftHome from "@/components/WarcraftHome";
import { buildPageMetadata, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";
export const metadata = buildPageMetadata({
  title: SITE_TITLE,
  absoluteTitle: true,
  description: SITE_DESCRIPTION,
  pathname: "/",
});
export default function HomePage() { return <WarcraftHome/>; }
