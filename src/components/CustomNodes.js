import React from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';
import './CustomNodes.scss'

const EmailNode = ({ data }) => {
	return (
		<div className="email node-container" >
			<Handle type="target" position="top" style={{ borderRadius: 0 }} />
			<p>{data.type}</p>
			<p>{data.toEmail}</p>
			<p>{data.subject}</p>
			<Handle type="source" position="bottom" id="a" style={{borderRadius: 0 }}/>
		</div>
	);
};

const ReminderNode = ({ data }) => {
	return (
		<div className="reminder node-container" >
			<Handle type="target" position="top" style={{ borderRadius: 0 }} />
			<p>{data.type}</p>
			<p>{data.toEmail}</p>
			<p>{data.reminder}</p>
			<Handle type="source" position="bottom" id="a" style={{ borderRadius: 0 }} />
		</div>
	);
};

const MeetingNode = ({ data }) => {
	return (
		<div className="meeting node-container" >
			<Handle type="target" position="top" style={{ borderRadius: 0 }} />
			<p>{data.type}</p>
			<p>{data.toEmail}</p>
			<p>{data.location}</p>
			<Handle type="source" position="bottom" id="a" style={{ borderRadius: 0 }} />
		</div>
	);
};

export {EmailNode, ReminderNode, MeetingNode};