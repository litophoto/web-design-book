import { useState } from "react";

type Content = {
  id: number;
  value: string;
};

const contents = [
  { id: 1, value: "tab 1" },
  { id: 2, value: "tab 2" },
  { id: 3, value: "tab 3" },
];

type TypeUseTab = {
  initialContent: Content;
  contents: Content[];
};

const useTab = (initialContent: Content, contents: Content[]) => {
  const [content, setContent] = useState(initialContent);
  const changeContent = (content: Content) => {
    setContent(content);
  };

  return [content, changeContent] as const;
};

const TabSimpleExample = () => {
  const [content, changeTab] = useTab(contents[0], contents);

  return (
    <>
      <ul>
        {contents.map((content) => {
          return (
            <li key={content.id} onClick={() => changeTab(content)}>
              {content.value}
            </li>
          );
        })}
      </ul>
      <p>{content.value}</p>
    </>
  );
};

export default TabSimpleExample;
