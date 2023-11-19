This project is a blog application built using Next.js as the frontend framework and Sanity.io as the Headless Content Management System (CMS). It allows admins to create, manage, and display blog posts and other content efficiently.

## Key Features

- **Headless CMS Integration:** Leverages Sanity.io, a headless CMS, for seamless content creation and management separate from presentation concerns.
- **Admin Interface:** Provides a robust administrative interface through Sanity Studio, allowing easy creation, editing, and management of blog posts and content.
- **Dynamic Content Rendering:** Renders dynamic content fetched from Sanity.io, such as blog posts and tutorials, on the Next.js frontend, ensuring up-to-date and engaging user experiences.
- **Static Site Generation (SSG):** Utilizes Next.js's SSG capabilities to pre-render pages like About and Contact, optimizing performance and ensuring faster load times.
- **Dynamic Pages:** Includes dynamically generated pages for About and Contact on the Next.js frontend, enhancing the overall user experience and content accessibility.

## Prerequisite

Create a Sanity.io Account: To get started, sign up for a Sanity.io account here if you haven't already. Follow the documentation to set up your project and obtain necessary credentials.

## Getting Started

**Clone the Repository**

Clone this repository to your local machine using the following command:

```bash
git clone <repository-url>
cd project-directory
```

**Install Dependencies**

Install project dependencies using npm:

```bash
npm install
```

**Run the Application Locally**

Start the development server to run the application on your local machine:

```bash
npm run dev
```

The application will be accessible at http://localhost:3000.

**Managing Content**

Access the /studio route to manage content using Sanity Studio.
Create, update, or delete blog posts, tutorials, and pages within the Sanity Studio dashboard.

## Project Structure

### Frontend Segmentation

The frontend structure is organized into different segments for visitor-facing content and administrative functions by using **route grouping** without affecting the URL path structure.

app/: App Router directory that contains all the routes and layouts for various parts of the application.

- (site)/page.tsx: Home page displaying the hero section, recent posts, and tutorials for visitors.
- (site)[slug]/page.tsx: Dynamic pages for links like About and Contact accessible from the header.
- (site)posts/[slug]/page.tsx: Dynamic pages for individual posts.
- (site)tutorials/[slug]/page.tsx: Dynamic pages for individual tutorials.
- (studio)/admin/[[...index]]/page.tsx: Sanity studio dashboard for content management separate from visitor-facing URLs.

### Sanity Configuration

The configuration and schema definitions for Sanity.io are structured as follows:

- sanity/schemas/: Contains schema definitions for different content types.

  - post-schema.ts: Schema definition for blog post content type.
  - tutorial-schema.ts: Schema definition for tutorial content type.
  - pages-schema.ts: Schema definatition for dynamic pages

- sanity/sanity-utils.ts: Utility functions using GROQ queries to fetch posts, tutorials, and pages from Sanity.
- sanity.config.ts: Configuration file for setting up Sanity Studio and defining content schemas.

## Key concepts used

### Embedding Sanity Studio in Next.js:

Sanity Studio offers a user-friendly environment for content creation, editing, and collaborative work. To integrate Sanity Studio into a Next.js application, you'll need to include it as part of your Next.js project.

To install Sanity Client within Next.js, use the following command:

```bash
npm create sanity@latest
```

Upon running this command, you'll be prompted to log in to your Sanity account. If you're already logged in, it will authenticate automatically.

After the authentication process, a prompt for Sanity setup will appear. The setup is relatively straightforward and default. Essential settings to consider for embedding Sanity Studio in Next.js include:

- Adding configuration files for a Sanity project in the Next.js folder: Yes
- Embedding Sanity Studio: Yes
- Using the app router: Yes

### Schema Creation:

Developing structured schemas within Sanity.io to define content types, fields, and their relationships, ensuring organized data storage.

### GROQ Query Language

Utilizing GROQ (Graph-Relational Object Queries) within the application to retrieve specific data from the Sanity.io database, allowing precise content retrieval.

### Route Revalidation

Employing route revalidation strategies within Next.js to update and revalidate dynamic routes upon changes in content, ensuring up-to-date and efficient data presentation to users.
