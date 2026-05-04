# 🐄 QurbaniHat — Premium Livestock Booking Platform

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)
![Better Auth](https://img.shields.io/badge/Better-Auth-green?style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)

A modern livestock marketplace where users can explore 
animals for Qurbani such as cows, goats, and sheep. 
Users can view details and place a booking 
after authentication.

---

## 🔗 Live Demo

[QurbaniHat Live Site](YOUR_VERCEL_URL_HERE)

---

## ✨ Features

### 🏠 Pages
- **Home Page** — Hero banner, Featured Animals (4 items),
  Qurbani Tips section, Top Breeds section, 
  Why QurbaniHat section
- **All Animals Page** — Filter by type (Cow/Goat/Sheep),
  Sort by price and weight, Premium glass dropdown
- **Animal Details Page** — Full animal info, specs grid,
  booking form (login required)
- **Login Page** — Email/password + Google OAuth
- **Register Page** — Email/password + Google OAuth
- **My Profile Page** — View user info
- **Update Profile Page** — Update name and photo URL
- **Custom 404 Page** — Not found page

### 🔐 Authentication
- Email & Password login/register
- Google OAuth sign-in
- Protected routes (booking, profile)
- Better Auth with MongoDB adapter

### 🎨 UI & Animation
- React Spring card animations with stagger effect
- Lottie fitness cow mascot loader
- Animate.css toast notifications
- Custom glassmorphism sort dropdown
- Fully responsive design (mobile + desktop)

### 🛠️ Tech Stack
- **Framework** — Next.js (App Router)
- **Styling** — Tailwind CSS
- **Authentication** — Better Auth
- **Database** — MongoDB Atlas
- **Animation** — React Spring, Lottie, Animate.css
- **Fonts** — Playfair Display, DM Sans

---

## 📦 NPM Packages Used

| Package | Purpose |
|---------|---------|
| `better-auth` | Authentication library |
| `mongodb` | Database adapter |
| `@react-spring/web` | Card animations |
| `@lottiefiles/dotlottie-react` | Mascot loader |
| `animate.css` | Toast animations |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Google Cloud Console OAuth credentials

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/qurbanihat.git
cd qurbanihat
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file in the root:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/qurbanihat

BETTER_AUTH_SECRET=your-random-32-char-secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. Generate BETTER_AUTH_SECRET:
```bash
openssl rand -base64 32
```

5. Run development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
qurbanihat/
├── app/
│   ├── animals/
│   │   ├── [id]/
│   │   │   └── page.jsx       # Animal details page
│   │   └── page.jsx           # All animals page
│   ├── login/
│   │   └── page.jsx           # Login page
│   ├── register/
│   │   └── page.jsx           # Register page
│   ├── profile/
│   │   ├── page.jsx           # Profile page
│   │   └── update/
│   │       └── page.jsx       # Update profile page
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js   # Better Auth handler
│   ├── layout.jsx             # Root layout
│   ├── page.jsx               # Home page
│   └── not-found.jsx          # 404 page
├── components/
│   ├── Home/
│   │   ├── HeroSection.jsx
│   │   ├── FeaturedAnimals.jsx
│   │   ├── QurbaniTips.jsx
│   │   ├── TopBreeds.jsx
│   │   └── WhyQurbaniHat.jsx
│   ├── AnimatedCard.jsx       # React Spring card
│   ├── LottieLoader.jsx       # Cow mascot loader
│   ├── Toast.jsx              # Animate.css toast
│   ├── Navbar.jsx
│   └── Footer.jsx
├── context/
│   └── AuthContext.jsx        # Auth state management
├── data/
│   └── animals.js             # Animal data with images
├── lib/
│   ├── auth.js                # Better Auth config
│   └── auth-client.js         # Client-side auth
├── public/
├── .env.local                 # Environment variables
├── next.config.js
├── tailwind.config.js
└── README.md
```

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `BETTER_AUTH_SECRET` | Random secret (min 32 chars) |
| `BETTER_AUTH_URL` | App base URL |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Client-side base URL |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

---

## 🌐 Deployment (Vercel)

1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add all environment variables in Vercel dashboard
4. Update Google OAuth redirect URI:
```
https://your-vercel-url.vercel.app/api/auth/callback/google
```
5. Update `.env` on Vercel:
```
BETTER_AUTH_URL=https://your-vercel-url.vercel.app
NEXT_PUBLIC_BETTER_AUTH_URL=https://your-vercel-url.vercel.app
```

---

## 👤 Author

**Tariqul Islam**
- GitHub: [@Tariqul-stack](https://github.com/Tariqul-stack)

---

## 📄 License

This project is for educational purposes only.
