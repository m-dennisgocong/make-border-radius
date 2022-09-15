
export function setUpShapeResizer(element){

    const el = document.getElementById('shape');
    const heightValue = document.getElementById('hValue');
    const widthValue = document.getElementById('wValue');
    function mouseDown(e){
        
        let currentResizer = e.target;
        let prevX = e.clientX;
        let prevY = e.clienty;
    
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseup", mouseUp);
    
        function mouseMove(e){
        
            const rect = el.getBoundingClientRect();
    
            if (currentResizer.classList.contains("se")) {  
                el.style.width = rect.width - (prevX - e.clientX) + "px";
                el.style.height = rect.height - (prevY - e.clientY) + "px";
            } 
            else if (currentResizer.classList.contains("sw")) {
                el.style.width = rect.width + (prevX - e.clientX) + "px";
                el.style.height = rect.height - (prevY - e.clientY) + "px";
            } 
            else if (currentResizer.classList.contains("ne")) {
                el.style.width = rect.width - (prevX - e.clientX) + "px";
                el.style.height = rect.height + (prevY - e.clientY) + "px";
            } 
            else {
                el.style.width = rect.width + (prevX - e.clientX) + "px";
                el.style.height = rect.height + (prevY - e.clientY) + "px";
            } 
           
            prevX = e.clientX;
            prevY = e.clientY;
            heightValue.innerText = el.clientHeight+"px";
            widthValue.innerText = el.clientWidth+"px";
        }

        function mouseUp(e){

            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
    
        }
    }
    element.forEach(element => {element.addEventListener('mousedown', mouseDown)});
}
