import { 
  ReactFlow, 
  Background, 
  Controls, 
  applyEdgeChanges, 
  applyNodeChanges,
  addEdge,
} from "@xyflow/react";
import { useState, useCallback } from "react";
import '@xyflow/react/dist/style.css';

import { TaskNode, endNode, startNode,forkNode, joinNode } from "./components/State";
import { blockingEdge, nonBlockingEdge } from "./components/Edges";

import { initialEdges, initialNodes } from "./assets/InitialSetup";

// get node and edge types
const nodeTypes = {taskNode: TaskNode, startNode: startNode, endNode: endNode, 
  forkNode: forkNode, joinNode: joinNode, 
};
const edgeTypes = {blockingEdge: blockingEdge, nonBlockingEdge: nonBlockingEdge};

// get nodes and edges



function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );
  

  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <ReactFlow 
      colorMode="dark"
      nodes={nodes} 
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
};

export default App;