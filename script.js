const navLinks = document.querySelectorAll('nav a');
const logo = document.getElementById('logo')
const background = document.getElementById('background')
const content = document.getElementById('content')
const contactButton = document.getElementById('contactButton')
const indexGithub = document.getElementById('GithubPageButton')

indexGithub.href = 'https://github.com/franciscomouradev'

const secrets = [
    {
        password: 'Password123@',
        hide: true
    }
]



function renderProjects() {
    const projectsContainer = document.createElement('div');

    const projetos = [
        {
            title: 'Calculator',
            description: 'A calculator built with HTML, Tailwind CSS and JavaScript.',
            Languages: 'JavaScript'
        },

        {
            title: 'To-Do-List',
            description: 'A simple todo application focused on DOM manipulation.',
            Languages: 'JavaScript'
        },

        {
            title: 'Quizz App',
            description: 'An interactive quiz application with dynamic questions.',
            Languages: 'JavaScript'
        }

    ]

    const section = document.createElement('div')
    const title = document.createElement('h1')
    const paragraph = document.createElement('p')

    projetos.forEach((projetos, index) => {


        const card = document.createElement('div')
        card.classList.add(
            'w-80',
            'min-h-52',
            'p-6',
            'bg-white',
            'border',
            'border-black/10',
            'rounded-2xl',
            'shadow-lg',
            'shadow-black/5',
            'flex',
            'flex-col',
            'justify-between',
            'transition-all',
            'duration-300',
            'hover:-translate-y-2',
            'hover:shadow-xl',
            'opacity-0',
            'translate-y-4',
            'transition-all',
            'duration-700',
            'ease-out'
        )

        const titleCard = document.createElement('h1')
        titleCard.textContent = projetos.title
        titleCard.classList.add(
            'text-2xl',
            'font-bold',
            'text-black'
        )

        const descriptionCard = document.createElement('p')
        descriptionCard.textContent = projetos.description
        descriptionCard.classList.add(
            'mt-3',
            'text-black/60',
            'leading-relaxed'
        )

        const languageCard = document.createElement('p')
        languageCard.textContent = projetos.Languages
        languageCard.classList.add(
            'mt-4',
            'text-sm',
            'font-medium',
            'text-black/50'
        )

        card.append(titleCard, descriptionCard, languageCard);
        projectsContainer.appendChild(card)
        content.appendChild(section)

        setTimeout(() => {
            card.classList.remove('opacity-0', 'translate-y-4')
        }, 30);

    })

    title.textContent = 'My Projects'
    paragraph.textContent = "Here are some of the projects I've built while learning and improving my development skills."

    content.classList.add(
        'opacity-0',
        'translate-y-4',
        'transition-all',
        'duration-700',
        'ease-out'
    )

    section.classList.add(
        'w-full',
        'h-[calc(100vh-80px)]',
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'text-center',
        'gap-y-6',
        'opacity-0',
        'translate-y-4',
        'transition-all',
        'duration-700',
        'ease-out'
    );

    title.classList.add(
        'font-bold',
        'text-6xl',
        'text-black',
        'font-sans',
    );

    paragraph.classList.add(
        'mt-4',
        'max-w-2xl',
        'text-lg',
        'text-black/70'
    );


    projectsContainer.classList.add(
        'flex',
        'gap-6',
        'justify-center',
        'flex-wrap',
        'translate-y-4',
        'transition-all',
        'duration-700',
        'ease-out'

    );

    section.append(title, paragraph, projectsContainer)
    background.appendChild(section)
    content.appendChild(section)


    setTimeout(() => {
        section.classList.remove('opacity-0', 'translate-y-4');
        content.classList.remove('opacity-0', 'translate-y-4');
    }, 50);


}

function renderAbout() {

    const section = document.createElement('div')
    const title = document.createElement('h1')
    const paragraph = document.createElement('p')
    const button = document.createElement('button')

    title.textContent = 'About Me'
    paragraph.textContent = "Hi, I'm Francisco, a developer passionate about technology and building things for the web. I'm currently learning JavaScript and React while improving my skills in HTML, CSS, Tailwind CSS, and frontend development. I enjoy creating clean, modern interfaces and turning ideas into functional projects. I'm constantly learning, experimenting with new technologies, and working on projects that help me become a better developer."
    button.textContent = "Contact Me"

    content.classList.add(
        'opacity-0',
        'translate-y-4',
        'transition-all',
        'duration-700',
        'ease-out'
    )

    section.classList.add(
        'w-full',
        'h-[calc(100vh-80px)]',
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'text-center',
        'opacity-0',
        'translate-y-4',
        'transition-all',
        'duration-700',
        'ease-out'
    );

    title.classList.add(
        'font-bold',
        'text-6xl',
        'text-black',
        'font-sans',
    );

    paragraph.classList.add(
        'mt-4',
        'max-w-2xl',
        'text-lg',
        'text-black/70'
    );

    button.classList.add(
        'px-5',
        'py-3',
        'bg-black',
        'font-bold',
        'font-sans',
        'text-white',
        'rounded-xl',
        'mt-4',
        'hover:cursor-pointer',
        'hover:scale-105',
        'transition',
        'duration-300'
    )

    setTimeout(() => {
        section.classList.remove('opacity-0', 'translate-y-4');
        content.classList.remove('opacity-0', 'translate-y-4');
    }, 50);

    section.append(title, paragraph, button)
    background.appendChild(section)
    content.appendChild(section)

}

function renderHome() {
    const section = document.createElement('div')
    const title = document.createElement('h1')
    const paragraph = document.createElement('p')
    const button = document.createElement('button')

    title.textContent = "Hi, I'm Francisco."
    paragraph.textContent = "I build modern web experiences."
    button.textContent = "View My Projects"

    content.classList.add(
        'opacity-0',
        'translate-y-4',
        'transition-all',
        'duration-700',
        'ease-out'
    )

    section.classList.add(
        'w-full',
        'h-[calc(100vh-80px)]',
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'text-center',
        'opacity-0',
        'translate-y-4',
        'transition-all',
        'duration-700',
        'ease-out'
    );

    title.classList.add(
        'font-bold',
        'text-6xl',
        'text-black',
        'font-sans',
    );

    paragraph.classList.add(
        'mt-4',
        'max-w-2xl',
        'text-lg',
        'text-black/70'
    );

    button.classList.add(
        'px-5',
        'py-3',
        'bg-black',
        'font-bold',
        'font-sans',
        'text-white',
        'rounded-xl',
        'mt-4',
        'hover:cursor-pointer',
        'hover:scale-105',
        'transition',
        'duration-300'
    )

    setTimeout(() => {
        section.classList.remove('opacity-0', 'translate-y-4');
        content.classList.remove('opacity-0', 'translate-y-4');
    }, 50);

    section.append(title, paragraph, button)
    background.appendChild(section)
    content.appendChild(section)

    button.addEventListener('click', () => {
        content.innerHTML = ''
        renderProjects()
    })

}

renderHome()



navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log(`${link.textContent}`)

        content.innerHTML = ''

        if (link.id === 'About') {
            renderAbout()
        }

        else if (link.id === 'Projects') {
            renderProjects()
        }

        else if (link.id === 'Home') {
            renderHome()
        }

    })
})

function renderContact() {
    const section = document.createElement('div');
    const title = document.createElement('h1');
    const paragraph = document.createElement('p');
    const buttonsContainer = document.createElement('div');

    title.textContent = 'Get in Touch';

    paragraph.textContent =
        "Have a project in mind or just want to say hello? Feel free to get in touch.";

    section.classList.add(
        'w-full',
        'h-[calc(100vh-80px)]',
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'text-center',
        'opacity-0',
        'translate-y-4',
        'transition-all',
        'duration-700',
        'ease-out'
    );

    title.classList.add(
        'text-6xl',
        'font-bold',
        'text-black'
    );

    paragraph.classList.add(
        'mt-4',
        'max-w-xl',
        'text-lg',
        'text-black/60'
    );

    buttonsContainer.classList.add(
        'mt-8',
        'flex',
        'gap-4'
    );

    const emailButton = document.createElement('a');
    emailButton.textContent = 'Email';

    const email = 'franciscomoura03@icloud.com'

    emailButton.classList.add(
        'px-6',
        'py-3',
        'bg-black',
        'text-white',
        'font-bold',
        'rounded-xl',
        'transition',
        'duration-300',
        'hover:scale-105',
        'cursor-pointer'
    );

    const githubButton = document.createElement('a');
    githubButton.textContent = 'GitHub';
    githubButton.href = 'https://github.com/franciscomouradev';

    githubButton.classList.add(
        'px-6',
        'py-3',
        'bg-white',
        'text-black',
        'font-bold',
        'rounded-xl',
        'border',
        'border-black/20',
        'transition',
        'duration-300',
        'hover:scale-105'
    );

    setTimeout(() => {
        section.classList.remove('opacity-0', 'translate-y-4')
    }, 30);

    buttonsContainer.append(emailButton, githubButton);

    section.append(title, paragraph, buttonsContainer);

    content.appendChild(section);

    const notification = document.createElement('div')

    notification.classList.add(
        'fixed',
        'bottom-6',
        'right-6',
        'px-5',
        'py-3',
        'bg-black',
        'text-white',
        'rounded-xl',
        'shadow-lg',
        'opacity-0',
        'translate-y-2',
        'transition-all',
        'duration-300',
        'ease-out'
    );

    notification.textContent = 'Email Copied!'
    
    emailButton.addEventListener('click', async () => {
        await navigator.clipboard.writeText('franciscomoura03@icloud.com')
        
        setTimeout(() => {
            notification.classList.remove('opacity-0', 'translate-y-2');
        }, 30);

        setTimeout(() => {
            notification.classList.add('opacity-0', 'translate-y-2');
        }, 4000);

        document.body.appendChild(notification)

    })

}


contactButton.addEventListener('click', () => {
    renderContact()
})

const footer = document.createElement('footer');

footer.classList.add(
    'w-full',
    'py-4',
    'border-t',
    'border-black/10',
    'flex',
    'items-center',
    'justify-between'
);

const copyright = document.createElement('p');
copyright.textContent = '© 2026 FranciscoDev';

copyright.classList.add(
    'text-sm',
    'text-black/50',
    'mr-6'
);

const footerText = document.createElement('p');
footerText.textContent = 'Built with HTML, Tailwind CSS & JavaScript';

footerText.classList.add(
    'text-sm',
    'text-black/50'
);

footer.append(copyright, footerText);
content.append(footer);