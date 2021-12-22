import RepoCard from './RepoCard';

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <div key={repo.id} className="repo-card">
          <RepoCard repo={repo} />
        </div>
      ))}
    </div>
  );
};

export default RepoList;
