import {React} from 'react';
import { TidesGraph} from '../../TidesResult/TidesGraph/TidesGraph';

export const CurrentTide = () => {

return (
    <div className="current currentTide">
        <h3>Tide</h3>
        <TidesGraph className="currentTide"/>
    </div>
)
}
