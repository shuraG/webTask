import React from 'react';
import '../styles/ScrollPictures.css';
import { getCarPictures, getURLPicture } from "./CarsAPI";

export default class ScrollPictures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idsPictures: [],
        }
    }
    componentDidMount() {
        this.getCarPictures(this.props.idCar);
    }

    async getCarPictures(idCar) {
        const response = await getCarPictures(idCar);
        this.setState({ idsPictures: response });
    }

    render() {
        return (
            <div className={'container-scroll'}>
                {this.state.idsPictures.map(obj => {
                    return (<img style={{ margin: '2px' }} key={obj.idcar_pictures} src={getURLPicture(obj.idcar_pictures)} width={'250px'} height={'250px'} onClick={() => this.props.metodo(obj.idcar_pictures)} />);
                })}
            </div>
        );
    }

}