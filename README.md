### 1. New repo

Clone and branch template.

### 2. Get a new Sanity project ID

From the [Sanity.io Manage](https://sanity.io/manage) dashboard, create a new project. (make sure to use the same log in through out sanity)

### 3.

go to settings navigate to API settings then create token, select "developer". Make sure you save that token somewhere because you will not be able to access it later.

### 4. Create folder

go to your VS code and in the main folder create a .env.local file

### 5. Update environment variables

paste the following in the .env.local folder and update the variables:

< added sanity studio and next.js

SANITY_STUDIO_BASE_URL="http://localhost:3333"

SANITY_STUDIO_SANITY_PROJECT_ID="you can find your Id at the top of your dashboard inside your project"

SANITY_STUDIO_SANITY_DATASET="production"

SANITY_API_READ_TOKEN="you can find your token that you made from your app settings"

NEXT_PUBLIC_SANITY_PROJECT_ID="put your project ID here"

NEXT_PUBLIC_SANITY_DATASET="production"

### 6. npm installs and installing Sanity

open your terminal and make sure your navigated into the main folder.

Windows and Mac:

npm install
<! before you copy and paste number 2, make sure you add the correct project ID from your .env.local file and add it to where it says (projectID)

npx sanity@latest logout && npm create sanity@latest -- --project (projectID) --dataset production --template clean -- typescript --output-path studio-techs
you will be asked to login make sure to use the same login as the dashboard.

###IMPORTANT!!!! follow exactly!!! your terminal will ask the following and answer with the following:
? would you like to add configuration files for a Sanity project in this Next.s folder? Yes

? do you want to use Typescript? Yes

? What route do you want to use for the Studio? /studio

? File ... already exists. DO you want to overwrite it? No

? File ... already exists. DO you want to overwrite it? No

? File ... already exists. DO you want to overwrite it? No

? Select project template to use: Clean project with no predefined schema types

? File ... already exists. DO you want to overwrite it? No

? File ... already exists. DO you want to overwrite it? No

? File ... already exists. DO you want to overwrite it? No

? File ... already exists. DO you want to overwrite it? No

? File ... already exists. DO you want to overwrite it? No

? File ... already exists. DO you want to overwrite it? No

? File ... already exists. DO you want to overwrite it? No

### Mac:

3. sudo npm install -g @sanity/cli

<! do NOT select create new dataset... SELECT production

### windows:

3. npm install -g @sanity/cli
   <! do NOT select create new dataset... SELECT production

### 6. Run

<! this will run the next JS

open a second terminal, make sure you're in the main folder.
input:
npm run dev

<! this will run the backend Sanity content studio

in the original terminal input:
sanity start

You should be up and ready to design and add content.

---

### 5. Set up deployments

Install either of the following plugins to add a widget to your Studio Dashboard:

- Vercel: [`sanity-plugin-dashboard-widget-vercel`](https://www.sanity.io/plugins/vercel-dashboard-widget)
- Netlify: [`sanity-plugin-dashboard-widget-netlify`](https://www.sanity.io/plugins/sanity-plugin-dashboard-widget-netlify)

### 6. Customize

Adjust frontend styles, edit/add Sanity schema and modules, and more.

## External References

- [The official Sanity toolkit for Next.js](https://www.sanity.io/plugins/next-sanity)
- [`sanity-io/next-sanity` README](https://github.com/sanity-io/next-sanity#readme)
- [Visual Editing with Next.js App Router and Sanity Studio](https://www.sanity.io/guides/nextjs-app-router-live-preview)

## How to Support

- [🧡 Donations](https://sanitypress.dev/how-to-support)
- [🩷 Sponsor on GitHub](https://github.com/sponsors/nuotsu)
- [☕ Buy me a coffee](https://buymeacoffee.com/nuotsu)
