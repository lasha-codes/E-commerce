import Swiper from './components/Swiper'
import Header from './components/Header'
import ProductsSlider from './components/ProductsSlider'
import Category from './components/Category'

const Home = () => {
  return (
    <main className='py-2.5'>
      <Header />
      <Swiper />
      <ProductsSlider />
      <Category />
    </main>
  )
}

export default Home
