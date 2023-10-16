export default function NavBar(){
    return(
        <div className="sticky top-0">
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Engaging the Margins</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#team">Team</a></li>
      <li><a href="#goals">Goals</a></li>
      <li><a href="#contact">Contact</a></li>
      
    </ul>
  </div>
</div>
        </div>    
)
}