import { connect } from "react-redux"
import { RootState } from '../../store';

type Props = {
    
}
const Image = ({}: Props) => {
    return (
        <div>
            card image
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Image)