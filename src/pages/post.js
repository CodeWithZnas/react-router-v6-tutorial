import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Post() {
	let { category, slug } = useParams()
	let [searchParam, setSearchParam] = useSearchParams()
	console.log(searchParam.get('q'));
	console.log(searchParam.get('order'));
  return (
		<>
			<h1>POST PAGE </h1>
			<p>category is {category} - {slug}</p>
		</>
  )
}
