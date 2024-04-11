import { FaFacebook, FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import dress from '../assets/dress.svg'
import shoe from '../assets/shoes.svg'
import jewelry from '../assets/jewelry.svg'
import perfume from '../assets/perfume.svg'
import { count } from 'console'

export const socialLinks = [
  { href: 'https://facebook.com', icon: FaFacebook },
  { href: 'https://discord.com', icon: FaDiscord },
  { href: 'https://instagram.com', icon: FaInstagram },
  { href: 'https://linkedin.com', icon: FaLinkedin },
]

export const navigation = [
  { link: 'HOME', href: '' },
  { link: "MEN'S", href: '' },
  { link: "WOMEN'S", href: '' },
  { link: 'JEWELRY', href: '' },
  { link: 'PERFUME', href: '' },
  { link: 'BLOG', href: '' },
  { link: 'HOT OFFERS', href: '' },
]

export const categories = [
  {
    image: dress,
    title: 'Clothes',
    categories: [
      { name: 'Shirt', count: 300 },
      { name: 'Short & Jeans', count: 60 },
      { name: 'Jacket', count: 50 },
      { name: 'Dress & Frock', count: 87 },
    ],
  },
  {
    image: shoe,
    title: 'Footwear',
    categories: [
      { name: 'Sports', count: 45 },
      { name: 'Formal', count: 75 },
      { name: 'Casual', count: 35 },
      { name: 'Safety Shoes', count: 26 },
    ],
  },
  {
    image: jewelry,
    title: 'Jewelry',
    categories: [
      { name: 'Earrings', count: 46 },
      { name: 'Couple Rings', count: 73 },
      { name: 'Necklace', count: 61 },
    ],
  },
  {
    image: perfume,
    title: 'Perfume',
    categories: [
      { name: 'Clothes Perfume', count: 12 },
      { name: 'Deodorant', count: 60 },
      { name: 'Jacket', count: 50 },
      { name: 'Dress & Frock', count: 87 },
    ],
  },
]
