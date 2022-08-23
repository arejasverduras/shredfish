import {React} from 'react';
// import { TidesStatus } from './TidesStatus/TidesStatus';
import { TidesGraphSG } from './TidesGraphSG/TidesGraphSG';
import { TidesSummarySG } from './TidesSummary/TidesSummarySG';

export const Tides = ({hourStart, hourEnd, dayNo}) => {
    return (
        <div className="TideResult">
            {/* <TidesStatus /> */}
            <TidesGraphSG 
                hourStart={hourStart} 
                hourEnd={hourEnd} />
            <TidesSummarySG dayNo={dayNo|| 0}/>
        </div>
    )
}

