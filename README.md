# E-Amplify

**Find Purpose. Share Knowledge. Earn with Impact.**

E-Amplify is a modern mentorship and knowledge-sharing platform built with Next.js and Supabase. Connect instantly for mentorship, collaboration, and earning opportunities while amplifying what matters most.

## ✨ Features

- **🎯 Purpose-Driven Mentorship**: Connect with mentors and learners worldwide
- **💰 Monetization**: Earn through knowledge sharing and mentorship sessions
- **📊 Analytics Dashboard**: Track your progress and earnings
- **💳 Credit System**: Flexible payment system for sessions and content
- **🌐 Social Feed**: Share insights and engage with the community
- **🔍 Discovery Engine**: Find mentors and opportunities based on your interests
- **📈 Growth Tracking**: Monitor your learning and earning journey
- **🎨 Modern UI**: Beautiful, responsive design with dark/light mode support

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization
- **Fonts**: Poppins (Google Fonts)

### Backend & Database

- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth with SSR support
- **Storage**: Supabase Storage for file uploads
- **Real-time**: Supabase real-time subscriptions

### Development Tools

- **Language**: TypeScript
- **Package Manager**: PNPM
- **Linting**: ESLint with Next.js configuration
- **Analytics**: Vercel Analytics

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and PNPM
- Supabase account and project
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/E-Africa-Services/E-Amplify.git
   cd E-Amplify/v0-amplify-web-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your Supabase credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up the database**

   Follow the [Database Setup Guide](./DATABASE_SETUP_GUIDE.md) to configure your Supabase database with the required tables, policies, and functions.

5. **Configure storage buckets**

   Follow the [Storage Bucket Setup Guide](./STORAGE_BUCKET_SETUP.md) to set up file storage for avatars, cover images, and post media.

6. **Run the development server**

   ```bash
   pnpm dev
   ```

7. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
├── app/                     # Next.js App Router pages
│   ├── (auth)/             # Authentication pages
│   ├── dashboard/          # Dashboard and analytics
│   ├── feed/               # Social feed
│   ├── discover/           # Discovery and search
│   ├── profile/            # User profiles
│   ├── settings/           # User settings
│   ├── pricing/            # Pricing and credits
│   └── layout.tsx          # Root layout
├── components/             # Reusable UI components
│   ├── ui/                # Base UI components (Radix UI)
│   ├── create-post.tsx    # Post creation
│   ├── dashboard-stats.tsx # Analytics components
│   ├── feed-*.tsx         # Feed-related components
│   ├── profile-*.tsx      # Profile components
│   └── ...
├── lib/                   # Utilities and configurations
│   ├── supabase/         # Supabase client configuration
│   ├── auth-*.ts         # Authentication logic
│   └── utils.ts          # Utility functions
├── scripts/              # Database migration scripts
├── emails/               # Email templates
└── public/               # Static assets
```

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Database (with Supabase CLI)
supabase start    # Start local Supabase
supabase db reset # Reset database
supabase gen types typescript --local > types/database.types.ts
```

## 🎨 Design System

E-Amplify uses a custom design system built on top of Tailwind CSS:

- **Colors**: Primary (blue), Secondary (purple), with full dark/light mode support
- **Typography**: Poppins font family with consistent spacing
- **Components**: Built with Radix UI for accessibility and customization
- **Responsive**: Mobile-first design with breakpoint consistency

## 🔐 Authentication & Security

- **SSR Authentication**: Server-side rendering with Supabase Auth
- **Protected Routes**: Middleware-based route protection
- **Row Level Security**: Database-level security policies
- **Session Management**: Automatic session refresh and validation

## 💾 Database Schema

The application uses a comprehensive PostgreSQL schema including:

- **Users & Profiles**: User management and profile information
- **Posts & Feed**: Social media functionality
- **Credits & Transactions**: Payment and earning system
- **Skills & Mentorship**: Skill tracking and mentor connections
- **Reviews & Ratings**: Community feedback system

See [Database Setup Guide](./DATABASE_SETUP_GUIDE.md) for detailed schema information.

## 📦 Storage Configuration

File storage is organized into:

- **Avatars**: User profile pictures
- **Cover Images**: Profile cover photos
- **Post Images**: Media attachments for posts
- **Documents**: Downloadable resources

See [Storage Bucket Setup Guide](./STORAGE_BUCKET_SETUP.md) for configuration details.

## 🌍 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** automatically on push to main branch

### Manual Deployment

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the setup guides in this repository
- **Issues**: Report bugs and request features via GitHub Issues
- **Community**: Join our Discord server for community support

## 🚗 Roadmap

- [ ] Mobile app development
- [ ] Advanced analytics and reporting
- [ ] AI-powered mentor matching
- [ ] Video conferencing integration
- [ ] Multi-language support
- [ ] Advanced notification system

---

**Built with ❤️ by the E-Africa Services team**

_Empowering knowledge sharing and mentorship across Africa and beyond._
