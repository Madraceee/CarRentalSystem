import React from 'react';
import Button from './Button';
import "../css/Overlay.css";

function Overlay({status,msg,handleBack}) {
    return (
        <div className="overlay">
            <div className={`overlay-msg `+status}>
                {status ? (<h3>Success</h3>) : (<h3>Failure</h3>)}
                <span>{msg}</span>
                <Button
                    BtnText={"Back"}
                    size={"medium"}
                    color="White"
                    method={handleBack}
                />
            </div>
        </div>
    )
}

export default Overlay
