/*
  author: NiChaoyue
*/
function translateContent(language) {
    //A new XMLHttpRequest object, xhr, is created to initiate the HTTP request.
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `get_translation.php?language=${language}`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {//Request has been done
            if (xhr.status === 200) {//Request is successful
                const response = JSON.parse(xhr.responseText);
                
                    // Translate header and footer
                    document.getElementById('header').innerText = response.header;
                    document.getElementById('footer').innerText = response.footer;
                    
                    // Translate content
                    for (let i = 1; i <= 16; i++) {
                        document.getElementById(`image${i}-title`).innerText = response.content[`image${i}_title`];
                        document.getElementById(`image${i}-caption`).innerText = response.content[`image${i}_caption`];
                    }
                    
                    // Translate buttons
                    document.querySelector('button[onclick="changeFontSize(\'large\')"]').innerText = response.buttons.large_font;
                    document.querySelector('button[onclick="changeFontSize(\'medium\')"]').innerText = response.buttons.medium_font;
                    document.querySelector('button[onclick="changeFontSize(\'small\')"]').innerText = response.buttons.small_font;
                    document.getElementById('function').textContent = response.buttons.function;
                    
                    //Translate navigations
                    const navItems = document.querySelectorAll('.fixed-nav ul li a.text-container');
                    for (let i = 0; i < navItems.length; i++) {
                        const id = 'n' + (i + 1);
                        if (response.navigation[id]) {
                            navItems[i].textContent = response.navigation[id];
                        } else {
                            console.error(`Navigation id ${id} not found in response.`);
                        }
                    }
                    
                    // Translate text Navigation(n17)
                    const extraNavItem = document.getElementById('n17');
                    if (extraNavItem && response.navigation.n17) {
                        extraNavItem.textContent = response.navigation.n17;
                    } else {
                        console.error('Navigation id "n17" not found or element not found.');
                    }
      
            } 
            
            else {
                console.error('Error fetching translation:', xhr.status);
            }
        
        }
    };
    xhr.send();//Send the Request to the Server
}

