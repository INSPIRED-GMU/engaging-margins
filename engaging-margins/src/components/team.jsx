import { useState } from 'react';
import bij from '../assets/bij.png';
import eah from '../assets/eah.jpg';
import df from '../assets/df.jpeg';
import as from '../assets/as.png';
import gt from '../assets/gt.jpg';
import ms from '../assets/ms.jpeg';
import pb from '../assets/pb.jpeg';
import pa from '../assets/pa.jpeg';
export default function Team() {
    const [team, setTeam]  = useState([
        {
            "name":"Dr. Angela D. R. Smith",
            "image":as,
            "title":"Assistant Professor at University of Texas at Austin",
            "role":"Co-Principal Investigator"
        },
        {
            "name":"Dr. Brittany Johnson-Matthews",
            "image":bij,
            "title":"Assistant Professor at George Mason University",
            "role":"Co-Principal Investigator"
        },
        {
            "name":"Dr. Denae Ford Robinson",
            "image":df,
            "title":"Senior Researcher at Microsoft Research",
            "role":"External Collaborator"
        },
        {
            "name":"Meme Styles",
            "image":ms,
            "title":"President and Founder of Measure",
            "role":"External Collaborator"
        },
        {
            "name":"Precious Azurée",
            "image":pa,
            "title":"Vice President and Co-Founder of Measure",
            "role":"External Collaborator"
        },
        {
            "name":"Paulette Blanc",
            "image":pb,
            "title":"Chief Research Officer and Co-Founder at Measure",
            "role":"External Collaborator"
        },
        {
            "name":"Ebtesam Al Haque",
            "image":eah,
            "title":"PhD Student at George Mason University",
            "role":"Graduate Research Assistant"
        },
        {
            "name":"Gabriella Thompson",
            "image":gt,
            "title":"MS Student at University of Texas at Austin",
            "role":"Graduate Research Assistant"
        }
    ])
    return(
        <div className='py-10 px-20 bg-primary' id="team">
        <h1 className='text-5xl font-bold'>Team</h1>

        <div className='flex flex-wrap place-content-center justify-evenly'>
            {team.map((member) => (
                <div className='m-10'>
                <div className="avatar">
                <div className="w-80 rounded-full border-8">
                    <img src={member.image} />
                </div>
                </div>
                <p className='font-bold text-xl text-center w-80'>{member.name}</p>
                <p className='text-xl bg-accent rounded-xl italic text-center w-80'>{member.role}</p>
                <p className='text-xl text-center w-80'>{member.title}</p>
                </div>
            ))}

        </div>

        </div>
        )
}
