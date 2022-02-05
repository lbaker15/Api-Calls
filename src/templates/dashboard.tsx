import { connect } from "react-redux"
import FilterBtns from "../UI/organisms/filterBtns"
import Grid from '../UI/organisms/grid'
import { RootState } from '../store';

type Props = {
    
}
const DashboardTemp = ({}: Props) => {
    return (
        <div>
            <FilterBtns />
            <Grid />
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(DashboardTemp)