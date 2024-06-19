import Bg from '../assets/bg.jpg'
export default function Landing(){
    return(
        <div id="home">
        <div className="hero min-h-screen" style={{backgroundImage: `url(${Bg})`}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">

    <div className="max-w-5xl bg-neutral rounded-2xl p-10 bg-opacity-70">
      <h1 className="mb-5 text-5xl font-bold">Engaging the Margins</h1>
      <p className="mb-5 text-3xl">We are researchers interested in learning about your experiences building and using technology, with a focus on engagement with individuals who identify as Black, Indigenous, or People of Color (BIPOC) in technological spaces and datasets.</p>
      <div className='flex content-center self-center place-content-center my-5'>
       
    <p className='text-xl'><span className='font-bold'>Eligibility</span> <p>18 or older, engages with technology frequently</p></p></div>
    <div className='flex content-center self-center place-content-center my-5'>
    <p className='text-xl'><span className='font-bold'>Time commitment</span> <p>10 mins</p></p></div>
    <button className='btn btn-primary'><a href='#'>SURVEY CLOSED</a></button>
    </div>

  </div>
</div>
        </div>    )
}