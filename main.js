/* Minimal interactivity for portfolio template */
(function(){
	const nav = document.getElementById('nav');
	const toggle = document.getElementById('nav-toggle');
	const themeToggle = document.getElementById('theme-toggle');

	// Mobile nav
	toggle && toggle.addEventListener('click', ()=>{
		nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
	});

	// Theme toggle: toggles dark/light on documentElement
	themeToggle && themeToggle.addEventListener('click', ()=>{
		document.documentElement.classList.toggle('light');
		// simple visual change for button
		themeToggle.textContent = document.documentElement.classList.contains('light') ? '☀️' : '🌙';
	});

	// Fill year in footer
	const yearSpan = document.getElementById('year');
	if(yearSpan) yearSpan.textContent = new Date().getFullYear();

	// Smooth scrolling for internal links
	document.querySelectorAll('a[href^="#"]').forEach(a=>{
		a.addEventListener('click', function(e){
			const href = this.getAttribute('href');
			if(href.length>1){
				e.preventDefault();
				const el = document.querySelector(href);
				if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
			}
		});
	});

	// small accessibility enhancement: focus outline for keyboard users
	document.addEventListener('keydown', (e)=>{
		if(e.key === 'Tab') document.body.classList.add('show-focus');
	});
})();

