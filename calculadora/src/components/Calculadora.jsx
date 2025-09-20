import React from 'react'
import './Calculadora.css'

export default function Calculadora() {
    return (    

            <div className='wrapper'>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
                <div>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                </div>
                <div>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                </div>
                <div>
                    <button>AC</button>
                    <button>+/-</button>
                    <button>%</button>
                </div>
                <div>
                    <button>+</button>
                    <button>-</button>
                    <button>/</button>
                </div>
                <div>
                    <button>x</button>
                    <button>,</button>
                    <button>=</button>
                </div>
            </div>
    )
}   