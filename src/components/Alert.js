import React from 'react'

function Alert(props) {
return (
    <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert- warning alert-dismissible fade show`} style={{color:(props.mode==='light'?'black':'white'),backgroundColor:'#97c597'}} role="alert">
    <strong>{props.alert.type}</strong>  {props.alert.msg}
    </div>}
</div>
)
}

export default Alert
