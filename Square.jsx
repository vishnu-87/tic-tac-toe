// import React from 'react';

const Square = (props)=> {
    return(
        <div 
        onClick={props.onClick}
        style={{
        border: '4px solid',
        borderColor:'white',
        height:'100px',
        width:'100px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
    
    }}
        className='box'>
            <h5 style={{
                fontSize:'40px',
                color:'white'
            }}>{props.value}</h5>
        </div>
    )
}

export default Square;