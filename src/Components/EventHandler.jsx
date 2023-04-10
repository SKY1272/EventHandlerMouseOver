import React, { useState } from "react";
import styled from "./EventHandler.module.css";
function EventHandler() {
  const [logs, setLogs] = useState([]);
  function handleMouseOver() {
    const time = new Date().toLocaleString();
    const newLog = { time, eventName: "MouseOver" };
    setLogs((x) => [...x, newLog]);
  }
  function handleMouseOut() {
    const time = new Date().toLocaleString();
    const newLog = { time, eventName: "MouseOut" };
    setLogs((x) => [...x, newLog]);
  }
  return (
    <div className={styled.container}>
      <h1>Event MouseOver And MouseOut</h1>
      <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        This is a H1 heading
      </h1>
      <h2>This is a H2 heading</h2>
      <div>
        <table style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}>Time</th>
              <th style={{ border: "1px solid black" }}>Event</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black" }}>{log.time}</td>
                <td style={{ border: "1px solid black" }}>{log.eventName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default EventHandler;
