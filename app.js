/**
 *
 * <div id="parent">
 *      <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * <div id="child2">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

import React from "react";
import ReactDOM from "react-dom/client";


// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is Namaste React 🚀"),
//     React.createElement("h2", {}, "by Anubhav Tiwari"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
// ]);

// console.log(parent); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

console.log(parent); // object
// React Fragment - behaves like an empty tag
const HeadingComponent = () => (
  <>
    <div id="container">
      <Title />
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
    <div id="container-2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
root.render(<HeadingComponent />);