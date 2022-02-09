import { connect } from "react-redux"
import { RootState } from '../../store';
import {useState, useCallback, useEffect} from 'react';

type Props = {
    src: string,
    classes?: string,
    placeholderImg?: any
}
const ImageComponent = ({src, classes, placeholderImg}: Props) => {
    const [imgSrc, setSrc] = useState(placeholderImg || src);
    const onLoad = useCallback(() => {
        setSrc(src);
    }, [src]);
    useEffect(() => {
        const img = new Image();
        img.src = src as string;
        img.addEventListener("load", onLoad);
        return () => {
          img.removeEventListener("load", onLoad);
        };
    }, [src, onLoad]);
    return (
            <img className={classes} src={imgSrc} />
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(ImageComponent)