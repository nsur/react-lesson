// Core
import React, { Component } from 'react';

import avatar from '../theme/assets/images/joe';

export default class Profile extends Component {
	render () {
		return (
			<div className = 'profile'>
				<div className = 'layout'>
					<img src = { avatar } />
					<div>
						<div className = 'nickname'>Joe66</div>
						<div className = 'stats'>
							<span>39&nbsp;</span>
							<span>posts</span>
							<span>1256&nbsp;</span>
							<span>followers</span>
							<span>7&nbsp;</span>
							<span>following</span>
						</div>
						<div className = 'name'>Joey Tribbiani</div>
					</div>
				</div>
			</div>
		);
	}
}