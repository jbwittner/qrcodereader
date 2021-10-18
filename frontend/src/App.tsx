import React from "react";
import QrReader from "react-qr-reader";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import axios from "axios";

function App() {
  const [result, setResult] = React.useState();

  const handleScan = (data: any) => {
    if (data) {
      setResult(data);
      axios.post("/dataRead", {
        dataRead: data,
      });
    }
  };

  const handleError = (err: any) => {
    console.log(err);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1>QR Code reader</h1>
          <QrReader
            delay={250}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
        </Container>
        <p>{result}</p>
      </header>
    </div>
  );
}

export default App;
