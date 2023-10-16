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
      <div className='flex content-center self-center place-content-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    <p className='text-xl font-bold'>Eligibility: ?</p></div>
    <div className='flex content-center self-center place-content-center'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <p className='text-xl font-bold'>Time commitment: 20 mins</p></div>
    </div>
  </div>
</div>
        </div>    )
}