import logoImg from '../../images/Star_Wars_Logo.svg';

const Logo = () => {
    return (
        <img src={logoImg} alt="logo" style={{ width: '60px' }} />
    );
}

export default Logo;