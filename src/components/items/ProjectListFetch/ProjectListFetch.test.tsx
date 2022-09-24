import { act, render, screen } from '@testing-library/react';
import ProjectCard from 'components/items/ProjectCard';
import ProjectListFetch from './ProjectListFetch';
import repositories from 'data/repos.json';

describe('ProjectListFetch', () => {
  it.only('renders four repositories in a list', async () => {
    await act(async () => {
      render(
        <ProjectListFetch items={repositories} renderItem={ProjectCard} />
      );
    });

    expect(screen.getAllByLabelText('repository summary').length).toEqual(6);
  });
});
