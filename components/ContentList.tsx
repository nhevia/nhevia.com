/*sdoc
Reusable and responsive component to render a list of items.
- `data`: array of items
- `item`: a component that represents a single item of this list
- `type`: declarative way to link style classNames
*/
import { Repository, Post, So } from '../types/types';
import RepoCard from './RepoCard';

interface AppProps {
  data: Array<Repository | Post | So>;
  type: string;
  item: React.FC<any>; // TODO React.FC<Repository | Post>
}

const ContentList = (props: AppProps) => {
  return (
    <div className="content-list">
      {props.data.map((listItem) => (
        <div key={listItem.id} className={`content-card-${props.type}`}>
          <props.item {...listItem} />
        </div>
      ))}
    </div>
  );
};

export default ContentList;
