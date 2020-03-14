import React from 'react';
import ScrollPictures from './ScrollPictures';
import Carrusel from './Carrusel';
import '../styles/CarScreen.css';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import Statis from './Statis';
import CarModelDetails from './CarModelDetails';
import CarDetails from './CarDetails';
import { getCarPictures, getCarStatistics, getURLPicture } from "./CarsAPI";

class CarScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFoto: 1,
            statis: [],
            isFetch: true
        }
        this.onSelectPicture = this.onSelectPicture.bind(this);
    }

    componentDidMount() {
        this.getData(this.props.idCar);
    }

    async getData(idCar) {
        const responsePicts = await getCarPictures(idCar);
        const responseStatis = await getCarStatistics(idCar);
        this.setState({ selectedFoto: responsePicts[0].idcar_pictures, statis: responseStatis, isFetch: false });
    }

    onSelectPicture(id) {
        this.setState({ selectedFoto: id });
    }

    render() {
        if (this.state.isFetch) {
            return "Loading...";
        }
        return (
            <div className={"container"}>
                <div className={"foto-info"}>
                    <div className={'foto-container'} >
                        <img width={'100%'} height={'100%'} src={getURLPicture(this.state.selectedFoto)} />
                    </div>
                    <Carrusel />
                    <div className={"detailscar-container"}>
                        <CarModelDetails idCar={this.props.idCar} />
                        <div>
                            <CarDetails idCar={this.props.idCar} />
                            <div className={"detailscar-container-section detail-row"} >
                                Share this car <span style={{ marginLeft: '10px' }}><MaterialIcon icon={'email'} color={'#343434'} /></span>
                            </div>
                            <div className={'detailscar-container-section detail-row'}>
                                <Statis name='Views' value={this.state.statis[0].views} />
                                <Statis name='Saves' value={this.state.statis[0].saves} />
                                <Statis name='Shares' value={this.state.statis[0].shares} />
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollPictures metodo={this.onSelectPicture} idCar={this.props.idCar} />
            </div>


        );
    }
}

export default CarScreen;


