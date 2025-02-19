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

import { TaskNode, endNode, startNode, forkNode, joinNode } from "./components/State";
import { BlockingEdge, NonBlockingEdge } from "./components/Edges";

import { initialEdges, initialNodes } from "./assets/InitialSetup";

// Define node and edge types
const nodeTypes = {
  TaskNode,
  startNode,
  endNode,
  forkNode,
  joinNode
};

const edgeTypes = {
  blockingEdge: BlockingEdge,
  nonBlockingEdge: NonBlockingEdge
};

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // Function to update the source edges based on node state
  const updateEdges = useCallback((nodeId, done) => {
    setEdges((edges) => 
      edges.map((edge) => 
        edge.source === nodeId  
          ? { ...edge, type: done ? 'nonBlockingEdge' : 'blockingEdge' } // Correctly update type
          : edge
      )
    );
  }, []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow 
        colorMode="dark"
        nodes={nodes.map((node) => ({
          ...node,
          data: { ...node.data, updateEdges } // Pass updateEdges function to nodes
        }))} 
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes} // Ensure edge types are registered
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
