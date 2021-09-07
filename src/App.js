import "./App.css";
import { RecoilRoot, useRecoilSnapshot } from "recoil";
import { useEffect, useState } from "react";

import Editor from "./components/Editor";
import ExampleDocument from "./utils/ExampleDocument";
import React from "react";

function App() {
  const [document, updateDocument] = useState(ExampleDocument);

  return (
    <>
      <div className="App">
        <RecoilRoot>
          <Editor document={document} onChange={updateDocument} />
          <DebugObserver />
        </RecoilRoot>
      </div>
    </>
  );
}

function DebugObserver(): React.Node {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug("The following atoms were modified:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}

export default App;
