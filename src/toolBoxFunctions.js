export function setUpToolBoxFunctions(element){

    const borderRadius = {
        "top-left" : 0,
        "top-right" : 0,
        "bottom-right" : 0, 
        "bottom-left" : 0,
    }
    function DisplayCode(){
        const displayCode = document.getElementById("borderRadiusValue");

        function allAreEqual(obj){ // check if all corner value is equal
        return new Set(Object.values(obj)).size === 1;
        }
        if(allAreEqual(borderRadius)){
            displayCode.innerText = borderRadius["top-left"]+"%;";
        }else if(borderRadius["top-left"] === borderRadius["bottom-right"] && borderRadius["top-right"] === borderRadius["bottom-left"]){
            displayCode.innerText = `${borderRadius["top-left"]}% ${borderRadius["top-right"]}%;`;
        }else if(borderRadius["top-right"] === borderRadius["bottom-left"] && borderRadius["top-left"] != borderRadius["bottom-right"]){
            displayCode.innerText = `${borderRadius["top-left"]}% ${borderRadius["top-right"]}% ${borderRadius["bottom-right"]}%;`;
        }
        else{
            displayCode.innerText = `${borderRadius["top-left"]}% ${borderRadius["top-right"]}% ${borderRadius["bottom-right"]}% ${borderRadius["bottom-left"]}%;`;
        }

    }

    element.forEach(range => range.addEventListener('input', function(){
        if(this.name === "all-side"){
            element.forEach(range => (document.documentElement.style.setProperty(`--${range.name}`, this.value + "%")))
            element.forEach(range => {
                range.value = this.value;
            })

            for(const key in borderRadius){
                borderRadius[key] = this.value
            }
            DisplayCode()
        }else{
            document.documentElement.style.setProperty(`--${this.name}`, this.value + "%"); 
            borderRadius[this.name] = this.value;  
            DisplayCode()       
        }
    }));
}
