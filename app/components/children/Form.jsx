var React = require("react");

var Form = React.createClass({

	getInitialState: function() {
    return { topic: "" };
 	 },



handleChange: function(event){
	this.setState({
		topic: event.target.value
	});
},

// This handles the submit button function; you are setting the props based on what was inputted in the form so you can pass along
// to the children; this.setState({topic: ""}) clears the input field. We have to preventDefault so the page doesn't refresh.
handleSubmit: function(event){

	event.preventDefault();
	this.props.setTopic(this.state.topic);
	this.setState({topic: ""});

},


render: function() {
    return (
      <div className="panel panel-default">
       		<div className="panel-heading">
          	<h3 className="panel-title text-center">Query</h3>
       		 </div>

        <div className="panel-body text-center">

        	<form onSubmit={this.handleSubmit}>
		        	<div className="form-group">
		              <h4 className=""><strong>Topic</strong></h4>
		        	</div>

				        	<input
				        		value={this.state.topic}
				        		type="text"
				        		id="topic"
				        		onChange={this.handleChange}
				               className="form-control text-center"
				               required
				             />

		        <br/>

				            <button
				               className="btn btn-primary"
				               type="submit">Search
				            </button>
            </form>
            
        </div>

       </div>
      )

}

});

module.exports = Form;