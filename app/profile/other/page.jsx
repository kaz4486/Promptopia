'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const OtherProfile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get('id');

  const [posts, setPosts] = useState([]);

  const username = posts[0]?.creator.username;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <Profile name={username} desc='This is another user profile' data={posts} />
  );
};

export default OtherProfile;
