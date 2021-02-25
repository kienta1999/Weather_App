import {Bar} from 'react-chartjs-2';

function BarChart(props) {
    const state = {
        labels: ['Minimum temp', 'Current temp', 'Maximum Temperture'],
        datasets: [
          {
            label: 'Temperture',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: props.data
          }
        ]
      }
    return (
      <div className="center graph">
         <Bar
            data={state}
            options={{
              title:{
                display:true,
                text:'Temperture today',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              },
              offset: false
            }}
          />
      </div>
    );
  }
  
  export default BarChart;
  
