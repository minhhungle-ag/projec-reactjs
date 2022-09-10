import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import ProductList from '../components/ProductList'
import { Box, Container, Stack, Typography } from '@mui/material'
import { productList } from '../../../api/data_face'
import TabList from '../components/TabList'
import { menuList } from '../../../constants/menuList'

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
