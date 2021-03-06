import React from "react";
import MushroomList from "../components/function/MushroomList";
import MushroomInput from "../components/function/MushroomInput";
import { MushroomProvider } from "../stores/function/FunctionStoresProvider";

const Function = () => {
  return (
    <>
      <MushroomProvider>
        <MushroomList />
        <MushroomInput />
      </MushroomProvider>
    </>
  );
};

export default Function;
