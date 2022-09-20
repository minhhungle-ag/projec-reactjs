import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './components/Common/NotFound'
import MainLayout from './components/Layouts/MainLayout'
import About from './featutes/About/About'
import Contact from './featutes/contact/Contact'
import HomePage from './featutes/home/pages/HomePage'
import Products from './featutes/products/pages/Products'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="products">
          <Route index element={<Navigate to="all" />} />
          <Route path=":categoryId" element={<Products />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default App
