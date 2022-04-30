import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search Github profiles and see profile details.
      </p>
      <p className="text-lg grey-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg grey-400">
        Created by: <span className="text-white">Priyansh</span>
      </p>
    </div>
  );
}

export default About;
