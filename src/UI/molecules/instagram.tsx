import { connect } from "react-redux"
import { RootState } from '../../store';
import Text from '../atoms/text';
import ImageNone from '../../assets/na.png';
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
        let d1 = new Date(item.timestamp);
        let d2 = new Date(Date.now());
        let yearDiff = (d2.getFullYear() - d1.getFullYear())
        let monthDiff = (d2.getMonth() - d1.getMonth())
        let dayDiff = d2.getDay() - d1.getDay()
        let hourDiff = d2.getHours() - d1.getHours()
        let diff = (yearDiff > 0) ? yearDiff : (monthDiff > 0) ? monthDiff : (dayDiff) ? dayDiff : hourDiff;
        let diffStr = (yearDiff > 0) ? ' years ago' : (monthDiff > 0) ? ' months ago' : (dayDiff) ? ' days ago' : ' hours ago';
        return (
            <div className="instagram_block block">
                <img className="block__icon" src={Insta} />
                {image && 
                <Image classes="block__image" 
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