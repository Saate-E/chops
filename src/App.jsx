import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import InitiativesPage from './pages/InitiativesPage'
import MembershipPage from './pages/MembershipPage'
import NewsPage from './pages/NewsPage'
import NotFoundPage from './pages/NotFoundPage'
import PartnersPage from './pages/PartnersPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'initiatives', element: <InitiativesPage /> },
      { path: 'membership', element: <MembershipPage /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'partners', element: <PartnersPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'updates', element: <Navigate to="/news" replace /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
