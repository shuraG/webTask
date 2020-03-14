import React from 'react';
import '../styles/Specs.css'
import { getCar } from "./CarsAPI";

export default class CarDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            car: [],
            isFetch: true
        }
    }

    componentDidMount() {
        this.getCarId(this.props.idCar);
    }

    async getCarId(idCar) {
        const response = await getCar(idCar);
        this.setState({ car: response, isFetch: false });
    }

    render() {
        let car = this.state.car[0];
        if (this.state.isFetch) {
            return "Loading...";
        }
        return (
            <div className={"detailscar-container-section"} >
                <h2>{`Item Number: ${this.state.car[0].item_number}`} </h2>
                <h2 style={{ marginBottom: '16px' }}>VIN: {this.state.car[0].VIN}</h2>
            </div>
        )
    }



}