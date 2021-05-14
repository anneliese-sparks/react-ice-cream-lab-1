import "./VoteHere.css";
import { useState } from "react";
function VoteHere() {
  const [chocolate, setChocolate] = useState(0);
  const [strawberry, setStrawberry] = useState(0);
  const [cookie, setCookie] = useState(0);
  // 3 use states
  // % function [use state of the flavor]/[flavor + flavor + flavor] *100
  //return width of divs
  function countChocolate() {
    setChocolate((prev) => prev + 1);
  }
  function countStrawberry() {
    setStrawberry((prev) => prev + 1);
  }
  function countCookie() {
    setCookie((prev) => prev + 1);
  }
  function calculatePercentage(votes: number): number {
    if (chocolate + strawberry + cookie === 0) {
      return 0;
    } else {
      return (votes / (chocolate + strawberry + cookie)) * 100;
    }
  }
  function addVotes() {
      if (chocolate + strawberry + cookie === 0) {
          return true
      } else {
          return false
      }
  }
  const chocolateWidth = { width: calculatePercentage(chocolate) + "%" };
  const strawberryWidth = { width: calculatePercentage(strawberry) + "%" };
  const cookieWidth = { width: calculatePercentage(cookie) + "%" };
  //funtion to count %
  return (
    <div className="VoteContainer">
      <h2 className="VoteHere">Vote Here</h2>
      <section className="VoteButtonSec">
        <button onClick={countChocolate}>Chocolate</button>
        <button onClick={countStrawberry}>Strawberry</button>
        <button onClick={countCookie}>Cookie Dough</button>
      </section>
      {/* width set by % of votes somehow. no display if no votes */}
      <section className="VotesTotalContainer">
        {/* if calc% === 0 > new div that says no votes */}
        {addVotes() === true &&
         <p>There are no votes yet</p>
        }
        <div className="ChocolateDiv" style={chocolateWidth}>
          {chocolate > 0 &&
          <span>Chocolate: {chocolate} </span>
          }
        </div>
        <div className="StrawberryDiv" style={strawberryWidth}>
          {strawberry > 0 &&
          <span>Strawberry:{strawberry}</span>
          }
        </div>
        <div className="CookieDiv" style={cookieWidth}>
          {cookie > 0 &&
          <span>Cookie:{cookie}</span>
          }
        </div>
      </section>
    </div>
  );
}
export default VoteHere;