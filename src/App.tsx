import "./App.css";

function App() {
  return (
    <>
      <button
        onClick={() =>
          fetch(`${process.env.SERVER_URL}/api/v1/user/cookie`, {
            method: "GET",
            credentials: "include",
          })
        }
      >
        GET COOKIE
      </button>
      <button
        onClick={() =>
          fetch(`${process.env.SERVER_URL}/api/v1/user/cookie/test`, {
            method: "GET",
            credentials: "include",
          })
        }
      >
        CHECK COOKIE
      </button>
    </>
  );
}

export default App;
