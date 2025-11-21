import "./Tag.css";

//{} 꼭 해주고 tagName올 받아서 tagName 으로 넣어주면된다.
export default function Tag({ tagName, selectTag, selected }) {
  const tagStyle = {
    HTML: { backgroundColor: "#df941cff" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#cf7118ff" },
    REACT: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      style={selected ? tagStyle[tagName] : tagStyle.default}
      type="button"
      onClick={() => selectTag(tagName)}
      className="tag"
    >
      {tagName}
    </button>
  );
}
