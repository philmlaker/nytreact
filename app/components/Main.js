// Include React
var React = require("react");
var Form = require("./children/Form.jsx");
var Results = require("./children/Results.jsx");


var Main = React.createClass({

getInitialState: function() {
   return {searchTopic: ""}
},

componentDidUpdate: function(prevProps, prevStates){
  if(prevStates.searchTopic !== "6"){
    alert("working!");
  }
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
