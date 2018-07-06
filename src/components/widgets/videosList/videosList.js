import React from "react"
import {CSSTransition, TransitionGroup} from "react-transition-group"
import {Link} from "react-router-dom"
import axios from "axios"
import {URL} from "../../../config"
import style from "./videosList.css"
import Button from "../buttons/buttons"
import CardInfo from "../cardInfo/cardInfo"
import VideosTemplate from './videosTemplate'

class VideosList extends React.Component {

    state = {
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount,
        teams: [],
        videos: []
    }

    componentDidMount() {
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
        if (this.state.teams.length < 1) {

            axios.get(`${URL}teams`)
                .then(response => {
                    this.setState({
                        teams: response.data
                    })
                })
        }

        axios.get(`${URL}videos?_start=${start}&_end=${end}`)
            .then(response => {
                this.setState({
                    videos: [...this.state.videos, ...response.data],
                    start,
                    end
                })
            })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount

        this.request(this.state.end, end)
    }

    renderVideos = () => {
        let template = null

        switch (this.props.type) {
            case ("card"):
                template =
                    <VideosTemplate data={this.state.videos} teams={this.state.teams}/>
                break
            default:
                template = null
        }

        return template
    }

    renderTitle = () => {
        return this.props.title ?
            <h3><strong>Videos</strong></h3> :
            null
    }

    renderButton = () => {
        return this.props.loadmore ?
            <Button
                type="loadmore"
                loadMore={() => this.loadMore()}
                cta="Load More Videos"
            /> :
            <Button type="linkTo" cta="More videos" linkTo="/videos"/>
    }


    render() {
        return (
            <div className={style.videosListWrapper}>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
}

export default VideosList