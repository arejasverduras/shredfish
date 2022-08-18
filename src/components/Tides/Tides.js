import {React} from 'react';
import { TidesStatus } from './TidesStatus/TidesStatus';
import { TidesGraph } from './TidesGraph/TidesGraph';
import { TidesGraphSG } from './TidesGraphSG/TidesGraphSG';
import { TidesSummary } from './TidesSummary/TidesSummary';

export const Tides = () => {
    return (
        <div className="TideResult">
            <TidesStatus />
            <TidesGraph />
            <TidesGraphSG />
            <TidesSummary />
        </div>
    )
}

