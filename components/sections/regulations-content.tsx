import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Info, MapPin } from "lucide-react";

interface RegulationsContentProps {
  language: "en" | "it";
}

export function RegulationsContent({ language }: RegulationsContentProps) {
  const content = {
    en: {
      title: "CONDITIONS OF PARTICIPATION",
      prizeMoney: "",
      /* warning: "PARTICIPANTS MUST READ ALL REGULATIONS BEFORE PARTICIPATING",
      association: "FAST PIGEONS RIMINI",
      address: "SPORTS ASSOCIATION, VIA PORTO PALOS, 49/A 47922 RIMINI -RN-",
      vat: "VAT IT 04 414 200 404",
      president: "PRESIDENT ERVIN LARO",
      newEdition: "The new 2024-2025 edition starts soon.",
      pigeonEntry: "PIGEON ENTRY IN LOFT 10/06/24 – 30/09/24",
      contactInfo:
        "For those interested in participating, please contact our agents for their country, or our collaborators.",
      collectionDates: "PIGEON COLLECTION DATES:",
      participantInfo:
        "EACH PARTICIPANT CAN CONTACT THE AGENT FOR THEIR COUNTRY TO BETTER ORGANIZE",
      countries:
        "GERMANY, NETHERLANDS, BELGIUM 15/06/24 – 20/07/24 – 17/08/24 – 14/09/24",
      otherCountries:
        "FOR OTHER COUNTRIES, THOSE INTERESTED IN PARTICIPATING ARE REQUESTED TO CONTACT FAST PIGEONS AGENTS FOR THEIR COUNTRY.",
      guaranteedPrizes: "175,000 € TOTAL PRIZES GUARANTEED 100%",
    },
    it: {
      title: "REGOLAMENTO FAST PIGEONS 2024-2025 RIMINI-ITALIA",
      prizeMoney: "175.000 € MONTEPREMI",
      warning:
        "I PARTECIPANTI DEVONO LEGGERE TUTTO IL REGOLAMENTO PRIMA DI PARTECIPARE",
      association: "FAST PIGEONS RIMINI",
      address: "ASSOCIAZIONE SPORTIVA, VIA PORTO PALOS, 49/A 47922 RIMINI -RN-",
      vat: "P.IVA IT 04 414 200 404",
      president: "PRESIDENTE ERVIN LARO",
      newEdition: "La nuova edizione 2024-2025 parte a breve.",
      pigeonEntry: "ENTRATA PICCIONI IN COLOMBAIA 10/06/24 – 30/09/24",
      contactInfo:
        "Per chi fosse interessato a partecipare, è pregato di contattare i nostri agenti per il loro paese, o i nostri collaboratori.",
      collectionDates: "DATE PER LA RACCOLTA PICCIONI:",
      participantInfo:
        "OGNI PARTECIPANTE PUÒ CONTATTARE L'AGENTE PER IL SUO PAESE PER ORGANIZZARSI AL MEGLIO",
      countries:
        "GERMANIA, OLANDA, BELGIO 15/06/24 – 20/07/24 – 17/08/24 – 14/09/24",
      otherCountries:
        "PER GLI ALTRI PAESI, CHI È INTERESSATO A PARTECIPARE È PREGATO DI CONTATTARE GLI AGENTI DEL FAST PIGEONS PER IL LORO PAESE.",
      guaranteedPrizes: "175.000 € TOTALE PREMI GARANTITI AL 100%",*/
    },
  };

  const t = content[language];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">{t.title}</h1>
        <p className="text-2xl font-semibold text-primary">{t.prizeMoney}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            {language === "en"
              ? "Important Information"
              : "Informazioni Importanti"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="font-semibold ">
            {t.warning}
            The pigeons that will take part in the race must have rings from the
            year 2025 and must be no younger than 30 days. The collection of
            pigeons will start on April 1 and end on May 31. If an OLR pigeon
            gets sick and dies, the owner can replace it free of charge up to
            one week after the closing day of collection. Pigeons participating
            in the race must have a card or pedigree. Participating pigeons in
            OLŘ must be vaccinated for paramyxovirus and must be healthy until
            the day of delivery. Before entering the cage, the pigeons will be
            vaccinated again. The payment for participation is €80 per pigeon
            for 5+1 teams Payment for participation will be made at the moment
            the pigeons are delivered.
          </p>
          <img
            src="/foto.jpg"
            alt="Derby Albania Event"
            className="w-full mt-4"
          />
          <div>
            <p>{t.association}</p>
            <p>{t.address}</p>
            <p>{t.vat}</p>
            <p>{t.president}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader></CardHeader>
        <CardContent className="space-y-2">
          <p>
            Derby Albania One Loft Race <br />
            Pas një sezoni të suksesshem vitin e kaluar, kemi kënaqësin tju
            ftojmë të merni pjesë në sezonin 2025 te Derby Albania ORL për të
            shtatin vite radhazi. <br />
            Ky sezon do të përfshijë tetë stërvitje dhe pesë gara zyrtare
            Stervitjet: 7 km, 20 km 36 km 50 km 70 km 90 km 62 km dhe 36 km.
            <br />
            Garat: 1 Hot spot I - 120 km (21/092025) Hot spot 2 - 175 km
            (28/09/2025) Hot spot 3 - 235 km ( 05/1o/2025) Semifinale -300 km
            (12/10/2025) Final Derby - 420 km (19/10/2025)
            <br /> Gara finale do të zhvillohet në 19 tetor ne Bosnie-Hercgovina
            420 km - kjo datë mund të ndryshohet vetëm nqs kushtet atmosferike
            nuk e lejojnë atë 50 pëllumbat e parë dhe 5 asat e parë do të shiten
            në ankand. Të gjithë pëllumbat e tjerë do të garojnë përsëri në
            Super Derby 530 km. Të gjithë pronarët e pëllumbave nëse kanë
            dëshirë, mund të paguajnë një tarifë shtesë 100 € për pëllumbat e
            tyre nga shuma e mbledhur, 60% e saj do të shperndahet ne çmime për
            10 pellumbat e parë.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            {t.collectionDates}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p> Kraps Fier,Albania{t.participantInfo}</p>
          <p>{t.countries}</p>
          <p>{t.otherCountries}</p>
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="text-2xl font-semibold text-primary">
          {t.guaranteedPrizes}
        </p>
      </div>

      <div className="flex justify-center">
        <Button size="lg">
          {language === "en"
            ? "Download Full Regulations"
            : "Scarica il Regolamento Completo"}
        </Button>
      </div>
    </div>
  );
}
