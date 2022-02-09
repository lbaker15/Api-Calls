import { connect } from "react-redux"
import { RootState } from '../../store';

type Props = {
    color: string
}
const Loader = ({color}: Props) => {
    return (
        <div 
        style={{backgroundColor: color}}
        className={"pulse " + color}>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Loader)