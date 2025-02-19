/*
JSX file that implements the code for edges
Edges are of the following two types:
1. NonBlocking - The prequisite task nodes have been completed for the edge to allow traversal
2. Blocking - The prequisite task nodes have not been completed; the edge does not allow traversal
*/

import { BaseEdge, getBezierPath } from "@xyflow/react";

const BlockingEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
    const [edgePath] = getBezierPath({ sourceX, sourceY, targetX, targetY });

    return (
        <BaseEdge 
            id={id}
            path={edgePath}
            style={{ stroke: 'red', strokeWidth: 1 }}
        />
    );
};

const NonBlockingEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
    const [edgePath] = getBezierPath({ sourceX, sourceY, targetX, targetY });

    return (
        <BaseEdge 
            id={id}
            path={edgePath}
            style={{ stroke: 'green', strokeWidth: 1 }}
        />
    );
};

export { BlockingEdge, NonBlockingEdge };
