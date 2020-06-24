import React from "react"
import firstVideo from "../assets/618670-1-68P.mp4"
import secondVideo from "../assets/719618-6-1SSE.mp4"
import thirdVideo from "../assets/721786-10-118DIA.mp4"
import '../styles/index.css'

export default function Home() {
  return (
    <center>
    <h3>Video 1: 618670-1-68P</h3>
    <video width='50%' controls>
      <source src={firstVideo} type="video/mp4" />
    </video>
    <h3>Video 2: 719618-6-1SSE</h3>

    <video width='50%' controls>
      <source src={secondVideo} type="video/mp4" />
    </video>
    <h3>Video 3: 721786-10-118DIA</h3>

    <video width='50%' controls>
      <source src={thirdVideo} type="video/mp4" />
    </video>
</center>
  );
}