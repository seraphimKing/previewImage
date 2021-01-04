
import PreviewImageDetail from './Detail'
import ReactDOM from 'react-dom'
import { CONFIG_MAP } from './constant'
/**
 * 操作区默认样式
 */
const getOperatDefaults = () => {
  const arr =  Object.values(CONFIG_MAP).map(item => {
    return {
      [item.name]: true
    }
  });
  return Object.assign({}, ...arr)
}

const defaultOptions = {
  images: [],
  index: 0,
  maskCloseable: false,
  configSlot: ''
}

const PreviewImage = (options) => {
  const operatArea = options && options.config ? options.config : getOperatDefaults()
  const config = {
    ...defaultOptions,
    ...options,
    operatArea: {...operatArea}
  }
  let wrapper = document.getElementById('previewImageWrapper')
  if (!wrapper) {
    wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'previewImageWrapper')
    document.body.appendChild(wrapper)
  }

  const closePreview = () => {
    ReactDOM.unmountComponentAtNode(wrapper)
  }
  ReactDOM.render(<PreviewImageDetail {...{wrapper, options: config, closePreview}} />, wrapper)
}

export default PreviewImage