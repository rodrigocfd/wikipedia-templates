import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Txt from '../Txt';
import YearMonthDay from './YearMonthDay';
import InlineRadio from './InlineRadio';
import OutParam from './OutParam';

/**
 * Main component for app route: cite-web.
 */
class CiteWeb extends React.Component {
	state = {}

	changed = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		const state = this.state;
		return (
			<div>
				<h2><Txt val="Cite web"/></h2>
				<div>
					<div><Txt val="Ref name"/> <input type="text" size="18" name="refName" onChange={this.changed}/></div>
					<div><Txt val="URL"/> <input type="text" size="100" name="url" onChange={this.changed} autoComplete="off"/></div>
					<div><Txt val="Title"/> <input type="text" size="88" name="title" onChange={this.changed} autoComplete="off"/></div>
					<div><Txt val="Publisher"/> <input type="text" size="88" name="publisher" onChange={this.changed}/></div>
					<div><Txt val="Date"/> <YearMonthDay name="date" onChange={this.changed}/></div>
					<div><Txt val="Access date"/> <YearMonthDay name="accessDate" onChange={this.changed}/></div>
					<div><Txt val="Language"/> <InlineRadio name="language" onChange={this.changed}
						values={['', 'en', 'es', 'fr', 'de', 'pt']}
						labels={['none', 'English', 'Spanish', 'French', 'German', 'Portuguese']}/></div>
				</div>
				<DivOut>
					{'<ref'}
					{state.refName && ` name="${state.refName}"`}
					{'>'}
					{'{{'}<Txt val="Cite web"/>
					<OutParam name="url" val={state.url}/>
					<OutParam name="title" val={state.title}/>
					<OutParam name="publisher" val={state.publisher}/>
					<OutParam name="date" val={state.date}/>
					<OutParam name="access-date" val={state.accessDate}/>
					<OutParam name="language" val={state.language}/>
					{' }}</ref>'}
				</DivOut>
				<Link to="/"><Txt val="Home"/></Link>
			</div>
		);
	}
}

const DivOut = styled.div`
	font-family: monospace;
	border: 1px solid #ccc;
	margin: 10px 0;
	padding: 10px;
`;

export default CiteWeb;
