import React from 'react'
class  Personal extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            address:"",
            phoneNumber:"",
            email:"",
            description:""
        }
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(evt){
        const name=evt.target.name
        const value=evt.target.value
       
        this.setState((prevState)=>{
            
          const personalInfo={
              ...prevState,[name]:value
          }
          console.log(personalInfo)
          return personalInfo
        })
        
        
    }

render(){
    
    return(
        <div className="Personal">
            <h2>Personal Information</h2>
            <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
            <input type="text" placeholder="address" name="address" onChange={this.handleChange} value={this.state.address}/>
            <input type="text" placeholder="Phone number" name="phoneNumber" onChange={this.handleChange} value={this.state.phoneNumber}/>
            <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email}/>
            <textarea name="description"   placeholder="description" onChange={this.handleChange} value={this.state.description}/>
        </div>
    )
}
}


export default Personal