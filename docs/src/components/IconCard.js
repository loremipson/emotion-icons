import React from 'react'
import copy from 'copy-to-clipboard'

export class IconCard extends React.PureComponent {
  mounted = false
  state = {copied: false}

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false
  }

  get iconImport() {
    return `emotion-icons/${this.props.pack}/${this.props.name}`
  }

  copy = () => {
    copy(this.iconImport)
    this.setState({copied: true})

    setTimeout(() => {
      if (this.mounted) {
        this.setState({copied: false})
      }
    }, 2000)
  }

  render() {
    const {Icon, name} = this.props
    return (
      <div className="icon-card" onClick={() => this.copy()}>
        <div>
          {Icon && <Icon height="48" width="48" title={`${name} icon`} />}
        </div>
        <div className="name">{name}</div>
        <code>{this.state.copied ? 'Copied!' : this.iconImport}</code>
      </div>
    )
  }
}

export default IconCard