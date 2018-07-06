import React from 'react';
import NewsSlider from '../widgets/newsSlider/newsSlider';
import NewsList from '../widgets/newsList/newsList'
import VideosList from '../widgets/videosList/videosList'

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
            <VideosList
            type="card"
            title={true}
            loadmore={true}
            start={0}
            amount={3}
            />
        </div>
    )
}

export default Home;