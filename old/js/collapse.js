// Collapse functionality for sections
// This file adds collapsible functionality to existing sections without modifying the original files

(function() {
    'use strict';

    // CSS styles for the collapse functionality
    const collapseStyles = `
        .section-collapse-arrow {
            display: inline-block;
            margin-right: 10px;
            cursor: pointer;
            transition: transform 0.3s ease;
            font-size: 0.8em;
            user-select: none;
        }
        
        .section-collapse-arrow.collapsed {
            transform: rotate(-90deg);
        }
        
        .section-content {
            transition: max-height 0.3s ease, opacity 0.3s ease;
            overflow: hidden;
        }
        
        .section-content.collapsed {
            max-height: 0 !important;
            opacity: 0;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
        }
        
        .section-title {
            cursor: pointer;
            user-select: none;
        }
        
        .section-title:hover .section-collapse-arrow {
            color: #007bff;
        }
    `;

    // Add styles to the page
    function addStyles() {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = collapseStyles;
        document.head.appendChild(styleSheet);
    }

    // Add collapse arrow to a section title
    function addCollapseArrow(sectionTitle) {
        const arrow = document.createElement('span');
        arrow.className = 'section-collapse-arrow';
        arrow.innerHTML = '▼'; // Down arrow
        arrow.setAttribute('aria-label', 'Basculer la section');
        
        // Insert arrow at the beginning of the title
        sectionTitle.insertBefore(arrow, sectionTitle.firstChild);
        
        return arrow;
    }

    // Toggle section collapse state
    function toggleSection(sectionContainer, arrow) {
        const sectionContent = sectionContainer.querySelector('.section-content');
        const sectionId = sectionContainer.id;
        
        if (sectionContent.classList.contains('collapsed')) {
            // Expand
            sectionContent.classList.remove('collapsed');
            arrow.classList.remove('collapsed');
            localStorage.setItem(`section-${sectionId}-collapsed`, 'false');
        } else {
            // Collapse
            sectionContent.classList.add('collapsed');
            arrow.classList.add('collapsed');
            localStorage.setItem(`section-${sectionId}-collapsed`, 'true');
        }
    }

    // Restore section state from localStorage
    function restoreSectionState(sectionContainer, arrow) {
        const sectionId = sectionContainer.id;
        const isCollapsed = localStorage.getItem(`section-${sectionId}-collapsed`) === 'true';
        
        if (isCollapsed) {
            const sectionContent = sectionContainer.querySelector('.section-content');
            sectionContent.classList.add('collapsed');
            arrow.classList.add('collapsed');
        }
    }

    // Initialize collapse functionality for all sections
    function initializeCollapse() {
        const sections = document.querySelectorAll('.section-container');
        
        sections.forEach(section => {
            const sectionTitle = section.querySelector('.section-title');
            if (!sectionTitle) return;
            
            // Add collapse arrow
            const arrow = addCollapseArrow(sectionTitle);
            
            // Add click event to the entire title
            sectionTitle.addEventListener('click', function(e) {
                // Prevent event from bubbling if clicked on other elements
                e.stopPropagation();
                toggleSection(section, arrow);
            });
            
            // Restore previous state
            restoreSectionState(section, arrow);
        });
    }

    // Wait for DOM to be ready and sections to be initialized
    function waitForSections() {
        const sections = document.querySelectorAll('.section-container');
        if (sections.length > 0) {
            // Small delay to ensure everything is loaded
            setTimeout(() => {
                addStyles();
                initializeCollapse();
            }, 100);
        } else {
            // Retry after a short delay
            setTimeout(waitForSections, 50);
        }
    }

    // Start initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForSections);
    } else {
        waitForSections();
    }

    // Also listen for window load as a fallback
    window.addEventListener('load', function() {
        setTimeout(() => {
            if (!document.querySelector('.section-collapse-arrow')) {
                waitForSections();
            }
        }, 200);
    });

    // Public API (optional - for manual control)
    window.SectionCollapse = {
        toggleSection: function(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                const arrow = section.querySelector('.section-collapse-arrow');
                if (arrow) {
                    toggleSection(section, arrow);
                }
            }
        },
        
        collapseAll: function() {
            const sections = document.querySelectorAll('.section-container');
            sections.forEach(section => {
                const arrow = section.querySelector('.section-collapse-arrow');
                const sectionContent = section.querySelector('.section-content');
                if (arrow && sectionContent && !sectionContent.classList.contains('collapsed')) {
                    toggleSection(section, arrow);
                }
            });
        },
        
        expandAll: function() {
            const sections = document.querySelectorAll('.section-container');
            sections.forEach(section => {
                const arrow = section.querySelector('.section-collapse-arrow');
                const sectionContent = section.querySelector('.section-content');
                if (arrow && sectionContent && sectionContent.classList.contains('collapsed')) {
                    toggleSection(section, arrow);
                }
            });
        }
    };

})();