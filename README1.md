# Syntax


### Christi & Dale: Frontend Lead (React Specialist)
**Responsibilities:**
- Build React components for each section: Home, About, Music, Shows, Merch.
- Implement the homepage layout with featured album and upcoming shows, as per the wireframe.
- Create the Discography page with album listings and link them to external music platforms.
- Ensure all pages have consistent navigation and are linked properly.
**Connectivity:**
- Collaborate with Developer 2 to apply the styling to React components.
- Work with Developer 3 to fetch and display data (like show dates, album details) from the backend.
- Regular check-ins with Developer 5 to discuss deployment-related aspects and potential frontend adjustments for Render.
### Dale & Christi: UI/UX and Styling Expert
**Responsibilities:**
- Design the site's aesthetic, focusing on a music-themed look that resonates with the band's style.
- Implement CSS-in-JS for dynamic styling of the About section, with individual band member profiles.
- Ensure the Merch page is visually engaging and easy to navigate, highlighting products effectively.
**Connectivity:**
- Provide the frontend (Developer 1) with necessary design elements (images, icons, fonts).
- Coordinate with Developer 3 to understand any specific functional requirements that might impact the UI/UX.
### Derek: Backend Lead (Node.js/Express.js Specialist)
**Responsibilities:**
- Set up the Express.js server to manage API requests and responses.
- Implement GraphQL for handling data related to shows, discography, and merch.
- Integrate JWT authentication for a potential admin section where band members can update show dates or merch items.
**Connectivity:**
- Work closely with Developer 4 to ensure the database aligns with the data structure required by the frontend.
- Regularly update Developer 1 with API endpoints and data schema for proper frontend integration.
### Cimmaron: Database Manager (MongoDB/Mongoose Expert)
**Responsibilities:**
- Design schemas in MongoDB for storing band member information, discography details, show dates, and merchandise.
- Ensure data integrity and efficient querying for the Shows page to dynamically list upcoming events.
- Aid in setting up MongoDB for cloud access, possibly using MongoDB Atlas for easier management.
**Connectivity:**
- Collaborate with Developer 3 to provide necessary data endpoints and structures for backend queries.
- Keep Developers 1 and 2 informed about the structure and limitations of the data, which may affect frontend display and design.
### Bosh: Security and Deployment Specialist
**Responsibilities:**
- Focus on securing the website's data transactions and user authentication processes.
- Set up the project on Render, ensuring environment configurations are properly managed.
- Implement continuous deployment strategies for streamlined updates and maintenance.
**Connectivity:**
- Coordinate with Developer 3 to implement security measures for server and API.
- Work with Developers 1 and 2 to ensure the frontend is optimized for deployment on Render and meets performance criteria.
- Guide the team through the deployment process, handling any platform-specific requirements or constraints. (edited) 

# Syntax 🎵 Website Wireframe

## Home Page
-------------------------------------------------------------
| Syntax 🎵                                                 |
|-----------------------------------------------------------|
| [Home] [About] [Discography] [Shows] [Merch]               |
|-----------------------------------------------------------|
|                        🌟 HOME PAGE                        |
|-----------------------------------------------------------|
|                 Welcome to Syntax! 🎤                     |
|-----------------------------------------------------------|
|                  Featured Album 🎧                        |
| [Album Cover]                                              |
| [Listen Now]                                               |
|-----------------------------------------------------------|
|                   Upcoming Shows 📅                       |
| [Show 1] [Show 2] [Show 3]                                |
|-----------------------------------------------------------|
|                  Latest Merchandise 👕                    |
| [Merch 1] [Merch 2] [Merch 3]                             |
-------------------------------------------------------------

## About Page
-------------------------------------------------------------
| Syntax 🎵                                                 |
|-----------------------------------------------------------|
| [Home] [About] [Discography] [Shows] [Merch]               |
|-----------------------------------------------------------|
|                      🎙️ ABOUT US                          |
|-----------------------------------------------------------|
|                      Band History                         |
| - Formation                                               |
| - Milestones                                              |
| - Philosophy                                               |
|-----------------------------------------------------------|
|                      Band Members                         |
| Member 1: 🎸 Guitarist                                    |
| Member 2: 🥁 Drummer                                      |
| [More Members...]                                         |
-------------------------------------------------------------

## Discography Page
-------------------------------------------------------------
| Syntax 🎵                                                 |
|-----------------------------------------------------------|
| [Home] [About] [Discography] [Shows] [Merch]               |
|-----------------------------------------------------------|
|                    🎼 DISCOGRAPHY                         |
|-----------------------------------------------------------|
| [Album 1]                                                 |
| - Year                                                    |
| - Songs                                                   |
| - [Listen]                                                |
|-----------------------------------------------------------|
| [Album 2]                                                 |
| - Year                                                    |
| - Songs                                                   |
| - [Listen]                                                |
|-----------------------------------------------------------|
| [More Albums...]                                          |
-------------------------------------------------------------

## Shows Page
-------------------------------------------------------------
| Syntax 🎵                                                 |
|-----------------------------------------------------------|
| [Home] [About] [Discography] [Shows] [Merch]               |
|-----------------------------------------------------------|
|                     📆 SHOWS                               |
|-----------------------------------------------------------|
| [Upcoming Show 1]                                         |
| - Date                                                    |
| - Venue                                                   |
| - [Buy Tickets]                                           |
|-----------------------------------------------------------|
| [Upcoming Show 2]                                         |
| - Date                                                    |
| - Venue                                                   |
| - [Buy Tickets]                                           |
|-----------------------------------------------------------|
| [View More Shows...]                                      |
-------------------------------------------------------------

## Merchandise Page
-------------------------------------------------------------
| Syntax 🎵                                                 |
|-----------------------------------------------------------|
| [Home] [About] [Discography] [Shows] [Merch]               |
|-----------------------------------------------------------|
|                      🛍️ MERCH                             |
|-----------------------------------------------------------|
| [Item 1]                                                  |
| - Description                                             |
| - Price                                                   |
| - [Add to Cart]                                           |
|-----------------------------------------------------------|
| [Item 2]                                                  |
| - Description                                             |
| - Price                                                   |
| - [Add to Cart]                                           |
|-----------------------------------------------------------|
| [More Merch...]                                           |
-------------------------------------------------------------


# Local HTTPS Setup for Development
Introduction
To enhance the security of our local development environment, we are introducing HTTPS. This guide will walk you through the process of generating your own SSL certificates and configuring your environment to use them.

Prerequisites
Basic understanding of command-line operations.
Administrative access to your computer.
Steps
Step 1: Install OpenSSL
OpenSSL is a software library used to create the SSL certificates. Follow these steps to install it:

Download OpenSSL:

Visit the OpenSSL binaries page provided by Shining Light Productions: Win32/Win64 OpenSSL.
Download the appropriate installer for your system (Win32 or Win64, depending on your Windows version).
Choose the "Light" version unless you have specific needs for the full version.
Install OpenSSL:

Run the downloaded installer.
Follow the installation instructions. Install it in the default directory suggested by the installer.
Select the option to "Copy OpenSSL DLLs to the Windows system directory" or similar.
Verify Installation:

After installation, open Command Prompt and type openssl version.
If you see version information, it's installed correctly. If not, proceed to the next section.
Step 2: Manually Add OpenSSL to PATH
If OpenSSL isn't recognized in the Command Prompt, you'll need to add it to your system PATH:

Locate OpenSSL Installation:

It's typically installed in C:\Program Files\OpenSSL-Win64 or C:\Program Files (x86)\OpenSSL-Win32.
Add to System PATH:

Right-click on 'This PC' or 'Computer' on the desktop or File Explorer, then click 'Properties'.
Click 'Advanced system settings'.
In the System Properties window, click on the 'Environment Variables' button.
Under 'System variables', find and select the 'Path' variable, then click 'Edit'.
Click 'New' and add the path to the OpenSSL 'bin' directory (e.g., C:\Program Files\OpenSSL-Win64\bin).
Click 'OK' to save and close all dialogs.
Restart Command Prompt and run openssl version to confirm it's now recognized.

Step 3: Generate SSL Certificates
Open Command Prompt and navigate to your project's root directory.
Create a 'certs' Folder in the root directory:
bash
Copy code
mkdir certs
cd certs
Generate Certificates:
csharp
Copy code
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
Fill in the requested information. For 'Common Name', use localhost.
Step 4: Update Your Local Server Configuration
Modify your server.js file to reference these certificates for HTTPS. Your development team lead should provide the specific code changes.
Step 5: Update .gitignore
Ensure the certs folder is listed in your project's .gitignore to prevent these sensitive files from being uploaded to the repository.
Troubleshooting
If you encounter issues, verify each step, especially the OpenSSL installation and PATH configuration. For further assistance, reach out to your team lead or a team member familiar with the process.

Feel free to customize this guide to better fit your team's environment and level of expertise. The goal is to make the setup process as straightforward as possible, ensuring that all team members can configure their local environments without running into major issues.