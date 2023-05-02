import React from 'react';
import "../css/Button.css";

const Button = ({BtnText,size,color,method})=>{  

    var style = "";
    if(color === "Pink"){
        style = "bgPinkTextWhite";
    }
    else if(color === "White"){
        style = "bgWhiteTextBlack"
    }
    
    return (
        <div className={"Button "+size+" "+style} onClick={method}>
            {BtnText}
        </div>
    );
}

export default Button