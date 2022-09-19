import CategoryIcon from '@mui/icons-material/Category'
import DevicesIcon from '@mui/icons-material/Devices'
import LaptopIcon from '@mui/icons-material/Laptop'
import MonitorIcon from '@mui/icons-material/Monitor'

export const pageList = [
  { label: 'Trang chủ', link: 'trang-chu' },
  { label: 'Sản phẩm', link: 'san-pham' },
  { label: 'Giới thiệu', link: 'gioi-thieu' },
  // { label: 'Liên hệ', link: 'lien-he' },
]

export const menuList = [
  { label: 'Tất cả SP', link: 'tat-ca', icon: <CategoryIcon /> },
  { label: 'Máy bàn', link: 'may-ban', icon: <DevicesIcon /> },
  { label: 'Laptop', link: 'laptop', icon: <LaptopIcon /> },
  { label: 'Màng hình', link: 'mang-hinh', icon: <MonitorIcon /> },
]
