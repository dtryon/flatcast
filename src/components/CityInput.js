import React, { Component } from 'react';


export default class CityInput extends Component {

    static propTypes = {

        city: React.PropTypes.string.isRequired,
        cityChanged: React.PropTypes.func.isRequired
    }

    static defaultProps = {
        city: 'london - GB'
    }

    render() {
        const { city, cityChanged } = this.props;
        return <input className="FlatCast_city_input" placeholder="city - countryCode" type="text" value={city} onChange={(e) => cityChanged(e.target.value)} />
    }
}
