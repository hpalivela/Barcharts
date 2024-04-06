import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const Bars = () => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

  const maxValue_U = Math.max(...uData);
  const maxValue_P = Math.max(...pData);
  let thresholdVal_U = (maxValue_U * 0.6);
  let thresholdVal_P = (maxValue_P * 0.6);

  // console.log(thresholdVal_U + 'threshold U')
  // console.log(thresholdVal_P + 'threshold P')



  const function_U = (uData) => {
    let threshold_U = [];
    for (let i = 0; i < uData.length; i++) {
      if (thresholdVal_U <= uData[i]) {
        threshold_U.push((uData[i]))
      }
    }
    // console.log(threshold_U)
    return threshold_U
  }
  const function_P = (pData) => {
    let threshold_P = [];
    for (let i = 0; i < pData.length; i++) {
      if (thresholdVal_P <= pData[i]) {
        threshold_P.push((pData[i]))
      }
    }
    return threshold_P
    // console.log(threshold_P);
  }
  const threshold_u = function_U(uData);
  const threshold_p = function_P(pData);

  console.log(threshold_u)
  console.log(threshold_p)
  // console.log(maxValue_P*0.6);

  const getColor = (x) => {
    x.map((val, index) => {
      if (threshold_u.includes(val)) {
        return true
      }
      else {
        return false
      }
    })
  }
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ];

  return (
    <div>
      <BarChart
        width={500}
        height={300}
        series={[
          {
            data: pData,
            label: 'pv',
            id: 'pvId',
            yAxisKey: 'leftAxisId',
            color: getColor(pData) ? 'red' : 'yellow'
          },
          {
            data: uData,
            label: 'uv',
            id: 'uvId',
            yAxisKey: 'rightAxisId',
            color: 'green'
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
        rightAxis="rightAxisId"
      />
    </div>
  )
}

export default Bars





