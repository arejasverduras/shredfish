import React from 'react';
import { useSelector } from 'react-redux';
import { selectTidesStatus } from '../../../containers/TidesResult/TidesResultSlice';

export const TidesStatus = () =>{
    const tidesStatus = useSelector(selectTidesStatus);
    
    return (
        <div className='TidesStatus'>
            <h3>{tidesStatus !== 'succeeded'?'No Tides Available': 'Tides Available'}</h3>
            <p>{'Loading status: '}{tidesStatus}</p>
        </div>
    )
}