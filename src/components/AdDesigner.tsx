import { useState } from 'react';
import './AdDesigner.css'

function AdDesigner() {

//flavor variable & functions 
    const [flavor, pickFlavor] = useState('Vanilla');

    function pickVanilla() {
        pickFlavor("Vanilla")
    }

    function pickChocolate() {
        pickFlavor(prev => prev = "Chocolate");

    }

    function pickStrawberry() {
        pickFlavor(prev => prev = "Strawberry")
    }

//up and down count function

    const [size, setSize] = useState(20);
    const sizeStyle = { fontSize: size + "px"};

    function sizeUp() {
        setSize(prev => prev + 1);
    }

    function sizeDown() {
        setSize(prev => prev - 1);
    }

//dark theme

const [darkTheme, setTheme] = useState(false);

let themeClass = "";
      if (darkTheme) {
          themeClass = " dark"
      }

    return (
        <div className="AdDesigner">
            <h2>Ad Designer</h2>
                <div className={"AdDesigner__ad" + themeClass}>
                    <p>Vote For</p>
                    <p style={sizeStyle}>{flavor}</p>
                </div>
        <p>
            <h3>What to Support</h3>
            <button disabled={flavor==="Vanilla"}onClick={pickVanilla}>Vanilla</button> 
            <button disabled={flavor==="Chocolate"}onClick={pickChocolate}>Chocolate</button>
            <button disabled={flavor==="Strawberry"}onClick={pickStrawberry}>Strawberry</button>
        </p>

        <p>
            <h3>Color Theme</h3>
            <button disabled={darkTheme===false} onClick={() => setTheme(false)}>Light</button>
            <button disabled={darkTheme} onClick={() => setTheme(true)}>Dark</button>
        </p>

        <p className="FontSize">
            <h3>Font Size</h3>
            <button disabled={size < 17} onClick={sizeUp}>Up</button>
            <p>{size}</p>
            <button disabled={size > 30}onClick={()=>sizeDown()}>Down</button>
        </p>
        </div>
    )
}

export default AdDesigner;