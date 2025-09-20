import React from 'react'
import './Calculadora.css'
import { Box, Container } from '@mui/material'

export default function Calculadora() {
    return (
        <div style={{ marginTop: "3em" }}>
            <Box m='3' />
            <Container maxWidth='xs'>
                <div className='wrapper'>
                    <div>
                        <button className=''>AC</button>
                        <button className=''>+/-</button>
                        <button className=''>%</button>
                        <button className='botaoL'>/</button>
                    </div>
                    <div>
                        <button className='gray'>7</button>
                        <button className='gray'>8</button>
                        <button className='gray'>9</button>
                        <button className='botaoL'>x</button>
                    </div>
                    <div>
                        <button className='gray'>4</button>
                        <button className='gray'>5</button>
                        <button className='gray'>6</button>
                        <button className='botaoL'>-</button>
                    </div>
                    <div>
                        <button className='gray'>1</button>
                        <button className='gray'>2</button>
                        <button className='gray'>3</button>
                        <button className='botaoL'>+</button>
                    </div>
                    <div>
                        <button className='gray'>0</button>
                        <button className='botaoL'>,</button>
                        <button className=''>=</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}   