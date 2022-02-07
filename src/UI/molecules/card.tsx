import { useEffect } from "react";
import { connect } from "react-redux"
import { RootState } from '../../store';
import { Reducer, Data, Item } from "../../types";
import Image from '../atoms/image';
import Text from '../atoms/text';

//1796391010517069
//55c014b93b57e699e6a49cc27f49645f

type Props = {
    reducer: Reducer,
    type: string, item: Item
}
const Card = ({reducer, type, item}: Props) => {
    useEffect(() => {
        if (type === 'instagram') {
            let app_id = 1796391010517069;
            let redirect_url = 'http://localhost:3000'
            fetch(`https://api.instagram.com/oauth/authorize?client_id=${app_id}&redirect_url=${redirect_url}&scope=user_media&response=code`, {
                mode: 'cors'
            })
            .then(res => console.log(res))
        } else if (type === 'manual') {
            // console.log('here')
            // fetch(item.item_data.image_url, {
            //     mode: 'cors'
            // })
            // .then(res => console.log(res))
            // .catch(err => console.log(err))
        }
    }, [])
    if (type === 'instagram') {
        // console.log(item)
        return (
            <div>
                instagram
                {/* <Image src={item.item_data.image.large} /> */}
                <Text />
            </div>
        )
    } else if (type === 'twitter') {
        // console.log(item)
        return (
            <div>

            </div>
        )
    } else if (type === 'manual') {
        // console.log(item.item_data.image_url)
        return (
            <div>
                manual
                {/* <Image src={item.item_data.image_url} /> */}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    reducer: state.reducer
})
export default connect(mapStateToProps)(Card)