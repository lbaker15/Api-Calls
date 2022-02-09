import { connect } from "react-redux"
import { RootState } from '../../store';
import Text from '../atoms/text';
import Image from '../atoms/image';
import { getTimestamp } from "./helperFunctions";


type Props = {
    item: any,
    imageLoaded?: boolean,
    image: any
}
const Manual = ({item, imageLoaded, image}: Props) => {
 const {item_data} = item;
 const {diff, diffStr}= getTimestamp(item.timestamp)
 return (
     <div className="manual_block block">
         {image && 
         <Image classes="holder-img__image" src={image}
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