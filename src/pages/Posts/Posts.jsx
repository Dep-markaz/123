import config from '../../config.json'
import React, { useEffect, useState } from 'react'
import styles from './Posts.module.css'
import axios from 'axios'

const Posts = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get(config.apiUrl)

			setPosts(data)
		}
		fetchPosts()
	}, [])

	console.log(posts)

	return (
		<div className={styles.posts}>
			<div className={styles.container}>
				<h1>Posts</h1>
			</div>
		</div>
	)
}

export default Posts
