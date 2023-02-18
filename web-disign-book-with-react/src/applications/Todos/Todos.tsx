// 1st step: create appearnce
import { ThemeProvider } from "styled-components";
import theme from "../../pages/theme";

import {
  H1,
  Button,
  IconButton,
  Checkbox,
  Textbox,
} from "./components/atoms/atoms";
import { FlexLayout } from "./styles/FlexLayout";
import { UnorderList } from "./styles/UnorderList";
import Menu from "./styles/Menu";
import { Main } from "./styles/Main";
import TodoListItem from "./components/atoms/orgarnisms/TodoListItem";
import useTodosAPI from "./hooks/useTodosAPI";

import { BsSearch, BsQuestionLg, BsPlusLg, BsXLg } from "react-icons/bs";
const Todos = () => {
  const [todos, { add, update, remove }] = useTodosAPI();

  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "relative", maxWidth: "600px", margin: "auto" }}>
        <H1>Todos</H1>
        {/* menu */}
        <Menu>
          <IconButton>
            <BsSearch />
          </IconButton>
          <IconButton>
            <BsQuestionLg />
          </IconButton>
        </Menu>
        <Main>
          {/* add erea */}
          <FlexLayout>
            <Checkbox onClick={() => {}} />
            <Textbox onKeyEnter={add} />
            <IconButton>
              <BsPlusLg />
            </IconButton>
          </FlexLayout>

          {/* todo list */}
          <UnorderList>
            {todos.map((todo) => {
              return (
                <TodoListItem
                  key={todo.id}
                  initTodo={todo}
                  update={update}
                  remove={remove}
                />
              );
            })}
          </UnorderList>

          {/* control */}
          <FlexLayout>
            <span>2 items left</span>
            <span>
              {/* button group */}
              <UnorderList style={{ display: "flex", gap: "5px" }}>
                <li>
                  <Button>All</Button>
                </li>
                <li>
                  <Button>Active</Button>
                </li>
                <li>
                  <Button>Done</Button>
                </li>
              </UnorderList>
            </span>
            <span>
              <Button>Clear Done</Button>
            </span>
          </FlexLayout>
        </Main>
      </div>
    </ThemeProvider>
  );
};

export default Todos;
