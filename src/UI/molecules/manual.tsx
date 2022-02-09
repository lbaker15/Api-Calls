import { connect } from "react-redux"
import { RootState } from '../../store';
import Text from '../atoms/text';
import ImageNone from '../../assets/na.png';
import Image from '../atoms/image';

type Props = {
    item: any,
    imageLoaded?: boolean,
    image: any
}
const Manual = ({item, imageLoaded, image}: Props) => {
 const {item_data} = item;
 let d1 = new Date(item.timestamp);
        let d2 = new Date(Date.now());
        let yearDiff = (d2.getFullYear() - d1.getFullYear())
        let monthDiff = (d2.getMonth() - d1.getMonth())
        let dayDiff = d2.getDay() - d1.getDay()
        let hourDiff = d2.getHours() - d1.getHours()
        let diff = (yearDiff > 0) ? yearDiff : (monthDiff > 0) ? monthDiff : (dayDiff) ? dayDiff : hourDiff;
        let diffStr = (yearDiff > 0) ? ' years ago' : (monthDiff > 0) ? ' months ago' : (dayDiff) ? ' days ago' : ' hours ago';
 return (
     <div className="manual_block block">
         {image && 
         <Image classes="block__image" 
         //src={image}
         src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg"
         placeholderImg="https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load" />
         }
         <Text link={false} classes="block__timestamp" text={diff + diffStr}></Text>
         <Text classes="manual_block__text" text={item_data.text} link={false} />
         <Text classes="manual_block__text" text={item_data.link_text} url={item_data.link} link={true}  />
     </div>
 )
}

const mapStateToProps = (state: RootState) => ({
    // reducer: state.reducer
})
export default connect(mapStateToProps)(Manual)