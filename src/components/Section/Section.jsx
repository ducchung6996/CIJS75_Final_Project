import React from 'react';
import '../Section/Section.css'

function Section(props) {
  return (
    <section>
        <div>
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
        </div>
        <img src={props.src}/>
    </section>
  )
}

export default Section;