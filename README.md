# Birei Farm Website

Premium public website for Birei Farm at https://bireifarm.co.ke.

## Stack
- Next.js App Router and React
- TypeScript
- Tailwind CSS v4 import with custom design tokens
- Zod request validation
- Vitest unit tests and Playwright browser tests

## Run locally
1. Install Node.js 22 or newer.
2. Run npm install.
3. Copy .env.example to .env.local.
4. Run npm run dev.
5. Open http://localhost:3000.

## Enquiry email setup
The contact endpoint sends enquiries using the Resend API. Configure these environment variables in .env.local and in the deployment environment:
- RESEND_API_KEY
- CONTACT_TO_EMAIL
- CONTACT_FROM_EMAIL

The sender address must be verified with your email provider. The endpoint returns an error if delivery is not configured; it does not claim an enquiry was delivered when it was not.

## Before production
- Replace all image placeholders with approved farm photographs.
- Confirm the farm's legal name, contact details, location, product catalogue, and availability.
- Review privacy, terms, and cookie pages against actual data practices.
- Add a durable rate limiter or WAF rule for the public enquiry endpoint.
- Configure the real domain, HTTPS, and deployment environment variables.
- Run npm run typecheck, npm run test, and npm run build.

## Current limitations
This is a public marketing website scaffold. It does not include payments, inventory, customer accounts, an admin CMS, or booking functionality.
