const fullpageEl = document.getElementById('fullpage')

const IS_ACTIVE = 'is--active'

const toggleNavigation = () => {
	fullpageEl.classList.toggle('no-scroll')
}

new fullpage('#fullpage', {
	autoScrolling: true,
	scrollBar: true,
	css3: true,
	touchSensitivity: 2,
    normalScrollElementTouchThreshold: 5,
	keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
})