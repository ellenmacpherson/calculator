import React from 'react'
import ResultScreen from './ResultScreen.js'
import ComputationScreen from './ComputationScreen.js'

const Screen = (props) => (
    <section className='screen'>
        <ResultScreen>{props.result}</ResultScreen>
        <ComputationScreen>{props.equation}</ComputationScreen>
    </section>
)

export default Screen;