window.onload = function() {
    function mouseOverTest() {
        console.log('Mouse over event triggered');
    }

    let element = document.getElementById('myElement');
    if (element) {
        element.addEventListener('mouseover', mouseOverTest);
    } else {
        console.log("Element with id 'myElement' was not found");
    }
}