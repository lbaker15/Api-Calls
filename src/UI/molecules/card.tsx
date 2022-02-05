import { connect } from "react-redux"
import { RootState } from '../../store';
import Image from '../atoms/image';
import Text from '../atoms/text';

type Props = {
    
}
const Card = ({}: Props) => {
    return (
        <div>
            card
            <Image />
            <Text />
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Card)