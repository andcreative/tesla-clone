// Nav ----------------------------------------
const openMenu = () => {
    document.querySelector(selectors='.backdrop').className = 'backdrop active';
    document.querySelector(selectors='aside').className = 'active';
}

const closeMenu = () => {
    document.querySelector(selectors='.backdrop').className = 'backdrop';
    document.querySelector(selectors='aside').className = '';
}

document.getElementById(elementId='menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}

document.querySelector(selectors='aside button.close').onclick = e => {
    closeMenu();
}

document.querySelector(selectors='.backdrop').onclick = e => {
    closeMenu();
}

// Scroll

document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener(type='scroll', listener= () => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll(selectors='section')];

    if (document.onWayTo === null) {
    const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
    if (destIndex >= 0 && destIndex < sections.length) {
        console.log({destIndex,direction});
        document.onWayTo = destIndex;
        window.scroll(x = 0, sections[destIndex].offsetTop);
        }
    }

    sections.forEach((section, index = number ) => {
        if (window.pageYOffset === section.offsetTop) {
            document.lastCentered = index;
            section.className = 'active';
            if (document.onWayTo === index) {
                document.onWayTo = null;
            }
        } else {
            section.className = '';
        }
    })


    document.lastScrollPosition = window.pageYOffset;
})
