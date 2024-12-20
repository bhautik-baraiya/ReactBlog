import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLayout, Login, SignUp } from './components/index.js';
import Home from './pages/Home.jsx';
import AllPosts from './pages/allPosts.jsx';
import AddPost from './pages/AddPost.jsx';
import EditPosts from './pages/EditPosts.jsx';
import Post from './pages/Post.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        )
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {""}
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path: "/add-posts",
        element: (
          <AuthLayout authentication>
            {""}
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {""}
            <EditPosts />
          </AuthLayout>
        )
      },
      {
        path: "/post/:slug",
        element: <Post />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)