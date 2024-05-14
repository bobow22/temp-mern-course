import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I&apos;m baby roof party hoodie pop-up ethical bushwick JOMO
            stumptown small batch pinterest pour-over brunch cardigan scenester
            hell of. Green juice cupping ramps neutral milk hotel messenger bag.
            Meh activated charcoal gorpcore raclette gatekeep post-ironic,
            hammock seitan. Organic yr tumblr, raclette cardigan hot chicken DIY
            XOXO crucifix chartreuse cupping meditation Brooklyn portland.
            Artisan deep v air plant swag kombucha.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
