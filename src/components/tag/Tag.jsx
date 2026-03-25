import "./Tag.css";

const Tag = ({ tagName, selectedTag, selected }) => {
  const tagStyle = {
    Dev: { backgroundColor: "#3c99dc" },
    QA: { backgroundColor: "#E34C26" },
    ["Product Owner"]: { backgroundColor: "#ffd12c" },
  };

  return (
    <button
      type="button"
      className="tag"
      onClick={() => selectedTag(tagName)}
      style={selected ? tagStyle[tagName] : {}}
    >
      {tagName}
    </button>
  );
};

export default Tag;
