import React from 'react'
import loader from './Double Ring-1.4s-171px.svg'

let loaderStyles = {
    backgroundColor: 'none'
}

const Loader = props => {
    return (
        <div className="loadingio-spinner-double-ring-916x1a6gya7">
            <img src={loader} style={loaderStyles} alt={'loader'} />
        </div>
    )
}


export default Loader