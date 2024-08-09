import React from "react";

export default function Stories() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#282c34", // Dark background color
          color: "#61dafb", // Bright text color
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          flexDirection: "column",
          padding: "0 5%",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          Stories Page
          <br />
          We're Building Something Exciting – Stay Tuned!
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#b0b0b0", // Lighter text color for the description
          }}
        >
          Our team is hard at work crafting an amazing experience just for you.
          Check back soon to see what we have in store!
        </p>
      </div>
      <a-scene>
        <a-camera position="0 0 3" user-height="0"></a-camera>
        <a-sphere
          src="https://raw.githubusercontent.com/aframevr/sample-assets/master/assets/images/space/earth_atmos_4096.jpg"
          radius="1.5"
          segments-height="53"
        >
          <a-animation
            attribute="rotation"
            dur="10000"
            fill="forwards"
            to="0 360 0"
            easing="linear"
            repeat="indefinite"
          ></a-animation>
        </a-sphere>
        <a-sky
          segments-height="100"
          segments-width="100"
          src="https://1.bp.blogspot.com/-4CHlBxsvQ_0/UrxJVGBY_tI/AAAAAAAAAWo/OK14DV9oCaQ/s1600/Christmas+Sky+Full+Of+Stars.jpg"
          color="#555"
          rotation="0 -90 0"
        ></a-sky>
      </a-scene>
    </>
  );
}
