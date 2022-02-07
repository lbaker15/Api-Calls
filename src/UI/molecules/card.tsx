import { useEffect, useState } from "react";
import { connect } from "react-redux"
import { RootState } from '../../store';
import { Reducer, Data, Item } from "../../types";
import Image from '../atoms/image';
import Text from '../atoms/text';
import InstagramEmbed from 'react-instagram-embed';
import ImageNone from '../../assets/na.png';


type Props = {
    reducer: Reducer,
    type: string, item: Item
}

//"https://graph.facebook.com/v12.0/me?fields=id%2Cname&access_token=EAAZAhzuAPQE0BAIAZCywMU0UAAyIdQ4LQr7ZBP6cuc19O7N010EpmGnCBZASvkKAmCUH1bY3J5So5oTDp6zUGvFkGSOHd1ud3R36zAvSrUaNuDSWtMirxHJxhBStqIS6zexw8AefuBJmIUHdsQvIbTdUDw98dmcJ7xIZB7s6ZAvs8kgLr2xXPIeGl1qG1ZBdxL7gf00FcKPOIijBWscgeZBZBqYUl5YaQefMCZBG9aOFopSX8kWiqycXEp7eEBD7UWxWoZD"
const Card = ({reducer, type, item}: Props) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [image, setImage] = useState('')
    console.log(ImageNone)
    useEffect(() => {
        if (type !== 'twitter') {
        let url = (type === 'instagram') ? item.item_data.link : 'https://api.instagram.com/oembed/?url=' + item.item_data.image_url;
        // fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
        //     // 'mode': 'cors',
        //     // 'method': 'GET',
        //     headers:{'X-Requested-With': 'browser'}
        // })
        // .then(res => {
        //     if (res.status === 200) {
        //  
        //         return res.json()
        //     } else {
        //         // console.log(res.statusText)
        //         throw new Error(res.statusText)
        //     }
        // })
        // .then(data => {console.log(data); setImageLoaded(true); setImage(data);})
        // .catch(err => console.log(err))
        }
        setImageLoaded(true)
    }, [])
    if (type === 'instagram') {
        const {item_data} = item;
        // console.log(item)
        let txt = item_data.caption.split('#')[0]
        return (
            <div>
                {imageLoaded && 
                <Image src={image} />
                }
                {imageLoaded && image.length < 1 && (
                <Image src={ImageNone} />
                )}
                {/* <Image src={item_data.user.avatar} /> */}
                <Text text={item_data.user.username} link={false} strong={true} />
                <Text text={txt} link={false} />
                <Text text={'View Post'} link={true} url={item_data.link} />
                <div className="flex">{item_data.tags.map((item: string) => {
                    return <Text text={'#' + item} link={false} />
                })}
                </div>
                {/* {item.item_data.link}
                APP ID: 1796391010517069
                CLIENT ID: 131ba3b7cf4139cb7493f8cb6ffc5651
                ACCESS: EAAZAhzuAPQE0BAIAZCywMU0UAAyIdQ4LQr7ZBP6cuc19O7N010EpmGnCBZASvkKAmCUH1bY3J5So5oTDp6zUGvFkGSOHd1ud3R36zAvSrUaNuDSWtMirxHJxhBStqIS6zexw8AefuBJmIUHdsQvIbTdUDw98dmcJ7xIZB7s6ZAvs8kgLr2xXPIeGl1qG1ZBdxL7gf00FcKPOIijBWscgeZBZBqYUl5YaQefMCZBG9aOFopSX8kWiqycXEp7eEBD7UWxWoZD */}
                {/* <InstagramEmbed 
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
                onFailure={() => {}} /> */}
            </div>
        )
    } else if (type === 'twitter') {
        const {item_data} = item;
        return (
            <div>
                <Text text={item_data.user.username} link={false} strong={true} />
                <Text text={item_data.tweet} link={false} />
            </div>
        )
    } else if (type === 'manual') {
        console.log(item)
        const {item_data} = item;
        return (
            <div>
                {imageLoaded && 
                <Image src={image} />
                }
                {/* <Image src={item.item_data.image_url} /> */}
                <Text text={item_data.text} link={false} />
                <Text text={item_data.link_text} url={item_data.link} link={true}  />
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