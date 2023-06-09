import React from 'react';

export default class ParentFirst extends React.Component {
    state = {
        name: "",
    }
    handleName = (childFirst) => {
        this.setState({ name: childFirst })
    }
    
    render() {
        const {name} = this.state;
        return (
            <div>
                <Child parentCallback={this.handleName} />
                {name}
            </div>
        )
    }
}

class Child extends React.Component {
    onEnter = (event) => {
        this.props.parentCallback(event.target.myname.value);
        event.preventDefault();
    }
 
    render() {
        return (
            <div>
                <form onSubmit={this.onEnter}>
                    <input type="text" name="myname" placeholder="write something" />
                    <input type="submit" value="Click" />
                </form>
            </div>
        )
    }
}