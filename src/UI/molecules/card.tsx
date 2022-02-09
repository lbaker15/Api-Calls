import React, { ReactNode, useEffect, useState } from "react";
import { connect } from "react-redux"
import { RootState } from '../../store';
import { Reducer, Data, Item } from "../../types";
import Image from '../atoms/image';
import Text from '../atoms/text';
import InstagramEmbed from 'react-instagram-embed';
import ImageNone from '../../assets/na.png';
import Twitter from './twitter';
import Manual from './manual';
import Instagram from './instagram';

type Props = {
    reducer: Reducer,
    type: string, item: Item
}

const Card = ({reducer, type, item}: Props) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [image, setImage] = useState<string|ReactNode>('')
    useEffect(() => {
        if (type !== 'twitter') {
        let url = (type === 'instagram') ? item.item_data.link : 'https://api.instagram.com/oembed/?url=' + item.item_data.image_url;
        // fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
        //     headers:{'X-Requested-With': 'browser'}
        // })
        // .then(res => {
        //     if (res.status === 200) {
        //         return res.json()
        //     } else {
        //         throw new Error(res.statusText)
        //     }
        // })
        // .then(data => {setImage(data);})
        // .catch(err => {console.log(err); console.log('image none', ImageNone); let img = (<ImageNone />); setImage(img.type); })
        let img = (<ImageNone />)
        setImage(img.type)
        }
    }, [])
    if (type === 'instagram') {
        return <Instagram image={image} item={item} />
    } else if (type === 'twitter') {
        return <Twitter item={item} />
    } else {
        return <Manual image={image} item={item} />
    } 
}

const mapStateToProps = (state: RootState) => ({
    reducer: state.reducer
})
export default connect(mapStateToProps)(Card)