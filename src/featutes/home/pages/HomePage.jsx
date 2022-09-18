import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import { productList } from '../../../api/data_face'
import Banner from '../../../components/Common/Banner'
import { accessoryList, categoryList } from '../../../constants/common'
import CategoryList from '../components/CategoryList'
import ComputerCompany from '../components/ComputerCompany'
import ProductList from '../components/ProductList'

function HomePage(props) {
  return (
    <Box>
      <Box sx={{ py: 1, pt: 2, bgcolor: grey[300] }}>
        <Banner />
      </Box>

      <Box sx={{ my: 2 }}>
        <ComputerCompany />
      </Box>

      <Box sx={{ my: 2 }}>
        <CategoryList
          title="Danh mục sản phẩm"
          categoryList={[...categoryList, ...accessoryList]}
        />
      </Box>

      <Box sx={{ my: 2 }}>
        <ProductList
          title="Sản phẩm mới nhất"
          productList={productList.filter((item, idx) => idx < 10)}
        />
      </Box>

      <Box sx={{ my: 2 }}>
        <ProductList
          title="Sản phẩm bán chạy"
          productList={productList.filter((item, idx) => idx < 10)}
        />
      </Box>
    </Box>
  )
}

export default HomePage
