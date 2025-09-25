"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"
import { AnimatedSection, AnimatedCard } from "@/components/animations/animated-section"
import { cn } from "@/lib/utils"

interface FormErrors {
  name?: string
  email?: string
  message?: string
  general?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 400 && data.field) {
          setErrors({ [data.field]: data.error })
        } else {
          setErrors({ general: data.error || "Failed to send message" })
        }
        return
      }

      setFormData({ name: "", email: "", company: "", message: "" })
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch {
      setErrors({ general: "Network error. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <AnimatedSection
            className="max-w-4xl mx-auto text-center"
            direction="fade"
            duration={0.8}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Ready to start your next project? We&#39;d love to hear from you.
              Let&#39;s discuss how we can help bring your vision to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-green-800">
                        Thank you for your message! We&#39;ll get back to you
                        soon.
                      </p>
                    </div>
                  )}

                  {errors.general && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800">{errors.general}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className={cn(
                            "mt-1",
                            errors.name && "border-destructive"
                          )}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className={cn(
                            "mt-1",
                            errors.email && "border-destructive"
                          )}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        rows={6}
                        className={cn(
                          "mt-1",
                          errors.message && "border-destructive"
                        )}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We&#39;re here to help you with your technology needs. Reach
                    out to us through any of the following channels.
                  </p>
                </div>

                <AnimatedSection stagger className="space-y-6">
                  <AnimatedCard>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          hello@ryudhiscompany.com
                        </p>
                        <p className="text-muted-foreground">
                          support@ryudhiscompany.com
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>

                  <AnimatedCard>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">+62 88888888888</p>
                        <p className="text-muted-foreground">+62 88888888888</p>
                      </div>
                    </div>
                  </AnimatedCard>

                  <AnimatedCard>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office</h3>
                        <p className="text-muted-foreground">Mawar</p>
                        <p className="text-muted-foreground">
                          Tangerang Selatan, Banten, Indonesia
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>

                  <AnimatedCard>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-muted-foreground">
                          Saturday: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.4}>
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">
                        Need Immediate Support?
                      </h3>
                      <p className="text-primary-foreground/80 mb-4">
                        For urgent technical issues, our support team is
                        available 24/7.
                      </p>
                      <Button variant="secondary" size="sm">
                        Emergency Support
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
