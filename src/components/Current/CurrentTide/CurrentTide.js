import {React} from 'react';
import { TidesGraph} from '../../TidesResult/TidesGraph/TidesGraph';

export const CurrentTide = () => {

return (
    <div className="current Tide">
        <h3>Tide</h3>
        <TidesGraph />
    </div>
)
}
