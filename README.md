# Rajesh Chowke — Junior Full‑Stack Portfolio

A portfolio repo showcasing a full‑stack CRUD app I built to demonstrate frontend, backend, database, testing, and deployment skills — targeted for junior/full‑stack roles.

## What this demonstrates
- Role targeted: Junior Full‑Stack Engineer
- Top skills: React, Node.js, Express, PostgreSQL, Docker, GitHub Actions
- Key learnings: REST API design, database migrations, authentication, automated tests, CI/CD deployment

## Project overview
This repo contains "CRUD App", a simple product management application that supports signup/login, create/read/update/delete of products, and search/filtering. I built the frontend (React) and backend (Node/Express) and deployed the app to Vercel/Heroku.

## Tech stack
- Frontend: React, React Router, Tailwind CSS
- Backend: Node.js, Express
- Database: PostgreSQL (via Prisma/knex)
- DevOps / CI: Docker, GitHub Actions
- Testing: Jest, React Testing Library, Supertest

## Getting started (run locally)
1. git clone https://github.com/rajeshchowke4/first-job-portfolio.git
2. cd first-job-portfolio
3. npm install
4. cp .env.example .env  # set DB and JWT secrets
5. npm run dev
6. Open http://localhost:3000

## Demo
- Live demo: https://your-demo-url.example.com

## Screenshots
![App screenshot](./assets/screenshot.png)

## Architecture & design decisions
I used a REST API with token-based auth for simplicity and portability. The frontend is a single-page React app so the UI is responsive and fast; the backend includes validation and tests to ensure data integrity.

## Tests & CI
- Unit and integration tests are in /tests and run with `npm test`.
- A GitHub Actions workflow runs tests on every push to main.

## What I learned
- Building an end-to-end app strengthens full-stack fundamentals.
- Importance of well-documented setup and automated tests for maintainability.

## Next improvements
- Add pagination, role-based access, and E2E tests (Cypress).
- Improve deployment with Docker + Kubernetes for production parity.

## About me / Contact
- Rajesh Chowke — Aspiring Junior Full‑Stack Engineer
- Email: rajeshchouke4@example.com
- LinkedIn: https://linkedin.com/in/rajeshchowke
- Resume: ./resume.pdf

## License
MIT
