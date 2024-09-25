import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(255,136,0)", "rgb(153,243,255)"];

export let singlePage = false;

export const info = {
    firstName: "Sam",
    lastName: "Reyes",
    initials: "sdr", 
    position: "a Software Engineering student",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🍵',
            text: 'coffee? no! this one is fueled by matcha'
        },
        {
            emoji: '🌎',
            text: 'based in Toronto'
        },
        {
            emoji: "🏫",
            text: "student at Centennial College"
        },
        {
            emoji: "📧",
            text: "samanthadaniellereyes.54@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/sarcasammm/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/sarcasammm_/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/sarcasammm",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/samanthadaniellereyes/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/sarcasammm_/media",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hey, my name is Samantha but I prefer being called Sam. I love discovering and exploring places, culture, history, food, and animals. This curiosity of mine has been a great tool in developling my programming knowledge. Coding is a fun world!",
    skills:
        {
            proficientWith: ['c#', 'sql', 'linux', 'javascript', 'html5', 'css3',],
            exposedTo: ['python', 'java', 'nodejs','react', 'git', 'vite']
        }
    ,
    hobbies: [
        {
            label: 'dancing',
            emoji: '💃🏻'
        },
        {
            label: 'anime',
            emoji: '👾'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'exploring the city',
            emoji: '👣'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}