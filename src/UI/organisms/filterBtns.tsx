import { connect, useDispatch } from "react-redux"
import { RootState } from '../../store';
import Button from '../atoms/button';
import {setType} from '../../actions/index';
import React from "react";
import { Reducer } from "../../types";
import {Capitalize} from '../../helperFunctions';

type Props = {
    reducer: Reducer
}
const FilterBtns = ({reducer}: Props) => {
    let dispatch = useDispatch();
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        let t:any = e.target;
        dispatch(setType(t.value))
    }  
    return (
        <React.Fragment>
        <div className="filter_btns block-padding">
            <Button classes="filter_btns__btn btn" onClick={handleClick} value={'all'} />
            <Button classes="filter_btns__btn btn" onClick={handleClick} value={'manual'} />
            <Button classes="filter_btns__btn btn" onClick={handleClick} value={'twitter'}  />
            <Button classes="filter_btns__btn btn" onClick={handleClick} value={'instagram'}  />
        </div>
        {reducer.value !== 'all' &&
        <div className="w-full block-padding">
            <p>Filtering By: {Capitalize(reducer.value)} Posts</p>
        </div>
        }
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    reducer: state.reducer
})
export default connect(mapStateToProps)(FilterBtns)