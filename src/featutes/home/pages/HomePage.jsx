import { Box } from '@mui/material'
import { productList } from '../../../api/data_face'
import { accessoryList, categoryList } from '../../../constants/common'
import AdvBannerList from '../components/AdvBannerList'
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
        <CategoryList title="Category" categoryList={[...categoryList, ...accessoryList]} />
      </Box>

      <Box sx={{ my: 2 }}>
        <ProductList
          title="Lastes products"
          productList={productList.filter((item, idx) => idx < 10)}
        />
      </Box>

      <Box sx={{ my: 2 }}>
        <AdvBannerList />
      </Box>

      <Box sx={{ my: 2 }}>
        <ProductList title="Sale off" productList={productList.filter((item, idx) => idx < 10)} />
      </Box>

      <Box sx={{ my: 2 }}>
        <ComputerCompany />
      </Box>
    </Box>
  )
}

export default HomePage
