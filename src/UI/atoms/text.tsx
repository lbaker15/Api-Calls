import { connect } from "react-redux"
import { RootState } from '../../store';

type Props = {
    
}
const Text = ({}: Props) => {
    return (
        <div>
            card text
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Text)