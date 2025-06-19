import React from 'react'

interface CustomButtonProps
{
    Label: string;
    Color: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({Label, Color})=>{
    return (

        <button style={{color: Color}} className = "custombutton">
            {Label}
        </button>
    )
}
export default CustomButton;