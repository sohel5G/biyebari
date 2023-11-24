import { Link } from "react-router-dom";
import logo from "../../assets/logo/Logo.png"
import PropTypes from 'prop-types';

const Logo = ({width}) => {
    return (
        <Link to={'/'}>
            <img className={width && width} src={logo} alt="Logo" />
        </Link>
    );
};

export default Logo;

Logo.propTypes = {
    width: PropTypes.string
};

