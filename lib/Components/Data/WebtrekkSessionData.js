import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkSessionData extends WebtrekkReactComponent {
    constructor() {
        super('session');
    }
}

WebtrekkSessionData.propTypes = {
    loginStatus: PropTypes.string,
    parameter: PropTypes.objectOf(PropTypes.string)
};

WebtrekkSessionData.defaultProps = {
    loginStatus: null,
    parameter: null
};

export default WebtrekkSessionData;
