import React from 'react';
import './nav.css';

class Form extends React.Component {
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
      alert('Your Data  was submitted');
      event.preventDefault();
    }
  
    render() {
      return (
      <div className='for'>
        <h1>Find Us</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input style={{paddingLeft: '90px',}} type="text" name={this.state.name} onChange={this.handleChange} />        </label>
        </form>
        <form onSubmit={this.handleSubmit}>
          <label>
            Phone Number:    
            <input style={{paddingLeft: '30px',}} type="text" name={this.state.name} onChange={this.handleChange} />       </label>     
        </form>
        <form onSubmit={this.handleSubmit}>
          <label>
            Message:    
            <input style={{height:'80px',width: '230px'}} type="text" name={this.state.name} onChange={this.handleChange} />       </label>     
        </form>
        <form onSubmit={this.handleSubmi}>
        <label >
            E-mail:
            <input   style={{paddingLeft: '85px',}} type="text" value={this.state.value} onChange={this.handleChang} />        </label>
            </form>  
            <input  type="submit" value="Submit" />     
      </ div>  
      );
    }
  }

  export default Form;