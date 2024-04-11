import React from 'react';

import './suggest.css';

export function Suggest1(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
  const [talkTitle, updateTalkTitle] = React.useState("");
  const [talkLink, updateTalkLink] = React.useState("");    
        

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {    
    fetch('https://api.quotable.io/random?tags=religion|Bible')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);
  async function loadTalks() {  
    try {
      // Get the latest high talks from the service
      const response = await fetch('/api/talks');
      talksList = await response.json();
      // Save the talks in case go offline in the future
      console.log(talksList);
      localStorage.setItem('talks', JSON.stringify(talksList));
    
    } catch {
      // If error use the last saved talks
      const talksText = localStorage.getItem('talks');
      if (talksText) {
        talksList = JSON.parse(talksText);
      }
    }
  
  }
  
  function saveTalk() {
    const talkObject = { talkTitle, talkLink };  
    fetch('/api/talks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(talkObject),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(updatedTalkList => {
        console.log('Talk saved successfully:', updatedTalkList);
        loadTalks(); // Reload talks after saving
    })
    .catch(error => {
        console.error('There was a problem saving the talk:', error);
    });
  }

  

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
          User:
          <span id="user-name"></span>
        </div>
        <div>
          <h1>Welcome to the Suggest Page!</h1>
          <p>Enter the talk name and link into the space provided below</p>
          
          <form onSubmit={(e) => {e.preventDefault(); saveTalk();}}> 
          
            <input type='text' onChange={(e) => updateTalkTitle(e.target.value)} value={talkTitle} id="talks" placeholder="Talk name" />
            <br/>
            <br/>
            <input type='text' onChange={(e) => updateTalkLink(e.target.value)} value={talkLink} id="talks" placeholder="Talk link"/>
            <br/>
            <br/>
            <button type="submit" className="btn btn-primary">Submit Talk</button>
            <br/>
            <br/>
            <p id="quote"></p>
          </form>
        </div>
        <br/>
        <br/>          
        <img alt="Church Logo" src="./Images/ChurchLogo.jpg" width="100" className="logo"></img>
      
       
      <div className='quote-box bg-light text-dark'>
        <p className='quote'>{quote}</p>
        <p className='author'>{quoteAuthor}</p>
      </div>
    
    </main>
  );
}

