import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tankId: '',
      name: '',
      quantity: '',
      type: 'freshwater',
      species: '',
      foodAmt:'',
    };
  }

  handleInputChange = (event, tankId) => {
    const value = event.target.value;

    this.setState(() => ({
      [`${tankId}`]: value,
    }));
  }

  saveBook = () => {
    const tank = {
      tankId: this.state.tankId,
      name: this.state.name,
      quantity: this.state.quantity,
      type: this.state.type === 'freshwater' ? true : false,
      species: this.state.species,
      foodAmt:this.state.foodAmt,
    }

    axios.post(`http://localhost:3001/tank/tanks`, tank).then(res => {
      this.props.history.push('/tanks');
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="wrapper" style={{marginTop:"20px",marginLeft:"50px"}}>
        <div className='form'>
          <h3>Add Fish Tank</h3><br/>
          <div>
            <label>Tank Id:</label><br/>
            <input type="text" value={this.state.tankId} onChange={(event) => this.handleInputChange(event, 'tankId')} />
          </div><br/>
          <div>
            <label>Fish Tank Name:</label><br/>
            <input type="text" value={this.state.name} onChange={(event) => this.handleInputChange(event, 'name')} />
          </div><br/>
          <div>
            <label>No. of fishes:</label><br/>
            <input type="text" value={this.state.quantity} onChange={(event) => this.handleInputChange(event, 'quantity')} />
          </div><br/>
          <div>
            <label>Fish Species:</label><br/>
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
            <label>Food Quantity:</label>
            <input type="text" value={this.state.foodAmt} onChange={(event) => this.handleInputChange(event, 'foodAmt')} />
          </div>
          <button onClick={() => this.saveBook()}>Save</button>
        </div>



        <hr />

        <Link to='/tanks'>Back</Link>
      </div>
    );
  }
}

export default AddBook;
