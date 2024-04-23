// color nodes based on condition
// move and collapse nodes

import type { MetaFunction } from "@remix-run/node";
import { graphviz } from "d3-graphviz";
import * as d3 from "d3";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import dot from "graphlib-dot";
import par, { Graph, HTMLString, Subgraph } from "dotparser";

let GraphComp = lazy(async () => {
  const module = await import("~/graph.client");
  return { default: module.GraphComp };
});

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [data, setData] = useState(`digraph noname {
    graph [bb="0,0,2849.1,972",
      charset="UTF-8",
      colorscheme=svg,
      compound=true
    ];
    node [label="\N", shape=box];
    n1525e28e21d73196d098fb077c64a44c	[height=0.5,
      label=<relevant_gene(gene(ensg00000177508),sequence_variant(rs1421085))>,
      pos="1121.2,954",
      width=9.4242];
    n6b5f901ba8956b11b95a9670ddde03ce	[height=0.5,
      label=<(in_tad_with(_22998,_22996),eqtl(_22998,_22996))=&gt;relevant_gene(_22996,_22998)>,
      pos="1121.2,882",
      width=11.212];
    n1525e28e21d73196d098fb077c64a44c -> n6b5f901ba8956b11b95a9670ddde03ce	[pos="e,1121.2,900.1 1121.2,935.7 1121.2,927.98 1121.2,918.71 1121.2,910.11"];
    nb039387c51cc590ac0496a7770e39186	[height=0.5,
      label=<and(in_tad_with(sequence_variant(rs1421085),gene(ensg00000177508)),eqtl(sequence_variant(rs1421085),gene(ensg00000177508)))>,
      pos="1121.2,810",
      width=17.639];
    n6b5f901ba8956b11b95a9670ddde03ce -> nb039387c51cc590ac0496a7770e39186	[pos="e,1121.2,828.1 1121.2,863.7 1121.2,855.98 1121.2,846.71 1121.2,838.11"];
    n236a9d046bd787339f7b2ec5cf3ca464	[height=0.5,
      label=<and>,
      pos="1121.2,738",
      width=0.77632];
    nb039387c51cc590ac0496a7770e39186 -> n236a9d046bd787339f7b2ec5cf3ca464	[pos="e,1121.2,756.1 1121.2,791.7 1121.2,783.98 1121.2,774.71 1121.2,766.11"];
    neca55ff75a214d0e9d5f2973a2925f7b	[height=0.5,
      label=<in_tad_with(sequence_variant(rs1421085),gene(ensg00000177508))>,
      pos="1121.2,666",
      width=9.0811];
    n236a9d046bd787339f7b2ec5cf3ca464 -> neca55ff75a214d0e9d5f2973a2925f7b	[pos="e,1121.2,684.1 1121.2,719.7 1121.2,711.98 1121.2,702.71 1121.2,694.11"];
    ne348db63de9132d8116cf3f532e54252	[height=0.5,
      label=<(in_tad_region(_23136,_23142),in_tad_region(_23146,_23142),closest_gene(_23134,_23146))=&gt;in_tad_with(_23134,_23136)>,
      pos="1121.2,594",
      width=16.231];
    neca55ff75a214d0e9d5f2973a2925f7b -> ne348db63de9132d8116cf3f532e54252	[pos="e,1121.2,612.1 1121.2,647.7 1121.2,639.98 1121.2,630.71 1121.2,622.11"];
    n78967a0573476897f58bd978ccf6d3e1	[height=0.5,
      label=<and(in_tad_region(gene(ensg00000177508),tad(chr16_53550000_55450000_grch38)),(in_tad_region(gene(ensg00000140718),tad(chr16_53550000_55450000_grch38)),closest_gene(sequence_variant(rs1421085),gene(ensg00000140718))))>,
      pos="1121.2,522",
      width=31.143];
    ne348db63de9132d8116cf3f532e54252 -> n78967a0573476897f58bd978ccf6d3e1	[pos="e,1121.2,540.1 1121.2,575.7 1121.2,567.98 1121.2,558.71 1121.2,550.11"];
    ne1b72635b7420526341803a522c1dd14	[height=0.5,
      label=<and>,
      pos="1121.2,450",
      width=0.77632];
    n78967a0573476897f58bd978ccf6d3e1 -> ne1b72635b7420526341803a522c1dd14	[pos="e,1121.2,468.1 1121.2,503.7 1121.2,495.98 1121.2,486.71 1121.2,478.11"];
    n15a767c52128a7707d570ebc3005ffdd	[height=0.5,
      label=<in_tad_region(gene(ensg00000177508),tad(chr16_53550000_55450000_grch38))>,
      pos="551.15,378",
      width=10.742];
    ne1b72635b7420526341803a522c1dd14 -> n15a767c52128a7707d570ebc3005ffdd	[pos="e,681.17,394.97 1093.7,445.62 1022.2,436.85 826.9,412.86 691.24,396.2"];
    n22dd123b438984b4ab55c526d04ed194	[height=0.5,
      label=<and(in_tad_region(gene(ensg00000140718),tad(chr16_53550000_55450000_grch38)),closest_gene(sequence_variant(rs1421085),gene(ensg00000140718)))>,
      pos="1691.2,378",
      width=20.437];
    ne1b72635b7420526341803a522c1dd14 -> n22dd123b438984b4ab55c526d04ed194	[pos="e,1555.2,395.7 1148.6,445.62 1219,436.98 1409.8,413.55 1545.1,396.93"];
    ne71b4da3733d1a638ddb1d5800dc1a83	[height=0.5,
      label=<true=&gt;in_tad_region(gene(ensg00000177508),tad(chr16_53550000_55450000_grch38))>,
      pos="551.15,306",
      width=11.717];
    n15a767c52128a7707d570ebc3005ffdd -> ne71b4da3733d1a638ddb1d5800dc1a83	[pos="e,551.15,324.1 551.15,359.7 551.15,351.98 551.15,342.71 551.15,334.11"];
    nb326b5062b2f0e69046810717534cb09	[height=0.5,
      label=true,
      pos="1405.2,90",
      width=0.84854];
    ne71b4da3733d1a638ddb1d5800dc1a83 -> nb326b5062b2f0e69046810717534cb09	[pos="e,1374.5,90.675 546.98,287.85 540.04,254.65 530.51,181.55 570.15,144 628.2,89.009 1204.1,89.406 1364.1,90.593"];
    n0c139d89dafd6af21f77d0c4bef86a89	[height=0.5,
      label=false,
      pos="1405.2,18",
      width=0.84854];
    nb326b5062b2f0e69046810717534cb09 -> n0c139d89dafd6af21f77d0c4bef86a89	[pos="e,1388.5,33.144 1388.5,74.834 1384.9,65.726 1384,53.658 1385.8,43.072"];
    nb326b5062b2f0e69046810717534cb09 -> n0c139d89dafd6af21f77d0c4bef86a89	[pos="e,1399.3,35.789 1399.3,72.055 1398.4,64.231 1398.2,54.748 1398.6,45.977"];
    nb326b5062b2f0e69046810717534cb09 -> n0c139d89dafd6af21f77d0c4bef86a89	[pos="e,1411,35.789 1411,72.055 1411.9,64.231 1412.1,54.748 1411.7,45.977"];
    nb326b5062b2f0e69046810717534cb09 -> n0c139d89dafd6af21f77d0c4bef86a89	[pos="e,1421.8,33.144 1421.8,74.834 1425.4,65.726 1426.3,53.658 1424.5,43.072"];
    nacab87abe69f4c96361a21cf369c8bb1	[height=0.5,
      label=<and>,
      pos="1691.2,306",
      width=0.77632];
    n22dd123b438984b4ab55c526d04ed194 -> nacab87abe69f4c96361a21cf369c8bb1	[pos="e,1691.2,324.1 1691.2,359.7 1691.2,351.98 1691.2,342.71 1691.2,334.11"];
    n0d281222485e99df41a96c8ac3a35854	[height=0.5,
      label=<in_tad_region(gene(ensg00000140718),tad(chr16_53550000_55450000_grch38))>,
      pos="1019.2,234",
      width=10.742];
    nacab87abe69f4c96361a21cf369c8bb1 -> n0d281222485e99df41a96c8ac3a35854	[pos="e,1169.1,250.62 1663.6,302.13 1582.8,293.72 1342.5,268.68 1179.3,251.68"];
    n2f39414a52fa89f13b58bf2a4f2255f7	[height=0.5,
      label=<closest_gene(sequence_variant(rs1421085),gene(ensg00000140718))>,
      pos="1774.2,234",
      width=9.2436];
    nacab87abe69f4c96361a21cf369c8bb1 -> n2f39414a52fa89f13b58bf2a4f2255f7	[pos="e,1754,252.02 1707.5,291.17 1718.6,281.87 1733.4,269.36 1746.3,258.52"];
    n4c89bc66687b3b6de68ea78ceb547f4d	[height=0.5,
      label=<true=&gt;in_tad_region(gene(ensg00000140718),tad(chr16_53550000_55450000_grch38))>,
      pos="1001.2,162",
      width=11.717];
    n0d281222485e99df41a96c8ac3a35854 -> n4c89bc66687b3b6de68ea78ceb547f4d	[pos="e,1005.5,180.1 1014.7,215.7 1012.7,207.9 1010.3,198.51 1008,189.83"];
    n4c89bc66687b3b6de68ea78ceb547f4d -> nb326b5062b2f0e69046810717534cb09	[pos="e,1376,96.05 1096.6,144.46 1182.4,129.59 1304.1,108.5 1365.9,97.8"];
    ne3274fd28e587c8b6842fea4726395a8	[height=0.5,
      label=<true=&gt;closest_gene(sequence_variant(rs1421085),gene(ensg00000140718))>,
      pos="1809.2,162",
      width=10.219];
    n2f39414a52fa89f13b58bf2a4f2255f7 -> ne3274fd28e587c8b6842fea4726395a8	[pos="e,1800.6,180.1 1782.8,215.7 1786.8,207.73 1791.6,198.1 1796,189.26"];
    ne3274fd28e587c8b6842fea4726395a8 -> nb326b5062b2f0e69046810717534cb09	[pos="e,1434,95.993 1714.4,144.59 1628.4,129.69 1505.9,108.46 1444.1,97.745"];
    nc8dde6e3c1eae00a4ecc8417ffa42a70	[height=0.5,
      label=<eqtl(sequence_variant(rs1421085),gene(ensg00000177508))>,
      pos="2522.2,234",
      width=8.1062];
    n88e61fbe5f98e0abfea9bcaa35c9da71	[height=0.5,
      label=<true=&gt;eqtl(sequence_variant(rs1421085),gene(ensg00000177508))>,
      pos="2522.2,162",
      width=9.0811];
    nc8dde6e3c1eae00a4ecc8417ffa42a70 -> n88e61fbe5f98e0abfea9bcaa35c9da71	[pos="e,2522.2,180.1 2522.2,215.7 2522.2,207.98 2522.2,198.71 2522.2,190.11"];
    n31ac559eef5bfd2447b6aebfb922ca0d	[height=0.5,
      pos="2522.2,306",
      width=5.3259];
    n31ac559eef5bfd2447b6aebfb922ca0d -> nc8dde6e3c1eae00a4ecc8417ffa42a70	[pos="e,2522.2,252.1 2522.2,287.7 2522.2,279.98 2522.2,270.71 2522.2,262.11"];
    n88e61fbe5f98e0abfea9bcaa35c9da71 -> nb326b5062b2f0e69046810717534cb09	[pos="e,1435.5,92.901 2315.3,148.04 2043.3,130.99 1583.8,102.19 1445.6,93.536"];
  }
  `);
  const [ele, setEle] = useState<any>(null);

  useEffect(() => {
    if (!data) return;

    const nodes: { [id: string]: any } = {};
    const edges: { [id: string]: any } = {};
    const dta = par(data || "");
    const gr = dta[0];

    function parseGraph(g: Graph | Subgraph) {
      const ch = g.children;
      ch.map((el): any => {
        if (el.type === "edge_stmt") {
          if (el.edge_list.length > 2)
            throw "Edge with more than 2 elements in edge_list";
          el.edge_list.map((e) => {
            if (e.type == "node_id") {
              edges[`${el.edge_list[0].id}${el.edge_list[1].id}`] = {
                data: {
                  id: `${el.edge_list[0].id}${el.edge_list[1].id}`,
                  source: el.edge_list[0].id,
                  target: el.edge_list[1].id,
                },
              };
              if (!nodes[e.id.toString()]) {
                nodes[e.id.toString()] = {
                  data: {
                    id: e.id.toString(),
                    label: e.id.toString(),
                  },
                };
              }
            } else {
              parseGraph(e);
            }
          });
          return;
        } else if (el.type === "node_stmt") {
          const id = el.node_id.id.toString();
          let label = el.attr_list.find((a) => a.id === "label")?.eq;

          label = (label as HTMLString)?.value || label || id;

          nodes[el.node_id.id] = {
            data: {
              id,
              label,
            },
          };
        }
      });
    }
    parseGraph(gr);
    const elements = {
      nodes: Object.values(nodes),
      edges: Object.values(edges),
    };
    setEle(elements);

    /*
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     */

    // const g = graphviz("#graph").renderDot(data);
    // g.height(document.getElementById("graph")?.clientHeight || 500);
    // g.width(document.getElementById("graph")?.clientWidth || 500);
    // g.attributer(function (d) {
    //   if (d.tag == "ellipse") {
    //     d.attributes.tag == "rect";
    //     d.attributes.fill = "red";
    //   }
    //   if (d.tag == "polygon" && d.totalLength) {
    //     d.attributes.fill = "green";
    //   }
    // });
    // g.render();
    // g.fit(true);

    const pasteListener = (e: ClipboardEvent) => {
      e.preventDefault();
      const content = e.clipboardData?.getData("text");

      setData(content || "");
    };
    addEventListener("paste", pasteListener);
    return () => removeEventListener("paste", pasteListener);
  }, [data]);

  return (
    <>
      <Suspense fallback="sever">
        <GraphComp elements={ele} />
      </Suspense>
    </>
  );
}
