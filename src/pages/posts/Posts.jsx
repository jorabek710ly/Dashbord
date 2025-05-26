import React, { useState, useEffect } from 'react'
import PostCards from '../../components/postCards/PostCards';
import { cardsPerLoad } from "../home/Home";
import { api } from '../../api';

const Posts = () => {
  const [postsData, setPostsData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lastPost, setLastPost] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`/posts?limit=${cardsPerLoad}&skip=${count}`)
      .then((response) => {
        setPostsData((prev) => {
          const allPosts = { ...response.data, posts: [...(prev.posts || []), ...response.data.posts] };
          if (allPosts.posts.length >= postsData.total) {
            setLastPost(true);
          }
          return allPosts;
        })
      }).catch((error) => {
        alert(error);
      }).finally(() => {
        setLoading(false);
      })
  }, [count])
  return (
    <>
      <PostCards postsData={postsData} count={count} setCount={setCount} loading={loading} lastPost={lastPost} />
    </>
  )
}

export default React.memo(Posts);