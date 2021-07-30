import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question,setQuestion]=useState(data)
  return <main> 
    <div className='container'>
    <section className='info'>
      {
        questions.map((question)=>{
          return <SingleQuestion key={question.id} {...question} />
        })
      }
    </section>
    </div>
  </main>;
}

export default App;
