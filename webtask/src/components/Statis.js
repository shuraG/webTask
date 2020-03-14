import React from 'react';


class Statis extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div style={{ marginRight: '15px' }}>
                <h2>{this.props.name}</h2>
                <div style={{ fontSize: '20px', color: '#3FB34A' }}>{this.props.value} </div>
            </div>
        );

    }

}

export default Statis;