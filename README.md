# vasilkoff-info

An open-source ReactJS website designed to provide general information about Vasilkoff Ltd ([vasilkoff.com](https://vasilkoff.com)) and assist users in obtaining general estimations for software development projects. The platform includes an AI-powered chat feature that not only answers common questions but also generates detailed software product estimation documents based on templates used by Vasilkoff Ltd.

## Purpose
The primary goal of this project is to streamline the estimation process for software development by:

1. **Answering General Questions:**
   Providing users with accurate and relevant information about Vasilkoff Ltd.

2. **Generating Software Development Estimations:**
   Allowing users to request comprehensive estimation documents that outline time and material costs for software projects. These documents will follow templates accepted by Vasilkoff Ltd.

## Features
- **AI-Powered Chat:** Powered by Llama 3 via Cloudflare Workers, this feature provides real-time answers and estimation services.
- **Customizable Templates:** Use Markdown (MD) to manage estimation templates, with support for dynamic placeholders (potentially using Mustache.js).
- **PDF Generation:** Convert Markdown templates to HTML and then to PDF for shareable, professional documents.
- **Auto-Deployment:** Utilize GitHub Actions for continuous integration and deployment.

## Components
The project is built on modern web technologies, including:

### 1. **Frontend**
- **ReactJS:** For creating a responsive and interactive user interface.
- **Tailwind CSS:** For styling the website with utility-first CSS.
- **Firebase Hosting:** To host the frontend and deliver a fast, secure user experience.

### 2. **Backend**
- **Firebase Functions:**
  - Handle chat logs and backend processing.
  - Provide API endpoints for AI-powered chat and document generation.
  - Manage the dynamic generation of time-material estimation documents.

### 3. **Markdown and Document Processing**
- **Markdown (MD):** To create and manage content templates for estimations.
- **HTML to PDF Conversion:** Generate polished estimation documents from Markdown templates.

### 4. **AI Integration**
- **Cloudflare Workers with Llama 3:**
  - Enable AI-powered responses in the chat.
  - Assist in generating context-aware estimation documents.

## Deployment
This project is designed for continuous deployment using:
- **Firebase Hosting:** For deploying the frontend.
- **GitHub Actions:** For automated builds and deployments to Firebase Hosting.

## License
This project is licensed under the [GPL-3.0 License](LICENSE). Any modifications or derivatives must also remain open-source and include attribution to the original author.
