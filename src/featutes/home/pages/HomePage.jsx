import { Box } from '@mui/material'
import { productList } from '../../../api/data_face'

import { accessoryList, categoryList } from '../../../constants/common'
import BannerList from '../components/BannerList'
import CategoryList from '../components/CategoryList'
import ComputerCompany from '../components/ComputerCompany'
import ProductList from '../components/ProductList'
import WhyUs from '../components/WhyUs'

function HomePage(props) {
  return (
    <Box>
      <Box sx={{ my: 2 }}>
        <BannerList />
      </Box>

      <Box sx={{ my: 2 }}>
        <WhyUs />
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
        <ComputerCompany />
      </Box>
    </Box>
  )
}

export default HomePage
