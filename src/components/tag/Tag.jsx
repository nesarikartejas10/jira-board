import "./Tag.css";

const Tag = ({ tagName, selectedTag }) => {
  return (
    <button type="button" className="tag" onClick={() => selectedTag(tagName)}>
      {tagName}
    </button>
  );
};

export default Tag;
