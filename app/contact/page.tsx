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
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-muted-foreground">
              Get in touch with us for any inquiries about Fast Pigeons Rimini
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
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

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>derbyakbaniaolr@gmail.com</span>
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
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.9762108191837!2d19.559957!3d40.732779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13444c9a599213c1%3A0x62fcf1f73a68c8a1!2zTmVsY29nqWxh!5e0!3m2!1sen!2sus!4v1706576116899!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
