import React, { useState, useEffect } from 'react';
import List from 'components/ui/List/List';
import s from './ProjectListFetch.module.css';
import { Repository } from 'types/items';

interface Props {
  items: Repository[];
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
      const newItems = items.map((item) => {
        const repo = res.find((i) => i.id === item.id);
        if (repo) {
          return {
            ...item,
            stargazers_count: repo.stargazers_count,
            forks: repo.forks,
          };
        } else {
          return item;
        }
      });
      setData(newItems);
    });
  }, [items]);

  return (
    <List className={s.contentList} items={data} renderItem={renderItem}></List>
  );
}
