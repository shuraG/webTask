import React from 'react';
import '../styles/Specs.css'
import { getCar, getCarModel } from "./CarsAPI";

export default class CarModelDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: [],
            car: [],
            isFetch: true
        }
    }

    componentDidMount() {
        this.getCarId(this.props.idCar);
    }

    async getCarId(idCar) {
        const responseCar = await getCar(idCar);
        const responseMod = await getCarModel(idCar);
        console.log(responseCar);
        this.setState({ model: responseMod, car: responseCar, isFetch: false });
    }

    render() {
        let car = this.state.car[0];
        if (this.state.isFetch) {
            return "Loading...";
        }
        return (
            <div>
                <h1>{this.state.model[0].model_name}</h1>
                <div className={"detailscar-container-section"} >
                    <h2>Year</h2>
                    <h3>{car.year}</h3>
                    <h2>Price Range</h2>
                    <h3>{`${car.price_left_range} - ${car.price_right_range}`}</h3>
                    <h2>Mileage</h2>
                    <h3>{`${car.mileage}  miles`}</h3>
                </div>
            </div>
        )
    }



}