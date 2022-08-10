import React from 'react';
import { useSelector } from 'react-redux';
import { selectTidesStatus, selectTidesData } from '../TidesResultSlice';
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
        console.log(tideResultInfo);

        const tideLows = tideResultInfo.filter((peak) => peak.type === 'LOW');
        const tideHighs = tideResultInfo.filter((peak) => peak.type === 'HIGH');
        console.log(tideHighs);

        const tideLowCells= tideLows.map((low, index) =>
        <>
        <td key={index}>{low.type}</td>
        <td key={index+10}>{timestampToTime(low.timestamp*1000)}</td>
        </>
        )

        const tideHighCells= tideHighs.map((high, index) =>
        <>
        <td key={index}>{high.type}</td>
        <td key={index+10}>{timestampToTime(high.timestamp*1000)}</td>
        </>
        )
            
        return (
                <div className="TidesSummary">
                    <table>
                        <tr>
                            {tideLowCells}
                        </tr>
                        <tr>
                            {tideHighCells}
                        </tr>
                    </table>
                </div>
        )
}