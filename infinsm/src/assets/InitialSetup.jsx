const initialNodes = [
  {
    id: '3',
    position: {x: 20, y: 20},
    data: { body: 'Section 1' },
    type: 'group',
    style: {width: 300, height: 300}
  },
  {
    id: '1',
    data: { body: 'Hello' },
    position: { x: 50, y: 50 },
    type: 'TaskNode',
    parentId: '3',
    extent: 'parent',
  },
  {
    id: '2',
    data: { body: 'this is body' },
    position: { x: 120, y: 120 },
    type: 'TaskNode',
    parentId: '3',
    extent: 'parent',
  }
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