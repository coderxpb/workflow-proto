import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import './FlowElement.scss';
import EmailNode from './CustomNodes/EmailNode';
const style = {height: '80vh', background:'#FFB'}

const initialElements = [
	{ id: '1', type:'email',data: { label: '-', content:'asdfasdflj oh' ,email: 'world, okok, hello, alright, nvm,kkadsfkjlka'}, position: { x: 100, y: 100 } },
	{ id: '2', data: { label: 'Node 3' }, position: { x: 100, y: 200 } },
	{ id: 'e1-2', source: '1', target: '2' },
];

const FlowElement = () => {
	const [elements, setElements] = useState(initialElements);
	const [nodeName, setNodeName] = useState('Node 1');
	const [nodeBg, setNodeBg] = useState('#eee');
	const [selectedNode, setSelectedNode] = useState(null);
	const [sliderClassName, setSliderClassName] = useState("info-slider");

	const onNodeClicked = (e, element) => {
		console.log(element);
		setSelectedNode(element);
	}

	const onPaneClicked = (e, element) =>{
		setSelectedNode(null);
	}

	//change element name
	useEffect(() => {
		console.log(selectedNode);
		if(selectedNode!=null) {
			setElements((els) =>
				els.map((el) => {
					if (el.id === selectedNode.id) {
						el.data = {
							...el.data,
							label: nodeName,
						};
					}

					return el;
				})
			);
		}

	}, [nodeName, setElements]);


	useEffect(() => {
		setElements((els) =>
			els.map((el) => {
				if (el.id === '1') {
					// it's important that you create a new object here
					// in order to notify react flow about the change
					el.style = { ...el.style, backgroundColor: nodeBg };
				}

				return el;
			})
		);
	}, [nodeBg, setElements]);

	//show hide slider
	useEffect(() => {
		if(selectedNode!=null) {
			setSliderClassName("info-slider");
			setNodeName(selectedNode.data.label);
		}
		else{
			setSliderClassName("info-slider--hidden");
		}
	}, [selectedNode]);

	return (
		<React.Fragment>
			<ReactFlow nodeTypes={{email: EmailNode}} onPaneClick={onPaneClicked} onElementClick={onNodeClicked} style={style} elements={elements} defaultZoom={1.5} minZoom={0.2} maxZoom={4}/>
			
			<div className={sliderClassName}>
				<label>label:</label>
				<input value={nodeName} onChange={(evt) => setNodeName(evt.target.value)}/>
				<label className="updatenode__bglabel">background:</label>
				<input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} />
			</div>
		</React.Fragment>
	);
};

export default FlowElement;