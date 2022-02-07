import { connect, useDispatch } from "react-redux"
import { RootState } from '../../store';
import Card from "../molecules/card";
import {Reducer, Item} from '../../types';

type Props = {
    reducer: Reducer
}

const Grid = ({reducer}: Props) => {
    const {value} = reducer;
    return (
        <div>
            <a href="https://three83-backend.herokuapp.com/fbLogin">Login</a>
            
            {reducer[value] && 
            reducer[value].map((item: Item) => {
                return <Card key={item.item_id} item={item} type={item.service_slug} />
            })}
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    reducer: state.reducer
})
export default connect(mapStateToProps)(Grid)