import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import classes  from '../styles/ColorConverter.css';

const ColorConverter = () => {


    var Hex = '#000000';
    var Rgb = 'rgb(0,0,0)';

    const Convert = (hex) =>
    {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    const Check = () => {
        var label = document.getElementById('label');
        var inputValue = document.getElementById('input').value;

        if (inputValue.length > 6)
        {
            var rgb = Convert(inputValue); 
            document.body.style.backgroundColor = "#FF0000";
            label.textContent = 'Ошибка';
            if (rgb!=null)
            {
                document.body.style.backgroundColor = inputValue;
                label.textContent = ('rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')');
            }
        }        
    }

    return(  
        <div className='defaultDiv'>
            <div className='flexBox'>
                <input id='input' className='defaultInput' min='#000000' max='#FFFFFF' onInput={Check}/>
                <label id='label' className='defaultLabel'>{Rgb}</label>
            </div>
        </div>
    )    
}
export default ColorConverter;