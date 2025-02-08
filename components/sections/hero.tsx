import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  language: "en" | "it";
}

export function Hero({ language }: HeroProps) {
  const content = {
    en: {
      subtitle: "Derby Albania OLR",
      title: "Derby Albania One Loft Race",
      cta: "VIEW REGISTRATION",
    },
    it: {
      subtitle: "FAST PIGEONS RIMINI",
      title: "Eccellenza nelle Gare di Piccioni",
      cta: "VEDI REGOLAMENTO",
    },
  };

  const t = content[language];

  return (
    <section className="relative h-[1300px] bg-gray-100">
      <Image src="/ft.jpg" alt="" fill className="object-cover" priority />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
        <div className="container mx-auto h-full flex flex-col justify-center items-start px-4">
          <div className="text-white max-w-2xl space-y-6">
            <span className="text-xl font-semibold bg-primary text-white px-4 py-1 rounded-full inline-block">
              {t.subtitle}
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              {t.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-lg"></p>
            <Button size="lg" asChild>
              <Link href={language === "en" ? "/pdf.pdf" : "/it/pdf.pdf"}>
                {t.cta}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
