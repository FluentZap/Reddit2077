import React from 'react';

class NewPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  }

  render(){
    return (
      <div>
        <p>This is the NewTicketControl component!</p>
        <strong onClick={this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default NewTicketControl;



import React from 'react';

class NewPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(){
  //   this.setState({formVisibleOnPage: true});
  //   console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  // }

  render(){
    return (
      <ConfirmationQuestions />
    );
  }
}

export default NewTicketControl;