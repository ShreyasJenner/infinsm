/*
JSX file that implements the states of the FSM
The different states are:
1. start : represents the start of the machine
2. end : represents the final state of the machine
3. task : represents a task in the machine
4. fork : used when concurrent tasks need to split
5. join : used when concurrent tasks need to join back
*/

import { Handle, Position } from "@xyflow/react";
import { useState } from "react";

const startNodeStyle = {
    width: 20,
    height: 20,
    borderRadius: '50%',
}

const startNodeTextStyle = {
    fontSize: 9,
    top: '50%',
    left: '50%',
    transform: 'translate(0%, 20%)',
}

const forkNodeStyle = {
    width: 5,
    height: 100,
};


function startNode() {
    return (
        <div className="react-flow__node-default" style={startNodeStyle}>
            <div className="react-flow__node-header" style={startNodeTextStyle}>Start</div>
            <Handle type="source" position={Position.Right} />
        </div>
        );
}

function endNode() {
    return (
        <div className="react-flow__node-default" style={startNodeStyle}>
            <Handle type="target" position={Position.Left} />
            <div className="react-flow__node-header" style={startNodeTextStyle}>Stop</div>
        </div>
    );
}

function TaskNode({id, data}) {
    const [done, setDone] = useState(false);

    // function that will toggle state of clicked node
    const completeTask = (done, setDone) => {
        setDone(!done);
        data.updateEdges(id, done);
    }

    return (
        <div 
        onClick={() => completeTask(done, setDone)} 
        className="react-flow__node-default"
        >
            <Handle type="target" position={Position.Left} />
            <div className="react-flow__node-header"></div>
            <div className="react-flow__node-body">{data.body}</div>
            <Handle type="source" position={Position.Right} />
        </div>
    );
}

function forkNode() {
    return (
        <div className="react-flow__node-default" style={forkNodeStyle}>
            <Handle type="source" position={Position.Right} />
        </div>
    );
}

function joinNode() {
    return (
        <div className="react-flow__node-default" style={forkNodeStyle}>
            <Handle type="target" position={Position.Left} />
        </div>
    );
}

export {
    startNode,
    endNode,
    TaskNode,
    forkNode,
    joinNode
}