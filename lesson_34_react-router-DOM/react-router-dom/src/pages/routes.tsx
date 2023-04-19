import { createBrowserRouter } from "react-router-dom";
import { AboutPage } from "./about";
import { PostsPage } from "./contacts";
import { HomePage } from "./home";
import { NotFoundPage } from "./not-found";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/",
        element: <AboutPage />
    },
    // {
    //     path: "/",
    //     element: <ContactsPage />
    // },
    // {
    //     path: '/contacts',
    //     element: <div>Contacts page...</div>
    // }
    {
        path: '/posts/:postId',
        element: <PostsPage />
    }
])

