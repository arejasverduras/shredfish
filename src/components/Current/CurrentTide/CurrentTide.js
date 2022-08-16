import {React} from 'react';
import { TidesGraph } from '../../Tides/TidesGraph/TidesGraph';
import { TideType } from './TideType/TideType';

export const CurrentTide = () => {

return (
    <div className="current currentTide">
        <TidesGraph className="currentTide"/>
        <TideType />
    </div>
)
}
