import React from 'react'
import Preview from './Preview'
class Form extends React.Component{
    constructor(props){
        super(props)
         this.state={
           name:"",
           address:"",
           phoneNumber:"",
           email:"",
           description:"",
           position:"",
           company:"",
           workcity:"",
           exfrom:"",
           exto:"",
           university:"",
           educity:"",
           degree:"",
           edufrom:"",
           eduto:""
         }
         this.handleChange= this.handleChange.bind(this)
    }

    handleChange(evt){
      const name=evt.target.name
      const value=evt.target.value
     
      this.setState((prevState)=>{
          
        const Info={
            ...prevState,[name]:value
        }
        return Info
      })
      
      
  }
    render(){
    return(
      <div className="container">
    <form >
      <div className="Personal">
            <h2>Personal Information</h2>
            <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
            <input type="text" placeholder="address" name="address" onChange={this.handleChange} value={this.state.address}/>
            <input type="text" placeholder="Phone number" name="phoneNumber" onChange={this.handleChange} value={this.state.phoneNumber}/>
            <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email}/>
            <textarea name="description"   placeholder="description" onChange={this.handleChange} value={this.state.description}/>
        </div>
      
        <div className="experience">
        <h2>Experience</h2>
        <input type="text" placeholder="Position" name="position" onChange={this.handleChange} value={this.state.position}/>
        <input type="text" placeholder="Company" name="company" onChange={this.handleChange} value={this.state.company}/>
        <input type="text" placeholder="City" name="workcity" onChange={this.handleChange} value={this.state.workcity}/>
        <input type="text" name="exfrom" placeholder="from" onChange={this.handleChange} value={this.state.exfrom}/>
        <input type="text" name="exto"  placeholder="to" onChange={this.handleChange} value={this.state.exto}/>
    </div>
      
    <div className="Education">
        <h2>Education</h2>
        <input type="text" placeholder="University" name="university" onChange={this.handleChange} value={this.state.university}/>
        <input type="text" placeholder="city" name="educity" onChange={this.handleChange} value={this.state.educity}/>
        <input type="text" placeholder="Degree" name="degree" onChange={this.handleChange} value={this.state.degree}/>
        <input type="text" name="edufrom" placeholder="from" onChange={this.handleChange} value={this.state.edufrom}/>
        <input type="text" name="eduto"  placeholder="to" onChange={this.handleChange} value={this.state.eduto}/>
    </div>

      <input className="submit" type="button" value="Sumbit" onClick={(e)=>{
        e.preventDefault()
        console.log("Radhe Krishna")
        console.log(e.target.value);
        console.log(this.state)
        const prev= document.querySelector(".preview-section");
        prev.style.display="flex"
      }}/>
    </form>
     <Preview Info={{...this.state}}/>
    </div>
    )
    }
}
export default Form