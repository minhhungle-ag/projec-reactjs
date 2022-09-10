import { Box } from '@mui/material'
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
      <Box
        sx={{
          paddingTop: { xs: '66px', sm: '86px', md: '138px' },
        }}
      />
      <Routes>
        <Route path="/" element={<Navigate to="trang-chu" />} />
        <Route path="trang-chu" element={<HomePage />} />
        <Route path="san-pham">
          <Route index element={<Navigate to="tat-ca" />} />
          <Route path=":categoryId" element={<Products />} />
        </Route>
        <Route path="gioi-thieu" element={<About />} />
        <Route path="lien-he" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default App
