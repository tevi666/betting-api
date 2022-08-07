import React from 'react';

const Pagination = ({ footballsPerPage, totalFootballs, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalFootballs / footballsPerPage); i++) {
		pageNumbers.push(i)
	}
	return (
		<div className='text-gray-700 flex justify-center relative pt-5 font-mono'>
			<ul className='flex'>
				{pageNumbers.map(number => (
					<li
						className='border px-1 mx-1 h-6 mb-1 bg-green-700 hover:text-white transition-colors hover:bg-black'
						key={number}
					>
						<a
							href='#'
							className=''
							onClick={() => paginate(number)}
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
};

export default Pagination;