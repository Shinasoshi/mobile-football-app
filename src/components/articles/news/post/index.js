import React from "react"
import axios from "axios"
import {URL} from "../../../../config"
import style from "../../articles.css"
import ArticlesHeader from './articlesHeader'

class NewsArticles extends React.Component {

    state = {
        article: [],
        team: []
    }

    componentWillMount() {
        axios.get(`${URL}articles?id=${this.props.match.params.id}`)
            .then(response => {
                let article = response.data[0]

                axios.get(`${URL}teams?id=${article.team}`)
                    .then(response => {
                        this.setState({
                            article,
                            team: response.data
                        })
                    })
            })
    }

    render() {

        const article = this.state.article
        const team = this.state.team

        return (
            <div className={style.articleWrapper}>
                <ArticlesHeader
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />
                <div className={style.articleBody}>
                    <h1>{article.title}</h1>
                    <div className={style.articleImage}
                         style={{
                             background: `url('/images/articles/${article.image}')`
                         }}
                    ></div>
                    <div className={style.articleText}>
                        {article.body}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsArticles