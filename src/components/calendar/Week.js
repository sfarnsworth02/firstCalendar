import React from 'react';

export default class Week extends React.Component
{
    render()
    {
        return(
            <div className='week-row'>
                {this.props.children}
            </div>
        )
    }
}