//fadein
const fadeinObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('fadein');
        } else {
            entry.target.classList.remove('fadein');
        }
    });
});


const fadeinEl = document.querySelectorAll('.fadein-hidden');
fadeinEl.forEach((el) => fadeinObs.observe(el));

//fadeleft
const fadeleftObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeleft');
        } else {
            entry.target.classList.remove('fadeleft');
        }
    });
});


const fadeleftEl = document.querySelectorAll('.fadeleft-hidden');
fadeleftEl.forEach((el) => fadeleftObs.observe(el));


//faderight
const faderightObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('faderight');
        } else {
            entry.target.classList.remove('faderight');
        }
    });
});


const faderightEl = document.querySelectorAll('.faderight-hidden');
faderightEl.forEach((el) => faderightObs.observe(el));