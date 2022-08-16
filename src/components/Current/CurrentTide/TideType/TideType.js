import {React} from 'react';
import { useSelector } from 'react-redux';
import { selectTidesStatus } from '../../../../containers/TidesResult/TidesResultSlice';

export const TideType = () => {

const tidesStatus = useSelector(selectTidesStatus);

if (tidesStatus !== 'succeeded'){
    return (
        <>
        </>
    ) 
} else {

    const currentTideClasses = document.getElementsByClassName('currentTideColumn')[0];
    console.log(currentTideClasses);


    return (
        <div className="TideType">

        </div>
    )
}
}
