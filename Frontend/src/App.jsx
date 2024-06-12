import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import './navbar.css';
import Video from './video.jsx';
import MyComponent from './home-content.jsx';
import Footer from './footer.jsx';
import LoginComponent from './login.jsx';

function App() {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <><Navbar /><LoginComponent /></>
        },
        {
            path: "/",  // Define the default route for home page components
            element: (
                <>  
                    <Navbar/>
                    <Video />
                    <MyComponent />
                </>
            )
        }
    ]);

    return (
        <div className="container">
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
}

export default App;
