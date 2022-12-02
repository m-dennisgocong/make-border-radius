
export function setUpShapeResizer(resizer, shape, heightValue ,widthValue){

    function mouseDown(e){
        
        let currentResizer = e.target;
        let prevX = e.clientX;
        let prevY = e.clienty;
    
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseup", mouseUp);
    
        function mouseMove(e){
        
            const rect = shape.getBoundingClientRect();
    
            if (currentResizer.classList.contains("se")) {  
                shape.style.width = rect.width - (prevX - e.clientX) + "px";
                shape.style.height = rect.height - (prevY - e.clientY) + "px";
            } 
            else if (currentResizer.classList.contains("sw")) {
                shape.style.width = rect.width + (prevX - e.clientX) + "px";
                shape.style.height = rect.height - (prevY - e.clientY) + "px";
            } 
            else if (currentResizer.classList.contains("ne")) {
                shape.style.width = rect.width - (prevX - e.clientX) + "px";
                shape.style.height = rect.height + (prevY - e.clientY) + "px";
            } 
            else {
                shape.style.width = rect.width + (prevX - e.clientX) + "px";
                shape.style.height = rect.height + (prevY - e.clientY) + "px";
            } 
           
            prevX = e.clientX;
            prevY = e.clientY;
            heightValue.innerText = shape.clientHeight+"px";
            widthValue.innerText = shape.clientWidth+"px";
        }

        function mouseUp(e){

            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
    
        }
    }
    resizer.forEach(resizer => {resizer.addEventListener('mousedown', mouseDown)});
}
