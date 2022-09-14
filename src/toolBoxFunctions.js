
export function setUpToolBoxFunctions(element){
    
    element.forEach(range => range.addEventListener('input', function(){
        if(this.name === "all-side"){
            element.forEach(range => (document.documentElement.style.setProperty(`--${range.name}`, this.value + "%")))
            element.forEach(range => {
                range.value = this.value;
            })
        }else{
            document.documentElement.style.setProperty(`--${this.name}`, this.value + "%");         
        }
        
    }));
}
