import React from "react";
import styles from './App'
import { SlideInput } from "./components/slideComponents/SlideInput";
import { SlideStoreProvider } from "./stores/function/SlideStoreProvider";
import { SlideList } from "./components/slideComponents/SlideList";
import { useObserver } from "mobx-react";

function App() {
  return (
    <SlideStoreProvider>
      <h1 className={styles.title}>Slides!!</h1>
      <SlideInput />
      {useObserver(() => <SlideList />)}
    </SlideStoreProvider>
  );
}

export default App;
