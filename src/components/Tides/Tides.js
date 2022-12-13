import {React} from 'react';
// import { TidesStatus } from './TidesStatus/TidesStatus';
import { TidesGraphSG } from './TidesGraphSG/TidesGraphSG';
import { TidesSummarySG } from './TidesSummary/TidesSummarySG';

export const Tides = ({hourStart, hourEnd, dayNo, timeDifference}) => {
    return (
        <div className="TideResult">
            {/* <TidesStatus /> */}

            <TidesGraphSG 
                hourStart={hourStart} 
                hourEnd={hourEnd}
                dayNo={dayNo} 
                timeDifference={timeDifference}
            />
            <TidesSummarySG 
                dayNo={dayNo|| 0}
                timeDifference={timeDifference}
            />

        </div>
    )
}

