"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
export function MobileMenu(){const[open,setOpen]=useState(false);return <div className="mobile-menu"><button type="button" className="menu-toggle" aria-expanded={open} aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(v=>!v)}>{open?<X size={19}/>:<Menu size={19}/>}</button>{open?<div className="mobile-menu-panel"><Navigation onNavigate={()=>setOpen(false)}/></div>:null}<style>{'.mobile-menu{position:relative}.mobile-menu-panel{position:absolute;top:45px;right:0;background:var(--paper);border:1px solid var(--line);padding:16px;min-width:230px;z-index:30}.mobile-menu-panel .nav-links{display:flex;flex-direction:column;align-items:stretch;gap:12px}'}</style></div>}
