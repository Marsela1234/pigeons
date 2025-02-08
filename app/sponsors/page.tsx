import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function DerbyAlbania() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Derby Albania OLR</h1>
            <p className="text-muted-foreground">Powered by Benzing - Live</p>
          </div>

          <div className="prose prose-lg mx-auto">
            <p>
              Derby Albania OLR is powered by Benzing - Live. You will find the
              results in real-time and after the second race, you will see ACE
              classification too. For seven years, Derby Albania OLR has been
              certified by FCI GRAND PRIX.
            </p>
            <p>
              The first 50 pigeons of the final race and all those that will
              come from Super Derby will be sold in the auction (online). The
              owners receive 50% of the money from the first auction. Pigeons
              that are not sold at the first auction become property of our
              loft: in such case, the breeders are not entitled to any
              percentage regarding future auctions.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-lg space-y-6">
            <h2 className="text-2xl font-bold text-center">Contact Us</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              For more information about Derby Albania OLR or to participate in
              our events, please get in touch with us.
            </p>
            <div className="flex justify-center">
              <Button className="gap-2">
                <Mail className="h-4 w-4" />
                Contact Derby Albania OLR
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
