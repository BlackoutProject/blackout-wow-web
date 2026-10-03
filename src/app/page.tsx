import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import { SiteShell } from "@/components/SiteShell";
import { NavHomeAuraText } from "@/components/NavHomeAuraText";
import { BackgroundLoopVideo } from "@/components/BackgroundLoopVideo";
import { HomeDiscordSection } from "@/components/HomeDiscordSection";
import { buildPageMetadata, SITE_TITLE } from "@/lib/seo";
import { DISCORD_INVITE_URL, hasDiscordInvite } from "@/lib/site-config";
import { defaultLng, isSupportedLanguage } from "@/i18n/settings";

export const metadata = buildPageMetadata({
  title: "Servidor WoW custom WotLK 3.3.5a nivel 255",
  description:
    "BLACKOUT WOW: servidor WotLK 3.3.5a nivel 255 con progresión Tier 1–35, 35 raids, 45+ World Bosses, 3 clases custom, Armas Legendarias V1–V10, Battle Pass y sin Pay to Win.",
  pathname: "/",
  keywords: [
    "servidor WoW Latinoamérica",
    "Blackout WoW WotLK",
    "WoW custom 3.3.5",
    "WoW 35 raids",
    "WoW World Bosses custom",
    "WoW clases custom",
    "WoW armas legendarias",
    "WoW Battle Pass",
    "WoW transmog 100000",
    "servidor WoW internacional",
  ],
});

type PhaseStatus = "Activa" | "Proxima" | "Programada";

export default async function HomePage() {
  const cookieStore = await cookies();
  const rawLang = cookieStore.get("lang")?.value;
  const lang = isSupportedLanguage(rawLang) ? rawLang : defaultLng;
  const tx = {
    es: {
      heroTagline: "Wrath of the Lich King · 3.3.5a",
      heroTaglineSub: "Servidor custom PvE / PvP",
      heroIntro:
        "Servidor personalizado de nivel 255 con progresión de Tier 1 a Tier 35, contenido exclusivo, sistemas propios y una comunidad internacional activa.",
      heroIntroLong:
        "Vive una experiencia completamente renovada en Wrath of the Lich King 3.3.5a con 35 raids, más de 45 Jefes Mundiales, 3 clases personalizadas, Armas Legendarias V1–V10, PvP balanceado, sistema de pasivas, Pase de Batalla, nuevos Campos de Batalla, más de 100.000 transfiguraciones, 500+ monturas, mascotas y morphs, 16 razas jugables, nuevas zonas, un nuevo Mall y actualizaciones constantes.",
      heroPillars: "PvE + PvP • Progresión justa • Sin Pay to Win",
      create: "Crear cuenta",
      connect: "Como conectarme",
      seeRules: "Consulta las reglas del servidor en",
      terms: "terminos y condiciones",
      features: "Características principales del servidor",
      featuresSubtitle: "Una experiencia custom completa",
      featuresBody:
        "Blackout-WoW está diseñado para ofrecer una experiencia fresca, estable y completamente personalizada, donde siempre tendrás una nueva meta por alcanzar.",
      serverInfo: "Información general del servidor",
      serverInfoIntro:
        "Blackout-WoW es un servidor custom basado en Wrath of the Lich King 3.3.5a, con nivel máximo 255, progresión de Tier 1 a Tier 35, contenido PvE y PvP, sistemas exclusivos y modelo No Pay to Win.",
      phases: "Fases y actualizaciones",
      phasesIntro:
        "Blackout-WoW avanzará por fases, agregando nuevas raids, mapas, sistemas, recompensas, World Bosses y mejoras para mantener el servidor activo y en constante evolución.",
      phasesList: [
        { phase: "Fase 1", name: "Lanzamiento", status: "Activa" as const },
        { phase: "Fase 2", name: "Expansión de contenido", status: "Activa" as const },
        { phase: "Fase 3", name: "Nuevos retos", status: "Programada" as const },
        { phase: "Fase 4", name: "Actualización mayor", status: "Programada" as const },
      ],
      phaseStatusActive: "Activa",
      phaseStatusNext: "Próxima",
      phaseStatusPlanned: "Programada",
      vision: "Nuestra visión",
      why: "¿Por qué Blackout?",
      discordBadge: "Comunidad",
      discordTitle: "Únete a nuestra comunidad",
      discordBody:
        "Forma parte del Discord oficial de Blackout WoW. Recibe anuncios, soporte, noticias, eventos, sorteos y encuentra jugadores para PvE, PvP y hermandades.",
      discordPerkOnline: "Anuncios oficiales",
      discordPerkCommunity: "Soporte del Staff",
      discordPerkEvents: "Eventos y sorteos",
      discordJoin: "Entrar al Discord",
      start: "Tu aventura empieza hoy",
      startBody:
        "Crea tu cuenta y forma parte de Blackout WoW. Progresa, compite, personaliza tu personaje y vive una experiencia custom diferente dentro de Wrath of the Lich King.",
      signupNow: "Registrarme ahora",
      iHave: "Ya tengo cuenta",
      downloadTitle: "Descarga el cliente oficial",
      downloadBody:
        "Instala Blackout WoW 3.3.5a en pocos minutos. Descarga el cliente completo, crea tu cuenta y entra al reino con la configuración recomendada para una experiencia estable desde el primer login.",
      downloadNote:
        "Si la descarga no inicia, revisa el bloqueador del navegador o intenta usar otro mirror disponible.",
      downloadCta: "Cómo conectarme",
      quickHighlights: [
        { label: "Nivel máximo", value: "255", note: "Progresión custom" },
        { label: "Progresión", value: "Tier 1 – Tier 35", note: "35 Raids" },
        { label: "Contenido", value: "PvE / PvP", note: "Sistemas custom" },
        { label: "Modelo", value: "No Pay to Win", note: "Progresión justa jugando" },
        { label: "Actualizaciones", value: "Por fases", note: "Contenido en constante evolución" },
        { label: "Comunidad", value: "Discord activo", note: "Soporte del Staff" },
      ],
      contentBlocks: [
        {
          title: "PvE Custom",
          points: [
            "35 Raids y más de 45 World Bosses.",
            "Progresión desde Tier 1 hasta Tier 35.",
            "Armas Legendarias desde V1 hasta V10.",
            "Misiones especiales, Custom Quests, llaves de contenido y sistemas de Tokens.",
            "Nuevas zonas, nuevos mapas y contenido adaptado al Level 255.",
            "Progresión PvE ampliada y diseñada para ofrecer objetivos constantes.",
          ],
        },
        {
          title: "PvP Activo",
          points: [
            "Arenas 1v1, 2v2, 3v3 y 5v5.",
            "Battlegrounds, eventos PvP y zonas de duelo.",
            "PvP Leaderboards y Rankings.",
            "Nuevos y actualizados mapas de Battlegrounds.",
            "Balance completo de clases adaptado al Level 255.",
            "Crossfaction PvP y progresión competitiva.",
          ],
        },
        {
          title: "Contenido Custom",
          points: [
            "3 Clases Custom.",
            "Hasta 15 Custom Spells por clase.",
            "Nuevas builds, Dual Wield y Titan’s Grip.",
            "Sistema de Pasivas.",
            "Más de 100.000 transfiguraciones.",
            "Más de 500 monturas, mascotas y Morphs.",
            "16 razas jugables mediante Morphs.",
            "Sets, visuales, alas, auras y contenido personalizado.",
          ],
        },
        {
          title: "Sistemas Exclusivos",
          points: [
            "Battle Pass.",
            "Sistema de Pasivas.",
            "PvP Leaderboards.",
            "Teletransportador y nuevo Custom Mall.",
            "Custom Quests, vendedores y sistemas de Tokens.",
            "Profesiones instantáneas, buffs personalizados y comandos útiles.",
            "Interfaz personalizada, login propio y pantallas de carga.",
            "Nuevas zonas y sistemas de progresión.",
            "Modelo No Pay to Win con progresión justa y balanceada.",
          ],
        },
      ],
      serverInfoColumns: [
        [
          "Nivel máximo 255.",
          "Cliente Wrath of the Lich King 3.3.5a.",
          "Progresión de Tier 1 a Tier 35.",
          "Armas Legendarias V1–V10.",
          "35 Raids.",
          "Más de 45 World Bosses.",
          "3 Clases Custom.",
        ],
        [
          "Hasta 15 Custom Spells por clase.",
          "Sistema de Pasivas.",
          "Battle Pass.",
          "PvP Leaderboards y Rankings.",
          "Nuevos y actualizados mapas de Battlegrounds.",
          "Contenido PvE y PvP activo.",
          "16 razas jugables mediante Morphs.",
        ],
        [
          "Más de 100.000 transfiguraciones.",
          "Más de 500 monturas, mascotas y Morphs.",
          "Nuevas zonas y nuevo Mall.",
          "Sistemas exclusivos del servidor.",
          "Modelo No Pay to Win.",
          "Actualizaciones por fases.",
          "Comunidad internacional activa con Discord y soporte del Staff.",
        ],
      ],
      whyCards: [
        {
          title: "Comunidad activa",
          body: "Discord oficial con anuncios, soporte del Staff, eventos y una comunidad internacional activa en PvE y PvP.",
        },
        {
          title: "Progresión constante",
          body: "Tier 1–Tier 35, 35 Raids, más de 45 World Bosses, Armas Legendarias V1–V10, nuevas zonas, sistemas y actualizaciones por fases.",
        },
        {
          title: "Experiencia custom completa",
          body: "3 Clases Custom, hasta 15 Custom Spells por clase, sistema de Pasivas, Battle Pass, nuevas builds, Dual Wield, Titan’s Grip y contenido adaptado al Level 255.",
        },
        {
          title: "No Pay to Win",
          body: "Progresa jugando y alcanza el mejor contenido del servidor. El equipo Donor puede igualar el mejor equipo disponible mediante progresión, pero nunca superarlo.",
        },
      ],
      visionCards: [
        {
          title: "PvE por tiers",
          body: "Progresión desde Tier 1 hasta Tier 35, con 35 Raids, más de 45 World Bosses, llaves de contenido y Armas Legendarias V1–V10.",
          tag: "PvE",
        },
        {
          title: "PvP balanceado",
          body: "Arenas, Battlegrounds, Duel Zone, eventos PvP, Rankings y PvP Leaderboards con balance adaptado al Level 255.",
          tag: "PvP",
        },
        {
          title: "Personalización total",
          body: "Más de 100.000 transfiguraciones, 500+ monturas, mascotas y Morphs, además de 16 razas jugables y contenido visual personalizado.",
          tag: "Identidad",
        },
      ],
    },
    en: {
      heroTagline: "Wrath of the Lich King · 3.3.5a",
      heroTaglineSub: "Custom PvE / PvP realm",
      heroIntro:
        "Custom level 255 realm with Tier 1 to Tier 35 progression, exclusive content, proprietary systems and an active international community.",
      heroIntroLong:
        "Experience a completely renewed Wrath of the Lich King 3.3.5a with 35 raids, 45+ World Bosses, 3 custom classes, Legendary Weapons V1–V10, balanced PvP, passive system, Battle Pass, new Battlegrounds, 100,000+ transmogs, 500+ mounts, pets and morphs, 16 playable races, new zones, a new Mall and constant updates.",
      heroPillars: "PvE + PvP • Fair progression • No Pay to Win",
      create: "Create account",
      connect: "How to connect",
      seeRules: "Check the server rules at",
      terms: "terms and conditions",
      features: "Main server features",
      featuresSubtitle: "A complete custom experience",
      featuresBody:
        "Blackout-WoW is designed to deliver a fresh, stable and fully customized experience where you will always have a new goal to reach.",
      serverInfo: "General server information",
      serverInfoIntro:
        "Blackout-WoW is a custom Wrath of the Lich King 3.3.5a realm with max level 255, Tier 1 to Tier 35 progression, PvE and PvP content, exclusive systems and a No Pay to Win model.",
      phases: "Phases and updates",
      phasesIntro:
        "Blackout-WoW will grow in phases, adding new raids, maps, systems, rewards, World Bosses and improvements to keep the realm active and constantly evolving.",
      phasesList: [
        { phase: "Phase 1", name: "Launch", status: "Activa" as const },
        { phase: "Phase 2", name: "Content expansion", status: "Activa" as const },
        { phase: "Phase 3", name: "New challenges", status: "Programada" as const },
        { phase: "Phase 4", name: "Major update", status: "Programada" as const },
      ],
      phaseStatusActive: "Active",
      phaseStatusNext: "Upcoming",
      phaseStatusPlanned: "Planned",
      vision: "Our vision",
      why: "Why Blackout?",
      discordBadge: "Community",
      discordTitle: "Join our community",
      discordBody:
        "Join the official Blackout WoW Discord for announcements, support, news, events, giveaways and to find players for PvE, PvP and guilds.",
      discordPerkOnline: "Official announcements",
      discordPerkCommunity: "Staff support",
      discordPerkEvents: "Events and giveaways",
      discordJoin: "Join Discord",
      start: "Your adventure starts today",
      startBody:
        "Create your account and join Blackout WoW. Progress, compete, customize your character and enjoy a different custom experience in Wrath of the Lich King.",
      signupNow: "Sign up now",
      iHave: "I already have an account",
      downloadTitle: "Download the official client",
      downloadBody:
        "Install Blackout WoW 3.3.5a in minutes. Download the full client, create your account and enter the realm with the recommended setup for a stable experience from your first login.",
      downloadNote:
        "If the download does not start, check your browser blocker or try another available mirror.",
      downloadCta: "How to connect",
      quickHighlights: [
        { label: "Max level", value: "255", note: "Custom progression" },
        { label: "Progression", value: "Tier 1 – Tier 35", note: "35 Raids" },
        { label: "Content", value: "PvE / PvP", note: "Custom systems" },
        { label: "Model", value: "No Pay to Win", note: "Fair progression by playing" },
        { label: "Updates", value: "By phases", note: "Constantly evolving content" },
        { label: "Community", value: "Active Discord", note: "Staff support" },
      ],
      contentBlocks: [
        {
          title: "Custom PvE",
          points: [
            "35 Raids and 45+ World Bosses.",
            "Progression from Tier 1 to Tier 35.",
            "Legendary Weapons from V1 to V10.",
            "Special quests, Custom Quests, content keys and Token systems.",
            "New zones, new maps and content adapted to Level 255.",
            "Expanded PvE progression designed to offer constant goals.",
          ],
        },
        {
          title: "Active PvP",
          points: [
            "1v1, 2v2, 3v3 and 5v5 arenas.",
            "Battlegrounds, PvP events and duel zones.",
            "PvP Leaderboards and Rankings.",
            "New and updated Battleground maps.",
            "Full class balance adapted to Level 255.",
            "Crossfaction PvP and competitive progression.",
          ],
        },
        {
          title: "Custom content",
          points: [
            "3 Custom Classes.",
            "Up to 15 Custom Spells per class.",
            "New builds, Dual Wield and Titan’s Grip.",
            "Passive system.",
            "100,000+ transmogs.",
            "500+ mounts, pets and Morphs.",
            "16 playable races through Morphs.",
            "Sets, visuals, wings, auras and custom content.",
          ],
        },
        {
          title: "Exclusive systems",
          points: [
            "Battle Pass.",
            "Passive system.",
            "PvP Leaderboards.",
            "Teleporter and new Custom Mall.",
            "Custom Quests, vendors and Token systems.",
            "Instant professions, custom buffs and useful commands.",
            "Custom interface, own login and loading screens.",
            "New zones and progression systems.",
            "No Pay to Win model with fair and balanced progression.",
          ],
        },
      ],
      serverInfoColumns: [
        [
          "Max level 255.",
          "Wrath of the Lich King 3.3.5a client.",
          "Tier 1 to Tier 35 progression.",
          "Legendary Weapons V1–V10.",
          "35 Raids.",
          "45+ World Bosses.",
          "3 Custom Classes.",
        ],
        [
          "Up to 15 Custom Spells per class.",
          "Passive system.",
          "Battle Pass.",
          "PvP Leaderboards and Rankings.",
          "New and updated Battleground maps.",
          "Active PvE and PvP content.",
          "16 playable races through Morphs.",
        ],
        [
          "100,000+ transmogs.",
          "500+ mounts, pets and Morphs.",
          "New zones and new Mall.",
          "Exclusive server systems.",
          "No Pay to Win model.",
          "Phase-based updates.",
          "Active international community with Discord and Staff support.",
        ],
      ],
      whyCards: [
        {
          title: "Active community",
          body: "Official Discord with announcements, Staff support, events and an active international PvE and PvP community.",
        },
        {
          title: "Constant progression",
          body: "Tier 1–Tier 35, 35 Raids, 45+ World Bosses, Legendary Weapons V1–V10, new zones, systems and phase-based updates.",
        },
        {
          title: "Full custom experience",
          body: "3 Custom Classes, up to 15 Custom Spells per class, Passive system, Battle Pass, new builds, Dual Wield, Titan’s Grip and content adapted to Level 255.",
        },
        {
          title: "No Pay to Win",
          body: "Progress by playing and reach the best content on the server. Donor gear can match the best gear available through progression, but never surpass it.",
        },
      ],
      visionCards: [
        {
          title: "Tier-based PvE",
          body: "Progression from Tier 1 to Tier 35, with 35 Raids, 45+ World Bosses, content keys and Legendary Weapons V1–V10.",
          tag: "PvE",
        },
        {
          title: "Balanced PvP",
          body: "Arenas, Battlegrounds, Duel Zone, PvP events, Rankings and PvP Leaderboards with balance adapted to Level 255.",
          tag: "PvP",
        },
        {
          title: "Total customization",
          body: "100,000+ transmogs, 500+ mounts, pets and Morphs, plus 16 playable races and custom visual content.",
          tag: "Identity",
        },
      ],
    },
    pt: {
      heroTagline: "Wrath of the Lich King · 3.3.5a",
      heroTaglineSub: "Servidor custom PvE / PvP",
      heroIntro:
        "Servidor personalizado de nível 255 com progressão do Tier 1 ao Tier 35, conteúdo exclusivo, sistemas próprios e uma comunidade internacional ativa.",
      heroIntroLong:
        "Viva uma experiência completamente renovada em Wrath of the Lich King 3.3.5a com 35 raids, mais de 45 Chefes Mundiais, 3 classes personalizadas, Armas Lendárias V1–V10, PvP balanceado, sistema de passivas, Passe de Batalha, novos Campos de Batalha, mais de 100.000 transmogs, 500+ montarias, mascotes e morphs, 16 raças jogáveis, novas zonas, um novo Mall e atualizações constantes.",
      heroPillars: "PvE + PvP • Progressão justa • Sem Pay to Win",
      create: "Criar conta",
      connect: "Como conectar",
      seeRules: "Consulte as regras do servidor em",
      terms: "termos e condições",
      features: "Principais características do servidor",
      featuresSubtitle: "Uma experiência custom completa",
      featuresBody:
        "Blackout-WoW foi criado para oferecer uma experiência nova, estável e totalmente personalizada, onde você sempre terá uma nova meta para alcançar.",
      serverInfo: "Informações gerais do servidor",
      serverInfoIntro:
        "Blackout-WoW é um servidor custom baseado em Wrath of the Lich King 3.3.5a, com nível máximo 255, progressão do Tier 1 ao Tier 35, conteúdo PvE e PvP, sistemas exclusivos e modelo Sem Pay to Win.",
      phases: "Fases e atualizações",
      phasesIntro:
        "Blackout-WoW avançará por fases, adicionando novas raids, mapas, sistemas, recompensas, World Bosses e melhorias para manter o servidor ativo e em constante evolução.",
      phasesList: [
        { phase: "Fase 1", name: "Lançamento", status: "Activa" as const },
        { phase: "Fase 2", name: "Expansão de conteúdo", status: "Activa" as const },
        { phase: "Fase 3", name: "Novos desafios", status: "Programada" as const },
        { phase: "Fase 4", name: "Atualização maior", status: "Programada" as const },
      ],
      phaseStatusActive: "Ativa",
      phaseStatusNext: "Próxima",
      phaseStatusPlanned: "Programada",
      vision: "Nossa visão",
      why: "Por que Blackout?",
      discordBadge: "Comunidade",
      discordTitle: "Junte-se à nossa comunidade",
      discordBody:
        "Faça parte do Discord oficial do Blackout WoW. Receba anúncios, suporte, notícias, eventos, sorteios e encontre jogadores para PvE, PvP e guildas.",
      discordPerkOnline: "Anúncios oficiais",
      discordPerkCommunity: "Suporte da equipe",
      discordPerkEvents: "Eventos e sorteios",
      discordJoin: "Entrar no Discord",
      start: "Sua aventura começa hoje",
      startBody:
        "Crie sua conta e faça parte do Blackout WoW. Progrida, compita, personalize seu personagem e viva uma experiência custom diferente em Wrath of the Lich King.",
      signupNow: "Registrar agora",
      iHave: "Já tenho conta",
      downloadTitle: "Baixe o cliente oficial",
      downloadBody:
        "Instale o Blackout WoW 3.3.5a em poucos minutos. Baixe o cliente completo, crie sua conta e entre no reino com a configuração recomendada para uma experiência estável desde o primeiro login.",
      downloadNote:
        "Se o download não iniciar, verifique o bloqueador do navegador ou tente outro mirror disponível.",
      downloadCta: "Como conectar",
      quickHighlights: [
        { label: "Nível máximo", value: "255", note: "Progressão custom" },
        { label: "Progressão", value: "Tier 1 – Tier 35", note: "35 Raids" },
        { label: "Conteúdo", value: "PvE / PvP", note: "Sistemas custom" },
        { label: "Modelo", value: "Sem Pay to Win", note: "Progressão justa jogando" },
        { label: "Atualizações", value: "Por fases", note: "Conteúdo em constante evolução" },
        { label: "Comunidade", value: "Discord ativo", note: "Suporte da equipe" },
      ],
      contentBlocks: [
        {
          title: "PvE Custom",
          points: [
            "35 Raids e mais de 45 World Bosses.",
            "Progressão do Tier 1 ao Tier 35.",
            "Armas Lendárias da V1 à V10.",
            "Missões especiais, Custom Quests, chaves de conteúdo e sistemas de Tokens.",
            "Novas zonas, novos mapas e conteúdo adaptado ao Level 255.",
            "Progressão PvE ampliada e pensada para oferecer objetivos constantes.",
          ],
        },
        {
          title: "PvP Ativo",
          points: [
            "Arenas 1v1, 2v2, 3v3 e 5v5.",
            "Battlegrounds, eventos PvP e zonas de duelo.",
            "PvP Leaderboards e Rankings.",
            "Mapas de Battlegrounds novos e atualizados.",
            "Balanceamento completo de classes adaptado ao Level 255.",
            "Crossfaction PvP e progressão competitiva.",
          ],
        },
        {
          title: "Conteúdo Custom",
          points: [
            "3 Classes Custom.",
            "Até 15 Custom Spells por classe.",
            "Novas builds, Dual Wield e Titan’s Grip.",
            "Sistema de Passivas.",
            "Mais de 100.000 transmogs.",
            "Mais de 500 montarias, mascotes e Morphs.",
            "16 raças jogáveis através de Morphs.",
            "Sets, visuais, asas, auras e conteúdo personalizado.",
          ],
        },
        {
          title: "Sistemas Exclusivos",
          points: [
            "Battle Pass.",
            "Sistema de Passivas.",
            "PvP Leaderboards.",
            "Teletransportador e novo Custom Mall.",
            "Custom Quests, vendedores e sistemas de Tokens.",
            "Profissões instantâneas, buffs personalizados e comandos úteis.",
            "Interface personalizada, login próprio e telas de carregamento.",
            "Novas zonas e sistemas de progressão.",
            "Modelo Sem Pay to Win com progressão justa e equilibrada.",
          ],
        },
      ],
      serverInfoColumns: [
        [
          "Nível máximo 255.",
          "Cliente Wrath of the Lich King 3.3.5a.",
          "Progressão do Tier 1 ao Tier 35.",
          "Armas Lendárias V1–V10.",
          "35 Raids.",
          "Mais de 45 World Bosses.",
          "3 Classes Custom.",
        ],
        [
          "Até 15 Custom Spells por classe.",
          "Sistema de Passivas.",
          "Battle Pass.",
          "PvP Leaderboards e Rankings.",
          "Mapas de Battlegrounds novos e atualizados.",
          "Conteúdo PvE e PvP ativo.",
          "16 raças jogáveis através de Morphs.",
        ],
        [
          "Mais de 100.000 transmogs.",
          "Mais de 500 montarias, mascotes e Morphs.",
          "Novas zonas e novo Mall.",
          "Sistemas exclusivos do servidor.",
          "Modelo Sem Pay to Win.",
          "Atualizações por fases.",
          "Comunidade internacional ativa com Discord e suporte da equipe.",
        ],
      ],
      whyCards: [
        {
          title: "Comunidade ativa",
          body: "Discord oficial com anúncios, suporte da equipe, eventos e uma comunidade internacional ativa em PvE e PvP.",
        },
        {
          title: "Progressão constante",
          body: "Tier 1–Tier 35, 35 Raids, mais de 45 World Bosses, Armas Lendárias V1–V10, novas zonas, sistemas e atualizações por fases.",
        },
        {
          title: "Experiência custom completa",
          body: "3 Classes Custom, até 15 Custom Spells por classe, sistema de Passivas, Battle Pass, novas builds, Dual Wield, Titan’s Grip e conteúdo adaptado ao Level 255.",
        },
        {
          title: "Sem Pay to Win",
          body: "Progrida jogando e alcance o melhor conteúdo do servidor. O equipamento Donor pode igualar o melhor equipamento disponível por progressão, mas nunca superá-lo.",
        },
      ],
      visionCards: [
        {
          title: "PvE por tiers",
          body: "Progressão do Tier 1 ao Tier 35, com 35 Raids, mais de 45 World Bosses, chaves de conteúdo e Armas Lendárias V1–V10.",
          tag: "PvE",
        },
        {
          title: "PvP balanceado",
          body: "Arenas, Battlegrounds, Duel Zone, eventos PvP, Rankings e PvP Leaderboards com balanceamento adaptado ao Level 255.",
          tag: "PvP",
        },
        {
          title: "Personalização total",
          body: "Mais de 100.000 transmogs, 500+ montarias, mascotes e Morphs, além de 16 raças jogáveis e conteúdo visual personalizado.",
          tag: "Identidade",
        },
      ],
    },
  }[lang];
  const dragonModelSrc = "";
  const quickHighlights = tx.quickHighlights;
  const serverInfoColumns = tx.serverInfoColumns;
  const whyBlackoutCards = tx.whyCards;
  const visionCards = tx.visionCards;
  const contentBlocks = tx.contentBlocks;
  const phasesList: { phase: string; name: string; status: PhaseStatus }[] =
    tx.phasesList;

  const phaseStatusLabel = (status: PhaseStatus) => {
    if (status === "Activa") return tx.phaseStatusActive;
    if (status === "Proxima") return tx.phaseStatusNext;
    return tx.phaseStatusPlanned;
  };

  return (
    <SiteShell>
      <section className="section-fire-aura relative overflow-hidden border-b border-white/10">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://video.wixstatic.com/video/5dd8a0_58ecfec5ead544e1bb89e339ce47a859/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.16),transparent_42%),radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.14),transparent_36%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[url('/feature-bg-treant.png')] bg-cover bg-center opacity-10 mix-blend-screen" />
        <div className="hero-drift pointer-events-none absolute inset-0 opacity-35" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-10 pb-16 text-center md:pt-12 md:pb-20 lg:pt-14 lg:pb-24">
          <h1 className="sr-only">{SITE_TITLE}</h1>
          <div className="reveal-up flex w-full flex-col items-center">
            <div className="hero-logo-frame relative mx-auto -translate-y-1 overflow-hidden rounded-2xl bg-transparent px-4 pb-1 pt-2 sm:px-6 sm:pb-2 sm:pt-3 md:px-8">
              <div className="hero-logo-aura pointer-events-none absolute inset-6 rounded-full bg-radial-[at_50%_50%] from-amber-300/18 via-sky-300/8 to-transparent" />
              <div className="hero-logo-sheen pointer-events-none absolute inset-y-6 left-0 w-1/4 -skew-x-12 bg-linear-to-r from-transparent via-sky-300/15 to-transparent" />
              <Image
                src="/logo-transparent.png"
                alt="BLACKOUT WOW — Wrath of the Lich King"
                width={520}
                height={148}
                className="hero-logo-image relative mx-auto h-auto w-[min(92vw,480px)] max-w-full object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.65)] md:w-[520px]"
                priority
              />
            </div>

            <div className="mt-3 text-center sm:mt-4">
              <div className="inline-flex flex-col items-center gap-1 rounded-md border border-amber-600/35 bg-zinc-950/55 px-5 py-2 shadow-[inset_0_1px_0_rgba(251,191,36,0.1),0_10px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:gap-1.5 sm:px-6 sm:py-2.5">
                <NavHomeAuraText
                  variant="title"
                  text={tx.heroTagline}
                  className="font-display text-[11px] font-semibold uppercase tracking-[0.26em] sm:text-xs md:text-sm"
                />
                <NavHomeAuraText
                  variant="sub"
                  text={tx.heroTaglineSub}
                  className="font-display text-[9px] font-semibold uppercase tracking-[0.34em] sm:text-[10px] md:text-[11px]"
                />
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-200 sm:mt-6">
              {tx.heroIntro}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              {tx.heroIntroLong}
            </p>
            <p className="font-display mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/90 sm:text-sm">
              {tx.heroPillars}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-7 sm:gap-4 md:mt-8">
              <Link
                href="/registro"
                className="metal-border rounded-md bg-linear-to-r from-amber-600 to-orange-500 px-6 py-3 text-sm font-semibold text-black hover:from-amber-500 hover:to-orange-400 sm:px-8 sm:text-base"
              >
                {tx.create}
              </Link>
              <Link
                href="/como-conectarme"
                className="metal-border rounded-md border border-sky-400/40 bg-sky-950/40 px-6 py-3 text-sm font-semibold text-sky-100 hover:bg-sky-900/50 sm:px-8 sm:text-base"
              >
                {tx.connect}
              </Link>
              {hasDiscordInvite ? (
                <Link
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-[#5865F2]/50 bg-[#5865F2]/15 px-6 py-3 text-sm font-semibold text-[#e0e4ff] hover:bg-[#5865F2]/25 sm:px-8 sm:text-base"
                >
                  {tx.discordJoin}
                </Link>
              ) : null}
            </div>

            <p className="mt-2.5 max-w-xl text-sm text-zinc-500 sm:mt-3">
              {tx.seeRules}{" "}
              <Link
                href="/terminos-y-condiciones"
                className="text-sky-300 hover:text-sky-200 hover:underline"
              >
                {tx.terms}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <HomeDiscordSection
        copy={{
          badge: tx.discordBadge,
          title: tx.discordTitle,
          body: tx.discordBody,
          perkOnline: tx.discordPerkOnline,
          perkCommunity: tx.discordPerkCommunity,
          perkEvents: tx.discordPerkEvents,
          joinCta: tx.discordJoin,
        }}
      />

      <section
        id="features"
        className="relative mx-auto max-w-6xl overflow-hidden px-4 py-16"
      >
        <Image
          src="https://static.wixstatic.com/media/5dd8a0_9222be68baa94d82b57cdd840b2ec278~mv2.png"
          alt="Frostmourne decorativa"
          width={1500}
          height={1800}
          className="hero-sword pointer-events-none absolute -right-16 bottom-0 z-0 hidden h-auto w-[220px] rotate-6 opacity-30 lg:block xl:w-[300px]"
          priority={false}
        />
        <div className="feature-fire-particles fire-embers pointer-events-none absolute -inset-x-8 -inset-y-10 z-0 opacity-55" />
        <p className="font-display text-center text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/85">
          {tx.featuresSubtitle}
        </p>
        <h2 className="font-display mt-3 text-center text-2xl font-semibold text-zinc-100 md:text-3xl">
          {tx.features}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-zinc-400 md:text-base">
          {tx.featuresBody}
        </p>
        <div className="relative z-10 mt-12 grid gap-6 md:grid-cols-2">
          {contentBlocks.map((f, idx) => (
            <div
              key={f.title}
              className="home-card home-card-aura feature-card reveal-up metal-border rounded-xl border border-white/10 bg-zinc-950/70 p-6"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <h3 className="feature-card-title font-display mt-2 text-lg font-semibold text-amber-400">
                {f.title}
              </h3>
              <ul className="feature-card-list mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
                {f.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/80" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickHighlights.map((item) => (
            <article
              key={item.label}
              className="home-card home-card-aura rounded-xl border border-white/10 bg-zinc-950/65 p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {item.label}
              </p>
              <h3 className="font-display mt-2 text-2xl text-amber-300">
                {item.value}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="home-card home-card-aura rounded-2xl border border-white/10 bg-zinc-950/60 p-6 md:p-8">
          <h2 className="font-display text-center text-2xl font-semibold text-zinc-100 md:text-3xl">
            {tx.serverInfo}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-zinc-400 md:text-base">
            {tx.serverInfoIntro}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {serverInfoColumns.map((column, idx) => (
              <article
                key={`server-info-${idx}`}
                className="rounded-xl border border-white/10 bg-black/30 p-5"
              >
                <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
                  {column.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="fases-actualizaciones"
        className="relative overflow-hidden pb-14 pt-6 md:pt-10"
      >
        <BackgroundLoopVideo
          startAtSec={1}
          className="pointer-events-none absolute inset-0 h-full min-h-128 w-full object-cover opacity-[0.28]"
          autoPlay
          muted
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source
            src="https://video.wixstatic.com/video/5dd8a0_00a855e7ddb049518bd8983809fb9a23/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </BackgroundLoopVideo>
        <div className="pointer-events-none absolute inset-0 bg-black/50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(249,115,22,0.14),transparent_55%),linear-gradient(to_top,rgba(2,6,23,0.92)_0%,transparent_45%),linear-gradient(to_bottom,rgba(5,5,8,0.75)_0%,transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="home-card home-card-aura reveal-up rounded-2xl border border-white/10 bg-zinc-950/72 p-5 shadow-2xl shadow-black/50 backdrop-blur-sm md:p-8">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-amber-300/85">
            Visual Demo
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-zinc-100 md:text-3xl">
            {tx.downloadTitle}
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-zinc-400 md:text-base">
            {tx.downloadBody}
          </p>

          <div className="dragon-modal-shell mt-6">
            <div
              className="dragon-modal-bg"
              style={{
                backgroundImage:
                  "url('https://wowcircle.me/dragonflight/en/assets/img/ui/tab/bg3.webp')",
              }}
            />
            <div className="dragon-modal-vignette" />
            {dragonModelSrc ? (
              <model-viewer
                className="dragon-modal-model"
                src={dragonModelSrc}
                camera-controls
                disable-zoom
                disable-pan
                auto-rotate
                rotation-per-second="12deg"
                interaction-prompt="none"
                camera-orbit="-10deg 70deg 3.7m"
                min-camera-orbit="-30deg 55deg 3.2m"
                max-camera-orbit="20deg 85deg 4.2m"
                field-of-view="22deg"
                shadow-intensity="0.55"
                exposure="1.05"
                environment-image="neutral"
                poster="https://wowcircle.me/dragonflight/en/assets/img/iridikron.webp"
                alt="Iridikron 3D model preview"
              />
            ) : null}
            <img
              src="https://wowcircle.me/dragonflight/en/assets/img/iridikron.webp"
              alt="Iridikron fallback"
              className="dragon-modal-fallback"
              loading="lazy"
            />
            <div className="dragon-modal-content">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/90">
                Cliente recomendado
              </p>
              <h3 className="font-display mt-2 text-2xl text-zinc-100 md:text-3xl">
                Comienza Tu Aventura En Blackout
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base">
                Descarga el cliente completo de Wrath of the Lich King 3.3.5a,
                conecta con tu cuenta y entra directamente al reino sin
                configuraciones complejas.
              </p>
              <p className="mt-2 text-xs text-zinc-400/90">{tx.downloadNote}</p>
              <div className="mt-6">
                <Link
                  href="/como-conectarme"
                  className="inline-flex rounded-md bg-linear-to-r from-amber-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-black hover:from-amber-500 hover:to-orange-400"
                >
                  {tx.downloadCta}
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="home-card home-card-aura reveal-up relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 p-6 md:p-8">
          <div className="feature-fire-particles fire-embers pointer-events-none absolute -inset-x-8 -inset-y-10 z-0 opacity-42" />
          <div className="relative z-10">
            <h2 className="font-display text-2xl font-semibold text-zinc-100">
              {tx.phases}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-base">
              {tx.phasesIntro}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {phasesList.map((p) => (
                <div
                  key={p.phase}
                  className="home-card home-card-aura phase-card rounded-lg border border-white/10 bg-black/35 p-4"
                >
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    {p.phase}
                  </p>
                  <h3 className="mt-2 font-display text-base text-zinc-100">
                    {p.name}
                  </h3>
                  <p
                    className={`mt-2 text-xs font-semibold ${
                      p.status === "Activa"
                        ? "text-emerald-400"
                        : p.status === "Proxima"
                          ? "text-sky-300"
                          : "text-zinc-500"
                    }`}
                  >
                    {phaseStatusLabel(p.status)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pointer-events-none relative mx-auto max-w-6xl px-4 pb-10">
        <Image
          src="https://static.wixstatic.com/media/5dd8a0_345e699c01dd473894066e4b14870640~mv2.png"
          alt="Emblema decorativo izquierdo"
          width={900}
          height={900}
          className="absolute -left-2 top-1/2 hidden h-auto w-[120px] -translate-y-1/2 opacity-35 md:block lg:w-[150px]"
          priority={false}
        />
        <Image
          src="https://static.wixstatic.com/media/5dd8a0_f4846f95bf2443d5ab7f02ae4e0f7b9a~mv2.png"
          alt="Emblema decorativo derecho"
          width={900}
          height={900}
          className="absolute -right-2 top-1/2 hidden h-auto w-[120px] -translate-y-1/2 opacity-35 md:block lg:w-[150px]"
          priority={false}
        />
      </section>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-4 pb-14">
        <div className="feature-fire-particles fire-embers pointer-events-none absolute -inset-x-8 -inset-y-10 z-0 opacity-38" />
        <div className="relative z-10">
          <h2 className="font-display text-center text-2xl font-semibold text-zinc-100 md:text-3xl">
            {tx.vision}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {visionCards.map((n, idx) => (
              <article
                key={n.title}
                className="home-card home-card-aura reveal-up rounded-xl border border-white/10 bg-zinc-950/65 p-5"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-sky-300/80">
                  {n.tag}
                </p>
                <h3 className="font-display mt-2 text-lg text-zinc-100">
                  {n.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400">{n.body}</p>
                <p className="mt-4 text-xs text-zinc-500">Blackout-WoW 255</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-display text-center text-2xl font-semibold text-zinc-100 md:text-3xl">
          {tx.why}
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyBlackoutCards.map((card) => (
            <article
              key={card.title}
              className="home-card home-card-aura rounded-xl border border-white/10 bg-zinc-950/65 p-5"
            >
              <h3 className="font-display text-lg text-zinc-100">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="home-card reveal-up cta-fire-border rounded-2xl border border-white/10 bg-zinc-950/70 p-8 text-center">
            <div className="cta-fire-particles fire-embers pointer-events-none absolute -inset-x-10 -inset-y-12 opacity-75" />
            <h2 className="font-display text-3xl font-semibold text-zinc-50">
              {tx.start}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400">
              {tx.startBody}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/registro"
                className="rounded-md bg-linear-to-r from-amber-600 to-orange-500 px-6 py-3 text-sm font-semibold text-black hover:from-amber-500 hover:to-orange-400"
              >
                {tx.signupNow}
              </Link>
              <Link
                href="/login"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/5"
              >
                {tx.iHave}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
