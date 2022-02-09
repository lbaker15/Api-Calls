import { connect, useDispatch } from "react-redux"
import { RootState } from '../../store';
import Card from "../molecules/card";
import {Reducer, Item} from '../../types';
import React, { useEffect, useState } from "react";
import { setNumber } from "../../actions";

type Props = {
    reducer: Reducer
}

const Grid = ({reducer}: Props) => {
    const [numberState, setNumberState] = useState(10)
    const [length, setLength] = useState(0)
    const {value} = reducer;
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(setNumber(numberState))
    }, [numberState])
    useEffect(() => {
        setLength(reducer[value].length)
    }, [value])
    const {number, all} = reducer;
    if (number) {
    return (
        <React.Fragment>
            <div className="grid">    
                {reducer[value] && 
                reducer[value].map((item: Item, i: number) => {
                    if (i < reducer.number) {
                        return (
                        <Card key={item.item_id + i} item={item} type={item.service_slug} />
                        )
                    }
                })}
            </div>
            {numberState < length && (
                <div className="w-full">
                <button 
                className="load_btn btn"
                onClick={() => {
                    setNumberState(numberState+10)
                }}
                >Load More</button>
                </div>
            )}
        </React.Fragment>
    )
    } else {
        return <div></div>
    }
}

const mapStateToProps = (state: RootState) => ({
    reducer: state.reducer
})
export default connect(mapStateToProps)(Grid)