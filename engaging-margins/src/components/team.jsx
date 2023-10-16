import { useState } from 'react';
import bij from '../assets/bij.png';
import eah from '../assets/eah.jpg';
import df from '../assets/df.jpeg';
import as from '../assets/as.png';
export default function Team() {
    const [team, setTeam]  = useState([
        {
            "name":"Dr. Angela D.R. Smith",
            "image":as,
            "title":"Assistant Professor at University of Texas at Austin"
        },
        {
            "name":"Dr. Brittany Johnson-Matthews",
            "image":bij,
            "title":"Assistant Professor at George Mason University"
        },
        {
            "name":"Dr. Denae Ford Robinson",
            "image":df,
            "title":"Senior Researcher at Microsoft Research"
        },
        {
            "name":"Ebtesam Al Haque",
            "image":eah,
            "title":"PhD Student at George Mason University"
        },
        {
            "name":"Gabriella Thompson",
            "image":eah,
            "title":"MS Student at University of Texas at Austin"
        }
    ])
    return(
        <div className='py-10 px-20 bg-primary' id="team">
        <h1 className='text-5xl font-bold'>Team</h1>

        <div className='flex flex-wrap self-center items-center place-content-center'>
            {team.map((member) => (
                <div className='place-content-center mx-10 my-10'>
                <div className="avatar">
                <div className="w-80 rounded-full">
                    <img src={member.image} />
                </div>
                </div>
                <p className='font-bold text-xl text-center'>{member.name}</p>
                <p className='text-xl text-center'>{member.title}</p>
                </div>
            ))}

        </div>

        </div>
        )
}
