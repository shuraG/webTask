import React from 'react';
import '../styles/Carrusel.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Carrusel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idsPictures: [],
            idCar:'1395P'
        }
        
    }
    componentDidMount() {
        fetch(`http://localhost:8081/cars/${this.state.idCar}/images`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ idsPictures: data });
            })
            
    }

    render() {
        return (
            <div className={'container-carrusel'}>
                <Carousel showThumbs={false}>
                    {this.state.idsPictures.map(obj => {
                        return (<img  key={obj.idcar_pictures} src={`http://localhost:8081/image/${obj.idcar_pictures}`} />);
                    })}
                </Carousel>
            </div>
        );
    }

}