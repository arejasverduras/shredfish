import React from "react";
import { useSelector } from "react-redux";
import { selectForeCast, selectStatus } from "../../../features/ForeCastData/ForeCastDataSlice";
import { selectWindData, selectWindStatus } from "../../../containers/WindResult/WindSlice";
import swellArrow from '../../../up-arrow-swell.svg';
import windArrow from '../../../up-arrow-wind.svg';
import { getHour, windStrength } from "../../../features/features";

export const ForeCastTable = () => {
    const waveData = useSelector(selectForeCast);
    const waveStatus = useSelector(selectStatus);

    const windData = useSelector(selectWindData);
    const windStatus = useSelector(selectWindStatus);

    const {hour, timeNow} = getHour();

    if (waveStatus !== 'succeeded'){
        return (
            <p className="NoForeCastTable">Swell Data not available. Loading swell status: {waveStatus}.</p>
        )
    } else {

  const tableList = waveData.wave.map((hourdata, index ) => 
  <tr key={index} className={index === hour? 'currentHourRow':''}>
      <td className='tableHour'>{index}</td>
      <td className="tableSurf">{hourdata.surf.min}-{hourdata.surf.max}m</td>
      
      {/* Primary swell */}
      <td className="primary pSwell">{hourdata.swells[0].height.toFixed(1)}m </td>
      <td className="primary pPeriod"><b>{hourdata.swells[0].period}s</b></td>
      <td className="primary pDirection">
          <img src={swellArrow} className="swell-arrow" alt="swell-arrow" 
              style={{
              transform: `rotate(${hourdata.swells[0].direction}deg)`
              }} />
      </td>
      
      {/* secondary swell */}
      <td className={hourdata.swells[1].height.toFixed(1)<= 0.09?'':'secondarySwell'}>
          {hourdata.swells[1].height.toFixed(1)<= 0.09? '':hourdata.swells[1].height.toFixed(1)+'m '+hourdata.swells[0].period+'s '}
          {hourdata.swells[1].height.toFixed(1)<= 0.09? '':
          (
              <img src={swellArrow} className="swell-arrow" alt="swell-arrow" 
              style={{
              transform: `rotate(${hourdata.swells[1].direction}deg)`
              }} />
          )}
      </td>

      {/* Wind data */}
     {windStatus === 'succeeded'?
     <>
     <td className="tableWindSpeed">{windData.wind[index].speed.toFixed(0)}</td>
     <td className="tableWindGusts">{windData.wind[index].gust.toFixed(0)}<br/>kph</td>
     <td className={windStrength(windData.wind[index].speed.toFixed(0))}>
        <img 
                src={windArrow}
                className="tableWindArrow"
                alt="windArrow"
                style={{
                    transform: `rotate(${windData.wind[index].direction}deg)`
                    }}
                />
        </td>
        {/* <td className="tableWindRelation">{windData.wind[index].directionType}</td> */}
        </>
     :
     <td>No wind data</td>}
  </tr> )

    return (
        <div className='ForeCastTableHolder'>
        <table className="ForeCastTable">
            <thead>
                <tr>
                    <td className='tableHour'></td>
                    <td>surf</td>
                    <td colSpan="3">Primary swell</td>
                    <td>Secondary swell</td>
                    <td colSpan="4">Wind</td>
                </tr>
            </thead>
            <tbody>
                {tableList}
           </tbody>
        </table>
    </div>
    )
    }
}