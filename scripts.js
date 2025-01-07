/* Typewriter Animation */
/* https://www.w3schools.com/howto/howto_js_typewriter.asp */
var i = 0;
var j = 0;
const txt = "Hi there, I'm Mialiani";
const string = "a front-end web developer. If I'm not programming, I'm either working on my prop or playing video games with friends.";

window.onload = typeWriter(); // executes typeWriter function when whole page has loaded
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // executes typeWriter function after 100 msec
    }
}

// function typeWriter2() {
//     if (j < string.length) {
//         document.getElementById("summary").innerHTML += string.charAt(j);
//         j++;
//         setTimeout(typeWriter2, 50); // executes typeWriter function after 100 msec
//     }
// }
// setTimeout(typeWriter2,3500);

/* Animate on scroll */
/* Followed this tutorial: https://www.youtube.com/watch?v=sORoAeGhlj0&ab_channel=TylerPotts */
const animation_elements = document.querySelectorAll('.scroll-animation');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation-appear');
        } else {
            //entry.target.classList.remove('scroll-animation-appear');
        }
    })
}, {
    threshold: 0.5 // 50% of element appears befor animation
});

//
for (let i = 0; i < animation_elements.length; i++) {
	const el = animation_elements[i];

	observer.observe(el);
}
