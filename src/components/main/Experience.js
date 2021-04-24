import React from 'react'

function Experience (){
    return(
    <div className="experience">
        <h2>Experience</h2>
        <input type="text" placeholder="Position" name="position" />
        <input type="text" placeholder="Company" name="company" />
        <input type="text" placeholder="City" name="city" />
        <input type="text" name="From" placeholder="from" />
        <input type="text" name="To"  placeholder="to"/>
    </div>
    )
}

export default Experience