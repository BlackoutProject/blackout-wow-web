"use client";
import {useInterfaceCopy} from "@/lib/use-interface-copy";
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useAuth} from '@/context/AuthContext';
import {LanguageSwitcher} from './LanguageSwitcher';
export function SiteHeader(){
 const ui=useInterfaceCopy();
 const {t}=useTranslation();const path=usePathname().replace(/\/$/,'')||'/';const {accessToken,canManageDashboard,logout}=useAuth();const [open,setOpen]=useState(false);
 useEffect(()=>setOpen(false),[path]);useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false);};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close);},[]);
 const links=[{href:'/servidor',label:t('nav.server')},{href:'/como-conectarme',label:t('nav.connect')},{href:'/tienda',label:t('nav.store')},{href:'/tienda/puntos',label:t('nav.redeem')},{href:'/terminos-y-condiciones',label:t('nav.rules')}];
 if(canManageDashboard)links.push({href:'/dashboard/productos',label:t('nav.dashboard')});
 return <header className="site-header"><div className="site-header-inner">
  <Link href="/" className="site-brand" aria-label={t('nav.homeAria')}><img src="/warcraft/crest.webp" width="78" height="58" alt=""/><span>BLACKOUT<small>CUSTOM · 255 · 3.3.5a</small></span></Link>
  <nav className="site-nav" aria-label={ui("Principal")}>{links.map(l=><Link key={l.href} href={l.href} aria-current={path===l.href?'page':undefined}>{l.label}</Link>)}</nav>
  <div className="site-header-actions">{accessToken?<Link href="/cuenta" className="site-account">{t('nav.account')} <span>↗</span></Link>:<><Link href="/registro" className="site-account site-register">{t('nav.register')}</Link><Link href="/login" className="site-account">{t('nav.login')} <span>↗</span></Link></>}<LanguageSwitcher/><button className="site-menu-button" aria-controls="site-mobile-menu" aria-expanded={open} aria-label={t('nav.openMenu')} onClick={()=>setOpen(v=>!v)}><span/ ><span/ ></button></div>
 </div><nav id="site-mobile-menu" className="site-mobile-menu" aria-label={ui("Navegación móvil")} hidden={!open}>{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} aria-current={path===l.href?'page':undefined}>{l.label}<span>↗</span></Link>)}<Link href={accessToken?'/cuenta':'/registro'}>{accessToken?t('nav.account'):t('nav.register')}</Link>{accessToken&&<button onClick={()=>{logout();setOpen(false);}}>{t('nav.logout')}</button>}</nav></header>;
}
