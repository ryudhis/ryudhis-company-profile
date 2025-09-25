import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Zap, Shield } from "lucide-react";
import {
  AnimatedSection,
  AnimatedCard,
} from "@/components/animations/animated-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection
            className="max-w-4xl mx-auto text-center"
            direction="fade"
            duration={0.8}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Professional Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
              We craft accessible, pixel-perfect digital experiences that blend
              thoughtful design with robust engineering for modern businesses.
            </p>
            <AnimatedSection direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/services">
                    Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Ryudhis Company?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              We combine innovation, reliability, and expertise to deliver
              exceptional results for your business.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid md:grid-cols-3 gap-8">
            <AnimatedCard>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Innovation First
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We leverage cutting-edge technologies and methodologies to
                    create solutions that drive your business forward.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Reliable & Secure
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Built with security and reliability at the core, ensuring
                    your systems perform flawlessly when it matters most.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Expert Team</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our experienced professionals work closely with you to
                    understand your needs and deliver tailored solutions.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection
            className="max-w-3xl mx-auto text-center"
            direction="up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Let&#39;s discuss how we can help you achieve your technology
              goals and drive growth.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ryudhis Company</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Professional technology solutions for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Ryudhis Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
