import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import Image from "next/image";

export function Content() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src="/placeholder.svg?text=Pigeons"
          alt="Flying Pigeons"
          width={800}
          height={400}
          className="rounded-lg object-cover w-full"
        />
        <div className="bg-[#1a1a1a] text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Modulo per la partecipazione alla stagione 2024-2025 del Fast
            Pigeons VIP
          </h2>
          <Button variant="secondary" className="gap-2">
            <FileDown className="h-4 w-4" />
            DOWNLOAD PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
