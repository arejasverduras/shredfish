import React from 'react';
import { useSelector } from 'react-redux';
import { selectTidesStatus, selectTidesData } from '../../../containers/TidesResult/TidesResultSlice';
import { timestampToTime } from '../../../features/features';

export const TidesSummary = () => {
    const tidesStatus = useSelector(selectTidesStatus);
    const tidesData = useSelector(selectTidesData);

    if (tidesStatus !== 'succeeded') {
        return (
            <div className="NoTidesSummary">
                <p>Summary Loading status : {tidesStatus}</p>
            </div>
        )
        } 

    const tideResultInfo = tidesData.tides.filter((hourdata) => hourdata.type !== 'NORMAL');

        const tideLows = tideResultInfo.filter((peak) => peak.type === 'LOW');
        const tideHighs = tideResultInfo.filter((peak) => peak.type === 'HIGH');


        const tideLowCells= tideLows.map((low, index) =>
        <>
        <td key={index}>{low.type}</td>
        <td key={index+10}>{timestampToTime(low.timestamp)}</td>
        </>
        )

        const tideHighCells= tideHighs.map((high, index) =>
        <>
        <td key={index+100}>{high.type}</td>
        <td key={index+1000}>{timestampToTime(high.timestamp)}</td>
        </>
        )
            
        return (
                <div className="TidesSummary">
                    <table>
                        <tbody>
                            <tr>
                                {tideLowCells}
                            </tr>
                            <tr>
                                {tideHighCells}
                            </tr>
                        </tbody>
                    </table>
                </div>
        )
}