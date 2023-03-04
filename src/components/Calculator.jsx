import React from 'react'
import './Calculator.css'
import { useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import {BsFillMoonStarsFill} from "react-icons/bs"

export default function Calculator() {
    const [bgcolor,setcolor]=useState('rgb(36, 46, 56)');
    const [expression,setExp]=useState('');
    const [back,setback]=useState('white');
    const variable=0;
    const handleChange=()=>{
      if(bgcolor!=='white')
      {
        setcolor('white');
        setback('rgb(36, 46, 56)');
      }
      else{
        setcolor('rgb(36, 46, 56)');
        setback('white');
      }
    }
  return (
    <div className='main'>
        <div className='calculator' style={{background:bgcolor}}>
            <div className='buttons'>
            <button className='button1' onClick={()=>{handleChange()}} style={{background:back}}><BsFillMoonStarsFill color={bgcolor}/></button>
            </div>
            <div className='display'>
            {expression===''?<p style={{color:back}}>{variable}</p>:<p style={{color:back}}>{expression}</p>}
            </div>
            <div className='digits'>
              <div className='row'>
            <button className='digits1' onClick={()=>{setExp(expression.substring(0,expression.length-1));}}><AiOutlineArrowLeft size={30} /></button>
            <button className='digits1' onClick={()=>{setExp('');}}>C</button>
            <button className='digits2' onClick={()=>{setExp(expression+'/');}}>/</button>
            <button className='digits2' onClick={()=>{setExp(expression+'*');}}>*</button>
            </div>
            <div className='row'>
            <button className='digits3' onClick={()=>{setExp(expression+'7');}}>7</button>
            <button className='digits3' onClick={()=>{setExp(expression+'8');}}>8</button>
            <button className='digits3' onClick={()=>{setExp(expression+'9');}}>9</button>
            <button className='digits2' onClick={()=>{setExp(expression+'-');}}>-</button>
            </div>
            <div className='row'><button className='digits3'  onClick={()=>{setExp(expression+'4');}}>4</button>
            <button className='digits3' onClick={()=>{setExp(expression+'5');}}>5</button>
            <button className='digits3' onClick={()=>{setExp(expression+'6');}}>6</button>
            <button className='digits2' onClick={()=>{setExp(expression+'+');}}>+</button></div>
            <div className='row'><button className='digits3' onClick={()=>{setExp(expression+'1');}}>1</button>
            <button className='digits3' onClick={()=>{setExp(expression+'2');}}>2</button>
            <button className='digits3' onClick={()=>{setExp(expression+'3');}}>3</button>
            <button className='digits2' style={{height:'122px'}} onClick={()=>{setExp(eval(expression));}}>=</button></div>
            <div className='row1'><button className='digits3' style={{position:'relative',left:'17px',width:'40%'}} onClick={()=>{setExp(expression+'0');}}>0</button>
            <button className='digits3' style={{position:'relative',left:'52px'}} onClick={()=>{setExp(expression+'.');}}>.</button>
            </div>
            </div>
        </div>
    </div>
  )
}
