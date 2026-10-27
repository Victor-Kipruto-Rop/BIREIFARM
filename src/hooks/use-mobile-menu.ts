"use client";
import { useState } from "react";
export function useMobileMenu() {
  const [open, setOpen] = useState(false);
  return { open, openMenu: () => setOpen(true), closeMenu: () => setOpen(false), toggleMenu: () => setOpen((value) => !value) };
}
