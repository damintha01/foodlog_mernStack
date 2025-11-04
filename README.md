# Food Recipe Manager - MERN Stack Application

A full-stack web application for managing food recipes built with MongoDB, Express, React, and Node.js.

## Project Structure

```
Foodlog/
├── backend/              # Express.js backend API
│   ├── config/          # Database configuration
│   ├── controller/      # Route controllers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── server.js        # Express server
│   └── package.json
│
└── frontend/            # React.js frontend
    ├── src/
    │   ├── components/  # React components
    │   ├── services/    # API service layer
    │   ├── styles/      # CSS stylesheets
    │   ├── App.js
    │   └── App.css
    └── package.json
```

## Features

- 📝 Create, Read, Update, and Delete recipes
- 🖼️ Add cover images to recipes
- ⏱️ Track cooking time
- 📋 List ingredients and instructions
- 📱 Responsive design for all devices
- 🎨 Modern gradient UI

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Recipes

- `GET /recipe` - Get all recipes
- `GET /recipe/:id` - Get a single recipe by ID
- `POST /recipe` - Create a new recipe
- `PUT /recipe/:id` - Update a recipe
- `DELETE /recipe/:id` - Delete a recipe

### Request Body Example (POST/PUT)

```json
{
  "title": "Chocolate Cake",
  "ingredients": ["2 cups flour", "1 cup sugar", "3 eggs", "1 cup milk"],
  "instructions": "Mix all ingredients and bake at 350°F for 30 minutes",
  "time": "45 minutes",
  "imageCover": "https://example.com/cake.jpg"
}
```

## Technology Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

### Frontend
- React 18
- Axios
- CSS3
- Create React App

## Running Both Servers

You can run both servers simultaneously:

1. Open two terminal windows

2. In the first terminal:
```bash
cd backend
npm start
```

3. In the second terminal:
```bash
cd frontend
npm start
```

## Development Tips

- Backend runs on port 5000
- Frontend runs on port 3000
- CORS is enabled on the backend
- Hot reload is enabled for both servers

## Troubleshooting

### Backend Won't Start
- Check if MongoDB is running
- Verify your `.env` file is configured correctly
- Ensure port 5000 is not in use

### Frontend Won't Connect to Backend
- Verify backend is running on port 5000
- Check the API_BASE_URL in `frontend/src/services/api.js`
- Look for CORS errors in the browser console

### Database Connection Issues
- Check your MongoDB URI
- Ensure your IP is whitelisted (if using MongoDB Atlas)
- Verify network connectivity

## Future Enhancements

- User authentication and authorization
- Recipe categories and tags
- Search and filter functionality
- Recipe ratings and comments
- Image upload to cloud storage
- Recipe sharing via social media
- Meal planning feature
- Shopping list generation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT

## Contact

For questions or feedback, please open an issue on GitHub.

---

Built with ❤️ using the MERN Stack
