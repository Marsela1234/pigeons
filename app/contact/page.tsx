import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Title */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-muted-foreground">
              Get in touch with us for any inquiries about Fast Pigeons Rimini
            </p>
          </div>

          {/* 2-column layout: Form + Contact Info */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Send us a message</h2>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={4} />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>derbyalbaniaolr@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>069 45 84 740</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Kraps Fier, Albania</span>
                </div>
              </div>
            </div>
          </div>

          {/* Separate Full-Width Row: Bank Info */}
          <div className="mt-12 space-y-2 bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-center">
              Te dhenat bankare / Bank account information
            </h3>
            <div className="grid gap-2">
              <div>
                <strong>Nr. i klientit / Customer number:</strong> 002865827
              </div>
              <div>
                <strong>Mbajtesit e llogarise / Account holders:</strong> FRENSIS AJDINAJ PF
              </div>
              <div>
                <strong>Numri i llogarise / Account number:</strong> 003591391
              </div>
              <div>
                <strong>IBAN:</strong> AL75210210800000000003591391
              </div>
              <div>
                <strong>Monedha / Currency:</strong> EUR
              </div>
              <div>
                <strong>Swift Code:</strong> EMPOALTRXXX
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
