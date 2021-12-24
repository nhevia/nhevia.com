/*sdoc
Reusable and responsive component to render a list of items.
- `data`: array of items
- `item`: a component that represents a single item of this list
- `type`: declarative way to link style classNames
*/

const ContentList = (props) => {
  return (
    <div className="content-list">
      {props.data.map((item, i) => (
        <div key={item.id || i} className={`content-card-${props.type}`}>
          <props.item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ContentList;
