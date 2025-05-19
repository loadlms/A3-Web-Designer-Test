# A3 Web Designer Test

This project uses Astro and TinaCMS to create and manage dynamic pages based on templates.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file in the root directory with:
```
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
```

3. Generate the initial pages:
```bash
node scripts/generate-pages.js
```

4. Sincronize o Astro (para Content Collections e tipagem):
```bash
npx astro sync
```

5. Start the development server:
```bash
npm run dev
```

6. Access the TinaCMS admin interface at `http://localhost:3000/admin`

## Project Structure

- `src/content/template1/` - Content for template 1 pages
- `src/content/template2/` - Content for template 2 pages
- `src/layouts/` - Layout components for each template
- `src/pages/` - Dynamic routes for the templates
- `tina/` - TinaCMS configuration
- `scripts/` - Utility scripts for page generation

## Features

- Two distinct templates with different layouts
- 1000 variations of each template
- Dynamic routing with slugs
- Content management through TinaCMS
- Faker.js integration for generating unique content 