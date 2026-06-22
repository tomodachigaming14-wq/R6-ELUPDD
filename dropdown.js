// dropdown.js - Shared dropdown functionality for all pages (except admin.html)

function initDropdowns() {
    // Certification dropdown
    const certDropdown = document.getElementById('certDropdown');
    const certBtn = document.getElementById('certBtn');
    if (certBtn && certDropdown) {
        certBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllDropdowns();
            certDropdown.classList.add('open');
        });
    }
    
    // Land Use Plans dropdown
    const landUseDropdown = document.getElementById('landUseDropdown');
    const landUseBtn = document.getElementById('landUseBtn');
    if (landUseBtn && landUseDropdown) {
        landUseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllDropdowns();
            landUseDropdown.classList.add('open');
        });
    }
    
    // CLUP Submenu (nested dropdown)
    const clupSubmenu = document.getElementById('clupSubmenu');
    if (clupSubmenu) {
        const subTrigger = clupSubmenu.querySelector('.submenu-trigger');
        if (subTrigger) {
            subTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close other open submenus
                document.querySelectorAll('.dropdown-submenu').forEach(sub => {
                    if (sub !== clupSubmenu) sub.classList.remove('open');
                });
                clupSubmenu.classList.toggle('open');
            });
        }
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-submenu')) {
            closeAllDropdowns();
        }
    });
}

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
    document.querySelectorAll('.dropdown-submenu').forEach(sub => sub.classList.remove('open'));
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDropdowns);
} else {
    initDropdowns();
}