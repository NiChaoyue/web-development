/*
  author: NiChaoyue
*/
document.addEventListener("DOMContentLoaded", function() {
    // Function to offset scroll position
    function offsetAnchor() {
        if (location.hash.length !== 0) {
            window.scrollTo(window.scrollX, window.scrollY - window.innerHeight * 0.06);
        }
    }

    // Capture click events on all anchor links
    const links = document.querySelectorAll('a.text-container');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            setTimeout(offsetAnchor, 0);
        });
    });

    // Offset when navigating with history (e.g., back button)
    window.addEventListener("hashchange", offsetAnchor);
    
    // Initial offset if a hash is already present
    if (location.hash) {
        setTimeout(offsetAnchor, 0);
    }
});