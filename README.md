Clean Architecture Next.js Project
Project Structure

src/
├── app/ # Next.js App Router
│ └── (routes)/ # App routes
├── core/ # Enterprise Business Rules
│ ├── domain/ # Domain models & interfaces
│ └── usecases/ # Application business rules
├── infrastructure/ # External interfaces & tools
│ ├── api/ # API configurations
│ ├── context/ # React Context providers
│ ├── store/ # Zustand stores
│ └── i18n/ # i18next configurations
├── interface/ # Interface Adapters
│ ├── controllers/ # UI Controllers
│ ├── hooks/ # Custom React hooks
│ ├── repositories/ # Data repositories
│ └── services/ # External services
└── presentation/ # UI Layer
├── components/ # React components
│ ├── ui/ # shadcn/ui components
│ └── shared/ # Shared components
├── layouts/ # Layout components
└── styles/ # Global styles

Tech Stack
Framework: Next.js 15
Language: TypeScript
Styling: Tailwind CSS
UI Components: shadcn/ui + Radix UI
State Management:
Zustand (Global State)
React Context (UI State)
TanStack Query (Server State)
Form Handling: react-hook-form + zod
API Client: Axios
Real-time: Socket.IO
Internationalization: i18next
Getting Started
Prerequisites
Node.js 18+
Yarn

Installation

# Clone the repository

git clone [repository-url]

# Install dependencies

yarn install

# Set up environment variables

cp .env.example .env.local

# Start development server

yarn dev

Available Scripts

# Development

yarn dev # Start development server
yarn lint # Run ESLint
yarn lint:fix # Fix ESLint errors
yarn format # Format code with Prettier

# Production

yarn build # Build for production
yarn start # Start production server

Architecture Overview
Core Layer
Contains business logic and domain models. Independent of external frameworks.

Infrastructure Layer
Handles external concerns like API calls, state management, and third-party integrations.

Interface Layer
Adapts data between core business logic and external interfaces.

Presentation Layer
Contains all UI components and layouts.

Code Style
ESLint for code linting
Prettier for code formatting
TypeScript for type safety
Contributing
Follow the existing code structure
Use appropriate layer for new features
Write clean, maintainable code
Add proper TypeScript types
Test your changes
Environment Variables
