export function setUpShapeResizer(element){
    
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
        }

        function mouseUp(e){
    
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
    
        }
    }
    const el = document.getElementById('shape');
    element.forEach(element => {element.addEventListener('mousedown', mouseDown)});
}