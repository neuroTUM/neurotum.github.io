import React from "react";

const Hero = () => (
  <section
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "2rem",
      paddingBottom: "30vh", // This will push the content up
    }}
  >
    <h1 style={{ fontSize: "4rem", margin: 0 }}>neuroTUM</h1>
    <p
      style={{
        fontSize: "1.5rem",
        margin: 0,
        maxWidth: "800px",
        textAlign: "center",
      }}
    >
      We are a student club based at the Technical University Munich for students interested in the
      intersection of neuroscience and engineering.
    </p>
  </section>
);

export default Hero;
