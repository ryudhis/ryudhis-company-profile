# Ryudhis Company Profile Website

A modern, professional company profile website built with Next.js, TypeScript, Prisma, and Supabase. Features a complete admin panel for blog management and contact message handling with a rich text editor.

## Features

### Frontend
- **Modern Design**: Clean, professional design inspired by top portfolio websites
- **Responsive Layout**: Mobile-first design that works on all devices
- **Company Pages**: Home, About, Services, Contact, and Blog sections
- **Contact Form**: Functional contact form that saves messages to database

### Admin Panel
- **Secure Authentication**: JWT-based authentication with HTTP-only cookies (Admin only)
- **Blog Management**: Full CRUD operations for blog posts
- **Contact Management**: View and manage visitor messages with read/unread status
- **Rich Text Editor**: WYSIWYG editor with formatting tools using Tiptap
- **Draft/Publish System**: Control post visibility with draft and publish states
- **Admin Dashboard**: Overview of blog and contact statistics with quick actions

### Technical Stack
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Database**: PostgreSQL (Supabase), Prisma ORM
- **Authentication**: JWT tokens, bcrypt password hashing (Admin only)
- **Rich Text**: Tiptap editor with extensions
- **Deployment**: Vercel-ready configuration

## Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (Supabase recommended)

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install (IF LEGACY ERROR, USE npm install --force)
   \`\`\`

3. Set up environment variables:
   \`\`\`env
   DATABASE_URL="your-postgresql-database-connection-string"
   DIRECT="your-postgresql-direct-url-connection-string"
   JWT_SECRET="your-jwt-secret-key"
   \`\`\`

4. Set up the database:
   \`\`\`bash
   npx prisma generate
   npx prisma db push
   \`\`\`

5. Seed the database with initial data:
   \`\`\`bash
   npx prisma db seed
   \`\`\`
   This will create:
   - Admin user account
   - Sample blog posts
   - Sample contact message for testing

6. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

### Default Admin Credentials
- **Email**: admin@company.com
- **Password**: admin123

## Project Structure

```text
├── app/                    # Next.js app directory
│   ├── admin/              # Admin panel pages
│   │   ├── dashboard/      # Admin dashboard
│   │   ├── blog/           # Blog management
│   │   ├── settings/       # Account management
│   │   └── messages/       # Contact message management
│   ├── api/                # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── admin/          # Admin endpoints
│   │   ├── blog/           # Blog API endpoints
│   │   ├── contact/        # Contact form endpoint
│   │   └── messages/       # Message management endpoints
│   ├── page.tsx            # Public home page
│   ├── about/              # Public about pages
│   ├── services/           # Public services pages
│   ├── contact/            # Public contact pages
│   └── blog/               # Public blog pages
├── components/             # React components
│   ├── admin/              # Admin-specific components
│   ├── animations/         # Custom framer motion components
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utility functions
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript declared global types
├── prisma/                 # Database schema and seed file
│   ├── schema.prisma       # Database schema
│   └── seed.tsx            # Database seeding script
└── README.md
```

## Key Features Explained

### Authentication System
- Secure JWT-based authentication for admin access only
- HTTP-only cookies for session management
- Role-based access control (ADMIN role required)
- Password hashing with bcrypt
- No user registration - admin only system

### Profile Settings System
- Change username
- Change password

### Blog Management
- Create, read, update, delete blog posts
- Rich text editor with formatting options
- Draft and publish system
- SEO-friendly slugs
- Automatic excerpt generation

### Contact Management
- Functional contact form for visitors
- Admin can view all messages in organized interface
- Mark messages as read/unread
- Quick reply functionality
- Message statistics in dashboard

### Rich Text Editor
- WYSIWYG editing experience
- Support for headings, lists, links, images
- Toolbar with formatting options
- HTML output for flexible content display

## Deployment

The application is ready for deployment on Vercel:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch
4. Run the seed script in production if needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
