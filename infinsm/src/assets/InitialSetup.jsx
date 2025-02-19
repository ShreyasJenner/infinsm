const initialNodes = [
    {
      id: '1',
      data: { body: 'Hello' },
      position: { x: 0, y: 0 },
      type: 'TaskNode',
    },
    {
      id: '2',
      data: { body: 'this is body' },
      position: { x: 100, y: 100 },
      type: 'TaskNode'
    },
];
   
const initialEdges = [
    {
      id: '1-2',
      source: '1',
      target: '2',
      type: 'nonBlockingEdge'
    }
];

export {initialEdges, initialNodes}