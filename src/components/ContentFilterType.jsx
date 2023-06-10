// this component is used to filter content base on the type of content user want to see for ex tv show movies short film

import React from 'react'

const ContentFilterType = () => {
  return (
    <div className='content-filter'>
        <ul>
            <li>TV Series</li>
            <li className='active'>Movies</li>
            <li>Short Films</li>
        </ul>
    </div>
  )
}

export default ContentFilterType