import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class TankDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tank: {},
    };
  }

  componentDidMount() {
    const tankId = this.props.match.params.tankId;

    if (!tankId) {
      return;
    }

    axios.get(`http://localhost:3001/tank/tanks/${tankId}`).then(res => {
      this.setState(() => ({
        tank: res.data.tank[0],
      }));
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <span className="tank-name">{this.state.tank.name}</span>
        </div>
        <div className="details">
          <div>
            <span className="label">ID: </span>   
            <span className="value">{this.state.tank.tankId}</span>
          </div>
          <div>
            <span className="label">Quantity: </span>
            <span className="value">{this.state.tank.quantity}</span>
          </div>
          <div>
            <span className="label">Species: </span>
            <span className="value">{this.state.tank.species}</span>
          </div>
          <div>
            <span className="label">Type: </span>
            <span className="value">{this.state.tank.type ? 'Freshwater' : 'Saltwater'}</span>
          </div>
          <div>
            <span className="label">Food Quantity: </span>
            <span className="value">{this.state.tank.foodAmt}</span>
          </div>
        </div>

        <hr />

        <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default TankDescription;
