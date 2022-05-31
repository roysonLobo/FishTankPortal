import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css'
class Tanks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tanks:[],
      // books: [],
    };
  }

  componentDidMount() {
    this.getTanks();
  }

  getTanks = () => {
    axios.get('http://localhost:3001/tank/tanks')
      .then((res) => {
        this.setState(() => ({
          tanks: res.data.tanks,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteTank = (tankId) => {
    axios.delete(`http://localhost:3001/tank/tanks/${tankId}`)
      .then((res) => {
        this.getTanks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let html = <h1>No Records</h1>
        if (this.state.tanks.length > 0) {
          html = this.state.tanks.map((val) => {
            // console.log(val.tankid);
            return (
              <div className="row atd1" style={{marginTop:"40px"}}>
                <div className="col-lg-6"style={{width:"50%",minWidth:"40px"}}>
                  <div className="card text-left text-light" style={{ borderRadius: "30px", margin: "10px", maxWidth: "100% ", backgroundColor:'#7A91C8' }}>
                    <div className="card-body container" style={{padding:"20px"}}>
                      <div className="row">
                        <div className="col-md-6">
                        {/* <button className="btn btn1 float-right"style={{borderRadius:"10px"}} onClick={()=>this.delevent(val.tankid)}>X</button> */}
                          <h5 className="card-title">{val.name}
                          </h5>
                          <p className="card-text">
                          <Link to={`/tank/${val.tankId}`}>ID:</Link>{val.tankId}
                          </p>
                          <p className="card-text">No.of Fishes : {val.quantity}</p>
                          <p className="card-text">Fish Species : {val.species}</p>
                          <p className="card-text">Fish Type : {val.type=== true ? "Freshwater":"Saltwater"}</p>
                          <p className="card-text">Food Quantity : {val.foodAmt}</p>
                          <button className='btn btn-primary' onClick={()=>this.props.history.push(`tank/edit/${val.tankId}`)}><p className="card-text">Edit</p></button>
                          {/* <Link to={`tank/edit/${val.tankId}`}><p className="card-text">Edit</p></Link> */}
                          <button className='btn btn-primary' onClick={() => this.deleteTank(val.tankId)}>
                          <p className="card-text">Delete</p>                    
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>                                    
            )
          })
        }
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className='display-4' style={{color:'#3f51b5',marginBottom:'20px',marginTop:'20px'}}>Fish Tank Portal</div>
          <div style={{position:"absolute",top:"75px",right:"15px"}}><Link to='/add/tank'><button className='btn float-right'>+ add Tank</button></Link></div>
          {html}
          <div style={{position:"absolute",top:"10px",right:"15px"}}><Link to='/'><button className='btn float right'>Logout</button></Link></div>
        </div>
        </React.Fragment>
      )     
      
  }
}

export default Tanks;

// import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// class Books extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       books: [],
//     };
//   }

//   componentDidMount() {
//     this.getBooks();
//   }

//   getBooks = () => {
//     axios.get('http://localhost:3001/book')
//       .then((res) => {
//         this.setState(() => ({
//           books: res.data.books,
//         }));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   deleteBook = (isbn) => {
//     axios
//       .delete(`http://localhost:3001/book/${isbn}`)
//       .then((res) => {
//         this.getBooks();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div className="wrapper">
//           <h1 className='list-title'>List of Books</h1>
//           <Link to='/add/book'><button>Add Book</button></Link>
//         </div>
//         <table border={2} cellPadding={2} cellSpacing={2} className='wrapper'>
//           <thead>
//             <th>ISBN</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>isInStock</th>
//             <th>edition</th>
//             <th>Actions</th>
//           </thead>
//           <tbody>
//             {this.state.books.map((book) => {
//               return (
//                 <tr key={book.ISBN}>
//                   <td>
//                     <Link to={`/book/${book.ISBN}`}>{book.ISBN}</Link>
//                   </td>
//                   <td>{book.name}</td>
//                   <td>{book.price}</td>
//                   <td>{book.isInStock === true ? 'Yes' : 'No'}</td>
//                   <td>{book.edition}</td>
//                   <td>
//                     <Link to={`book/edit/${book.ISBN}`}>Edit</Link> |
//                     <span className='delete-btn' onClick={() => this.deleteBook(book.ISBN)}>
//                       Delete
//                     </span>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </React.Fragment>
//     );
//   }
// }

// export default Books;
