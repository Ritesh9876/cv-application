import React from 'react'

class Preview extends React.Component{
    constructor(props){
        super(props)
this.state={

    }
    }



    render(){
        return(
            <div className="preview-section">
                <div className="preview">
                    <div className="edit-button">
                        <button className="edit"><a href="#">Edit</a></button>
                </div>
                <div className="cv-personal">
                    <p className="title">Personal Information</p>
                    <p>Name: {this.props.Info.name}</p>
                    <p>Address: {this.props.Info.address}</p>
                    <p>Phone Number: {this.props.Info.phoneNumber}</p>
                    <p>Email: {this.props.Info.email}</p>
                    <p>Description: {this.props.Info.description}</p>
                </div>
               <div className="cv-exp">
                   <p className="title">Experince</p>
                   <p>Position: {this.props.Info.position}</p>
                   <p>Company: {this.props.Info.company}</p>
                   <p>City: {this.props.Info.workcity}</p>
                   <p>From: {this.props.Info.exfrom}</p>
                   <p>To: {this.props.Info.exto}</p>
               </div>
               <div className="cv-edu">
                   <p className="title">Education</p>
                   <p>University: {this.props.Info.university}</p>
                   <p>Degree: {this.props.Info.degree}</p>
                   <p>City: {this.props.Info.educity}</p>
                   <p>From :{this.props.Info.edufrom}</p>
                   <p>To: {this.props.Info.eduto}</p>
               </div>
            </div>
            </div>
        )
    }
}

export default Preview