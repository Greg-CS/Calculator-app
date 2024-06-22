"use client"

import {useState} from 'react'
import { sum, subtract, multiply, divide } from '../../../../utils/math'


export const CalculatorBox = () => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState('');

    const [switched, setSwitched] = useState(false);

    const handleMathFunction = () => {
        switch (operation) {
            case 'sum':
                setResult(sum(first, second));
                break;
            case 'subtract':
                setResult(subtract(first, second));
                break;
            case 'multiply':
                setResult(multiply(first, second));
                break;
            case 'divide':
                setResult(divide(first, second));
                break;
            default:
                break;
        }
    }

    const clearAll = () => {
        setFirst(0);
        setSecond(0);
        setResult(0);
        setOperation('');
    }

return (
    <div>
        <div className='border border-black grid justify-center rounded-md p-10'>
            <div className='pb-4 font-bold text-center'>
                Calculator
            </div>

            <div className='text-end font-bold pb-4'>
                Result: {result}
            </div>

            <div className='gap-4 flex justify-end'>
                <span className={!switched ? "font-bold" : ""}>
                {first}
                </span>
                <span>
                {operation}
                </span>
                <span className={switched ? "font-bold" : ""}>
                {second}
                </span>
            </div>

            <div className='flex justify-around gap-4'>
                <div className='grid gap-4'>
                    <button onClick={() => setOperation("sum")} className='p-2 w-[5vw] hover:bg-slate-300 rounded-md transition-all flex items-center justify-center border '>+</button>
                    <button onClick={() => setOperation("subtract")} className='p-2 w-[5vw] hover:bg-slate-300 rounded-md transition-all flex items-center justify-center border '>-</button>
                    <button onClick={() => setOperation("multiply")} className='p-2 w-[5vw] hover:bg-slate-300 rounded-md transition-all flex items-center justify-center border '>x</button>
                    <button onClick={() => setOperation("divide")} className='p-2 w-[5vw] hover:bg-slate-300 rounded-md transition-all flex items-center justify-center border '>÷</button>
                </div>
                <div className='grid gap-4 justify-items-center'>
                    <div className='grid grid-cols-3 gap-4'>
                        {switched ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                            <button key={number} onClick={() => setSecond(number)} className='p-2 w-[5vw] hover:bg-slate-300 rounded-md transition-all flex items-center justify-center border'>{number}</button>
                        ))
                        :
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                            <button key={number} onClick={() => setFirst(number)} className='p-2 w-[5vw] hover:bg-slate-300 rounded-md transition-all flex items-center justify-center border'>{number}</button>
                        ))
                        }
                    </div>
                    <div className='flex gap-4'>
                        <button onClick={() => setFirst(0)} className='p-2 w-[5vw] hover:bg-slate-300 rounded-md transition-all flex items-center justify-center border'>0</button>
                        <button onClick={() => setSwitched(!switched)} className={switched ? 'p-2 w-[5vw] hover:bg-slate-300 rounded-md transition-all flex items-center justify-center border' : 'p-2 w-[5vw] bg-slate-300 rounded-md transition-all flex items-center justify-center border'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='grid gap-4'>
                    <button onClick={clearAll} className='p-2 w-[5vw] hover:bg-slate-300 rounded-md transition-all flex items-center justify-center border '>CC</button>
                    <button className='p-2 w-[5vw] hover:bg-slate-300 rounded-md transition-all flex items-center justify-center border'>
                    .
                    </button>
                    <button className='p-2 w-[5vw] hover:bg-slate-300 rounded-md transition-all flex items-center justify-center border'>
                    .
                    </button>
                    <button onClick={handleMathFunction} className='p-2 w-[5vw] hover:bg-slate-300 rounded-md transition-all flex items-center justify-center border'>
                        =
                    </button>
                </div>
            </div>
        </div>
        <div className='pt-4 text-center'>
            <span>Note:</span>
            <ul>
                <li>Click on the number to set the value</li>
                <li>Click on the operator to set the operation</li>
                <li>Click on the switch to set the second value</li>
                <li>Click on the equal sign to get the result</li>
            </ul>
        </div>
    </div>
);
}
