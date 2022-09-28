import { useState } from "react";

const Main = () => {
    const [theme, setTheme] = useState('dark-theme')
    const [themeType, setThemeType] = useState('Dark')
    const [smallPrint, setSmallPrint] = useState('')
    const [bigPrint, setBigPrint] = useState('')

    const changeTheme = () => {
        if(theme === 'dark-theme') {
            setTheme('light-theme');
            setThemeType('Light');
        }
        else {
            setTheme('dark-theme');
            setThemeType('Dark');
        }
    }

    const pressKey = (key) => {
        if("+-*/".includes(key))
            setBigPrint(bigPrint + ` ${key} `)
        else
            setBigPrint(bigPrint + key)
    }

    const deleteAll = () => {
        setBigPrint('');
        setSmallPrint('')
    }

    const deleteLast = () => {
        if(bigPrint.endsWith(' '))
            setBigPrint(bigPrint.slice(0, -3))
        else
            setBigPrint(bigPrint.slice(0, -1))
    }

    const equal = async () => {

        if(bigPrint === 'Calculating...')
            return;

        let data = JSON.stringify({expression: bigPrint })

        setSmallPrint(bigPrint)
        setBigPrint('Calculating...')

        let result = (await fetch('http://localhost:4000/calculator', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })).json()

        result.then( res => {
            console.log(typeof(res));
            if(typeof(res) === 'number')
                setBigPrint(`${res}`)
            else {
                deleteAll();
                setSmallPrint('Ai gresit ecuatia!')
            }
        })
       
    }

    return (
        <div className={`main-container ${theme}`}>
            <div className="theme-selector">
                <svg viewBox="0 0 448 512">
                    <path className="bars" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
                <button className={`dark-theme ${theme}`} onClick={changeTheme}> {themeType} theme 
                    <svg className="moon-sun" viewBox="0 0 64 64">
                        <path d="M36.4 20.4a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm0 28a12 12 0 0 1-10.3-5.8l2.5.3A13.7 13.7 0 0 0 42 25.8a12 12 0 0 1-5.6 22.6z" />
                        <path d="M36.4 16.4a2 2 0 0 0 2-2v-8a2 2 0 1 0-4 0v8a2 2 0 0 0 2 2zm-20 20a2 2 0 0 0-2-2h-8a2 2 0 0 0 0 4h8a2 2 0 0 0 2-2zm3-14.1a2 2 0 0 0 2.8-2.8l-5.7-5.7a2 2 0 0 0-2.8 2.8zM59 13.8a2 2 0 0 0-2.8 0l-5.7 5.7a2 2 0 1 0 2.8 2.8l5.7-5.7a2 2 0 0 0 0-2.8zM19.4 50.5l-5.7 5.7a2 2 0 1 0 2.9 2.8l5.7-5.7a2 2 0 1 0-2.8-2.8z"/>
                    </svg>
                </button>
            </div>
            
            <div className="calculator-display">
                <div className="equation">
                    {smallPrint}
                </div>
                <div className="result">
                    {bigPrint}
                </div>
            </div>

            <label className="switch">
                <input type="checkbox" onClick={changeTheme} />
                <span className="slider round"></span>
            </label>

            <div className="keyboard">
                <button className="div1" onClick={ ()=> pressKey(1)}>1</button>
                <button className="div2"onClick={ ()=> pressKey(2)}>2</button>
                <button className="div3" onClick={ ()=> pressKey(3)}>3</button>
                <button className="div4" onClick={ ()=> pressKey(4)} >4</button>
                <button className="div5" onClick={ ()=> pressKey(5)} >5</button>
                <button className="div6" onClick={ ()=> pressKey(6)} >6</button>
                <button className="div7" onClick={ ()=> pressKey(7)} >7</button>
                <button className="div8" onClick={ ()=> pressKey(8)} >8</button>
                <button className="div9" onClick={ ()=> pressKey(9)} >9</button>
                <button className="div10" onClick={ ()=> pressKey(0)} >0</button>
                <button className="div11" onClick={ ()=> pressKey('+')} >+</button>
                <button className="div12" onClick={ ()=> pressKey('-')} >-</button>
                <button className="div13" onClick={ ()=> pressKey('*')} >X</button>
                <button className="div14" onClick={ ()=> pressKey('/')} >/</button>
                <button className="div15" onClick={ deleteLast } >DEL</button>
                <button className="div16" onClick={ deleteAll } >AC</button>
                <button className="div17" onClick={ ()=> pressKey('(')} >{'('}</button>
                <button className="div18" onClick={ ()=> pressKey(')')} >{')'}</button>
                <button className="div19" onClick={ equal } >=</button>
            </div>
        </div>
    );
};

export default Main;