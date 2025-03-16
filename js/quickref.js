function add_quickref_item(parent, data, type) {
    // Set default values for icon, subtitle, and title if not provided in the data object
    var icon = data.icon || "perspective-dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[no title]";
    var optional = data.optional || "false"; // Get the optional property from the data object
    // Create a new 'div' element for the quick reference item
    var item = document.createElement("div");
    // Add classes to the item element
    item.className = "item itemsize";

    // Create the item-icon element
    var itemIcon = document.createElement("div");
    itemIcon.className = "item-icon iconsize icon-" + icon;
    item.appendChild(itemIcon);

    // Create the item-text-container element
    var itemTextContainer = document.createElement("div");
    itemTextContainer.className = "item-text-container text";

    // Create the item-title element
    var itemTitle = document.createElement("div");
    itemTitle.className = "item-title";
    itemTitle.textContent = title;
    itemTextContainer.appendChild(itemTitle);

    // Create the item-desc element
    var itemDesc = document.createElement("div");
    itemDesc.className = "item-desc";
    itemDesc.textContent = subtitle;
    itemTextContainer.appendChild(itemDesc);

    // Append the item-text-container to the item element
    item.appendChild(itemTextContainer);

    // Get the background color of the parent's parent's parent element
    var sectionContainer = parent.closest('.section-container');
    var style = window.getComputedStyle(sectionContainer);
    var color = style.backgroundColor;

    // Attach a click event to the item, which triggers the show_modal function with data, color, and type parameters
    item.onclick = function () {
        show_modal(data, color, type);
    }
    // Set the title attribute of the item div to the value of the optional property
    item.setAttribute("title", optional);
    // Append the created item to the specified parent element
    parent.appendChild(item);
}
function applyTooltips(node) {
    // Si le nœud est un texte, appliquer les tooltips
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        tooltipDefinitions.forEach(function(tooltip) {
            tooltip.reference.forEach(function(keyword) {
                const regex = new RegExp('(^|\\s)(' + keyword + ')(?=\\s|$|[.,;!?])', 'gi');
                text = text.replace(regex, function(match, p1, p2) {
                    // Vérifie si le mot-clé est déjà dans une balise <span> (pour éviter les doublons)
                    if (!/<span class="tooltip">/.test(match)) {
                        return p1 + '<span class="tooltip">' + p2 + 
                               '<span class="tooltip-text">' + tooltip.description + '</span></span>';
                    }
                    return match;
                });
            });
        });
        // Remplacer le texte du nœud avec le texte modifié
        const wrapper = document.createElement('span');
        wrapper.innerHTML = text;
        node.replaceWith(wrapper);
    }
    // Si le nœud est un élément, parcourir ses enfants
    else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'SPAN') {
        Array.from(node.childNodes).forEach(applyTooltips);
    }
}
function show_modal(data, color, type) {
    var title = data.title || "[no title]";
    var subtitle = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var reference = data.reference || "";
    type = type || "";
    
    // Déterminer si le mode sombre est actif
    var isDarkMode = document.body.classList.contains("dark-mode-active") ||
                    document.querySelector(".dark-mode").classList.contains("dark-mode-active");
    
    // Identifier la section basée sur la couleur ou type
    var sectionId = "";
    if (color === "maroon" || type.includes("Move")) {
        sectionId = "section-movement";
    } else if (color === "black" || type.includes("Action")) {
        sectionId = "section-action";
    } else if (color === "indigo" || type.includes("Bonus action")) {
        sectionId = "section-bonus-action";
    } else if (color === "green" || type.includes("Reaction")) {
        sectionId = "section-reaction";
    } else if (color === "darkgoldenrod" || type.includes("Condition")) {
        sectionId = "section-condition";
    } else if (color === "teal" || type.includes("Environment")) {
        sectionId = "section-environment";
    }
    
    // Obtenir la couleur correcte en fonction du mode
    if (isDarkMode && sectionId) {
        var sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            color = window.getComputedStyle(sectionElement).backgroundColor;
        }
    }

    // Ajouter une classe au body
    document.body.classList.add("modal-open");

    // Obtenir les références aux éléments du modal
    var modal = document.getElementById("modal");
    var modalBackdrop = document.getElementById("modal-backdrop");
    var modalContainer = document.getElementById("modal-container");
    var modalTitle = document.getElementById("modal-title");
    var modalSubtitle = document.getElementById("modal-subtitle");
    var modalReference = document.getElementById("modal-reference");
    var modalBullets = document.getElementById("modal-bullets");

    // Définir les styles et le contenu
    modal.classList.add("modal-visible");
    modalBackdrop.style.height = window.innerHeight + "px";
    modalContainer.style.backgroundColor = color;
    modalContainer.style.borderColor = color;
    modalTitle.innerHTML = title + "<span class=\"float-right\">" + type + "</span>";
    modalSubtitle.textContent = subtitle;
    modalReference.textContent = reference;

    // Créer le HTML pour les puces
    // Créer le HTML pour les puces
    var bulletsHTML = bullets.map(function (item) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = "<p class=\"fonstsize\">" + item + "</p>";
        applyTooltips(wrapper);
        return wrapper.innerHTML;
    }).join("\n<hr>\n");

    // Définir le innerHTML de modalBullets
    modalBullets.innerHTML = bulletsHTML;
}

function hide_modal(event) {
    var modalContainer = document.getElementById("modal-container");

    // Check if the clicked element is outside of the modal container
    if (!modalContainer.contains(event.target)) {
        document.body.classList.remove("modal-open");
        document.getElementById("modal").classList.remove("modal-visible");
    }
}

// Update the click event handling for the modal
var modal = document.getElementById("modal");
modal.addEventListener("click", hide_modal);

function fill_section(data, parentname, type) {
    var parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_quickref_item(parent, item, type);
    });
}

function init() {
    fill_section(data_movement, "basic-movement", "Move");
    fill_section(data_action, "basic-actions", "Action");
    fill_section(data_conditionalaction, "basic-conditional-actions", "Conditional Action");
    fill_section(data_bonusaction, "basic-bonus-actions", "Bonus action");
    fill_section(data_reaction, "basic-reactions", "Reaction");
    fill_section(data_condition, "basic-conditions", "Condition");
    fill_section(data_environment_obscurance, "environment-obscurance", "Environment");
    fill_section(data_environment_light, "environment-light", "Environment");
    fill_section(data_environment_vision, "environment-vision", "Environment");
    fill_section(data_environment_cover, "environment-cover", "Environment");

    var modal = document.getElementById("modal");
    modal.addEventListener("click", hide_modal);
}

document.addEventListener("DOMContentLoaded", init);

//Settings Switches
document.addEventListener("DOMContentLoaded", function () {
    // Select the checkboxes
    var optionalCheckbox = document.getElementById('optional-switch');
    var homebrewCheckbox = document.getElementById('homebrew-switch');
    var darkModeCheckbox = document.getElementById('darkmode-switch');

    // Function to handle checkbox changes for optional and homebrew rules
    function handleRulesToggle() {
        console.log("Rules switches toggled"); // Debugging statement
        var items = document.getElementsByClassName('item itemsize');

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemType = item.getAttribute('title');
            var isOptional = itemType === 'Règle optionnelle';
            var isHomebrew = itemType === 'Règle maison';

            if ((optionalCheckbox.checked && isOptional) ||
                (homebrewCheckbox.checked && isHomebrew) ||
                (!isOptional && !isHomebrew)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    }

    // Function to handle darkmode toggle
    function handleDarkModeToggle() {
        console.log("Dark mode switch toggled");
        const darkModeElements = document.querySelectorAll('.dark-mode, .page-background');
        const isDarkMode = darkModeCheckbox.checked;
        
        darkModeElements.forEach(element => {
            if (isDarkMode) {
                element.classList.add('dark-mode-active');
            } else {
                element.classList.remove('dark-mode-active');
            }
        });
        
        // Si un modal est ouvert, mettre à jour sa couleur
        if (document.getElementById("modal").classList.contains("modal-visible")) {
            var modalContainer = document.getElementById("modal-container");
            var styleColor = window.getComputedStyle(modalContainer).backgroundColor;
            
            // Identifier la section basée sur la couleur actuelle
            // et mettre à jour avec la nouvelle couleur correspondante
            for (const sectionId of ["section-movement", "section-action", "section-bonus-action", 
                                   "section-reaction", "section-condition", "section-environment"]) {
                var sectionElement = document.getElementById(sectionId);
                if (sectionElement) {
                    var sectionColor = window.getComputedStyle(sectionElement).backgroundColor;
                    modalContainer.style.backgroundColor = sectionColor;
                    modalContainer.style.borderColor = sectionColor;
                    break;
                }
            }
        }
    }

    // Add event listeners to the checkboxes
    optionalCheckbox.addEventListener('change', handleRulesToggle);
    homebrewCheckbox.addEventListener('change', handleRulesToggle);
    darkModeCheckbox.addEventListener('change', handleDarkModeToggle);

    // Call the functions to initially set the correct states
    handleRulesToggle();
    handleDarkModeToggle(); // This will now apply the correct initial state

    // Get the toggle items
    var optionalToggleItem = document.getElementById('optional-toggle-item');
    var homebrewToggleItem = document.getElementById('homebrew-toggle-item');
    var darkModeToggleItem = document.getElementById('darkmode-toggle-item');

    // Function to handle click on the toggle items
    function handleToggleClick(checkbox) {
        return function() {
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event('change'));
        };
    }

    // Add event listeners to the toggle items
    optionalToggleItem.addEventListener('click', handleToggleClick(optionalCheckbox));
    homebrewToggleItem.addEventListener('click', handleToggleClick(homebrewCheckbox));
    darkModeToggleItem.addEventListener('click', handleToggleClick(darkModeCheckbox));

    // Ensure dark  and optional mode is on by default
    darkModeCheckbox.checked = true;
    optionalCheckbox.checked = false;
    handleDarkModeToggle();
    handleRulesToggle();
});