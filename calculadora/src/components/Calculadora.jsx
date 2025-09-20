import React, { useState } from 'react'
import './Calculadora.css'
import { Box, Container } from '@mui/material'
import { enviarResultado, post, get, put, del} from '../api/resultado';


export default function Calculadora() {
    const [num,setNum] = useState(0);
    const [numOld,setNumOld] = useState(0);
    const [operador,setOperador] = useState();

    function inputNum(e){
        var input = e.target.value;
        if (num!==0){
            setNum(num + input);
        } else {
            setNum(input);
        }
    }

    function clear(e) {
        setNum(0);
    }

    function porcentagem() {
        setNum(num / 100);
    }

    function sinal () {
        if (num>0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num))
        }
    }

    function operadorHendle(e) {
        var operadorInput  = e.target.value;
        setOperador(operadorInput);
        setNumOld(num);
        setNum(0);
    }

    function calcular() {
        switch(operador){
            case '/':
                setNum(numOld / num);
                break;
            case '+':
                setNum(parseFloat(numOld) + parseFloat(num));
                break;
            case '-':
                setNum(parseFloat(numOld) - parseFloat(num));
                break;
            case '*':
                setNum(parseFloat(numOld) * parseFloat(num));
                break;
            default:
                setNum(0);
                break;
        } 
        //setNum(0);
        setNumOld(0);

        enviarResultado(num); //jeito meio ruim
        post('/resultados', { resultado: num }); //jeito top
        
        // Buscar histórico
        const historico =  get('/resultados');

        // Atualizar um resultado
        put('/resultados/1', { resultado: 42 }); // '/rsultado/ id:1'

        // Deletar um resultado
        del('/resultados/1'); // '/rsultado/ id:1'

    }

    return (
        <div style={{ marginTop: "3em" }}>
            <Box m={3} />
            <Container maxWidth='xs'>
                <div className='wrapper'>
                <Box m={12} />
                    <h1 className='resultado'>{num}</h1>
                   
                    <div>
                        <button className='' onClick={clear}    >AC</button>
                        <button className='' onClick={sinal}>+/-</button>
                        <button className='' onClick={porcentagem}>%</button>
                        <button className='botaoL' onClick={operadorHendle} value={'/'}>/</button>
                    </div>
                    <div>
                        <button className='gray' onClick={inputNum} value={7}>7</button>
                        <button className='gray' onClick={inputNum} value={8}>8</button>
                        <button className='gray' onClick={inputNum} value={9}>9</button>
                        <button className='botaoL' onClick={operadorHendle} value={'*'}>x</button>
                    </div>
                    <div>
                        <button className='gray' onClick={inputNum} value={4}>4</button>
                        <button className='gray' onClick={inputNum} value={5}>5</button>
                        <button className='gray' onClick={inputNum} value={6}>6</button>
                        <button className='botaoL' onClick={operadorHendle} value={'-'}>-</button>
                    </div>
                    <div>
                        <button className='gray' onClick={inputNum} value={1}>1</button>
                        <button className='gray' onClick={inputNum} value={2}>2</button>
                        <button className='gray' onClick={inputNum} value={3}>3</button>
                        <button className='botaoL' onClick={operadorHendle} value={'+'}>+</button>
                    </div>
                    <div>
                        <button className='gray' onClick={inputNum} value={0}>0</button>
                        <button className='gray' onClick={inputNum} value='.'>.</button>
                        <button className='' onClick={calcular}>=</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}   