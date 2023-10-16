
export default function Goals() {
    return(
        <div className='py-10 px-20' id="goals">
        <h1 className='text-5xl font-bold'>Project Goals</h1>
            <p className='text-3xl mt-5'>This study seeks to answer three main research questions:</p>
            <ol type="1" className='text-3xl'>
                <li>1) What are the barriers to engaging and amplifying marginalized voices, for  both technologists and users, in technological spaces and data sets?</li>
                <li>2) How can we engage marginalized groups when designing and developing data-centric systems without sacrificing their safety, security, and/or trust?</li>
                <li>3) What does it look like to provide interventions for engaging the margins to technologists without compromising the safe spaces for marginalized groups?</li>
            </ol> 
            <p className='text-3xl mb-10 mt-5'>Using a multi-modal approach, the project will examine how researchers and technologists can best learn to engage in data-centric research with marginalized communities in an ethically and socially responsible manner that centers the rights and values of the communities of interest. Culturally relevant approaches and grounding philosophies will drive the research methods and analyses. Through surveys, semi-structured interviews, design workshops utilizing a combination of participatory design and community-based approaches, as well as case study analysis to collect qualitative and quantitative data, the research team will develop an intervention that supports technologists in responsible engagement. Aside from real world implementation, this project will share its findings through a combination of academic and community-facing venues, such as journal publications, conference presentations as well as op-eds, blogs, workshops, and social media.
            </p>


            <div>
            <ul className="steps steps-vertical lg:steps-horizontal w-full">
            <li data-content="★" className="step step-secondary font-bold">Grant Awarded</li>
            <li data-content="Y1" className="step step-secondary font-bold">Survey & Interviews</li>
            <li data-content="Y2" className="step"><p className="flex flex-wrap w-20 text-left">Professional Development Workshops</p></li>
            <li data-content="Y3" className="step"><p className="flex flex-wrap w-20 text-left">Implementation & Controlled User Study</p></li>
            <li data-content="Y5" className="step"><p className="flex flex-wrap w-20 text-left">Case/Field Study</p></li>
            </ul>
            </div>
 

        </div>
        )
}
