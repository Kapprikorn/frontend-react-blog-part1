import './Home.css';
import logo from '../../assets/logo-black.png';

export default function Home() {
  return (
    <>
      <h1>Bij Blogventure geloven we in de kracht van woorden*</h1>
      <img src={logo} alt="company-logo-big"/>
      <p className="asterisk-note">*En in billboards. die zijn niet te missen namelijk.</p>
    </>
  )
}