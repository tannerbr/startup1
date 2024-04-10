import React from 'react';

import './suggest.css';

export function Talks() {
  const [talks, setTalk] = React.useState([]);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    fetch('/api/talks')
      .then((response) => response.json())
      .then((talks) => {
        setScores(talks);
        localStorage.setItem('talks', JSON.stringify(talks));
      })
      .catch(() => {
        const talkText = localStorage.getItem('talks');
        if (talkText) {
          setTalk(JSON.parse(talkText));
        }
      });
  }, []);

  // Demonstrates rendering an array with React
  const talkRows = [];
  if (Talks.length) {
    for (const [i, talk] of talk.entries()) {
      talkRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{talk.name.split('-')[0]}</td>
          <td>{talk.link}</td>
        </tr>
      );
    }
  } else {
    talkRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to suggest a talk!</td>
      </tr>
    );
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <table className='table table-warning table-striped-columns'>
        <thead className='table-dark'>
          <tr>
            <th>Talk Title</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody id='talks'>{talkRows}</tbody>
      </table>
    </main>
  );
}
