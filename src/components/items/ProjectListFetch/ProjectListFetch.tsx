import React, { useState, useEffect } from 'react';
import List from 'components/ui/List/List';
import s from './ProjectListFetch.module.css';
import { Repository } from 'types/items';

interface Props {
  items: number[];
  renderItem: (item: Repository) => React.ReactNode;
}

export default function ProjectListFetch({ items, renderItem }: Props) {
  const [data, setData] = useState<Repository[]>([]);

  const getRepoData = async () => {
    const response = await fetch('/api/github-stats');
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    getRepoData().then((res: Repository[]) => {
      const newItems = items.map((id: number) => {
        const repo = res.find((item) => item.id === id);
        if (repo) {
          return {
            id: id,
            name: repo.name,
            full_name: repo.full_name,
            description: repo.description,
            html_url: repo.html_url,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks: repo.forks,
            created_at: repo.created_at,
          };
        } else {
          throw new Error('local repository id not found in github');
        }
      });
      setData(newItems);
    });
  }, [items]);

  return (
    <List className={s.contentList} items={data} renderItem={renderItem}></List>
  );
}
