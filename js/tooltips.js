// Fonction pour créer et afficher les tooltips
function initializeTooltips() {
    // Récupérer le contenu du modal
    const modalBullets = document.getElementById('modal-bullets');
    const modalReference = document.getElementById('modal-reference');
    const modalSubtitle = document.getElementById('modal-subtitle');
    
    // Garder une trace des tooltips déjà affichés dans ce modal
    let shownTooltipsInCurrentModal = new Set();
    
    // Fonction pour créer un tooltip
    function createTooltip(term, definition, title) {
        // Créer l'élément du tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'dnd-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-title">${title}</div>
            <div class="tooltip-content">${definition}</div>
        `;
        document.body.appendChild(tooltip);
        return tooltip;
    }
    
    // Fonction pour mettre en surbrillance les termes dans le contenu
    function highlightTermsInContent() {
        // Réinitialiser les tooltips affichés pour le nouveau modal
        shownTooltipsInCurrentModal.clear();
        
        // Traiter le contenu HTML du modal
        processContent(modalBullets);
        processContent(modalSubtitle);
        processContent(modalReference);
    }
    
    // Fonction pour traiter le contenu et ajouter les tooltips
    function processContent(element) {
        if (!element) return;
        
        tooltipDefinitions.forEach(tooltip => {
            tooltip.reference.forEach(term => {
// Chercher le terme exact (correspondance de mot entier) - insensible à la casse
const regex = new RegExp(`(^|\\s)${term}(\\s|$|\\.|\\,|\\;|\\:)`, 'gi');
                
                // Parcourir tous les nœuds de texte dans l'élément
                const textNodes = getTextNodes(element);
                
                textNodes.forEach(node => {
                    const originalText = node.nodeValue;
                    if (regex.test(originalText) && !shownTooltipsInCurrentModal.has(tooltip.title)) {
                        // Remplacer seulement la première occurrence
                        const newText = originalText.replace(regex, match => {
                            shownTooltipsInCurrentModal.add(tooltip.title);
                            return `<span class="tooltip-term" data-tooltip="${tooltip.title}">${match}</span>`;
                        });
                        
                        // Remplacer le nœud de texte par le HTML généré
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newText;
                        const parent = node.parentNode;
                        
                        // Remplacer le nœud de texte par les nouveaux nœuds
                        while (tempDiv.firstChild) {
                            parent.insertBefore(tempDiv.firstChild, node);
                        }
                        parent.removeChild(node);
                        
                        // Arrêter après le premier remplacement pour ce terme
                        return;
                    }
                });
            });
        });
        
        // Ajouter les événements aux termes marqués
        const tooltipTerms = element.querySelectorAll('.tooltip-term');
        tooltipTerms.forEach(term => {
            term.addEventListener('mouseenter', showTooltip);
            term.addEventListener('mouseleave', hideTooltip);
        });
    }
    
    // Fonction pour obtenir tous les nœuds de texte d'un élément
    function getTextNodes(node) {
        let textNodes = [];
        
        if (node.nodeType === Node.TEXT_NODE) {
            textNodes.push(node);
        } else {
            const children = node.childNodes;
            for (let i = 0; i < children.length; i++) {
                textNodes = textNodes.concat(getTextNodes(children[i]));
            }
        }
        
        return textNodes;
    }
    
    // Fonction pour afficher le tooltip
// Fonction pour afficher le tooltip
function showTooltip(event) {
    const term = event.target;
    const tooltipTitle = term.getAttribute('data-tooltip');
    
    // Trouver la définition correspondante
    const tooltipData = tooltipDefinitions.find(t => t.title === tooltipTitle);
    if (!tooltipData) return;
    
    // Créer le tooltip
    const tooltip = createTooltip(tooltipTitle, tooltipData.description, tooltipData.title);
    
    // Positionner temporairement pour obtenir ses dimensions
    tooltip.style.visibility = 'hidden';
    tooltip.style.left = '0px';
    tooltip.style.top = '0px';
    
    // Attendre un instant pour que le tooltip soit rendu
    setTimeout(() => {
        // Obtenir les dimensions du tooltip
        const tooltipRect = tooltip.getBoundingClientRect();
        const termRect = term.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        
        // Calculer la position horizontale
        let leftPos = termRect.left;
        
        // Si le tooltip dépasse à droite
        if (leftPos + tooltipRect.width > viewportWidth) {
            // Positionner le tooltip à gauche du terme
            leftPos = Math.max(0, termRect.right - tooltipRect.width);
        }
        
        // Calculer la position verticale - toujours en dessous du terme
        const topPos = termRect.bottom + window.scrollY + 5;
        
        // Appliquer les positions calculées
        tooltip.style.left = `${leftPos}px`;
        tooltip.style.top = `${topPos}px`;
        tooltip.style.visibility = 'visible';
    }, 10);
    
    // Stocker une référence au tooltip sur l'élément terme
    term.tooltip = tooltip;
}
    
    // Fonction pour masquer le tooltip
    function hideTooltip(event) {
        const term = event.target;
        if (term.tooltip) {
            document.body.removeChild(term.tooltip);
            term.tooltip = null;
        }
    }
    
    // Observer l'ouverture du modal
    const modal = document.getElementById('modal');
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                if (modal.classList.contains('modal-visible')) {
                    // Petit délai pour s'assurer que le contenu du modal est chargé
                    setTimeout(highlightTermsInContent, 100);
                }
            }
        });
    });
    
    // Configuration de l'observateur
    observer.observe(modal, { attributes: true });
}



// Initialiser les tooltips lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier que les tooltips sont définis
    if (typeof tooltipDefinitions !== 'undefined') {
        // Supprimer cette ligne: addTooltipStyles();
        initializeTooltips();
    } else {
        console.error("Le fichier data_tooltips.js n'est pas chargé correctement.");
    }
});