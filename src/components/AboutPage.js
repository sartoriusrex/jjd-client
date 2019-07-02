import React from 'react';

const AboutPage = () => {
  return(
    <div
      className="container-fluid d-flex justify-content-start align-items-center flex-column pt-4 pb-4"
    >
      <h2 className="pt-4 pb-4">Jiu Jitsu is Movement</h2>

      <p>
        Jiu Jitsu Distilled (JJD) is a tool for documenting, referencing, and combining the movements of Jiu Jitsu. Specifically, for the purpose of <strong>drilling</strong>.
      </p>

      <p>
        JJD doesn't attempt to document every technique. The purpose of JJD is to create <strong>Sequences</strong> of movements to practice and explore. That's all.
      </p>

      <p>
        You can search techniques, create them if they're not documented, connect them with others, save them for later, and combine them into sequences for drilling. You can also make notes, and like and share them.
      </p>
    </div>
  )
}

export default AboutPage;