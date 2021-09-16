import React from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';
import './CustomNodes.scss'

const EmailNode = ({ data }) => {
	return (
		<div className="email node-container" >
			<Handle type="target" position="top" style={{ borderRadius: 0 }} />
			<div className="type-date">
				<p className="type">{data.type}</p>
				<p className="datetime">{data.dateTime.substring(0,10)} {data.dateTime.substring(11,16)}</p>
			</div>
			
			<p><span className="bold">To: </span>{data.toEmail}</p>
			<p><span className="bold">Sub: </span>{data.subject}</p>
			<Handle type="source" position="bottom" id="a" style={{borderRadius: 0 }}/>
		</div>
	);
};

const ReminderNode = ({ data }) => {
	return (
		<div className="reminder node-container" >
			<Handle type="target" position="top" style={{ borderRadius: 0 }} />
			<div className="type-date">
				<p className="type">{data.type}</p>
				<p className="datetime">{data.dateTime.substring(0, 10)} {data.dateTime.substring(11, 16)}</p>
			</div>
			<p><span className="bold">To: </span>{data.toEmail}</p>
			<p><span className="bold">Rem: </span>{data.reminder}</p>
			<Handle type="source" position="bottom" id="a" style={{ borderRadius: 0 }} />
		</div>
	);
};

const MeetingNode = ({ data }) => {
	return (
		<div className="meeting node-container" >
			<Handle type="target" position="top" style={{ borderRadius: 0 }} />
			<div className="type-date">
				<p className="type">{data.type}</p>
				<p className="datetime">{data.dateTime.substring(0, 10)} {data.dateTime.substring(11, 16)}</p>
			</div>
			<p><span className="bold">To: </span>{data.toEmail}</p>
			<p><span className="bold">Loc: </span>{data.location}</p>
			<Handle type="source" position="bottom" id="a" style={{ borderRadius: 0 }} />
		</div>
	);
};

export {EmailNode, ReminderNode, MeetingNode};