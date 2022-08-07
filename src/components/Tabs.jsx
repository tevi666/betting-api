import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Tabs = () => {
	return (
		<div className='flex justify-center pt-5'>
			<ul className='flex'>
				<Link
					to='/live'
					className={'page_1'}
				>
					LIVE
				</Link>
				<Link
					to='/parematch'
					className={'page_2'}
				>
					PAREMATCH
				</Link>
				<Link
					to='/finished'
					className={'page_3'}
				>
					FINISHED
				</Link>
			</ul>
		</div>
	)
};

export default Tabs;