# Paroquia Website

A React-based website for the Paroquia, providing information about the parish, events, contact details, and mass schedules.

## Features

- **Home Page**: Displays a hero section with header and footer.
- **Sobre (About)**: Information about the parish, its mission, and community services.
- **Eventos (Events)**: Showcase upcoming events and activities.
- **Contato (Contact)**: Contact form and details for reaching out.
- **Horarios (Schedules)**: Mass schedules for different days.

## Technologies Used

- React
- Chakra UI (for styling and components)
- React Router (for navigation)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Paroquia
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The application will run on `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── common/
│   ├── contato/
│   ├── eventos/
│   ├── home/
│   ├── horarios/
│   └── layout/
├── data/
├── pages/
│   ├── Contato.jsx
│   ├── Eventos.jsx
│   ├── Home.jsx
│   ├── Horarios.jsx
│   └── Sobre.jsx
├── routes/
│   └── AppRoutes.jsx
├── theme/
│   └── theme.js
├── App.js
├── index.js
└── assets/
```

## Usage

- Navigate through the website using the header navigation.
- Each page provides specific information related to the parish.

## Contributing

Feel free to contribute by submitting issues or pull requests.

## License

This project is licensed under the MIT License.
