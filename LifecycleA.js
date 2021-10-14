import React, { Component } from "react";
import LifeCycleB from "./LifecycleB";

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Kahlil"
        }
        console.log('LifeCycleA constructor')
    }
    static getDerivedStateFromProps(props, state) {
       console.log('LifecycleA getDrivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    shouldCompnentUpdate () {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('LifeCycleA getSnapshotBeforeUpdate')  
      return null
    }

    componentDidUpdate() {
        console.log('LifecycleA  componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
    render() {
        console.log('LifeCycleA render')
        return (<div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>

        <LifeCycleB />
        </div>
        )
    }
}
export default LifeCycleA