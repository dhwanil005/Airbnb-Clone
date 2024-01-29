
# Full Stack Airbnb Clone with Next.js 13

This repository contains a comprehensive Full Stack Airbnb Clone, leveraging the power of Next.js 13 along with a suite of modern technologies and design patterns. This project is ideal for those looking to understand full-stack development with React, Tailwind, Prisma, MongoDB, and NextAuth.

## Features

- **Tailwind Design**: Stylish UI/UX design using Tailwind CSS.
- **Tailwind Animations and Effects**: Enhance user experience with responsive animations and effects.
- **Full Responsiveness**: Adaptive design for various devices and screen sizes.
- **Authentication**: Includes credential authentication, Google authentication, and GitHub authentication.
- **Image Upload**: Utilizes Cloudinary CDN for efficient image management.
- **Client Form Validation**: Implemented with `react-hook-form`.
- **Server Error Handling**: Robust error management using `react-toast`.
- **Calendars**: Integrated with `react-date-range` for date selection.
- **Page Loading State**: Elegantly handle the loading state of pages.
- **Page Empty State**: Manage empty states for a cleaner user experience.
- **Booking / Reservation System**: Comprehensive system for handling guest and owner reservations and cancellations.
- **Property Management**: Functionalities to create and delete properties.
- **Advanced Search Algorithm**: Extensive search features including filters for category, date range, map location, guest count, and more.
- **Favorites System**: Enables users to favorite properties.
- **Shareable URL Filters**: Share search results with custom URL parameters.

## Prerequisites

- Node version 14.x

## Getting Started

### Deployment Link
```
https://project-nextjs-mauve.vercel.app/
```
### Cloning the Repository

```
git clone https://github.com/dhwanil005/Airbnb-Clone.git 
```

### Install Packages

```
npm i
```

### Setup .env File

Create a `.env` file in the root directory and add the following variables:

```
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```
npx prisma db push
```

### Start the App

```
npm run dev
```

## Available Commands

Use `npm run [command]` to execute available commands.

| Command | Description                                    |
|---------|------------------------------------------------|
| dev     | Starts a development instance of the app.      |

