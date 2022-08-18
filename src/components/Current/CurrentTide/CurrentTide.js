import {React} from 'react';
import { TidesGraphSG } from '../../Tides/TidesGraphSG/TidesGraphSG';
import { TideType } from './TideType/TideType';

export const CurrentTide = () => {

return (
    <>
        <TidesGraphSG  
            hourStart='0' 
            hourEnd='23'/>
        <TideType />
    </>
)
}
