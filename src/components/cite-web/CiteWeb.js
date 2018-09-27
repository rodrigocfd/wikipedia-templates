import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Intz from '../Intz';
import YearMonthDay from './YearMonthDay';
import InlineRadio from './InlineRadio';
import OutParam from './OutParam';

/**
 * Main component for app route: cite-web.
 */
class CiteWeb extends React.Component {
	state = {}

	txt1 = null;

	componentDidMount() {
		this.txt1.focus();
	}

	changed = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		const state = this.state;
		return (
			<div>
				<h2><Intz str="Cite web"/></h2>
				<div>
					<div>
						<DivName><Intz str="Ref name"/></DivName>
						<input type="text" size="18" name="refName" ref={e => this.txt1 = e} onChange={this.changed}/>
					</div>
					<div>
						<DivName><Intz str="URL"/></DivName>
						<input type="text" size="100" name="url" onChange={this.changed} autoComplete="off"/>
					</div>
					<div>
						<DivName><Intz str="Title"/></DivName>
						<input type="text" size="88" name="title" onChange={this.changed} autoComplete="off"/>
					</div>
					<div>
						<DivName><Intz str="Publisher"/></DivName>
						<input type="text" size="88" name="publisher" onChange={this.changed}/>
					</div>
					<div>
						<DivName><Intz str="Date"/></DivName>
						<YearMonthDay name="date" onChange={this.changed}/>
					</div>
					<div>
						<DivName><Intz str="Access date"/></DivName>
						<YearMonthDay name="accessDate" onChange={this.changed}/>
					</div>
					<div>
						<DivName><Intz str="Language"/></DivName>
						<InlineRadio name="language" onChange={this.changed}
							values={['', 'en', 'es', 'fr', 'de', 'pt']}
							labels={['none', 'English', 'Spanish', 'French', 'German', 'Portuguese']}/>
					</div>
				</div>
				<DivOut>
					{'<ref'}
					{state.refName && ` name="${state.refName}"`}
					{'>'}
					{'{{'}<Intz str="Cite web"/>
					<OutParam name="url" val={state.url}/>
					<OutParam name="title" val={state.title}/>
					<OutParam name="publisher" val={state.publisher}/>
					<OutParam name="date" val={state.date}/>
					<OutParam name="access-date" val={state.accessDate}/>
					<OutParam name="language" val={state.language}/>
					{' }}</ref>'}
				</DivOut>
				<Link to="/"><Intz str="Home"/></Link>
			</div>
		);
	}
}

const DivName = styled.div`
	display: inline-block;
	width: 150px;
	padding: 6px 0;
`;
const DivOut = styled.div`
	font-family: monospace;
	border: 1px solid #ccc;
	margin: 20px 0;
	padding: 10px;
`;

export default CiteWeb;
