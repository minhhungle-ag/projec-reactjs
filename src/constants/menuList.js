import CategoryIcon from '@mui/icons-material/Category'
import DevicesIcon from '@mui/icons-material/Devices'
import LaptopIcon from '@mui/icons-material/Laptop'
import MonitorIcon from '@mui/icons-material/Monitor'

export const pageList = [
  { label: 'Home', link: 'home' },
  { label: 'Product', link: 'products' },
  { label: 'About', link: 'about' },
  // { label: 'Liên hệ', link: 'lien-he' },
]

export const menuList = [
  { label: 'All products', link: 'all', icon: <CategoryIcon /> },
  { label: 'Desktops', link: 'desktops', icon: <DevicesIcon /> },
  { label: 'Laptops', link: 'laptops', icon: <LaptopIcon /> },
  { label: 'Monitors', link: 'monitors', icon: <MonitorIcon /> },
]
