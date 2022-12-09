import React from 'react';

const Projects = () => {
    return(
        <div>
            <div id='projects'>
                <img src='/projects.png' alt='ali portfolio: projects' />
            </div>
            <div style={{marginBottom: '150px'}} className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                    <p className="title">Quick YouTube Clone with live YouTube API </p>
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <a target='_blank' rel='noreferrer'  href='https://youtube-aliyaan.netlify.app/'> 
                                <img src="/ali-youtube.png" alt="ali portfolio: youtube clone"/>
                            </a> 
                            </figure>
                        </div>
                    </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                    <p className="title">Netflix Clone with live imdb API</p> 
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <a target='_blank' rel='noreferrer'  href='https://netflix-build-de697.web.app/'> 
                                <img src="/ali-netflix.png" alt="ali portfolio: netflix clone"/>
                            </a> 
                            </figure>
                        </div>
                    </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Personal Blog on Digital Marketing</p>
                        <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <a target='_blank' rel='noreferrer'  href='https://digitalsaviour.in/'> 
                                <img src="/ali-blog.png" alt="ali portfolio: personal blog"/>
                            </a> 
                            </figure>
                        </div>
                    </div>
                        
                        
                    </article>
                </div>
            </div>             
        </div>
        )
}

export default Projects;