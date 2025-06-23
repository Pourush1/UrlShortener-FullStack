# 🔗 URL Shortener - Full Stack Application

A modern, full-stack URL shortener application built with Next.js frontend and Node.js backend. Transform long URLs into short, shareable links with analytics and redirect functionality.

## ✨ Features

- **🎯 URL Shortening**: Convert long URLs into short, memorable links
- **🔄 Smart Redirects**: Automatic redirection to original URLs
- **💾 Persistent Storage**: MongoDB database for reliable data storage
- **🎨 Modern UI**: Clean, responsive interface built with Next.js and Tailwind CSS
- **⚡ Fast Performance**: Optimized for speed and scalability
- **🔐 Duplicate Prevention**: Automatically detects and reuses existing shortened URLs
- **📱 Mobile Responsive**: Works seamlessly across all devices

## 🏗️ Architecture

```
UrlShortener-FullStack/
├── urlshortener-ui/          # Next.js Frontend
│   ├── app/                  # App Router pages
│   ├── public/               # Static assets
│   └── package.json          # Frontend dependencies
├── UrlShortener-API/         # Node.js Backend
│   ├── controller/           # API controllers
│   ├── models/               # MongoDB models
│   ├── config/               # Configuration files
│   └── package.json          # Backend dependencies
└── README.md                 # This file
```

## 🛠️ Tech Stack

### Frontend

- **Next.js 15.3.4** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type safety

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Nanoid** - Unique ID generation
- **Mongoose** - MongoDB object modeling

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/UrlShortener-FullStack.git
   cd UrlShortener-FullStack
   ```

2. **Setup Backend**

   ```bash
   cd UrlShortener-API
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd../urlshortener-ui
   npm install
   ```

### Configuration

1. **Backend Configuration**

   ```bash
   cd UrlShortener-API
   ```

   Create `config/default.json`:

   ```json
   {
     "mongoURI": "your_mongodb_connection_string",
     "baseUrl": "http://localhost:5001"
   }
   ```

   Or create `.env` file (recommended):

   ```env
   MONGO_URI=your_mongodb_connection_string
   BASE_URL=http://localhost:5001
   PORT=5001
   ```

2. **Frontend Configuration**

   ```bash
   cd ../urlshortener-ui
   ```

   Create `.env.local`:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5001
   ```

### Running the Application

1. **Start Backend Server**

   ```bash
   cd UrlShortener-API
   npm run dev
   ```

   Backend runs on `http://localhost:5001`

2. **Start Frontend Server**
   ```bash
   cd ../urlshortener-ui
   npm run dev
   ```
   Frontend runs on `http://localhost:3000`

## 📚 API Endpoints

### POST `/api/url/shorten`

Create a shortened URL

**Request:**

```json
{
  "longUrl": "https://example.com/very/long/url"
}
```

**Response:**

```json
{
  "shortUrlCode": "abc123",
  "longUrl": "https://example.com/very/long/url",
  "shortUrl": "http://localhost:5001/api/abc123",
  "date": "2024-01-01T00:00:00.000Z"
}
```

### GET `/api/:shortUrlCode`

Redirect to original URL

**Example:**

```
GET http://localhost:5001/api/abc123
→ Redirects to original URL
```

## 🎯 Usage

1. **Visit the frontend** at `http://localhost:3000`
2. **Enter a long URL** in the input field
3. **Click "Shorten URL"** to generate a short link
4. **Copy and share** the shortened URL
5. **Visit the short URL** to redirect to the original

## 📁 Project Structure

### Backend (UrlShortener-API)

```
UrlShortener-API/
├── controller/
│   ├── createShortUrl.js    # URL shortening logic
│   └── redirectToLongUrl.js # URL redirection logic
├── models/
│   └── Url.js               # MongoDB schema
├── config/
│   └── default.json         # Configuration
├── routes.js                # API routes
├── index.js                 # Entry point
└── package.json
```

### Frontend (urlshortener-ui)

```
urlshortener-ui/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── public/                  # Static assets
├── next.config.ts           # Next.js config
└── package.json
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ Star this repository if you found it helpful!
