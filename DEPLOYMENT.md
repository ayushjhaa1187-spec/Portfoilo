# Deployment Guide

This guide explains how to deploy the Portfolio application to Render.

## Prerequisites

- A Render account.
- A GitHub repository connected to Render.
- A MongoDB database (e.g., MongoDB Atlas).

## Deployment Options

### Option 1: Using Render Blueprint (Recommended)

This method deploys both the backend and frontend as configured services.

1.  Push the code to your GitHub repository.
2.  In Render Dashboard, go to **Blueprints**.
3.  Click **New Blueprint Instance**.
4.  Connect your repository.
5.  Render will detect `render.yaml` and prompt you to create the services.
6.  You will need to provide the `MONGO_URI` environment variable for the backend service.

### Option 2: Manual Deployment (Backend Only)

If you already have a service (e.g., `LLM_PEXPERIMENT`) configured as a Docker service:

1.  Ensure the service is linked to this repository.
2.  Set the **Environment** to `Docker`.
3.  Set the **Dockerfile Path** to `./Dockerfile`.
4.  Set the **Docker Context** to `.`.
5.  Add the following environment variables:
    -   `MONGO_URI`: Your MongoDB connection string.
    -   `PORT`: `5000` (default).
    -   `NODE_ENV`: `production`.

### Option 3: Manual Deployment (Frontend Only)

1.  Create a **Web Service** or **Static Site** on Render.
2.  Connect your repository.
3.  Set **Root Directory** to `portfolio/client`.
4.  Set **Build Command** to `npm install; npm run build`.
5.  Set **Start Command** to `npm start`.
6.  Add `NEXT_PUBLIC_API_URL` pointing to your deployed backend URL.

## Troubleshooting

-   **"failed to read dockerfile"**: Ensure the `Dockerfile` is in the root of the repository as created by this update.
-   **Database Connection Error**: Verify `MONGO_URI` is correct and the IP address of the Render service is whitelisted in MongoDB Atlas (allow access from anywhere `0.0.0.0/0` is easiest but less secure).
