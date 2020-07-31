import React from 'react';
import './cal.css';

export default class Month extends React.Component
{
    render()
    {
        return(
            <div className='month-container'>
                {this.props.children}
            </div>
        )
    }
}