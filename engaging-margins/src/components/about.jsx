import gmu from '../assets/gmu.png';
import nsf from '../assets/nsf.png';
import uta from '../assets/uta.png';
import measure from '../assets/measure.png';
import msft from '../assets/msft.png';
export default function About() {
    return(
        <div className='py-10 px-20' id="about">
        <h1 className='text-5xl font-bold'>About</h1>
            <p className='text-2xl mb-10 mt-5'>This collaborative project aims to investigate the lack of diverse, representative datasets and insights in the development and use of technology. We will explore the effects of these disparities on both the ability for technologists (i.e.,  practitioners, designers, software developers, etc.) to develop technology that addresses and mitigates systemic societal racism and historically marginalized individuals’ ability to feel seen and heard in the technology with which they engage. The implications of this project are threefold: 1) we support building relationships between technologists and technology users by understanding the values that most impact historically marginalized communities’ engagement and data contributions; 2) given access to more diverse data and insights, our project will provide technologists with interventions that empower them to make use of these data and insights in practice; 3) lastly, our work will provide support and affirmation for the technologists who are already making these explicit considerations in their work without the adequate support. More broadly, insights from this proposed work can be applied in practice to promote racial equity and ensure systemic racism is an explicit consideration in STEM education and workforce development by incorporating more equitable practices in technologists’ workflow.
            </p>
            <p className='text-2xl mb-10 mt-5'>This work is supported by the National Science Foundation (NSF) under grant <a className='text-secondary' href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2224674&HistoricalAwards=false">#2224674</a> and <a className='text-secondary' href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2224675&HistoricalAwards=false">#2224675</a>.</p>
        <div className='flex flex-wrap place-content-evenly'>
        <div className="h-18 w-80 mt-10">
            <img className="h-18 w-80" src={uta} />
        </div>
        <div className="h-30 w-48">
            <img className="h-30 w-48" src={gmu} />
        </div>
        <div className="h-18 w-80 mt-10">
            <img className="h-18 w-80" src={msft} />
        </div>
        <div className="h-18 w-80">
            <img className="h-18 w-80" src={measure} />
        </div>
        <div className="h-32 w-32">
            <img className="h-32 w-32" src={nsf} />
        </div>
        </div>

        </div>
        )
}
