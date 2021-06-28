import React from 'react';
import './nav.css';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {name: ''};
      this.handleChang = this.handleChang.bind(this);
      this.handleSubmi = this.handleSubmi.bind(this); 
    }
  
    handleChange(event) {    this.setState({name: event.target.name });  }
    handleSubmit(event) {
      alert('Your name ' + this.state.name + ' was submitted');
      event.preventDefault();
    }
    handleChang(event) {    this.setState({value: event.target.value });  }
    handleSubmi(event) {
      alert('Your Country and Email ' + this.state.value + ' was submitted');
      event.preventDefault();
    }
  
    render() {
      return (
      <div className='form'>
        <h1>Reach Us</h1>
        <p>Get the online marketing news and tips to grow your brand in, the AdRoll newsletter.</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Country : </p>
              <select name="apple" onChange={this.handleChange}>
                 <option value="">--Please choose an option--</option>
                 <option value="fuji">India</option>
                 <option value="jonathan">America</option>
                 <option value="honey-crisp">other</option>
             </select>
           </label>  
        </form>
        <form onSubmit={this.handleSubmi}>
        <label>
            E-mail:
            <input type="text" value={this.state.value} onChange={this.handleChang} />        </label>
            <input type="submit" value="Submit" />
            </form>  
        <p>You're opting in to NextRoll. Inc., marketing communications. We value your privacy, and you can learn about our data communication practices in our Privacy Notice and CCPA Notice at Collection. Remember you can unsubscribe any time.</p>
       
      </ div>  
      );
    }
  }

  export default NameForm;