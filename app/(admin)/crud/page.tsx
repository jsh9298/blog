"use client"
import "@uiw/react-md-editor/markdown-editor.css";
// import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import * as commands from "@uiw/react-md-editor";
import { useState } from "react";
import { saveMd } from "./savefile";


const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

export default function typingPage(){
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <>
      <div>
        <MDEditor value={value} onChange={setValue} />
      </div>
        <button onClick={saveMd(value)}> save </button>
      </>
  );
}