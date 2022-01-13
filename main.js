function takeValue(){
    var selectedNumber = Number(document.getElementById('number-input').value);
    document.getElementsByTagName("img")[selectedNumber - 1].setAttribute('class', 'selected-image');
    document.getElementsByTagName("figcaption")[selectedNumber - 1].setAttribute('class', 'selected-figcaption');
    document.getElementsByTagName("button")[0].setAttribute('onclick', 'clearFunction()');
    
}
function clearFunction(){
    var selectedNumber = Number(document.getElementById('number-input').value);
    if (selectedNumber == 0){
        for (i=0; i<=3; i++){
            document.getElementsByTagName("img")[i].setAttribute('class', 'image-season');
            document.getElementsByTagName("figcaption")[i].setAttribute('class', 'fig-season');
        }
        document.getElementsByTagName("button")[0].setAttribute('onclick', 'takeValue()');
    }
}
