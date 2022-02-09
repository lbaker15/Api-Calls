import React, {useRef} from "react";
import { connect } from "react-redux"
import { RootState } from '../../store';
import {gsap} from 'gsap';
import {Capitalize} from '../../helperFunctions';

type Props = {
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
    value: string;
    classes?: string;
}
const Button = ({onClick, value, classes}: Props) => {
    let ref = useRef(null);
    let ref2 = useRef(null);
    const mouseOver = () => {
        gsap.to(ref2.current, {visibility: 'visible', scale: 1, duration: 0.4})
    }
    const mouseOut = () => {
        gsap.to(ref2.current, {visibility: 'hidden', scale: 0.01, duration: 0.4})
    }
    return (
        <React.Fragment>
            <button
            ref={ref}
            className={classes ? classes : ''}
            onClick={onClick}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
            value={value}
            >
                <span ref={ref2}></span>
                <p>{Capitalize(value)}</p>
            </button>
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Button)