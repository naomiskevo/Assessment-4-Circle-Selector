import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => {

    const handleChange = (e) => {
        props.handleClick(e.target.value)
    }


    return (
        <div className="CircleSelector">
            <button 
                className={props.selected === '1' ? 'selected' : 'null'}
                onClick={handleChange}
                value='1'
                >
                {props.selected === '1' ? 'CIRCLE 1 SELECTED' : 'SELECT CIRCLE 1'}
            </button>
            <button 
                className={props.selected === '2' ? 'selected' : 'null'}
                onClick={handleChange}
                value='2'
                >
                {props.selected === '2' ? 'CIRCLE 2 SELECTED' : 'SELECT CIRCLE 2'}
            </button>
            <button 
                className={props.selected === '3' ? 'selected' : 'null'}
                onClick={handleChange}
                value='3'
                >
                {props.selected === '3' ? 'CIRCLE 3 SELECTED' : 'SELECT CIRCLE 3'}
            </button>
            <button 
                className={props.selected === '4' ? 'selected' : 'null'}
                onClick={handleChange}
                value='4'
                >
                {props.selected === '4' ? 'CIRCLE 4 SELECTED' : 'SELECT CIRCLE 4'}
            </button>

        </div>
    )
}


export default CircleSelector;