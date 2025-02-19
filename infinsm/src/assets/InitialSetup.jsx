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