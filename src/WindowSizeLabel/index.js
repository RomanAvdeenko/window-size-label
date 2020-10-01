import React from 'react'

export class WindowSizeLabel extends React.Component {
  state = {
    windowSize: { width: window.innerWidth, height: window.innerHeight }
  }
  UpdateWindowSizeState = () => {
    this.setState(
      {
        windowSize: { width: window.innerWidth, height: window.innerHeight }
      })
  }
  componentDidMount() {
    window.addEventListener('resize', this.UpdateWindowSizeState)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.UpdateWindowSizeState)
  }
  render() {
    return (
      <label> {this.state.windowSize.width}x{this.state.windowSize.height} </label>
    )
  }
}
