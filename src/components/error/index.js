const Error = ({ type, url }) => (
  <div id="error">
    <h1 class="h6 my-6 text-center">Ups {type}</h1>
    <div className="p-1">
      {type === "404" ? <p>URL not found.</p> : ""}
      <pre>{url}</pre>
    </div>
  </div>
);

export default Error;
