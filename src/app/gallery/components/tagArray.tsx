import React, { useState } from 'react';

interface Props {
  tags: string[];
  onTagToggle: (checkedTags: string[]) => void;
}

function TagArray(props: Props) {
  const { tags, onTagToggle } = props;
  const [checkedTags, setCheckedTags] = useState<string[]>([]);

  function handleTagChange(tag: string) {
    if (checkedTags.includes(tag)) {
      setCheckedTags(checkedTags.filter((t) => t !== tag));
    } else {
      setCheckedTags([...checkedTags, tag]);
    }

    onTagToggle(checkedTags.includes(tag) ? checkedTags.filter((t) => t !== tag) : [...checkedTags, tag]);
  }

  return (
    <div className="flex flex-wrap mt-4 justify-center">
      {tags.map((tag) => (
        <label
          key={tag}
          className={`rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer hover:bg-gray-300 ${
            checkedTags.includes(tag)
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={checkedTags.includes(tag)}
            onChange={() => handleTagChange(tag)}
          />
          {tag}
        </label>
      ))}
    </div>
  );
}

export default TagArray;