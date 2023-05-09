import './style.css'
import {setUpShapeResizer} from './src/shapeResizer.js'
import {setUpOptions} from './src/toolOptions.js'
import {setUpToolBoxFunctions} from './src/toolBoxFunctions.js'
import {setUpBackground} from './src/backgroundAnimation.js'
import {setUpCopy} from './src/setUpCopy.js'
import githubLogo from './src/icons/github-logo.svg'

document.querySelector('#app').innerHTML = `
<section id="shape-container">
    <div id="shape">
        <div class="resizer nw"></div>
        <div class="resizer ne"></div>
        <div class="resizer se"></div>
        <div class="resizer sw"></div>
    </div>
</section>

<aside id="toolbox" for="toolbox">

    <label class="options" for="options"> Options: 
        <button name="all" class="button setOn allb">ALL</button>
        <button name="individual" class="button individualb">INDIVIDUAL</button>
    </label>

    <div class="option show" id="all">
        <label for="all-side"> radius: </label>
        <input type="range" id="all-side" name="all-side" min="0" max="50" value="0" />
    </div>

    <div class="option" id="individual">
        <label for="top-left"> top-left:</label>
        <input type="range" id="top-left" name="top-left" min="0" max="100" value="0" />
        <label for="top-right"> top-right:</label>
        <input type="range" id="top-right" name="top-right" min="0" max="100" value="0" />
        <label for="bottom-right"> bottom-right:</label>
        <input type="range" id="bottom-right" name="bottom-right" min="0" max="100" value="0" />
        <label for="bottom-left"> bottom-left:</label>
        <input type="range" id="bottom-left" name="bottom-left" min="0" max="100" value="0" />
    </div>

    <div class="output">
        <label for="output">CSS:</label>
        <code id="code">
        height: <span id="hValue">200px;</span> </br>
        width: <span id="wValue">200px;</span> </br>
        border-radius:
        <span id="borderRadiusValue"> 0%;</span> 
        </code>
        <button id="copy">COPY</button>
    </div>
    
</aside>
<footer>
    <a href="https://github.com/m-dennisgocong/make-border-radius" target="_blank" ><img src=${githubLogo} alt="github logo" />Dennis Goc-ong</a>
</footer>
<ul class="background"></ul>
`
// height and width value
const heightValue = document.getElementById('hValue');
const widthValue = document.getElementById('wValue');

setUpShapeResizer(Array.from(document.querySelectorAll('.resizer')), document.getElementById('shape'), heightValue, widthValue);
setUpOptions(Array.from(document.querySelectorAll('#toolbox .button')),Array.from(document.querySelectorAll('#toolbox .option')));
setUpToolBoxFunctions(Array.from(document.querySelectorAll('input[type="range"]')));
setUpBackground(document.querySelector('ul.background'));
setUpCopy(document.getElementById('copy'), heightValue, widthValue, document.getElementById('borderRadiusValue'));
