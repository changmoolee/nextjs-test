"use client";

import Counter from "@/components/Counter";
import os from "os";
import { useState } from "react";

export default function Home() {
  console.log("안녕");
  console.log(os.hostname());

  const [name, setName] = useState("");

  return (
    <>
      <h1>홈페이지다!!!!!</h1>;
      <Counter />
    </>
  );
}
