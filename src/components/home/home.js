import React from 'react';
import NewsSlider from '../widgets/newsSlider/newsSlider';
import NewsList from '../widgets/newsList/newsList'

const Home = () => {
    return (
        <div>
            <NewsSlider
                type="featured"
                start={0}
                amount={5}
                settings={{
                    dots:false
                }}
            />
            <NewsList
                type="card"
                loadmore={true}
                start={3}
                amount={3}
            />
        </div>
    )
}

export default Home;