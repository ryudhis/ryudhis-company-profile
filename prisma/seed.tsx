import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Starting database seeding...")

  const hashedPassword = await bcrypt.hash("admin123", 10)

  const admin = await prisma.user.upsert({
    where: { email: "admin@company.com" },
    update: {},
    create: {
      id: "admin-user-id",
      email: "admin@company.com",
      password: hashedPassword,
      name: "Admin User",
      role: "ADMIN",
    },
  })

  console.log("✅ Created admin user:", admin.email)

  const post1 = await prisma.post.upsert({
    where: { slug: "welcome-to-our-company-blog" },
    update: {},
    create: {
      id: "post-1",
      title: "Welcome to Our Company Blog",
      slug: "welcome-to-our-company-blog",
      content:
        "<h2>Welcome to Our Journey</h2><p>We are excited to share our insights, updates, and industry knowledge with you through this blog. Stay tuned for regular updates about our services, company news, and thought leadership articles.</p><p>Our team is passionate about delivering exceptional results and we look forward to sharing our expertise with you.</p>",
      excerpt: "Welcome to our company blog where we share insights, updates, and industry knowledge.",
      published: true,
      authorId: admin.id,
    },
  })

  const post2 = await prisma.post.upsert({
    where: { slug: "our-approach-to-innovation" },
    update: {},
    create: {
      id: "post-2",
      title: "Our Approach to Innovation",
      slug: "our-approach-to-innovation",
      content:
        "<h2>Innovation at the Core</h2><p>Innovation drives everything we do. From our cutting-edge solutions to our collaborative approach with clients, we believe in pushing boundaries and exploring new possibilities.</p><p>Our methodology combines proven strategies with emerging technologies to deliver results that exceed expectations.</p>",
      excerpt: "Discover how innovation drives our approach to solving complex business challenges.",
      published: true,
      authorId: admin.id,
    },
  })

  console.log("✅ Created sample blog posts:", post1.title, "and", post2.title)

  const sampleContact = await prisma.contact.create({
    data: {
      id: "sample-contact-1",
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Example Corp",
      message:
        "Hello! I am interested in learning more about your services. Could you please provide more information about your pricing and availability?",
      isRead: false,
    },
  })

  console.log("✅ Created sample contact message from:", sampleContact.name)

  console.log("🎉 Database seeding completed successfully!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error("❌ Error during seeding:", e)
    await prisma.$disconnect()
    process.exit(1)
  })
