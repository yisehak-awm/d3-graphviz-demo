import { useEffect, useRef, useState } from "react";
import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";

cytoscape.use(dagre);

export const GraphComp = ({ elements }: any) => {
  const graph = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!graph.current || !elements) return;
    cytoscape({
      elements,
      container: graph.current,
      layout: {
        name: "dagre",
      },
      style: [
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
          selector: "node",
          style: {
            shape: "round-rectangle",
            label: "data(label)",
            color: "#001929",
            width: "label",
            "text-valign": "center",
            "text-halign": "center",
            "padding-right": "30px",
            "padding-left": "30px",
            "background-color": "#bce3ff",
            "font-size": 20,
            "border-width": 1,
            "border-color": "#5CC0FF",
            "border-style": "solid",
          },
        },

        {
          selector: 'node[label*="=>"]',
          style: {
            "background-color": "#e4ccff",
            "border-color": "#BC85FF",
            color: "#1C003D",
          },
        },
        {
          selector: 'node[label="and"]',
          style: {
            shape: "diamond",
            "background-color": "#ffcd2a",
            "border-color": "#ffcd2a",
            color: "#291F00",
          },
        },
        {
          selector: 'node[label="true"]',
          style: {
            shape: "ellipse",
            "background-color": "#9ce2b0",
            "border-color": "#3FCA6B",
            color: "#092010",
          },
        },
        {
          selector: 'node[label="false"]',
          style: {
            shape: "ellipse",
            "background-color": "#ffb8b3",
            "border-color": "#ff9790",
            color: "#3D0300",
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
