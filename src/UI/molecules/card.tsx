import { useEffect } from "react";
import { connect } from "react-redux"
import { RootState } from '../../store';
import { Reducer, Data, Item } from "../../types";
import Image from '../atoms/image';
import Text from '../atoms/text';
import InstagramEmbed from 'react-instagram-embed';


type Props = {
    reducer: Reducer,
    type: string, item: Item
}

//"https://graph.facebook.com/v12.0/me?fields=id%2Cname&access_token=EAAZAhzuAPQE0BAIAZCywMU0UAAyIdQ4LQr7ZBP6cuc19O7N010EpmGnCBZASvkKAmCUH1bY3J5So5oTDp6zUGvFkGSOHd1ud3R36zAvSrUaNuDSWtMirxHJxhBStqIS6zexw8AefuBJmIUHdsQvIbTdUDw98dmcJ7xIZB7s6ZAvs8kgLr2xXPIeGl1qG1ZBdxL7gf00FcKPOIijBWscgeZBZBqYUl5YaQefMCZBG9aOFopSX8kWiqycXEp7eEBD7UWxWoZD"
const Card = ({reducer, type, item}: Props) => {
    useEffect(() => {
        if (type === 'instagram') {
            console.log(item.item_data.link)
            //https://api.instagram.com/oembed/?url=https://www.instagram.com/p/szVeWDh17P/
            fetch(`https://cors-anywhere.herokuapp.com/https://api.instagram.com/oembed/?url=${item.item_data.link}`, {
                // 'mode': 'cors',
                // 'method': 'GET',
                headers:{'X-Requested-With': 'browser'}
            })
            .then(res => console.log(res))
        } else if (type === 'manual') {
            // fetch(item.item_data.image_url, {
            //     mode: 'no-cors'
            // })
            // .then(res => console.log(res))
            // .catch(err => console.log(err))
        }
    }, [])
    if (type === 'instagram') {
        // console.log(item)
        return (
            <div>
                {/* instagram */}
                {/* <Image src={item.item_data.image.large} /> */}
                {/* <Text /> */}
                {/* {item.item_data.link}
                APP ID: 1796391010517069
                CLIENT ID: 131ba3b7cf4139cb7493f8cb6ffc5651
                ACCESS: EAAZAhzuAPQE0BAIAZCywMU0UAAyIdQ4LQr7ZBP6cuc19O7N010EpmGnCBZASvkKAmCUH1bY3J5So5oTDp6zUGvFkGSOHd1ud3R36zAvSrUaNuDSWtMirxHJxhBStqIS6zexw8AefuBJmIUHdsQvIbTdUDw98dmcJ7xIZB7s6ZAvs8kgLr2xXPIeGl1qG1ZBdxL7gf00FcKPOIijBWscgeZBZBqYUl5YaQefMCZBG9aOFopSX8kWiqycXEp7eEBD7UWxWoZD */}
                <InstagramEmbed 
                clientAccessToken="131ba3b7cf4139cb7493f8cb6ffc5651"
                url={String(item.item_data.link)}
                maxWidth={500}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {
                    console.log('success')
                }}
                onAfterRender={() => {}}
                onFailure={() => {}} />
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