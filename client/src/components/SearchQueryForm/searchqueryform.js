import React, { Component } from 'react';
import Axios from 'axios';

class SearchQueryForm extends Comnponent {

    state = {
        make: ""
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <form className="form">
                    <label>
                        Make: <input type="text" name="make" value={this.state.make} onChange={this.handleInputChange}/>
                    </label>
                </form>
            </div>
        );
    }


}

export default SearchQueryForm;