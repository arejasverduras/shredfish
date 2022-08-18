import {React} from 'react';
// import { TidesStatus } from './TidesStatus/TidesStatus';
import { TidesGraphSG } from './TidesGraphSG/TidesGraphSG';
import { TidesSummary } from './TidesSummary/TidesSummary';
import { TidesSummarySG } from './TidesSummary/TidesSummarySG';

export const Tides = () => {
    return (
        <div className="TideResult">
            {/* <TidesStatus /> */}
            <TidesGraphSG />
            {/* <TidesSummary /> */}
            <TidesSummarySG />
        </div>
    )
}

