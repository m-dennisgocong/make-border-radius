export function setUpToolBoxFunctions(element){

    const borderRadius = {
        "top-left" : document.getElementById("top-left-value"),
        "top-right" : document.getElementById("top-right-value"),
        "bottom-right" : document.getElementById("bottom-right-value"),
        "bottom-left" : document.getElementById("bottom-left-value")
    }

    element.forEach(range => range.addEventListener('input', function(){
        if(this.name === "all-side"){
            element.forEach(range => (document.documentElement.style.setProperty(`--${range.name}`, this.value + "%")))
            element.forEach(range => {
                range.value = this.value;
            })
            borderRadius["top-left"].innerText = this.value+"%";        
        }else{
            document.documentElement.style.setProperty(`--${this.name}`, this.value + "%"); 
            borderRadius[this.name].innerText = this.value+"%";         
        }
    }));
}
