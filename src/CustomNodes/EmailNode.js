import React from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';
import './EmailNode.scss'

const EmailNode = ({ data }) => {
	return (
		<div className="email-node-container" >
			<Handle type="target" position="top" style={{ borderRadius: 0 }} />
			<p>{data.label}</p>
			<p>{data.email}</p>
			<p>{data.content}</p>
			<Handle type="source" position="bottom" id="a" style={{borderRadius: 0 }}/>
		</div>
	);
};

export default EmailNode;