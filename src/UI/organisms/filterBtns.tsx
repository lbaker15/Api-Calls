import { connect, useDispatch } from "react-redux"
import { RootState } from '../../store';
import Button from '../atoms/button';
import {setType} from '../../actions/index';

type Props = {
    
}
const FilterBtns = ({}: Props) => {
    let dispatch = useDispatch();
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        let t:any = e.target;
        dispatch(setType(t.value))
    }  
    return (
        <div>
            <Button onClick={handleClick} value={'all'} />
            <Button onClick={handleClick} value={'manual'} />
            <Button onClick={handleClick} value={'twitter'}  />
            <Button onClick={handleClick} value={'instagram'}  />
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(FilterBtns)