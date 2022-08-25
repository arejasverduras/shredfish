import {React} from 'react';
import { TidesGraphSG } from '../../Tides/TidesGraphSG/TidesGraphSG';

export const CurrentTide = () => {

return (
        <TidesGraphSG  
            hourStart={0} 
            hourEnd={24}
            dayNo={0}
        />
)
}
