import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Smartphone, Cloud, Shield, Database, Zap } from "lucide-react"
import { AnimatedSection, AnimatedCard } from "@/components/animations/animated-section"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and technologies. From responsive websites to complex web platforms.",
      features: ["React & Next.js", "TypeScript", "API Development", "Database Design"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services to help your business leverage the power of the cloud.",
      features: ["AWS & Azure", "DevOps", "Microservices", "Container Orchestration"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"],
    },
    {
      icon: Database,
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights with our advanced analytics and business intelligence solutions.",
      features: ["Data Warehousing", "Business Intelligence", "Machine Learning", "Reporting"],
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description:
        "End-to-end digital transformation services to modernize your business processes and technology stack.",
      features: ["Process Automation", "Legacy Modernization", "Integration", "Change Management"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center" direction="fade" duration={0.8}>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
              journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business goals, challenges, and requirements.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a comprehensive strategy and roadmap tailored to your needs.",
              },
              {
                step: "03",
                title: "Development",
                description: "Our expert team brings your vision to life with cutting-edge technology.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deploy, test, and optimize your solution for maximum performance.",
              },
            ].map((phase, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center" direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Let&apos;s discuss your project requirements and how we can help you achieve your technology goals.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
