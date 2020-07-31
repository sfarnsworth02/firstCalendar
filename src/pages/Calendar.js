import React from 'react';
import '../components/calendar/cal.css';
import Month from '../components/calendar/Month';
import Week from '../components/calendar/Week';
import Day from '../components/calendar/Day';

export default class Calendar extends React.Component
{
    render()
    {
        return(
            <div className='calendar-container'>
                
                <Month>
                    <Week className='week-one'>
                        <Day className='day-one'>1</Day>
                        <Day className='day-two'>2</Day>
                        <Day className='day-three'>3</Day>
                        <Day className='day-four'>4</Day>
                        <Day className='day-five'>5</Day>
                        <Day className='day-six'>6</Day>
                        <Day className='day-seven'>7</Day>
                    </Week>
                    <Week className='week-two'>
                        <Day className='day-one'>1</Day>
                        <Day className='day-two'>2</Day>
                        <Day className='day-three'>3</Day>
                        <Day className='day-four'>4</Day>
                        <Day className='day-five'>5</Day>
                        <Day className='day-six'>6</Day>
                        <Day className='day-seven'>7</Day>
                    </Week>
                    <Week className='week-three'>
                        <Day className='day-one'>1</Day>
                        <Day className='day-two'>2</Day>
                        <Day className='day-three'>3</Day>
                        <Day className='day-four'>4</Day>
                        <Day className='day-five'>5</Day>
                        <Day className='day-six'>6</Day>
                        <Day className='day-seven'>7</Day>
                    </Week>
                    <Week className='week-four'>
                        <Day className='day-one'>1</Day>
                        <Day className='day-two'>2</Day>
                        <Day className='day-three'>3</Day>
                        <Day className='day-four'>4</Day>
                        <Day className='day-five'>5</Day>
                        <Day className='day-six'>6</Day>
                        <Day className='day-seven'>7</Day>
                    </Week>
                </Month>
            </div>
        )
    }
}