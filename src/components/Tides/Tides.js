import {React} from 'react';
// import { TidesStatus } from './TidesStatus/TidesStatus';
import { TidesGraphSG } from './TidesGraphSG/TidesGraphSG';
import { TidesSummarySG } from './TidesSummary/TidesSummarySG';

export const Tides = () => {
    return (
        <div className="TideResult">
            {/* <TidesStatus /> */}
            <TidesGraphSG />
            <TidesSummarySG />
        </div>
    )
}

