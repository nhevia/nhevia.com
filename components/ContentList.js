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
