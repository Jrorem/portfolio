import React from 'react';
import resume from '../assets/Resume.pdf';

export default function Resume () {
    return <div class="about">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        <h1 class="glass">Skills Highlight</h1>
        <ol class="glass">
            <li>
              JavaScript  
            </li>
            <li>
              CSS  
            </li>
            <li>
              HTML  
            </li>
            <li>
              React.JS  
            </li>
            <li>
              Express.JS
            </li>
            <li>
              Node.JS  
            </li>
            <li>
              MYSQL  
            </li>
        </ol>
        <button className="download">
    <a className="button" href={resume} download = "Resume.pdf">
      Download Resume
    </a>
</button>
    </div>
}