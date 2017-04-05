// Include React
var React = require("react");
var Form = require("./children/Form.jsx");
var Results = require("./children/Results.jsx");
import helpers from './utils/helpers.js';

var Main = React.createClass({

getInitialState: function() {
   return {searchTopic: ""}
},

componentDidUpdate: function(prevProps, prevStates){
  if(prevStates.searchTopic !== "6"){
    alert("working!");

    helpers.runQuery(this.state.searchTopic).then((data)=>{
      console.log("this is from Main.Js" + data);

    })
  };
},



 setTopic: function(topic) {
    this.setState({
      searchTopic: topic
    });


  },




    render: function() {




        return (
          <div className ="container">
              <div className = "col-md-6" >
                   <Form setTopic={this.setTopic}/>
              </div>

              <div className="col-md-6">
                <Results searchTopic={this.state.searchTopic}/>
              </div>
          </div>
        );
    }
});

module.exports = Main;
