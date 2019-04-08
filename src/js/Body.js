import React from "react";
import ReactDOM from "react-dom";

class Body extends React.Component {
   constructor() {
      super();
      this.state = {
      }
   }
   render() {
      return (
         <div className="content_wrapper">
         </div>
      );
   }
}


export default Body;
ReactDOM.render(<Body/>, document.getElementById('root'));