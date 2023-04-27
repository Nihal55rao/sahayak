
import background from '../../assets/back5.png'
import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
    
  } from 'chart.js';

import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
  )


function Linechart ()  {
    const data = {
        labels:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: 'Appointments',
            data:[15, 25, 22, 32, 12, 21, 24],
            backgroundColor: 'transparent',
            borderColor: 'rgb(97, 178, 244)',
            pointBorderColor: 'transparent',
            pointBorderWidth: 3,
            tension: 0.2
            },
        ],
      };
      const options = {
        Plugins: {
          length: false
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            min: 0,
            tricks: {
            }
          }
        }
      };
    // useEffect(()=> {
    //    const fetchData= async()=> {
    //        const url = 'https://jsonplaceholder.typicode.com/comments'
    //       //  const labelSet = [];
    //        const dataSet1 = [];
    //        const dataSet2 = [];
    //      await fetch(url).then((data)=> {
    //          console.log("Api data", data)
    //          const res = data.json();
    //          return res
    //      }).then((res) => {
    //          console.log("ressss", res)
    //         for (const val of res) {
    //             dataSet1.push(val.id);
    //             dataSet2.push(val.postId)
    //             // labelSet.push(val.name)
    //         }
    //         setData({
    //             labels:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    //             datasets: [
    //               {
    //                 label: 'Appointments',
    //                 data:[150, 280, 210, 250, 180, 160, 90],
    //                 borderColor: 'rgb(255, 99, 132)',
    //                 backgroundColor: 'rgba(99, 132, 0.5)',
    //               },
    //               // {
    //               //   label: 'Dataset ID2',
    //               //   data:dataSet2,
    //               //   borderColor: 'rgb(53, 162, 235)',
    //               //   backgroundColor: 'rgba(53, 235, 0.5)',
    //               // },
    //             ],
    //           })
    //         console.log("arrData", dataSet1, dataSet2)
    //      }).catch(e => {
    //             console.log("error", e)
    //         })
    //     }
        
    //     fetchData();
    // },[])
   
    return(
      <div style={{ backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat" ,
      backgroundSize: "cover",backgroundPosition:"left"}}>
        <div style={{width:'60%', height:'40%', }}>
            {
                console.log("dataaaaaaaa", data)
            }
            <Line  data={data} options={options}/>
         </div>
         </div>)
}
export default Linechart;