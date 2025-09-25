import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"
import { AnimatedSection, AnimatedCard } from "@/components/animations/animated-section"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center" direction="fade" duration={0.8}>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">About TechCorp</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              We are a team of passionate professionals dedicated to crafting exceptional digital experiences that drive
              business success through innovative technology solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded with a vision to bridge the gap between cutting-edge technology and practical business
                  solutions, TechCorp has been at the forefront of digital transformation for over a decade.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our journey began with a simple belief: that technology should empower businesses to achieve their
                  full potential. Today, we continue to uphold this principle while helping organizations navigate the
                  ever-evolving digital landscape.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.2}>
                <div className="bg-muted/30 rounded-lg p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">10+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">25+</div>
                      <div className="text-sm text-muted-foreground">Countries Served</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              The principles that guide everything we do and shape our approach to technology and business.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We strive for excellence in every project, delivering solutions that exceed expectations.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Collaboration</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We believe in the power of teamwork and close partnership with our clients.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Quality</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Quality is at the heart of everything we create, from code to customer experience.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We embrace new technologies and methodologies to stay ahead of the curve.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Meet the experienced professionals leading Ryudhis Company&apos;s mission to deliver exceptional technology solutions.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedCard>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Arya Yudhistira</h3>
                  <p className="text-primary font-medium mb-3">Chief Executive Officer</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    With over 15 years of experience in technology leadership, Arya drives our strategic vision and
                    company growth.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Juan</h3>
                  <p className="text-primary font-medium mb-3">Chief Technology Officer</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Juan leads our technical innovation and ensures we deliver cutting-edge solutions to our clients.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Bendry</h3>
                  <p className="text-primary font-medium mb-3">Head of Operations</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Bendry ensures smooth project delivery and maintains our high standards of client satisfaction.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
