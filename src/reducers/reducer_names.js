import * as d3 from 'd3';
import moment from 'moment';


export const dennyd=[];
export const harryd=[];
export const hod=[];
export const kayd=[];
export const loved =[];

d3.csv('./dataSet/denny.csv', function(d){
  const data=[d];
  for(let i=0; i< data.length; i++){

        let startTime = moment.utc(`${data[i].startTime} ${data[i].startap}`,"HH:mm:ss a");
        let endTime = moment.utc(`${data[i].stopTime} ${data[i].stopap}`,"HH:mm:ss a");
        let duration = moment.duration(endTime.diff(startTime));
        let hours = parseInt(duration.asHours());
        if(hours>0)
          dennyd.push(hours);
        if(hours<0){
          hours= hours* (-1);
          dennyd.push(hours);
        }

    }
});


d3.csv('./dataSet/harry.csv', function(d){
  const data=[d];
  for(let i=0; i< data.length; i++){

        let startTime = moment.utc(`${data[i].startTime} ${data[i].startap}`,"HH:mm:ss a");
        let endTime = moment.utc(`${data[i].stopTime} ${data[i].stopap}`,"HH:mm:ss a");
        let duration = moment.duration(endTime.diff(startTime));
        let hours = parseInt(duration.asHours());
        if(hours>0)
          harryd.push(hours);
        if(hours<0){
          hours= hours* (-1);
          harryd.push(hours);
        }

    }
});

d3.csv('./dataSet/ho.csv', function(d){
    const data=[d];
    for(let i=0; i< data.length; i++){

          let startTime = moment.utc(`${data[i].startTime} ${data[i].startap}`,"HH:mm:ss a");
          let endTime = moment.utc(`${data[i].stopTime} ${data[i].stopap}`,"HH:mm:ss a");
          let duration = moment.duration(endTime.diff(startTime));
          let hours = parseInt(duration.asHours());
          if(hours>0)
            hod.push(hours);
          if(hours<0){
            hours= hours* (-1);
            hod.push(hours);
          }

      }
  });
  d3.csv('./dataSet/kay.csv', function(d){
    const data=[d];
    for(let i=0; i< data.length; i++){

          let startTime = moment.utc(`${data[i].startTime} ${data[i].startap}`,"HH:mm:ss a");
          let endTime = moment.utc(`${data[i].stopTime} ${data[i].stopap}`,"HH:mm:ss a");
          let duration = moment.duration(endTime.diff(startTime));
          let hours = parseInt(duration.asHours());
          if(hours>0)
            kayd.push(hours);
          if(hours<0){
            hours= hours* (-1);
            kayd.push(hours);
          }

      }
  });



  d3.csv('./dataSet/love.csv', function(d){
    const data=[d];
    for(let i=0; i< data.length; i++){

          let startTime = moment.utc(`${data[i].startTime} ${data[i].startap}`,"HH:mm:ss a");
          let endTime = moment.utc(`${data[i].stopTime} ${data[i].stopap}`,"HH:mm:ss a");
          let duration = moment.duration(endTime.diff(startTime));
          let hours = parseInt(duration.asHours());
          if(hours>0)
            loved.push(hours);
          if(hours<0){
            hours= hours* (-1);
            loved.push(hours);
          }

      }
  });




export default function() {
  return [
    { name: "Denny", data: dennyd },
    { name: "Harry", data: harryd },
    { name: "Ho" },
    { name: "Kay" },
    { name: "Love" }
  ];
}

