export function setUpOptions(element,contents){
    element.forEach(button => button.addEventListener('click', function(){
        // change the button background-color of selected button
        element.forEach(button => button.classList.remove('setOn')) // clear  
        this.classList.add('setOn') // add the setOn to the active button 
    
        // show the content of selected option
        contents.forEach(content => content.classList.remove('show'))// clear first
        // get the id of the content using the button attribute name as a reference 
        const selectContent = document.getElementById(this.name)
        selectContent.classList.add('show')// from display: none to display: block
    }))  
}