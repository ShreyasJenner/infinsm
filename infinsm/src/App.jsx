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

// get node types
const nodeTypes = {taskNode: TaskNode, startNode: startNode, endNode: endNode, 
  forkNode: forkNode, joinNode: joinNode, 
};

const initialNodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'taskNode',
  },
  {
    id: '2',
    data: { label: 'World', body: 'this is body' },
    position: { x: 100, y: 100 },
    type: 'taskNode'
  },
  {
    id: '3',
    position: {x: 150, y: 150},
    type: 'endNode'
  },
  {
    id: '4',
    position: {x: 50, y: 50},
    type: 'startNode',
  },
  {
    id: '5',
    position: {x: 10, y: 10},
    type: 'forkNode',
  },
  {
    id: '6',
    position: {x: 30, y: 10},
    type: 'joinNode',
  },
];
 
const initialEdges = [];

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
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
};

export default App;