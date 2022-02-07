import { connect } from "react-redux"
import { RootState } from '../../store';

type Props = {
    text: string,
    link: boolean,
    url?: string,
    strong?: boolean
}
const Text = ({text, link, url, strong}: Props) => {
    const bold = (strong) ? 'text-bold' : ''
    return (
        <div className={link ? `text-link ${bold}` : `${bold}`}>
           {link ? <a href={url}>{text}</a> : <p>{text}</p>}
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Text)