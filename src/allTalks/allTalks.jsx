import React from 'react';

import './allTalks.css';

export function Talks() {
  const [talks, setTalks] = React.useState([]);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    fetch('/api/talks')
      .then((response) => response.json())
      .then((talks) => {
       setTalks(talks);
        localStorage.setItem('talks', JSON.stringify(talks));
      })
      .catch(() => {
        const talksText = localStorage.getItem('talks');
        if (talksText) {
          setTalks(JSON.parse(talksText));
        }
      });
  }, []);

  // Demonstrates rendering an array with React
  const talksRows = [];
  if (talks.length) {
    console.log(talks);
    for (const [i, talk] of talks.entries()) {
      talksRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{talk.talkTitle?.split('-')[0]}</td>
          <td>{talk.talkLink}</td>
        </tr>
      );
    }
  } else {
    talksRows.push(
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
        <tbody id='talks'>{talksRows}</tbody>
      </table>
    </main>
  );
}
