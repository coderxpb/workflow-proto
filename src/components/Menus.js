import React from 'react';

const EmailMenu = (prop) =>{
	return(
		<div className="email-slider">
			<label className="slider-from-email">Sender:</label>
			<input value={prop.from} onChange={(evt) => prop.setFrom(evt.target.value)}  />
			<label className="slider-subject">Subject:</label>
			<input value={prop.subject} onChange={(evt) => prop.setSubject(evt.target.value)} />
			<label className="slider-body">Body:</label>
			<input value={prop.body} onChange={(evt) => prop.setBody(evt.target.value)} />
		</div>
	)
}

const MeetingMenu = (prop) => {
	return (
		<div>
			<label className="slider-location">Location:</label>
			<input value={prop.location} onChange={(evt) => prop.setLocation(evt.target.value)} />
		</div>
	)
}

const ReminderMenu = (prop) => {
	return (
		<React.Fragment>
			<label className="slider-reminder-text">Text:</label>
			<input value={prop.reminder} onChange={(evt) => prop.setReminder(evt.target.value)} />
		</React.Fragment>
	)
}

export { EmailMenu,ReminderMenu,MeetingMenu};