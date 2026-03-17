import React from "react";
import { Plane, Home, CreditCard } from "lucide-react";

export interface BankDetail {
  owner: string;
  account: string;
  bank: string;
  name: string;
}

export interface HomeItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface RegistryType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  cta: string;
}

export const bankDetails: BankDetail[] = [
  {
    owner: "Groom's Account",
    account: "8125988097",
    bank: "Moniepoint",
    name: "Popoola Ajibola"
  },
  {
    owner: "Bride's Account",
    account: "0124683991",
    bank: "GTB",
    name: "Oluwasina Toluwalope Funmilayo"
  }
];

export const homeItems: HomeItem[] = [
  { id: 1, name: "Premium Blender", price: "₦45,000", image: "https://images.unsplash.com/photo-1585238341267-1cfec2046a05?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 2, name: "Microwave Oven", price: "₦85,000", image: "https://images.unsplash.com/photo-1574269909862-7e1d30bb91d5?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 3, name: "Dinner Set (24pc)", price: "₦35,000", image: "https://images.unsplash.com/photo-1589405858862-2ac9cbb41321?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 4, name: "Comfy Bedding Set", price: "₦25,000", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=300&h=300" },
];

export const registries: RegistryType[] = [
  {
    id: "honeymoon",
    title: "Honeymoon Fund",
    description: "Help us create unforgettable memories as we start our journey together.",
    icon: React.createElement(Plane, { size: 32 }),
    cta: "Contribute"
  },
  {
    id: "home",
    title: "Home Essentials",
    description: "Support us in building our brand new home with these essentials.",
    icon: React.createElement(Home, { size: 32 }),
    cta: "View Registry"
  },
  {
    id: "cash",
    title: "Cash Gift",
    description: "Direct transfers are a simple and cherished way to share your love.",
    icon: React.createElement(CreditCard, { size: 32 }),
    cta: "Get Details"
  }
];
