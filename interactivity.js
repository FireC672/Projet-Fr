const interactiveParagraph = document.getElementById("interactive");
interactiveParagraph.converted = false;

interactiveParagraph.onclick = () => {
    if(!interactiveParagraph.converted){
       interactiveParagraph.innerText="20";
       interactiveParagraph.converted = true;
    }else {
       interactiveParagraph.innerText="XX";
       interactiveParagraph.converted = false;
    }
}