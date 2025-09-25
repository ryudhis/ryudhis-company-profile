import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const validatedData = contactSchema.parse(body)

    const contact = await prisma.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || null,
        message: validatedData.message,
      },
    })

    return NextResponse.json({ message: "Message sent successfully", id: contact.id }, { status: 201 })
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
