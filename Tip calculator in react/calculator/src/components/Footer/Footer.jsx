import React from 'react'
import stl from './Footer.module.css'
function Footer(props) {
  return (
    <>
      <button onClick={props.calculate}>Calculate Total Tip</button>
    <div>
       <table>
        <thead>
            <tr>
              <th>Total Customer</th>
              <th>Tip</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.count}</td>
            <td>{props.total}</td>
          </tr>
        </tbody>
       </table>
    </div>
     <div className={stl.footer}>
          <h3>@2022-Tip-Calculator</h3>
     </div>
    </>
  )
}

export default Footer
