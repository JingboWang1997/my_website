import React, { Component } from 'react';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          subject: "",
          body: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(state) {
        return (event) => {
          console.log(event.target.value)
          this.setState({ [state]: event.target.value });
        }
      }

    render() {

        if(this.props.data){
        var name = this.props.data.name;
        var street = this.props.data.address.street;
        var city = this.props.data.address.city;
        var state = this.props.data.address.state;
        var zip = this.props.data.address.zip;
        var phone= this.props.data.phone;
        var email = this.props.data.email;
        var message = this.props.data.contactmessage;
        }

        return (
            <section id="contact">

                <div className="row section-head">

                    <div className="two columns header-col">

                        <h1><span>Get In Touch.</span></h1>

                    </div>

                    <div className="ten columns">

                        <p className="lead">{message}</p>

                    </div>

                </div>

                <div className="row">
                    <div>
                        <fieldset>
                            <div>
                                <label htmlFor="contactName">Name</label>
                                <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange('name')}/>
                            </div>

                            <div>
                                <label htmlFor="contactSubject">Subject</label>
                                <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange('subject')}/>
                            </div>

                            <div>
                                <label htmlFor="contactMessage">Message</label>
                                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={this.handleChange('body')}></textarea>
                            </div>

                            <div>
                                <button 
                                    onClick={() => {
                                        document.location.href = `mailto:wjbjimmy@gmail.com?subject=[${this.state.name.toUpperCase()}]: ${this.state.subject}&body=${this.state.body}`
                                    }}
                                >
                                    Submit
                                </button>
                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif" />
                                </span>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
