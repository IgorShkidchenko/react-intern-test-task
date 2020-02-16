import React from 'react'

const LanguageRow = (props) => {
  const percentage = props.percentage
  const languageName = props.languageName

  return (
    <tr>
      <td>{languageName}: {percentage}%</td>
    </tr>
  )
}

export default LanguageRow
