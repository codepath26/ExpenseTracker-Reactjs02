import ChartBar from './ChartBar'
import './Chart.css'
const Chart = (props)=>{
  const dataPointsValues = props.dataPoints.map(datapoint => datapoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {
        props.dataPoints.map(datapoint =>(
          <ChartBar 
          key={datapoint.label}
          value={datapoint.value}
          maxValue = {totalMaximum}
          label = {datapoint.label} 
          />
        ))
      }
    </div>
  )
}
export default Chart;