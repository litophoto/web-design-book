import { ThemeProvider } from "styled-components";
import Todo from "../models.ts/Todo";
import theme from "../../../pages/theme";

import H1Header from "../atoms/H1Header";
import DisplayMenu from "../atoms/DisplayMenu";
import AddTodo from "../organisms/AddTodo";
import TodoList from "../atoms/TodoList";
import TodoItem from "../organisms/TodoItem";
import useTodos from "../hooks/useTodos";

const Todos = () => {
  const [todos, { add, update, remove }] = useTodos();

  return (
    <ThemeProvider theme={theme}>
      <header>
        <H1Header>Todos</H1Header>
      </header>
      <main>
        <DisplayMenu>DisplayMenu</DisplayMenu>
        <AddTodo onSubmit={(text) => add(text)} />
        <TodoList>
          {todos.map((todo) => {
            return (
              <TodoItem todo={todo} onSubmit={(todo: Todo) => update(todo)} />
            );
          })}
        </TodoList>
      </main>
      <footer>{/* There is no contents */}</footer>
    </ThemeProvider>
  );
};

export default Todos;
