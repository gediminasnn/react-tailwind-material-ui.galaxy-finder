# Galaxy Finder - Star Wars Character Manager Application
![image](https://github.com/user-attachments/assets/ea06c383-2379-48d9-8440-c29be42ac734)

This is a responsive React application that allows users to search for Star Wars characters, create custom ones, view their details, and submit a contact form. The application uses React Router for navigation and Material-UI and Tailwind CSS for styling. The app is built to be responsive and works well on mobile devices.

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

### Navigation
- The app uses React Router for page navigation.
- The navigation bar includes links to Home, Search, and Contact pages.
- Active routes are highlighted in the navigation bar.

  ![image](https://github.com/user-attachments/assets/1d1dbf77-be55-4931-8522-2d7c044ac66c)

- **Responsive Layout**: The navigation bar adapts to different screen sizes, ensuring a seamless experience on mobile and desktop devices.

  ![image](https://github.com/user-attachments/assets/fb45893f-2f3f-4b3c-9ac5-a1c1dce3b381)

### Home Page
- The homepage provides a brief introduction to the app and highlights the main features such as the character search and contact form. It is the first page users see when they visit the app.
  
  ![image](https://github.com/user-attachments/assets/ea06c383-2379-48d9-8440-c29be42ac734)

### Character Search Page
- The search page allows users to search for characters by name.
- Results are displayed in a dropdown, and clicking on a character opens a detailed view.

  ![image](https://github.com/user-attachments/assets/16a42e2f-2f78-49c4-a3d5-5992eada098a)

### Character Details Page
- Clicking on a character's name opens a new page displaying their details, such as their homeworld and the films they appear in.

  ![image](https://github.com/user-attachments/assets/49329be6-a381-42ab-a30f-46e892bbba63)

- Clicking the "Copy Character" button redirects to the "Copy Character Page," where the selected character's details are preloaded into a form. Users can modify the character's details and save it as a new custom character.

  ![image](https://github.com/user-attachments/assets/298100bf-2398-4a1c-adb9-670dbf9c3eef)

### Custom Characters CRUD

The app includes full CRUD functionality for managing custom Star Wars characters:

#### View Custom Characters List

- Users can view custom characters list.

  ![image](https://github.com/user-attachments/assets/10a9b9f4-c9e0-4da2-9b79-8ec14f141452)

#### View Custom Character

- Users can view selected custom character information.

  ![image](https://github.com/user-attachments/assets/2367ad67-b7c2-4d13-b985-5eadb5f417f0)

#### Add New Custom Character

- Users can add custom characters with details such as name, height, mass, hair color, eye color, skin color, birth year, gender, homeworld, and associated films.

  ![image](https://github.com/user-attachments/assets/8b6b5b2d-4151-4299-a3e9-1e5ebed58427)

#### Edit Existing Custom Character

- Edit any previously added custom character details.

  ![image](https://github.com/user-attachments/assets/8b6b5b2d-4151-4299-a3e9-1e5ebed58427)

#### Delete Custom Character

- Characters can be deleted individually. Confirmation prompts ensure accidental deletions are avoided.

  ![image](https://github.com/user-attachments/assets/b4edfeae-504d-4a22-b823-87db9db93902)

### Contact Form
- Users can submit their name, email, and message.
- The form includes validation, and successfully submitted forms are stored in `localStorage`.

  ![image](https://github.com/user-attachments/assets/e0c75991-199b-4849-8edd-2f7be6a1ebea)

### Bonus Features
- **Typescript**: The app is built with TypeScript for type safety.
- **Loading Spinner**: A loading spinner is displayed while fetching data from the SWAPI.

  ![image](https://github.com/user-attachments/assets/997a4f84-2dbb-4d0a-8f45-864a731b2d1a)

- **i18n**: The app includes internationalization support for different languages.

  ![image](https://github.com/user-attachments/assets/a63d3b68-083e-4aac-a1e7-e7ccb1a57c23)

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

-   `VITE_API_BASE_URL`: API token for accessing the Swapi API.

## License

This project is licensed under the MIT License.

----------

By following this guide, you should be able to set up the Star Wars Character Search and Contact Form application locally. If you encounter any issues, please check the dependencies and ensure that your environment is correctly set up.

Feel free to contribute to the project by submitting pull requests or opening issues.
