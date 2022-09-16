import './style.css'
import {setUpShapeResizer} from './src/shapeResizer.js'
import {setUpOptions} from './src/toolOptions.js'
import {setUpToolBoxFunctions} from './src/toolBoxFunctions.js'


document.querySelector('#app').innerHTML = `

<section id="shape-container">
    <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>

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
        <span id="top-left-value"> 0% </span> 
        <span id="top-right-value"></span>
        <span id="bottom-right-value"></span>
        <span id="bottom-left-value"></span>
        </code>
    </div>
    
</aside>
`
setUpShapeResizer(Array.from(document.querySelectorAll('.resizer')));
setUpOptions(Array.from(document.querySelectorAll('#toolbox .button')));
setUpToolBoxFunctions(Array.from(document.querySelectorAll('input[type="range"]')));
backgroundAnimation(document.getElementsByClassName('background'));
