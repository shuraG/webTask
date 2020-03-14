import React from 'react';
import '../styles/Specs.css'
import { getCarModel } from "./CarsAPI";

export default class ScrollPictures extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: [],
            isFetch: true
        }
    }

    componentDidMount() {
        this.getModel(this.props.idCar);
    }

    render() {
        if (this.state.isFetch) {
            return "Loading...";
        }
        return (
            <div className={'container-specs'}>
                <div className={"spec-tittle"}>{this.props.title}</div>
                <h2 className={"spec-text"}><span>Cylinders</span> {this.state.model[0].cylinders}</h2>
                <h2 className={"spec-text"}><span>City MPG</span> {this.state.model[0].city_mpg}</h2>
                <h2 className={"spec-text"}><span>Highway MPG</span> {this.state.model[0].highway_mpg}</h2>
                <h2 className={"spec-text clear-border"}><span>Engine</span> {this.state.model[0].engine}</h2>
            </div>
        )
    }

    async getModel(idCar) {
        const response = await getCarModel(idCar);
        this.setState({ model: response, isFetch: false });
    }

}