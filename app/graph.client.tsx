import { useEffect, useRef, useState } from "react";
import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";

cytoscape.use(dagre);

export const GraphComp = ({ elements }: any) => {
  const graph = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("elemets", elements);
    if (!graph.current || !elements) return;
    cytoscape({
      elements,
      container: graph.current,
      layout: {
        name: "dagre",
      },
      style: [
        {
          selector: "node",
          style: {
            shape: "round-rectangle",
            label: "data(label)",
            "text-valign": "center",
            "text-halign": "center",
            width: "label",
            "padding-right": "30px",
            "padding-left": "30px",
            "background-color": "#DBE6FA",

            "font-size": 20,
            "border-width": 3,
            "border-color": "#5C90EB",
            "border-style": "solid",
            color: "#0D306D",
          },
        },
        {
          selector: "edge",
          style: {
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
            "line-color": "#000",
            "target-arrow-color": "#000",
            "arrow-scale": 2,
            width: 2,
          },
        },
        {
          selector: 'node[label*="=&gt;"]',
          style: {
            "background-color": "#D5D4ED",
            "border-color": "#716FC3",
            color: "#3A1D5E",
          },
        },
        {
          selector: 'node[label="and"]',
          style: {
            shape: "diamond",
            "background-color": "#FCE3B0",
            "border-color": "#D99308",
            color: "#624304",
          },
        },
        {
          selector: 'node[label="true"]',
          style: {
            shape: "ellipse",
            "background-color": "#DAE7E0",
            "border-color": "#57886C",
            color: "#406450",
          },
        },
        {
          selector: 'node[label="false"]',
          style: {
            shape: "ellipse",
            "background-color": "#FADCDE",
            "border-color": "#C81D25",
            color: "#590D12",
          },
        },
      ],
    });
  }, [elements]);

  return (
    <div
      ref={graph}
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    ></div>
  );
};
