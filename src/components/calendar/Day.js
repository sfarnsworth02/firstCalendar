import React from 'react';

export default class Day extends React.Component
{
    render()
    {
        return(
            <div className='day-box'>
                {this.props.children}
            </div>
        )
    }
}