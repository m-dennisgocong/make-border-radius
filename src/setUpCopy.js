export function setUpCopy(copy,heightValue,widthValue, borderRadiusValue){

    copy.addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.value = `height: ${heightValue.innerText}\nwidth: ${widthValue.innerText}\nborder-radius: ${borderRadiusValue.innerText}`;
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.body.removeChild(textarea);
    });
    
}
