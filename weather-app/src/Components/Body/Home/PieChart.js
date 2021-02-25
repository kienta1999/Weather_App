import {Pie} from 'react-chartjs-2';

function PieChart(props) {
    const state = {
        labels: ['Humidity', 'No Humidity'],
        datasets: [
          {
            label: 'Humidity Percentage',
            backgroundColor: [
              '#B21F00',
              '#FFFFFF'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#000000'
            ],
            data: [Number(props.humidity), 100 - Number(props.humidity)]
          }
        ]
      }
    return (
      <div className="center graph">
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Humidity today',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
  
  export default PieChart;