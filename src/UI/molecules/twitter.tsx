import React, { useEffect, useState } from "react";
import { connect } from "react-redux"
import { RootState } from '../../store';
import Text from '../atoms/text';
import Tweet from '../atoms/tweet';
import TwitterIcon from '../../assets/twitter.png'; 

type Props = {
    item: any
}
class Twitter extends React.PureComponent<Props> {
    state = {
        tweet: []
    }
    setTweet = (twt:string[]) => {
        this.setState({
            tweet: twt
        })
    }
    componentDidMount() {
        const {item_data} = this.props.item;
        let tweetArr = item_data.tweet.split(' ');
        let newArr:string[] = [];
        let count = 0;
        Promise.all(
            tweetArr.map((item: any, i: number) => {
                if (item.split('').includes('@')) {
                    let str = item;
                    count += 2;
                    newArr.push(String(str))
                } else {
                    let str = (newArr[count]) ? newArr[count] : ''
                    let add = str + ' ' + item;
                    newArr[count] = add;
                }
            })
        )
        .then(() => {
            this.setTweet(newArr)
        })
    }
    render() {
    const {item} = this.props;
    const {item_data} = item;
    const {tweet} = this.state;
    let d1 = new Date(item.timestamp);
    let d2 = new Date(Date.now());
    let yearDiff = (d2.getFullYear() - d1.getFullYear())
    let monthDiff = (d2.getMonth() - d1.getMonth())
    let dayDiff = d2.getDay() - d1.getDay()
    let hourDiff = d2.getHours() - d1.getHours()
    let diff = (yearDiff > 0) ? yearDiff : (monthDiff > 0) ? monthDiff : (dayDiff) ? dayDiff : hourDiff;
    let diffStr = (yearDiff > 0) ? ' years ago' : (monthDiff > 0) ? ' months ago' : (dayDiff) ? ' days ago' : ' hours ago';
    return ( 
        <div className="twitter_block block">
            <img className="block__icon" src={TwitterIcon} />
            {tweet.length > 0 &&
                <React.Fragment>
                <Text classes="twitter_block__text" text={item_data.user.username} link={false} strong={true} />
                <Text link={false} classes="block__timestamp" text={diff + diffStr}></Text>
                <Tweet tweet={tweet} classes="twitter_block__text" />
                </React.Fragment>
            }
        </div>
    )
    }
}

const mapStateToProps = (state: RootState) => ({
    reducer: state.reducer
})
export default connect(mapStateToProps)(Twitter)