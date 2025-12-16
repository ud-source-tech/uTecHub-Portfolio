// Typing effect
const words = ["Frontend Developer","HTML,CSS,JavaScript"];
const typingEl = document.querySelector(".typing");
let i = 0, j = 0, deleting = false;


function type() {
const word = words[i];


if (!deleting) {
typingEl.textContent = word.slice(0, j++);
if (j > word.length) {
deleting = true;
setTimeout(type, 1000);
return;
}
} else {
typingEl.textContent = word.slice(0, j--);
if (j < 0) {
deleting = false;
i = (i + 1) % words.length;
}
}
setTimeout(type, deleting ? 60 : 120);
}
type();


// Reveal on scroll
const sections = document.querySelectorAll("section");
const reveal = () => {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;
if (top < window.innerHeight - 100) sec.classList.add("show");
});
};
window.addEventListener("scroll", reveal);
reveal();


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
a.addEventListener('click', e => {
const target = document.querySelector(a.getAttribute('href'));
if (!target) return;
e.preventDefault();
window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
});
});


// Theme toggle
const btn = document.getElementById("theme-toggle");
btn.onclick = () => {
document.body.classList.toggle("dark");
btn.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";
};