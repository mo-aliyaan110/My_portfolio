import React from 'react';

const Contact = () => {
    return(
        <div id='contact' className='ui container'>
            <img src='/contact-us.png' alt='ali portfolio: contact ' />
            <section style={{marginBottom: '15px'}} class="hero is-info">
                <div class="hero-body">
                    <p class="title">
                     Contact 
                    </p>
                    <p class="subtitle">
                        Email:       mohammed007aliyan@gmail.com <br/>
                        Phone:       +91 78299 43696 <br/>
                        LinkedIn:    <a style={{color: 'black'}} target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/mohammed-aliyaan-ba9023194/' > Click here </a> <br/>
                        GitHub :     <a style={{color: 'black'}} target='_blank' rel="noreferrer" href='https://github.com/mo-aliyaan110' > Click here </a> <br/>
                        StackOverflow : <a style={{color: 'black'}} target='_blank' rel="noreferrer" href='https://stackoverflow.com/users/13009485/mohammed-aliyaan' > Click here </a> <br/>
                    </p>
                </div>
            </section>
        </div>
    )
}

                    
export default Contact;