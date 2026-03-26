# MNM Facilitech Private Limited - Business Website

A full-stack business website for **MNM Facilitech Private Limited**, providing facility management, housekeeping, corporate office support, contract staff management, and greenfield office setup services in Hyderabad.

## Company Details

- **Name:** MNM Facilitech Private Limited
- **GSTIN:** 36AATCM3620J1Z5
- **Type:** Private Limited Company
- **Status:** Active
- **Address:** SBRS CV Towers, Flat No 203, 2nd Floor, HITEC City Main Road, Hyderabad, Telangana - 500081
- **Phone:** +91 7672052402
- **Email:** business@mnmfacilitech.com

## Project Structure

```
mnm-facilitech-website/
├── frontend/           # React + Vite + Tailwind CSS
└── backend/            # Node.js + Express + MongoDB
```

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React Icons
- React CountUp

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS
- dotenv

## Pages

- **Home** - Hero section, stats, services, industries, testimonials, contact form
- **About** - Company info, mission, vision, trust markers
- **Services** - All core services with cards
- **Industries** - Target industries and client segments
- **Contact** - Contact form with backend API
- **Careers** - Job openings and application info

## Setup Instructions

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/mnm_facilitech
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:5000
```

## Key Metrics

- 50+ sites managed
- 95% client retention
- 3X faster onboarding
- 99% payroll accuracy
- 30% HR processing time reduction

## License

All rights reserved - MNM Facilitech Private Limited
