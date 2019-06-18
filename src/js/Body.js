import React,{ PropTypes ,useState, useEffect } from 'react';
import ReactDOM from "react-dom";

function Body(){
   const dateObj = new Date();
   let dateObjOption = (timeZone) => {
      return {timeZone: timeZone, month: 'short', year: "numeric", day: "numeric", hour: "numeric", minute: "numeric"};
   }
   const [timeData, setTimeData] = useState([
      {
         pos: 'NEW YORK',
         time: dateObj.toLocaleString('en-GB', dateObjOption('America/New_York'))
      },
      {
         pos: 'LONDON',
         time: dateObj.toLocaleString('en-GB', dateObjOption('Europe/London'))
      },
      {
         pos: 'BANGKOK',
         time: dateObj.toLocaleString('en-GB', dateObjOption('Asia/Bangkok'))

      },
      {
         pos: 'TAIWAN',
         time: dateObj.toLocaleString('en-GB', dateObjOption('Asia/Taipei'))
      },
      {
         pos: 'SYDNEY',
         time: dateObj.toLocaleString('en-GB', dateObjOption('Australia/Sydney'))
      }
   ]);

   useEffect(() => {
      setInterval(getNowTime, 1000);
   }, []);

   function getNowTime(){
      let dateObj = new Date();
      //console.log('update');
      setTimeData([
         {
            pos: 'NEW YORK',
            time: dateObj.toLocaleString('en-GB', dateObjOption('America/New_York'))
         },
         {
            pos: 'LONDON',
            time: dateObj.toLocaleString('en-GB', dateObjOption('Europe/London'))
         },
         {
            pos: 'BANGKOK',
            time: dateObj.toLocaleString('en-GB', dateObjOption('Asia/Bangkok'))

         },
         {
            pos: 'TAIWAN',
            time: dateObj.toLocaleString('en-GB', dateObjOption('Asia/Taipei'))
         },
         {
            pos: 'SYDNEY',
            time: dateObj.toLocaleString('en-GB', dateObjOption('Australia/Sydney'))
         }
      ])
   }
   return(
      <div className="content_wrapper">
         <div className="title font-large mb-4">WORLD CLOCK</div>
         <div className="border border-dark">
            {timeData.map((timeDataItem, i) =>
            <ClockItem data={timeDataItem} key={'timeDataItem' + i} index={i} length={timeData.length} />)}
         </div>
      </div>
   )
}


function ClockItem({data, index, length}){
   let timeData = data.time.split(',');

   function getThemeColor(index){
      if(index == 0) return 'bg-dark text-white border-bottom';
      if(index == (length - 1)) return 'bg-dark text-white';
      return 'bg-white border-bottom';
   }

   return(
      <div className={"row py-1 px-4 align-items-center no-gutters border-dark " + getThemeColor(index)}>
         <div className="col text-left">
            <div className="h2 mb-1">{data.pos}</div>
            <div className="h5">{timeData[0]}</div>  
         </div>
         <div className="col text-right font-large">{timeData[1]}</div>
      </div>
   )
}

export default Body;
ReactDOM.render(<Body/>, document.getElementById('root'));