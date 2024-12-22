function customeRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type); // create element
  domElement.innerHTML = reactElement.children; // insert childern to it
  domElement.setAttribute("href", reactElement.props.href); // set href attribute
  domElement.setAttribute("target", reactElement.props.target); // set target attribute

  container.appendChild(domElement);
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_black",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customeRender(reactElement, mainContainer);
