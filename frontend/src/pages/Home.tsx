import React from 'react';

// this function builds the home page and displays the image of Joel
function Home() {
  return (
    <>
      <h1>Joel Hilton's Movie Collection Site</h1>
      <h3>
        Here you will find a collection of fantastic movies and a link to an
        even better podcast.
      </h3>
      <br></br>
      <br></br>
      <img
        src="../JoelHiltonHeadshot.jpg"
        alt="joelHeadshot"
        className="center"
      />
    </>
  );
}

export default Home;
