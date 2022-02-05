import { connect } from "react-redux"
import { RootState } from '../../store';
import Button from '../atoms/button';

type Props = {
    
}
const FilterBtns = ({}: Props) => {
    return (
        <div>
            <Button />
            <Button />
            <Button />
            <Button />
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(FilterBtns)