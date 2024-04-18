import type { MetaFunction } from "@remix-run/node";
import { graphviz } from "d3-graphviz";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [data, setData] = useState(`digraph {a -> b}`);

  useEffect(() => {
    if (!data) return;
    const g = graphviz("#graph").renderDot(data);
    g.height(document.getElementById("graph")?.clientHeight || 500);
    g.width(document.getElementById("graph")?.clientWidth || 500);
    g.fit(true);

    const pasteListener = (e: ClipboardEvent) => {
      e.preventDefault();
      const content = e.clipboardData?.getData("text");
      setData(content || "");
    };
    addEventListener("paste", pasteListener);
    return () => removeEventListener("paste", pasteListener);
  }, [data]);

  return (
    <div
      id="graph"
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    ></div>
  );
}
