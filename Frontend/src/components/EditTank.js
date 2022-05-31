import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditTank extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      quantity: '',
      type: '',
      species: '',
      foodAmt: '',
    };
  }
  componentDidMount() {
    const tankId = this.props.match.params.tankId;

    if (!tankId) {
      return;
    }

    axios.get(`http://localhost:3001/tank/tanks/${tankId}`).then(res => {
      const tank = res.data.tank[0];
      this.setState(() => ({
        name: tank.name,
        quantity: tank.quantity,
        type: tank.type ? 'Freshwater' : 'Saltwater',
        species: tank.species,
        foodAmt:tank.foodAmt,
      }));
    }).catch(err => {
      console.log(err);
    })
  }

  handleInputChange = (event, tankId) => {
    const value = event.target.value;

    this.setState(() => ({
      [`${tankId}`]: value,
    }));
  }

  saveTank = () => {
    const tankId = this.props.match.params.tankId;

    const tank = {
      name: this.state.name,
      quantity: this.state.quantity,
      type: this.state.type === 'Freshwater' ? true : false,
      species: this.state.species,
      foodAmt:this.state.foodAmt,
    }

    axios.put(`http://localhost:3001/tank/tanks/${tankId}`, tank).then(res => {
      this.props.history.push('/tanks');
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className='form' style={{marginTop:"20px",marginLeft:"50px"}}>
          <div>
            <label>Name:</label><br/>
            <input type="text" value={this.state.name} onChange={(event) => this.handleInputChange(event, 'name')} />
          </div><br/>
          <div>
            <label>Quantity:</label><br/>
            <input type="text" value={this.state.quantity} onChange={(event) => this.handleInputChange(event, 'quantity')} />
          </div><br/>
          <div>
            <label>Species:</label><br/>
            <input type="text" value={this.state.species} onChange={(event) => this.handleInputChange(event, 'species')} />
          </div><br/>
          <div>
          <label>Fish Type:</label><br/>
            <select value={this.state.type} onChange={(event) => this.handleInputChange(event, 'type')}>
              <option value="freshwater">Freshwater</option>
              <option value="saltwater">Saltwater</option>
            </select>
          </div><br/>
          <div>
            <label>Food Quantity:</label><br/>
            <input type="text" value={this.state.foodAmt} onChange={(event) => this.handleInputChange(event, 'foodAmt')} />
          </div><br/>
          <button onClick={() => this.saveTank()}>Save Tank</button>
        </div>

        <hr />

        <Link to='/tanks'>Back</Link>
      </div>
    );
  }
}

export default EditTank;
