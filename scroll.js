const fullpageEl = document.getElementById('fullpage')

const IS_ACTIVE = 'is--active'

const toggleNavigation = () => {
	fullpageEl.classList.toggle('no-scroll')
}

new fullpage('#fullpage', {
	autoScrolling: true,
	scrollBar: true,

})