import Bg from '../assets/bg.jpg'
export default function Landing(){
    return(
        <div id="home">
        <div className="hero min-h-screen" style={{backgroundImage: `url(${Bg})`}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">

    <div className="max-w-5xl bg-neutral rounded-2xl p-10 bg-opacity-70">
      <h1 className="mb-5 text-5xl font-bold">Engaging the Margins</h1>
      <h2 className="mb-5 text-3xl font-bold">Are you a Technologist who engages with BIPOC in technological spaces and datasets?</h2>
      <p className="mb-5 text-3xl">We are researchers interested in learning about your experiences building and using technology, with a focus on engagement with individuals who identify as Black, Indigenous, or Person of Color (BIPOC) in technological spaces and datasets..</p>
      <div className='flex content-center self-center place-content-center my-5'>
       
    <p className='text-xl'><span className='font-bold'>Eligibility</span> <p>18 years or older, seeks or collects data for professional use in technology</p></p></div>
    <div className='flex content-center self-center place-content-center my-5'>
    <p className='text-xl'><span className='font-bold'>Time commitment</span> <p>30-45 minute interview</p></p></div>
    <div className='flex content-center self-center place-content-center my-5'>
    <p className='text-xl'><span className='font-bold'>Compensation</span> <p>$40 Amazon gift card</p></p></div>
    <button className='btn btn-primary'><a href='https://go.gmu.edu/etm_interview_tech'>SIGN UP HERE</a></button>
    </div>

  </div>
</div>
        </div>    )
}