import React from 'react'

const Plans = () => {
  return (
    <div className='subscription-plan'>
       <table>
        <tr>
            <th></th>
            <th>Monthly Price</th>
            <th>Resolution</th>
            <th>Number of Devices</th>
            <th>Downloads</th>
        </tr>

        <tr>
            <td><button>Basic</button></td>
            <td>₹149</td>
            <td>720p</td>
            <td>1</td>
            <td><img src="../../public/assets/notavailable.svg" alt='' /></td>
        </tr>

        <tr>
            <td><button>Standard</button></td>
            <td>₹500</td>
            <td>1080p</td>
            <td>2</td>
            <td><img src="../../public/assets/available.svg" alt='' /></td>
        </tr>

        <tr>
            <td><button>Premium</button></td>
            <td>₹800</td>
            <td>4K + HDR</td>
            <td>4</td>
            <td><img src="../../public/assets/available.svg" alt='' /></td>
        </tr>




       </table>
    </div>
  )
}

export default Plans;