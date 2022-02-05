import { connect } from "react-redux"
import { RootState } from '../../store';

type Props = {
    
}
const Button = ({}: Props) => {
    return (
        <div>
            button
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Button)