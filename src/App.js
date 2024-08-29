import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Loading from "./components/Loading/Loading";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return <div>
  <Layout />
  </div>;
}

export default App;
