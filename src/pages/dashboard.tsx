import {connect, useDispatch} from 'react-redux';
import Loader from '../UI/atoms/loader';
import { allData, manualData, twitterData, instaData }from '../actions/index';
import { useEffect, useState } from 'react';
import { RootState } from '../store';
import DashboardTemp from '../templates/dashboard';
import {Reducer} from '../types';

type Props = {
    reducer: Reducer
}
type IndividualItem = {
    service_name: string,
    item_published: string
}
const Dashboard = ({reducer}: Props) => {
    const [load, setLoad] = useState(true)
    let dispatch = useDispatch();
    useEffect(() => {
       fetch('https://private-cc77e-aff.apiary-mock.com/posts')
       .then(res => res.json())
       .then(data => {
           const {items} = data;
           if (items) {
               let manualArr = new Array; let instaArr = new Array; let twitterArr = new Array;
               Promise.all(
                   items.map((item: IndividualItem) => {
                   let timestamp = Date.parse(item.item_published)
                   let newItem = {...item, timestamp}
                   return newItem;
               })).then((arr) => {
                    let timeOrderArr = arr.sort((a:any, b:any) => {
                        return b.timestamp - a.timestamp;
                    })
                    Promise.all(
                        timeOrderArr.map((a: IndividualItem) => {
                            if (a.service_name === 'Manual') {
                             manualArr.push(a)
                            //  manualArr.push(a)
                            } else if (a.service_name === 'Instagram') {
                             instaArr.push(a)
                            //  instaArr.push(a)
                            } else if (a.service_name === 'Twitter') {
                             twitterArr.push(a)
                            //  twitterArr.push(a)
                            } 
                        })
                    ).then(() => {
                        let newArr = [timeOrderArr, timeOrderArr].flat()
                        let doubleManual = [manualArr, manualArr].flat()
                        let doubleTwitter = [twitterArr, twitterArr].flat()
                        let doubleInstagram = [instaArr, instaArr].flat()
                        dispatch(allData(newArr))
                        dispatch(manualData(doubleManual))
                        dispatch(twitterData(doubleTwitter))
                        dispatch(instaData(doubleInstagram))
                        // }, 5000)
                    })
               })        
           }
        })
    }, [dispatch])
    useEffect(() => {
        if (reducer.all.length > 0 && reducer.instagram && reducer.twitter && reducer.manual) {
            setLoad(false)
        }
    }, [reducer.all, reducer.instagram, reducer.twitter, reducer.manual])
    return (
        <div>
            {!load ?
            <DashboardTemp />
            :
            <div className="w-full h-full flex-col">
            <Loader color="black" />
            <p className="mt-6">Loading posts...</p>
            </div>
            }
        </div>
    )
}
  
const mapStateToProps = (state: RootState) => ({
    reducer: state.reducer
})

export default connect(mapStateToProps)(Dashboard)