// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Components
import Header from '../components/Header';
import Content from '../components/Content';
import Profile from '../components/Profile';

@hot(module)
export default class Instagramm extends Component {
	render () {
		return (
			<>
				<Header />
				<Content />
			</>
		);
	}
}
