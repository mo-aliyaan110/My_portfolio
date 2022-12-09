import React from 'react';
import Contact from './contact';
import UpperSection from './UpperSection';
import Projects from './Projects';


const App = () => {
    return(
        <div>
            
            <UpperSection/>
            <div className='ui container'>
                <Projects/>
                <Contact/>
            </div>
        </div>
    )
}
export default App;