import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <h1 style={{textAlign:'center'}}>My Fake Youtube</h1>
    <div style={{marginTop:"3%",display:"flex",flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
   
      <li style={{fontSize:20,listStyleType:'none',padding:5}}>
        <Link to="/">Youtube</Link>
      </li>
      <li style={{fontSize:20,listStyleType:'none',padding:5}}>
        <Link to="/watchLater">Watch Later</Link>
      </li>
    </div>
    </>
  );
}
export default Navbar;
