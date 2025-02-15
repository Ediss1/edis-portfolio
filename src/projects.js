import booksImage from "./assets/books.png";
import toDoListImage from "./assets/to-do-app.png";
import inventoryAppImage from "./assets/inventory-mngmnt.png";
import newsAppImage from "./assets/news-portal.png";
import keeperImage from "./assets/keeper-app.png";


const projects = [
    {
        link: "https://github.com/Ediss1/Keeper-app-with-ICP-backend",
        title: "Keeper App with ICP Backend",
        description: "The Keeper App with ICP Backend is a decentralized note-taking application that combines a React-based frontend with a backend powered by the Internet Computer Protocol (ICP). This integration ensures data persistence and storage on the blockchain, providing users with a secure and decentralized platform for managing their notes. This project exemplifies the fusion of modern frontend frameworks with decentralized backend solutions, offering a practical approach to building Web3 applications.",
        image: keeperImage,
    },
    {
        link: "https://github.com/Ediss1/Simple-ToDoList",
        title: "To Do List",
        description: "The Simple To Do List project is a web-based application designed to help users manage their daily tasks efficiently. Developed using HTML, CSS, and JavaScript, it offers a straightforward interface for task management.",
        image: toDoListImage,
    },
    {
        link: "https://github.com/Ediss1/news-portal",
        title: "News Portal App",
        description: "The News Portal project is a web application developed using Angular, designed to provide users with up-to-date news articles across various categories. The application offers a user-friendly interface, allowing users to browse and read news content seamlessly.",
        image: newsAppImage,
    },
    {
        link: "https://github.com/Ediss1/InventorManagementSystem_Frontend",
        title: "Inventory Management System",
        description: "The Inventory Management System Frontend is a web application designed to facilitate the management of inventory items. Developed using React, it provides a user-friendly interface for interacting with inventory data.",
        image: inventoryAppImage,
    },
    {
        link: "https:/npm ithub.com/Ediss1/InventoryManagementSystem_API",
        title: "Inventory Management System API",
        description: "The Inventory Management System API is a backend application developed using C#. It is designed to handle the server-side operations of an inventory management system, providing endpoints for managing inventory data.",
        image: booksImage,
    },
]

export default projects;