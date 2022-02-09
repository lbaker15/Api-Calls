import React from "react";
import { connect } from "react-redux"
import { RootState } from '../../store';


type Props = {
    text: string,
    link: boolean,
    url?: string,
    strong?: boolean,
    classes?: string
}
const Text = ({text, link, url, strong, classes}: Props) => {
    const bold = (strong) ? 'text-bold' : ''
    return (
        <React.Fragment>
           {link ? <a className={`text-link ${bold} ${classes}`} href={url}>{text}</a> : <p className={`${bold} ${classes}`}>{text}</p>}
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Text)