import { connect } from "react-redux"
import { RootState } from '../../store';

type Props = {
    src: string
}
const Image = ({src}: Props) => {
    return (
        <div>
            <img src={src} />
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Image)