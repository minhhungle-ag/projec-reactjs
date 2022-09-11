import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import ProductList from '../components/ProductList'
import { Box, Container, Stack, Typography } from '@mui/material'
import { productList } from '../../../api/data_face'
import TabList from '../components/TabList'
import { menuList } from '../../../constants/menuList'
import ThumbnailBanner from '../../../components/Common/ThumbnailBanner'

Products.propTypes = {}

function Products(props) {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  const navigate = useNavigate()
  function handleTabClick(item) {
    navigate(`/san-pham/${item.link}`)
  }

  useEffect(() => {
    if (categoryId === 'tat-ca') {
      setProducts(productList)
      return
    }

    const newProduct = [...productList].filter((item) => item.category === categoryId)
    setProducts(newProduct)
  }, [categoryId])
  return (
    <Box>
      <Box>
        <Box
          component="img"
          width="100%"
          maxHeight="350px"
          src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_BrandPromos_AMD_Configurator_11_2021AMDBuilderHeader.jpg"
          alt="about"
        />
      </Box>

      <Container>
        <Box>
          <Box sx={{ my: 2 }}>
            <Typography variant="h4" fontWeight="bold">
              Sản phẩm
            </Typography>
          </Box>

          <Box sx={{ my: 2 }}>
            <TabList tabList={menuList} selectedKey={categoryId} onTabClick={handleTabClick} />
          </Box>

          <Box sx={{ my: 2 }}>
            <ProductList productList={products} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Products
