class FancyLogs {
  constructor(userColors = {}, enabled = true) {
    this.setEnabled(enabled)
    this.setColors(userColors)
  }

  setColors(userColors) {
    const defaultColors = {
      info: {
        backgroundColor: '#0099CC',
        textColor: '#fff',
      },
      success: {
        backgroundColor: '#007E33',
        textColor: '#fff',
      },
      warning: {
        backgroundColor: '#ff8800',
        textColor: '#fff',
      },
      error: {
        backgroundColor: '#cc0000',
        textColor: '#fff',
      },
    }
    const colors = Object.assign(defaultColors, userColors)
    Object.keys(colors).forEach((type) => {
      this[type] = this.log.bind(this, colors[type])
    })
  }

  setEnabled(enabled) {
    this.enabled = enabled
  }

  log() {
    if (!this.enabled) return
    try {
      const args = Array.prototype.slice.call(arguments)
      const typeInfo = arguments[0]
      const title = arguments[1]
      console.log(`%c ${title} `, `color: ${typeInfo.textColor}; background-color: ${typeInfo.backgroundColor}`, ...args.slice(2))
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default FancyLogs
