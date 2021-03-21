import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <div className = 'text-center'>
            <h1>Contact Me</h1>
            <p>Please fill out the form and I will contact you.</p>
            </div>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-md-6 col-xs-12'>

                        {/* NAME INPUT */}
                        <div className = 'text-center'>                       
                        <input                       
                        type= 'text'
                        className='form-control'
                        placeholder= 'Name'
                        name = 'name'
                        />
                        <div className = 'line'></div>
                        </div>

                        {/* PHONE INPUT */}
                        <div className = 'text-center'>
                        <input                        
                        type= 'text'
                        className='form-control'
                        placeholder= 'Phone Number'
                        name = 'phone'
                        />
                        <div className = 'line'></div>
                        </div>

                        {/* EMAIL INPUT */}
                        <div className = 'text-center'>
                        <input                        
                        type = 'text'
                        className='form-control'
                        placeholder= 'Email'
                        name = 'email'
                        />
                        <div className = 'line'></div>                       
                        </div>

                        {/* SUBJECT INPUT */}
                        <div className = 'text-center'>
                        <input 
                        type = 'text'
                        className='form-control'
                        placeholder= 'Subject'
                        name = 'subject'
                        />
                        <div className = 'line'></div>
                        </div>
                    </div>

                    <div className = 'col-md-6 col-xs-12'>
                        {/*DESCRIPTION */}
                        <div className = 'text-center'>
                    <textarea
                        type = 'text'
                        className='form-control'
                        placeholder= 'How can I help?'
                        email = 'email'
                        ></textarea>
                        <div className = 'line'></div>
                        </div>
                        <button className = 'btn-contact contact-btn' type='submit'>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
