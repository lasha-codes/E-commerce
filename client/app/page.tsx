import Swiper from './components/Swiper'
import Header from './components/Header'
import ProductsSlider from './components/ProductsSlider'

const Home = () => {
  return (
    <main className='py-2.5'>
      <Header />
      <Swiper />
      <ProductsSlider />
    </main>
  )
}

export default Home
