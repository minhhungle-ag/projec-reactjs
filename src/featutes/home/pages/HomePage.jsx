import { Box } from '@mui/material'
import Banner from '../../../components/Common/Banner'
import { accessoryList, categoryList, productList } from '../../../constants/common'
import CategoryList from '../components/CategoryList'
import ComputerCompany from '../components/ComputerCompany'
import ProductList from '../components/ProductList'

function HomePage(props) {
  return (
    <Box>
      <Box sx={{ my: 3 }}>
        <Banner />
      </Box>

      <Box sx={{ my: 3 }}>
        <ComputerCompany />
      </Box>

      <Box sx={{ my: 3 }}>
        <CategoryList title="Danh mục sản phẩm" categoryList={categoryList} />
      </Box>

      <Box sx={{ my: 3 }}>
        <CategoryList title="Danh mục phụ kiện" categoryList={accessoryList} />
      </Box>

      <Box sx={{ my: 3 }}>
        <ProductList title="Sản phẩm mới" productList={productList} />
      </Box>
    </Box>
  )
}

export default HomePage
