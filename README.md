# Medium Blog

Welcome to the **Medium Blog** project! This is a personal blog platform inspired by Medium, designed to allow users to read and create engaging content effortlessly.

## 🌟 Features

- **User Authentication:** Sign up, sign in, and manage user profiles securely.
- **Blog Creation:** Create, edit, and publish blogs with rich text formatting.
- **Category Management:** Organize blogs into different categories for better navigation.
- **Responsive Design:** Fully responsive UI to ensure a seamless experience across all devices.
- **Search Functionality:** Easily find blogs using search and filter options.

## 🚀 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, Zod
- **Database:** Postgres
- **Validation:** Zod
- **Routing:** Hono
- **ORM:** Prisma

## 🛠️ Setup and Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Praxxav/Medium-blogs.git
   cd Medium-blogs
##  video link: https://www.loom.com/share/bf068e3d7263473bbd1983e88cab15a1
Install Dependencies

Navigate to the frontend and backend directories and install the required dependencies.

For the frontend:

bash
Copy code
cd frontend
npm install
For the backend:

bash
Copy code
cd ../backend
npm install
Setup Environment Variables

Create a .env file in the backend directory and add the necessary environment variables. Example:

bash
Copy code
DATABASE_URL=your_Avien_connection_string
JWT_SECRET=your_jwt_secret_key
Run the Project

Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend development server:

bash
Copy code
cd ../frontend
npm start
Both servers should now be running locally. You can access the frontend at http://localhost:3000 and the backend API at http://localhost:5000.

🎨 Styling and Design
The project uses Tailwind CSS for a modern and responsive design. You can customize the styles by modifying the Tailwind configuration file located at frontend/tailwind.config.js.

📄 Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.

