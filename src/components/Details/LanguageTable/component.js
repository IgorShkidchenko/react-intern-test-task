import React from 'react'

const LanguageTableComponent = ({ rows }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Languages:</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default LanguageTableComponent
