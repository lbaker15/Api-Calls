import React from "react";
import { connect } from "react-redux"
import { RootState } from '../../store';


type Props = {
    tweet: string[],
    classes?: string
}
const Tweet = ({tweet, classes}: Props) => {
    function unescapeHTML(escapedHTML:string) {
        return escapedHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
    }
    return (
        <React.Fragment>
            <div className="twitter_block__main">
            {tweet.map((t, i) => {
                let str = unescapeHTML(String(t))
                if (str.includes('@')) {
                    return <a key={"str" + i}>{str}</a>
                } else {
                    return str
                }
            })}
           </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Tweet)