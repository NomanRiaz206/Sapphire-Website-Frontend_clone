import React from 'react'
import Slider from './Slider'
import CategorySlider from './CategorySlider'
import TrendingSection from './Trending'
import MoreToExplore from './Moretoexplore'
import StyledByYou from './Styledbyyou'
import Homerounded from './Homerounded'

const Home = () => {
  return (
    <div>
      <Slider/>
<Homerounded/>
<CategorySlider/>
<TrendingSection/>
<MoreToExplore/>
<StyledByYou/>



    </div>
  )
}

export default Home
