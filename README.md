# Galaxy Finder - Star Wars Character Manager Application
![image](https://github.com/user-attachments/assets/5a6913b8-1f8c-480b-8495-969a5409cd94)

This is a responsive React application that allows users to search for Star Wars characters, view their details, and submit a contact form. The application uses React Router for navigation and Material-UI and Tailwind CSS for styling. The app is built to be responsive and works well on mobile devices.

## Prerequisites

Before running the project, ensure you have the following installed on your machine:

- **Node.js**
- **npm or yarn**

## Setup

1. **Clone the Repository**
   
   First, clone the repository to your local machine. Open a terminal and run the following command:
   
   ```bash
   git clone git@github.com:gediminasnn/react-tailwind-material-ui.galaxy-finder.git
   ```

2. **Navigate to the Project Directory**
   
   Change directory to the project root:
   
   ```bash
   cd react-tailwind-material-ui.galaxy-finder
   ```

3. **Prepare the Environment File**
   
   Copy the provided `env.example` file to a new `.env` file and customize it if necessary:
   
   ```bash
   cp env.example .env
   ```
   Ensure there is Starwars Character API Base URL [https://swapi.py4e.com](https://swapi.py4e.com) in the `.env` file.

4. **Install Dependencies**
   
   Install the required dependencies using npm or yarn. Run the following command in your terminal:
   
   ```bash
   npm install
   ```
   or if you're using yarn
   ```bash
   yarn install
   ```

5. **Run the Application**
   
   Start the application in development mode:
   
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn run dev
   ```
   The application should now be running on `http://localhost:5173/`

By completing these steps, you will have fully set up your Star Wars Character Manager Application on your local development environment, ensuring it is ready for further development, testing, or deployment.

## Features

### Home Page
- The homepage provides a brief introduction to the app and highlights the main features such as the character search and contact form. It is the first page users see when they visit the app.
  
  ![image](https://github.com/user-attachments/assets/5a6913b8-1f8c-480b-8495-969a5409cd94)

### Character Search Page
- The search page allows users to search for characters by name.
- Results are displayed in a dropdown, and clicking on a character opens a detailed view.

  ![image](https://github.com/user-attachments/assets/6b9fc234-c021-494a-a1ec-812b4adea365)

### Character Details Page
- Clicking on a character's name opens a new page displaying their details, such as their homeworld and the films they appear in.

  ![image](https://github.com/user-attachments/assets/edc00a7d-370d-4d9d-a9b7-1cd8c2f0c86a)

### Contact Form
- Users can submit their name, email, and message.
- The form includes validation, and successfully submitted forms are stored in `localStorage`.

  ![image](https://github.com/user-attachments/assets/a2001b58-3c6b-43bd-a101-3927463f22b3)

### Navigation
- The app uses React Router for page navigation.
- The navigation bar includes links to Home, Search, and Contact pages.
- Active routes are highlighted in the navigation bar.

  ![image](https://github.com/user-attachments/assets/c52e2aa3-f243-478d-8b05-67e5109160c6)

- **Responsive Layout**: The navigation bar adapts to different screen sizes, ensuring a seamless experience on mobile and desktop devices.

  ![image](https://github.com/user-attachments/assets/5bbf8137-d77e-448c-857b-bb9ba65ac402)

### Responsive Design
- The app is fully responsive, with mobile-first design, and works well on tablet-sized screens as well.

  ![image](https://github.com/user-attachments/assets/0c27d708-21ce-4ff3-80ac-d0319cec5095)

### Bonus Features
- **Typescript**: The app is built with TypeScript for type safety.
- **Loading Spinner**: A loading spinner is displayed while fetching data from the SWAPI.

  ![image](https://github.com/user-attachments/assets/473fdfdd-d5f2-40fc-b4ca-aa954909e4de)

- **i18n**: The app includes internationalization support for different languages.

  ![image](https://github.com/user-attachments/assets/a06da91f-f4a4-4599-b466-4b69ab62b143)

### API Integration

The app fetches character data from the **Star Wars API (SWAPI)**:
- **Base URL**: `https://swapi.py4e.com/api/`

### **Character Search**:

**Request**
```http
GET /api/people/?search=Lu
```
**Response:**
```http
HTTP 200 OK
Content-Type: application/json
Vary: Accept
Allow: GET, HEAD, OPTIONS

{
    "count": 2, 
    "next": null, 
    "previous": null, 
    "results": [
        {
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.py4e.com/api/planets/1/", 
            "films": [
                "https://swapi.py4e.com/api/films/1/", 
                "https://swapi.py4e.com/api/films/2/", 
                "https://swapi.py4e.com/api/films/3/", 
                "https://swapi.py4e.com/api/films/6/", 
                "https://swapi.py4e.com/api/films/7/"
            ], 
            "species": [
                "https://swapi.py4e.com/api/species/1/"
            ], 
            "vehicles": [
                "https://swapi.py4e.com/api/vehicles/14/", 
                "https://swapi.py4e.com/api/vehicles/30/"
            ], 
            "starships": [
                "https://swapi.py4e.com/api/starships/12/", 
                "https://swapi.py4e.com/api/starships/22/"
            ], 
            "created": "2014-12-09T13:50:51.644000Z", 
            "edited": "2014-12-20T21:17:56.891000Z", 
            "url": "https://swapi.py4e.com/api/people/1/"
        },
        ...
    ]
}
```
### Character Details
**Request:**
```http
GET /api/people/64/
```

**Response:**
```http
HTTP 200 OK
Content-Type: application/json
Vary: Accept
Allow: GET, HEAD, OPTIONS

{
    "name": "Luminara Unduli", 
    "height": "170", 
    "mass": "56.2", 
    "hair_color": "black", 
    "skin_color": "yellow", 
    "eye_color": "blue", 
    "birth_year": "58BBY", 
    "gender": "female", 
    "homeworld": "https://swapi.py4e.com/api/planets/51/", 
    "films": [
        "https://swapi.py4e.com/api/films/5/", 
        "https://swapi.py4e.com/api/films/6/"
    ], 
    "species": [
        "https://swapi.py4e.com/api/species/29/"
    ], 
    "vehicles": [], 
    "starships": [], 
    "created": "2014-12-20T16:45:53.668000Z", 
    "edited": "2014-12-20T21:17:50.455000Z", 
    "url": "https://swapi.py4e.com/api/people/64/"
}
```

## Environment Variables

The application requires some environment variables to be set.

-   `COINGECKO_API_TOKEN`: API token for accessing the CoinGecko API.

## License

This project is licensed under the MIT License.

----------

By following this guide, you should be able to set up the Star Wars Character Search and Contact Form application locally. If you encounter any issues, please check the dependencies and ensure that your environment is correctly set up.

Feel free to contribute to the project by submitting pull requests or opening issues.
