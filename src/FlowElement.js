import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import './FlowElement.scss';
import {EmailNode, ReminderNode, MeetingNode} from './components/CustomNodes';


const style = {height: '80vh', background:'#FFB'}

const initialElements = [
	{ id: '1', type:'email', data: { type:'Email', label: '-', subject:'hello is everyone doing im doing great',fromEmail:'borapankaj901@gmail.com' ,toEmail: 'world, okok, hello, alright, nvm,kkadsfkjlka'}, position: { x: 100, y: 100 } },
	{ id: '2', type: 'meeting', data: { type: 'Reminder',label: 'Node 3', toEmail: "okok",reminder:"" }, position: { x: 100, y: 200 } },
	{ id: 'e1-2', source: '1', target: '2' },
];

const FlowElement = () => {
	const [elements, setElements] = useState(initialElements);

	const [inputToEmail, setInputToEmail] = useState("");
	const [inputFromEmail, setInputFromEmail] = useState("");
	const [inputSubject, setInputSubject] = useState("");
	const [inputBody, setInputBody] = useState("");
	const [inputLocation, setInputLocation] = useState("");
	const [inputReminderText, setInputReminderText] = useState("");
	
	const [selectedNode, setSelectedNode] = useState(null);
	const [sliderClassName, setSliderClassName] = useState("info-slider--hidden");

	const [emailClassName, setEmailClassName] = useState("hidden-div");
	const [meetingClassName, setMeetingClassName] = useState("hidden-div");
	const [reminderClassName, setReminderClassName] = useState("hidden-div");

	const hideDivs = (h1,h2,h3) => {
		setEmailClassName(h1);
		setMeetingClassName(h2);
		setReminderClassName(h3);
	}

	const onNodeClicked = (e, element) => {
		setSliderClassName("info-slider");
		setSelectedNode(element);
		setInputToEmail(element.data.toEmail);

		if(element.type==='email'){
			setInputFromEmail(element.data.fromEmail);
			setInputSubject(element.data.subject);
			setInputBody(element.data.body);
			hideDivs("visible-div", "hidden-div", "hidden-div");
		}

		if (element.type === 'meeting') {
			setInputLocation(element.data.location);
			hideDivs("hidden-div","visible-div",  "hidden-div");
		}

		if (element.type === 'reminder') {
			setInputReminderText(element.data.reminder);
			hideDivs("hidden-div", "hidden-div","visible-div");
		}
	}

	const onPaneClicked = (e, element) =>{
		setSliderClassName("hidden-div");
		hideDivs("hidden-div", "hidden-div", "hidden-div");
		setSelectedNode(null);
	}

	const changeNodeData = (propObj) =>{
		setElements((els) =>
			els.map((el) => {
				if (el.id === selectedNode.id) {
					el.data = { ...el.data, ...propObj,};
				}
				return el;
			})
		);
	}

	useEffect(() => {
		if(selectedNode) {
			changeNodeData({toEmail: inputToEmail});
		}
	}, [inputToEmail, setElements]);

	useEffect(() => {
		if (selectedNode) {
			changeNodeData({ fromEmail: inputFromEmail });
		}
	}, [inputFromEmail, setElements]);

	useEffect(() => {
		if (selectedNode) {
			changeNodeData({ subject: inputSubject });
		}
	}, [inputSubject, setElements]);

	useEffect(() => {
		if (selectedNode) {
			changeNodeData({ body: inputBody });
		}
	}, [inputBody, setElements]);

	useEffect(() => {
		if (selectedNode) {
			changeNodeData({ location: inputLocation });
		}
	}, [inputLocation, setElements]);

	useEffect(() => {
		if (selectedNode) {
			changeNodeData({ reminder: inputReminderText });
		}
	}, [inputReminderText, setElements]);

	
	return (
		<React.Fragment>
			<ReactFlow nodeTypes={{email: EmailNode, meeting: MeetingNode,reminder: ReminderNode}} onPaneClick={onPaneClicked} onElementClick={onNodeClicked} style={style} elements={elements} defaultZoom={1.5} minZoom={0.2} maxZoom={4}/>
			
			<div className={sliderClassName}>
				<label className="slider-to-email">Recipients:</label>
				<input value={inputToEmail} onChange={(evt) => setInputToEmail(evt.target.value)} />

				<div className={emailClassName}>
					<label className="slider-from-email">Sender:</label>
					<input value={inputFromEmail} onChange={(evt) => setInputFromEmail(evt.target.value)} />
					<label className="slider-subject">Subject:</label>
					<input value={inputSubject} onChange={(evt) => setInputSubject(evt.target.value)} />
					<label className="slider-body">Body:</label>
					<input value={inputBody} onChange={(evt) => setInputBody(evt.target.value)} />
				</div>

				<div className={meetingClassName}>
					<label className="slider-location">Location:</label>
					<input value={inputLocation} onChange={(evt) => setInputLocation(evt.target.value)} />
				</div>

				<div className={reminderClassName}>
					<label className="slider-reminder-text">Text:</label>
					<input value={inputReminderText} onChange={(evt) => setInputReminderText(evt.target.value)} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default FlowElement;