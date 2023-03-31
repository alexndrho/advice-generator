import { Fragment, useState } from "react";
import GlobalStyle from "./theme/globalStyles";
import Generator from "./components/Generator";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Generator />
    </Fragment>
  );
}

export default App;
