import React, { ReactNode, useEffect, useState } from "react";
import { connect } from "react-redux"
import { RootState } from '../../store';
import { Reducer, Data, Item } from "../../types";
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
        let url = (type === 'instagram') ? 
        'https://api.instagram.com/oembed/?url=' + item.item_data.image.medium : 
        (type === 'manual') ? item.item_data.image_url : null
        setImage(url)
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