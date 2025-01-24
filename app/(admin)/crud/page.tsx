"use client";
import MDEditor from "@uiw/react-markdown-editor"
export default function typingPage(props){
  
const markdownVal = `# title\n\nHello World!\n\n`;
    return (
    <div style={{height:"350px",overflow:"scroll"}}>
        <MDEditor
          height={'350px'}
          autoFocus={false}
          value={props.content}
          onChange={props.contentChange}
          style={{overflow:"scroll"}}
        />
         <MDEditor.Markdown source={markdownVal} />
        </div>
      )
}