import { render, screen } from '@testing-library/react';
import React from 'react';
import ContentList from '../components/ContentList';
import { Repository, Post } from '../types/types';
import RepoCard from '../components/RepoCard';
import PostCard from '../components/PostCard';

describe('<ContentList />', () => {
  it('renders a list of repositories', () => {
    const reposData: Array<Repository> = [
      {
        full_name: 'My Repo',
        description: 'A github repo',
        html_url: 'www.github.com/nhevia/myrepo',
        language: 'JavaScript',
        stargazers_count: 11,
        forks: 3,
        id: 398213,
      },
      {
        full_name: 'Another Repo',
        description: 'A github repo... 2!',
        html_url: 'www.github.com/nhevia/myrepo2',
        language: 'TypeScript',
        stargazers_count: 3,
        forks: 1,
        id: 298214,
      },
    ];

    render(<ContentList data={reposData} type="repo" item={RepoCard} />);

    expect(screen.getByText('My Repo')).toBeInTheDocument();
  });

  it('renders a list of posts', () => {
    const postsData: Array<Post> = [
      {
        url: 'www.myblog.com/posts/1',
        title: 'my first post',
        description: 'an actual blog post',
        social_image: 'https://www.mycoolblog.com/1.jpg',
        id: 928393,
      },
      {
        url: 'www.myblog.com/posts/2',
        title: 'my second post',
        description: 'another post',
        social_image: 'https://www.mycoolblog.com/2.jpg',
        id: 928394,
      },
    ];

    render(<ContentList data={postsData} type="repo" item={PostCard} />);

    expect(screen.getByText('my first post')).toBeInTheDocument();
  });
});
