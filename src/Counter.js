import React from 'react';
class Counter extends React.Component {
    static defaultProps = {color: 'orange'}
    constructor(props) {
       super(props);
       this.state = {count: 0, isHiding: false}
       this.decrement = this.decrement.bind(this);
       this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState({count: this.state.count +1})
    }
    decrement() {
        this.setState({count: this.state.count -1})
    }
    componentDidMount(){
        console.log('COMP MOUNTED')
    }
    componentDidUpdate(){
        console.log('COMP UPDATED')
    }
    
    // state = {
    //     count: 0
    // }
    render(){
        console.log('COMP RENDERED')
       const {color} = this.props;
       const {count} = this.state;
        return (
            <div>
                <h3>Count is: {count}</h3>
                <h1 style={{color: color}}>I AM COUNTER</h1>
                <button onClick={this.increment}>add 1</button>
                <button onClick={this.decrement}>subtract 1</button>
            </div>
        )
    }
}

export default Counter;