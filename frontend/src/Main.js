import { useState } from "react";

const Main = () => {
    const [theme, setTheme] = useState('dark-theme')
    const [themeType, setThemeType] = useState('Dark')

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
                    78 x 26 - 6
                </div>
                <div className="result">
                    2,022
                </div>
            </div>

            <label class="switch">
                <input type="checkbox" onClick={changeTheme} />
                <span class="slider round"></span>
            </label>

            <div class="keyboard">
                <button class="div1"> 1</button>
                <button class="div2">2 </button>
                <button class="div3">3 </button>
                <button class="div4">4 </button>
                <button class="div5">5 </button>
                <button class="div6">6 </button>
                <button class="div7">7 </button>
                <button class="div8">8</button>
                <button class="div9">9</button>
                <button class="div10">0</button>
                <button class="div11">+</button>
                <button class="div12">-</button>
                <button class="div13">X</button>
                <button class="div14">/</button>
                <button class="div15">DEL</button>
                <button class="div16">AC</button>
                <button class="div17">.</button>
                <button class="div18">%</button>
                <button class="div19">=</button>
            </div>
        </div>
    );
};

export default Main;