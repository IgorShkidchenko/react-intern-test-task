import React from 'react'

class LanguageRow extends React.Component {
  render() {
    const percentage = this.props.percentage
    const language_name = this.props.language_name

    return (
      <tr>
        <td>{language_name}: {percentage}%</td>
      </tr>
    )
  }
}

export default LanguageRow
