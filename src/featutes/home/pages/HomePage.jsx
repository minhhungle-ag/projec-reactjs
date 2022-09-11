import { Box, Divider } from '@mui/material'
import { Container } from '@mui/system'
import { productList } from '../../../api/data_face'
import ThumbnailBanner from '../../../components/Common/ThumbnailBanner'
import { accessoryList, categoryList } from '../../../constants/common'
import CategoryList from '../components/CategoryList'
import ComputerCompany from '../components/ComputerCompany'
import ProductList from '../components/ProductList'

function HomePage(props) {
  return (
    <Box>
      <Box sx={{ mb: 3, borderRadius: 1 }}>
        <ThumbnailBanner />
      </Box>

      <Box sx={{ my: 3 }}>
        <ComputerCompany />
      </Box>

      <Box sx={{ my: 3 }}>
        <CategoryList
          // title="Danh muc sản phẩm"
          categoryList={[...categoryList, ...accessoryList]}
        />
      </Box>

      <Container>
        <Divider />
      </Container>

      <Box sx={{ my: 3 }}>
        <ProductList
          title="Sản phẩm mới nhất"
          productList={productList.filter((item, idx) => idx < 10)}
        />
      </Box>
    </Box>
  )
}

export default HomePage
