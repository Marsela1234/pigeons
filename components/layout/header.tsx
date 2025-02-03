"use client";

import { useLanguage } from "@/contexts/language-context";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileSidebar } from "./mobile-sidebar";

const languages = [
  { code: "en", name: "English", flag: "gb" },
  { code: "it", name: "Italian", flag: "it" },
];

const navigation = {
  en: [
    { name: "HOME", path: "/" },
    { name: "REGULATIONS", path: "/regulations" },
    { name: "AGENTS", path: "/agents" },
    { name: "SPONSORS", path: "/sponsors" },
    { name: "CONTACT", path: "/contact" },
  ],
  it: [
    { name: "HOME", path: "/it" },
    { name: "REGOLAMENTO", path: "/it/regulations" },
    { name: "AGENTI", path: "/it/agents" },
    { name: "SPONSORS", path: "/it/sponsors" },
    { name: "CONTATTI", path: "/it/contact" },
  ],
};

export function Header() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="w-full">
      <div className="bg-[#1E3A8A] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="mailto:contact@example.com"
              className="flex items-center gap-2 text-sm"
            >
              <Mail className="h-4 w-4" />
              CONTACT
            </Link>
            <Link
              href="tel:+393408100605"
              className="flex items-center gap-2 text-sm"
            >
              <Phone className="h-4 w-4" />
              +355 69 45 84 740
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as "en" | "it")}
                className={`w-6 h-4 relative hover:opacity-80 transition-opacity ${
                  language === lang.code ? "ring-2 ring-white" : ""
                }`}
              >
                <Image
                  src={"/logo.jpg"}
                  alt={lang.name}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <MobileSidebar />
            <Link
              href={language === "en" ? "/" : "/it"}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo.jpg"
                alt="Fast Pigeons Rimini"
                width={100}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="relative w-full max-w-md mx-4">
            <input
              type="search"
              placeholder={
                language === "en" ? "Search..." : "Cerca nel sito..."
              }
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>
      </div>
      <nav className="bg-[#00447C] text-white hidden md:block">
        <div className="container mx-auto">
          <ul className="flex">
            {navigation[language].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`px-6 py-4 block hover:bg-[#003366] transition-colors ${
                    pathname === item.path ? "bg-[#003366]" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
