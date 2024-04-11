import React from 'react';

import './suggest.css';

export function Suggest1(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

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

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
          User:
          <span id="user-name"></span>
        </div>
        <div>
          <h1>Welcome to the Suggest Page!</h1>
          <p>Enter the talk name and link into the space provided below</p>
          <form method="get" action="javascript:saveTalk()"> 
            <input type="text" id="talks" placeholder="Talk name" />
            <br/>
            <br/>
            <input type="text" id="links" placeholder="Paste link" />
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
        <img alt="Church Logo" src="./Images/ChurchLogo.jpg" width="100" class="logo"></img>
      
       
      <div className='quote-box bg-light text-dark'>
        <p className='quote'>{quote}</p>
        <p className='author'>{quoteAuthor}</p>
      </div>
    
    </main>
  );
}

