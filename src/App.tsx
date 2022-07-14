import React, {useState} from 'react';
import './App.css';
import {Tablo, Value} from "./Tablo";
import {Buttons} from "./Buttons";

function App() {
    let [count, setCount] = useState<number>(0)
    let [filter, setFilter] = useState<string>('')

    function inc() {
        ++count;
        setCount(count)
        setFilter('button_inc_active')
        // setFilter('')
    }

    function reset() {
        count = 0;
        setCount(count)
        setFilter('button_reset_active')
        // setFilter('')
    }


    return (
        <div className="App">
            <div className="container">
                <Value title={'max value '}/>
                <Value title={'min value '}/>
                <div className='button_container'>
                    <Buttons
                        title={'set'}
                        callback={inc}
                        isDisabled={count === 5}
                        active={filter === 'button_inc_active'}/>
                </div>

            </div>
            <div className="container">
                <Tablo tablo={count}/>
                <div className='button_container'>
                    <Buttons
                        title={'inc'}
                        callback={inc}
                        isDisabled={count === 5}
                        active={filter === 'button_inc_active'}/>
                    <Buttons
                        title={'reset'}
                        callback={reset}
                        isDisabled={count === 0}
                        active={filter === 'button_reset_active'}/>
                </div>

            </div>
        </div>
    );
}

export default App;
