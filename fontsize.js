/*
  author: NiChaoyue
*/
function changeFontSize(size) {
    // Get all the elements that have the attribute "text-container" to the textContainers
    const textContainers = document.querySelectorAll('.text-container');
    // Iterate over each text-container element
    textContainers.forEach(container => {
        switch (size) {
            case 'large':
                container.style.fontSize = '24px'; // Set Large Font Size
                break;
            case 'medium':
                container.style.fontSize = '16px'; // Set Medium Font Size
                break;
            case 'small':
                container.style.fontSize = '12px'; // Set Small Font Size
                break;
            default:
                break;
        }
    });
}
