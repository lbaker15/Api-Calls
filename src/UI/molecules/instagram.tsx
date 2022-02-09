import { connect } from "react-redux"
import { RootState } from '../../store';
import Text from '../atoms/text';
import { getTimestamp } from "../../helperFunctions";
import Image from '../atoms/image';
import Insta from '../../assets/insta.png'; 

type Props = {
    item: any,
    imageLoaded?: boolean,
    image: any
}
const Instagram = ({item, imageLoaded, image}: Props) => {
        const {item_data} = item;
        let txt = item_data.caption.split('#')[0];
        const {diff, diffStr}= getTimestamp(item.timestamp)
        return (
            <div className="instagram_block block">
                <img className="block__icon" src={Insta} />
                {image && 
                <Image 
                type={item.service_name}
                classes="holder-img__image" 
                placeholderImg="https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load"
                src={image}
                />
                }
                <Text text={item_data.user.username} 
                link={false} strong={true}
                classes="instagram_block__text" />
                <Text link={false} classes="block__timestamp" text={diff + diffStr}></Text>
                <Text text={txt} link={false} 
                classes="instagram_block__text"
                />
                <Text text={'View Post'} link={true} 
                url={item_data.link} 
                classes="instagram_block__text" />
                <div className="instagram_block__hashtags">{item_data.tags.map((item: string) => {
                    return <Text key={item.slice(0, 10)} classes="h-auto" text={'#' + item} link={false} />
                })}
                </div>
            </div>
        )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Instagram)