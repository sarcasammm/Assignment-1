//Info.js - Samantha Danielle Reyes - 301372609 - Sept 25, 2024

import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"



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
            emoji: '💭',
            text: 'try to be 1% better everyday... your growth will be exponential in no time. :) '
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
            text: "samanthadaniellereyes.54@gmail.com | let's connect!"
            
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
    bio: "Hey, my name is Samantha but I prefer being called Sam. I love discovering and exploring places, culture, history, food, and animals. This curiosity of mine has been a great tool in developling my programming knowledge. Coding is a fun world! The community I found in Centennial College has been incredibly helpful to hone my fresh set of skills!",

    
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
            label: 'photography',
            emoji: '📷'
        },
        {
            label: 'exploring the city',
            emoji: '👣'
        }

    ],
    portfolio: [ 
        {
            title: "Sam's Resume",
            live: "https://drive.google.com/file/d/1m-Ok_U6XpqZ7LDFVB-ktRKnDpzLO9dc4/view?usp=sharing", 
            image: mock1
        },
        {
            title: "Fall 2023-Winter 2024 HTML/JavaScript Projects",
            live: "https://drive.google.com/file/d/1LfNMgb0owumFBjKWuOlzIUdP0NFbgoK3/view?usp=sharing",
            image: mock2
        }
    ]
}