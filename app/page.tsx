import Banner from './components/Banner'
import FeaturesRow from './components/FeaturesRow'
import FeaturedCategories from './components/FeaturedCategories'
import BestSellingBooks from './components/BestSellingBooks'
import DealsOfTheWeek from './components/DealsOfTheWeek'
import NewArrivals from './components/NewArrivals'
import Newsletter from './components/Newsletter'

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturesRow />
      <FeaturedCategories />
      <BestSellingBooks />
      <DealsOfTheWeek />
      <NewArrivals />
      <Newsletter />
    </div>
  )
}

