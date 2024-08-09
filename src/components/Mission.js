import React from "react";

export default function Mission() {
  return (
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
        Mission Page
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
  );
}
