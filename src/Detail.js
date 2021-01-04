import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { addEvent, removeEvent } from '../utils/domFun'
import { CONFIG_MAP, unitDefault, unitWhellDefault } from './constant'
import './index.css';
export default class PreviewImageDetail extends React.Component {
  constructor(props) {
    super(props)
    const { options } = props;
    this.state = {
      dynamicIndex: options.index,
      dynamicScale: 1,
      dynamicRotate: 0,
      dynamicArrowH: false,
      dynamicArrowV: false,
      dynamicX: 0,
      dynamicY: 0,
      isMoving: false,
      images: options.images,
    }
    this.initX = 0
    this.initY = 0
    this.posInitX = 0
    this.posInitY = 0
  }



  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this)
    addEvent(dom, 'mouseup', this.handleMouseUp)
    addEvent(dom, 'mouseup', this.handleMouseUp)
  }

  componentWillUnmount() {
    const dom = ReactDOM.findDOMNode(this)
    removeEvent(dom, 'mouseup', this.handleMouseUp)
    removeEvent(dom, 'touchend', this.handleMouseUp)
    this.setState({ isMoving: false });
  }

  removeChild = () => {
    const { closePreview } = this.props
    if (typeof closePreview === 'function') {
      closePreview();
    }
  }

  preAction = () => {
    const { images, dynamicIndex } = this.state
    const len = images.length
    this.setState({
      dynamicIndex: (dynamicIndex + len - 1) % len
    })
  }

  nextAction = () => {
    const { images, dynamicIndex } = this.state
    const len = images.length
    this.setState({
      dynamicIndex: (dynamicIndex + 1) % len
    })
  }

  plusAction = (num = unitDefault) => {
    const { dynamicScale } = this.state
    const value = typeof num !== 'number' ? unitDefault : num
    if (dynamicScale + value <= 100) {
      this.setState({
        dynamicScale: dynamicScale + value
      })
    } else {
      this.setState({
        dynamicScale: 100
      })
    }
  }

  minusAction = (num) => {
    const { dynamicScale } = this.state
    const value = typeof num !== 'number' ? unitDefault : num
    if (dynamicScale - value >= 0) {
      this.setState({
        dynamicScale: dynamicScale - value
      })
    } else {
      this.setState({
        dynamicScale: 0
      })
    }
  }

  flipLeftAction = () => {
    const { dynamicRotate } = this.state
    const rotate = (dynamicRotate - 90) % 360
    this.setState({
      dynamicRotate: rotate
    })
  }

  flipRightAction = () => {
    const { dynamicRotate } = this.state
    const rotate = (dynamicRotate + 90) % 360
    this.setState({
      dynamicRotate: rotate
    })
  }

  arrowHAction = () => {
    const { dynamicArrowH } = this.state
    this.setState({
      dynamicArrowH: !dynamicArrowH
    })
  }

  arrowVAction = () => {
    const { dynamicArrowV } = this.state
    this.setState({
      dynamicArrowV: !dynamicArrowV
    })
  }

  refreshAction = () => {
    this.setState({
      dynamicScale: 1,
      dynamicRotate: 0,
      dynamicArrowH: false,
      dynamicArrowV: false,
      dynamicX: 0,
      dynamicY: 0,
    })
    this.initX = 0
    this.initY = 0
    this.posInitX = 0
    this.posInitY = 0
  }

  onWheelAction = (e) => {
    const value = Math.abs(e.deltaY);
    if (e.deltaY > 0 && value !== 0) {
      this.plusAction(value * unitWhellDefault)
      return
    }
    if (e.deltaY < 0 && value !== 0) {
      this.minusAction(value * unitWhellDefault)
    }
  }

  handleMouseDown = (e) => {
    const { dynamicX, dynamicY } = this.state
    this.setState({
      isMoving: true,
    })
    this.initX = dynamicX
    this.initY = dynamicY
    this.posInitX = e.clientX
    this.posInitY = e.clientY
    e.preventDefault()
  }

  handleMouseMove = (e) => {
    const { isMoving } = this.state
    if (isMoving) {
      this.setState({
        dynamicX: e.clientX - this.posInitX + this.initX,
        dynamicY: e.clientY - this.posInitY + this.initY
      })
    }
    e.preventDefault()
  }

  handleMouseUp = (e) => {
    if (this.state.isMoving) {
      this.setState({
        isMoving: false
      })
    }
  }

  render() {
    const { dynamicIndex, images, dynamicScale, dynamicRotate, dynamicArrowV, dynamicArrowH, dynamicX, dynamicY } = this.state
    const { options } = this.props
    const config = Object.keys(options.operatArea).map(item => item.toUpperCase())
    return (
      <div
        className="puff-previewImage-box"
        onWheel={this.onWheelAction}
      >
        <div className="puff-image-close" onClick={this.removeChild}>
          <i className="close-image"></i>
        </div>
        <div className="puff-image-content">
          <span
            onMouseDown = {this.handleMouseDown}
            onMouseMove = {this.handleMouseMove}
            onTouchStart = {this.handleMouseDown}
            style={{ transform: `rotateY(${dynamicArrowH ? '180deg' : '0deg'}) rotateX(${dynamicArrowV ? '180deg' : '0deg'})` }}>
            <img
              src={images[dynamicIndex]}
              style={{ transform: `rotate(${dynamicRotate}deg) scale(${dynamicScale}) translate(${dynamicX}px, ${dynamicY}px)` }}
            />
          </span>
        </div>
        <div className="puff-image-footer">
          {config.map(item => {
            return (
              <span key={CONFIG_MAP[item].name} className="puff-image-footer__btn" onClick={this[CONFIG_MAP[item].action]}>
                <a className={classNames({['puff-' + CONFIG_MAP[item].defaultImage]: true, 'puff-icon-common': true})}></a>
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}