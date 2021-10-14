import React, { Component } from "react";

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Kahlil"
        }
        console.log('LifeCycleB constructor')
    }
    static getDerivedStateFromProps(props, state) {
       console.log('LifecycleB getDrivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleB componentDidMount')

    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    shouldCompnentUpdate () {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('LifeCycleB getSnapshotBeforeUpdate')  
      return null
    }

    componentDidUpdate() {
        console.log('LifecycleB  componentDidUpdate')
    }
    render() {
       
        console.log('LifeCycleB render')
        return    <div>Lifecycle B</div>
    }
}
export default LifeCycleB