const heading1 = React.createElement(
    "h1",
    {
        id: "heading1"
    },
    "Hello from react h1");
const heading2 = React.createElement("h1", {
    id: "heading1"
},
    "Hello from react h2");
const div = React.createElement("div", {
    id: "con"
}, [heading1, heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);

