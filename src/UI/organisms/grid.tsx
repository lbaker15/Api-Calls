import { connect } from "react-redux"
import { RootState } from '../../store';
import Card from "../molecules/card";

type Props = {
    
}
const Grid = ({}: Props) => {
    return (
        <div>
            grid
            <Card />
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Grid)