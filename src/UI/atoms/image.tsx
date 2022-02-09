import { connect } from "react-redux"
import { RootState } from '../../store';
import {useState, useCallback, useEffect} from 'react';
import ImageNone from '../../assets/na.png';
import Loader from "./loader";

type Props = {
    src: string,
    classes?: string,
    placeholderImg?: any
}
const ImageComponent = ({src, classes, placeholderImg}: Props) => {
    const [imgSrc, setSrc] = useState(placeholderImg || src);
    const [load, setLoad] = useState(true)
    const onLoad = useCallback(() => {
        setSrc(src);
        setLoad(false)
    }, [src]);
    const onError = () => {
        setSrc(ImageNone)
        setLoad(false)
    }
    useEffect(() => {
        const img = new Image();
        img.src = src as string;
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onError)
        return () => {
          img.removeEventListener("load", onLoad);
        };
    }, [src, onLoad]);
    return (
        <div className="holder-img">
        {load ? <div className="holder-img__load">
            <Loader color="white" />
        </div> : null}
        <img 
        
        className={classes} src={imgSrc} />
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(ImageComponent)