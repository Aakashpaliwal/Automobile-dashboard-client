import React, { Component } from 'react'
import './requirement.css'
import {Link} from 'react-router-dom'
export class AddRequirement extends Component {
    state = {
        Requirement : "",
        Location : "",
        State : ""
    
      };
      change  = e => {
        this.setState ({
          [e.target.name]: e.target.value
        });
      };
      onSubmit = e =>
      {
          e.preventDefault();
          console.log(this.state);
          this.setState ({
            Requirement : "",
            Location : "",
            State : ""
          })
      };
  render() {
    return (
        <div className="skin-blue fixed-layout">
        <div className="page-wrapper">

             <div className="container-fluid">
               
               <div className="row page-titles">
                   <div className="col-md-5 align-self-center">
                       {/* <h4 className="text-themecolor">Forms</h4> */}
                       <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Add Requirement</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>

    {/*Form content begin */}
   
<div className = "product-form-upper">
    <div className = "container">
    <div className = "below-custom-form">
        <div className = "row">
           <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <h3>Add Requirement</h3>
           </div>
        </div>
        <form className="custom-content-form">
  <div class="form-row">
 
  
  <div class="form-group">
    <label for="inputAddress">Add Requirement</label>
    <input type="text" className="form-control" placeholder="Xerox" name="Requirement" value={this.state.Requirement} onChange={e => this.change(e)}/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Add Location</label>
    <input type="text" className="form-control" placeholder="2304TX" name="Location" value={this.state.Location} onChange = {e => this.change(e)}/>
  </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-12">
      <label for="inputCity">Add State</label>
      <input type="text" className="form-control" placeholder="2018" name="state" value={this.state.state} onChange={e => this.change(e)}/>
    </div>
   
   
  </div>
 
  <button class="btn btn-primary" onClick = {e => this.onSubmit(e)}>Submit</button>
</form>
    </div>
    </div>
</div>






        </div>
        </div>

    )
  }
}

export default AddRequirement
