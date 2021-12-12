import React from 'react'
import {useState} from 'react' 
import './styles.css'
import Algorithms from './Algorithms'
import Alert from './Alert'
const sources = [
    'Binary',
    'Decimal',
    'Octal',
    'HexaDecimal'
]
const NSConverter = () => {
    
    // this state is used to tackle the source system change
    const [source,setSource] = useState('Binary')
    
    // this state is used to tackle the target system to be changed
    const [target,setTarget] = useState('Decimal')

    // function used to change the value of source on change in selection
    const handleSourceChange = (e) => {
           setSource(e.target.value) 
    }
     // function used to change the value of source on change in selection
     const handleTargetChange = (e) => {
        setTarget(e.target.value) 
    }
    // this state is used for maintain the source value
    const [srcVal,setSrcVal] = useState('') 
    // this state is used set the calculated value for the source value
    const [trgVal,setTrgVal] = useState('') 
    // alert messages 
    const [alert,setAlert] = useState(0)
    //changing the value of source 
    const handleSrcVal = (e) => {
        setSrcVal(e.target.value)
    }
    // calculating the answer
    const handleCalculate = () => {
        if(srcVal === '') {
            setAlert(1)
            setTimeout(() => {
                setAlert(0)
            },2000)
        }
        else {
            let ans = Algorithms(srcVal,source,target)
            setTrgVal(ans)
        }
    }
    return (
        <form >
            { alert == 1 ? <Alert /> : ''}
            <fieldset className='nsconverter'>
                <legend className='nstitle'>Number System Converter</legend>
                <div className="container">
                    <div className='item'>
                <label For='source'>From : <select value={source} onChange={handleSourceChange}> {sources.map((src) => <option value={src}>{src}</option>)} </select>  </label>
                <input value={srcVal} id='source' onChange={handleSrcVal}></input>
                    </div>
                    <div className='item'>
                <label For='target'>To : <select value={target} onChange={handleTargetChange}> {sources.map((src) => <option value={src}>{src}</option>)} </select>  </label>
                <input value={trgVal} id='target'></input> 
                    </div>
                </div>
                <button type='button' onClick={handleCalculate}>Calculate</button>
            </fieldset>
        </form>
    )
}

export default NSConverter
