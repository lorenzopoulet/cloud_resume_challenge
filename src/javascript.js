const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navlist')

const scrollAboutButton = document.getElementById('abmbutton')
const scrollCertButton = document.getElementById('certbutton')
const scrollProjectsButton = document.getElementById('prbutton')
const scrollContactButton = document.getElementById('conbutton')

const sectionAboutMe = document.getElementById('about-me')
const sectionProjects = document.getElementById('projectsection')
const sectionCertifications = document.getElementById('certifications')
const sectionContact = document.getElementById('contactme')



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.haroon')
hiddenElements.forEach((el) => observer.observe(el));



function updateVisitorCount() {

    const visitorCountElement = document.getElementById("visitorcounter");
    async function updateCounter() {
        let response = await fetch('https://qwt7zc7kkjcjjklgp7m7j3k5mm0qgzjj.lambda-url.eu-central-1.on.aws/');
        let data = await response.json();
        console.log(data);
        visitorCountElement.textContent = `This site has been visited ${data} times`;
    }
    updateCounter();
}


function toggleButton(){
    navList.classList.toggle('show')
}

scrollAboutButton.addEventListener('click', () => {
    sectionAboutMe.scrollIntoView({ behavior: 'smooth' })
})
scrollProjectsButton.addEventListener('click', () => {
    sectionProjects.scrollIntoView({ behavior: 'smooth' })
})
scrollCertButton.addEventListener('click', () => {
    sectionCertifications.scrollIntoView({ behavior: 'smooth' })
})

scrollContactButton.addEventListener('click', () => {
    sectionContact.scrollIntoView({ behavior: 'smooth' })
})


updateVisitorCount()

hamburgerButton.addEventListener('click', toggleButton)