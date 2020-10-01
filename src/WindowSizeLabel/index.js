import React from 'react'
import styles from '../styles.module.css'

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
      <span className={styles.test}> {this.state.windowSize.width}x{this.state.windowSize.height} </span>
    )
  }
}
