import React from 'react';
import SpecsScreen from './Specs';
import '../styles/Footer.css';

export default class ScrollPictures extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'container-footer'}>
                <SpecsScreen title={'EXTERIOR'} idCar={this.props.idCar} />
                <SpecsScreen title={'PERFORMANCE'} idCar={this.props.idCar} />
            </div>
        );
    }
}