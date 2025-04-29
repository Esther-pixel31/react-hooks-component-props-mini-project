import React from 'react';
import blogData from '../data/blog';
import Article from './Article';

export default function ArticleList() {
	return (
		<main>
			{blogData.posts.map((post) => (
				<Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
			))}
		</main>
	);
}