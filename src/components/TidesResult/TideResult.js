import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTidesData, selectTidesStatus, getTidesData } from './TidesResultSlice';

export const TideResult = () => {
    const dispatch = useDispatch();
    

    const tides = 'tides?';

    const spotId = '584204204e65fad6a77095f0';
        // ter heijde: 584204204e65fad6a77095f3
    //scheveningen: 584204204e65fad6a77095f0
    //hvh: 584204204e65fad6a77095f2
    const params = `spotId=${spotId}`;
    const days = '&days=1'

    const urlAppendTide = tides+params+days;


    let tidesData = useSelector(selectTidesData)
    const tidesStatus = useSelector(selectTidesStatus);


    // console.log(state.spotdata.wave[0])
        // set current time to hour to integer
        const current = new Date();
        const hour = current.getHours();
        const timeNow = current.toLocaleTimeString();

    useEffect(()=>{
        dispatch(getTidesData(urlAppendTide));
    },[])
    
    
    return (
        <div className="TideResult">
            <h3>Tide</h3>

        </div>
    )
}