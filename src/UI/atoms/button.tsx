import React from "react";
import { connect } from "react-redux"
import { RootState } from '../../store';

type Props = {
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
    value: string;
}
const Button = ({onClick, value}: Props) => {
    return (
        <React.Fragment>
            <button
            onClick={onClick}
            value={value}
            >{value}</button>
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Button)