# Entain Challange - Movie Library Application

## Overview

This project is a Movie Library application built using React on the frontend and ExpressJS on the backend. The frontend utilizes RTK Query for state management and data fetching, while the backend serves as a middle layer to fetch movie data from the TMDB API. Tailwind CSS is used for styling the frontend

## Technologies Used

-   **Frontend**: React, TypeScript, RTK Query, Tailwind CSS
-   **Backend**: ExpressJS, Axios
-   **State Management**: Redux Toolkit (RTK Query)
-   **Styling**: Tailwind CSS

## Project Structure

### Backend (ExpressJS)

-   **`index.js`**: The main file for the Express server, handles API routes for fetching popular movies and searching movies by title
-   **`.env.local`**: Contains the TMDB API key (kept out of version control)

### Frontend (React + RTK Query + TailwindCSS)

-   **`store/index.ts`**: Setup of the Redux store, integrating RTK Query for data fetching and caching.
-   **`features/moviesApi.ts`**: Defines API endpoints using RTK Query to fetch movie data from the backend
-   **`components/`**: Contains React components like `MovieList` and `SearchBar` that handle displaying movies and searching for them
-   **`App.tsx`**: Main application component that ties everything together
-   **`tailwind.config.js`**: Configuration for Tailwind CSS

## Key Decisions & Focus Areas

### 1. React with TypeScript

-   **Why**: TypeScript provides static typing, which helps in catching errors during development and improves code quality

### 2. RTK Query for State Management and Data Fetching

-   **Why**: RTK Query simplifies data fetching, caching, and synchronization with the component state. It integrates seamlessly with Redux and allows for efficient data management. And yes, it was reccomended to use it

### 3. ExpressJS as the Backend

-   **Why**: I'm not really proficient with Nestjs and I'm still on my way to transitioning as a fullstack developer, so I preferred to use ExpressJS to not mess it up

### 4. Tailwind CSS for Styling

-   **Why**: Even though Material UI and Styled Components were reccomended, I preferred to use Tailwind CSS for the simplicity and ease of use. And because it was way faster to build the UI

### 5. Environment Variables

-   **Why**: Sensitive data like the TMDB API key is stored in environment variables to keep it secure and out of the version control system. This ensures that the application can be easily configured for different environments (development, production, etc.) without exposing sensitive information

## Installation & Setup

**Clone the repository:**

    ```bash
    git clone <repository-url>
    cd entain-test
    ```

### Backend:

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

1. **Install dependencies:**

    ```bash
    npm install
    ```

1. **Set up environment variables:**
   Create a `.env` file in the root directory and add your TMDB API key

    ```
    TMDB_API_KEY=your_api_key_here
    ```

1. **Run the backend server:**
    ```bash
    npm start
    ```
    The server will start on `http://localhost:6060` by default.

### Frontend:

1. **Navigate to the frontend directory:**

    ```bash
    cd ../frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the frontend development server:**

    ```bash
    npm start
    ```

    The React app will start on `http://localhost:3000`

4. **Access the application:**
   Open your browser and go to `http://localhost:3000` to view the Movie Library application

### Update:

    You can now launch the app concurrently, in root folder run

    ```bash
    npm run start
    ```

## Usage

-   The home page displays a list of popular movies
-   Use the search bar to find movies by title
-   Click on a movie to view more details
