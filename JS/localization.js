var langSelector = document.getElementById("lang-Selector");
langSelector.selectedIndex = 0;
localize("fa");

function localize (language)
{
    var val = langSelector.options[langSelector.selectedIndex].value;

    var navbar = document.querySelectorAll("a[lang]");
        for (let index = 0; index < navbar.length; index++) {
            
            if(navbar[index].lang == val)
            {
                navbar[index].style.display = "unset";
                
            }
            else{
                navbar[index].style.display = "none";
            }
        }

    var all = document.querySelectorAll("div[lang]");

    for (let j = 0; j < all.length; j++) {
        const element = all[j];

        if(element.lang == val)
            {
                element.style.display = "flex";
            }
            else{
                element.style.display = "none";
                console.log(element);

            }

    }
}
