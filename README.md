The code has been deployed to:

https://4c-fe.vercel.app/

# test coverate
```
-------------------------|---------|----------|---------|---------|-------------------
File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------------|---------|----------|---------|---------|-------------------
All files                |   96.77 |    94.74 |   94.64 |   96.64 |                   
 src                     |     100 |      100 |     100 |     100 |                   
  App.tsx                |     100 |      100 |     100 |     100 |                   
  index.tsx              |     100 |      100 |     100 |     100 |                   
 src/component/context   |     100 |      100 |     100 |     100 |                   
  action.ts              |     100 |      100 |     100 |     100 |                   
  constant.ts            |     100 |      100 |     100 |     100 |                   
  index.tsx              |     100 |      100 |     100 |     100 |                   
  reducer.ts             |     100 |      100 |     100 |     100 |                   
  type.ts                |       0 |        0 |       0 |       0 |                   
 src/component/todo-list |   77.78 |       50 |    62.5 |   77.78 |                   
  index.ts               |       0 |        0 |       0 |       0 |                   
  todo-list.form.ts      |     100 |      100 |     100 |     100 |                   
  todo-list.tsx          |      75 |       50 |    62.5 |      75 | 18,22,80,92       
  todo-list.type.ts      |       0 |        0 |       0 |       0 |                   
 src/config              |     100 |      100 |     100 |     100 |                   
  theme.ts               |     100 |      100 |     100 |     100 |                   
 src/lib                 |       0 |        0 |       0 |       0 |                   
  index.ts               |       0 |        0 |       0 |       0 |                   
 src/lib/button          |     100 |      100 |     100 |     100 |                   
  button.style.ts        |     100 |      100 |     100 |     100 |                   
  button.tsx             |     100 |      100 |     100 |     100 |                   
  button.type.ts         |       0 |        0 |       0 |       0 |                   
  index.ts               |       0 |        0 |       0 |       0 |                   
 src/lib/flex            |     100 |      100 |     100 |     100 |                   
  flex.style.ts          |     100 |      100 |     100 |     100 |                   
  flex.tsx               |     100 |      100 |     100 |     100 |                   
  flex.type.ts           |       0 |        0 |       0 |       0 |                   
  index.ts               |       0 |        0 |       0 |       0 |                   
 src/lib/input           |     100 |      100 |     100 |     100 |                   
  index.ts               |       0 |        0 |       0 |       0 |                   
  input.style.ts         |     100 |      100 |     100 |     100 |                   
  input.tsx              |     100 |      100 |     100 |     100 |                   
  input.type.ts          |       0 |        0 |       0 |       0 |                   
 src/lib/item            |     100 |      100 |     100 |     100 |                   
  index.ts               |       0 |        0 |       0 |       0 |                   
  item.style.ts          |     100 |      100 |     100 |     100 |                   
  item.tsx               |     100 |      100 |     100 |     100 |                   
  item.type.ts           |       0 |        0 |       0 |       0 |                   
 src/lib/layout          |     100 |      100 |     100 |     100 |                   
  index.ts               |       0 |        0 |       0 |       0 |                   
  layout.style.ts        |     100 |      100 |     100 |     100 |                   
  layout.tsx             |     100 |      100 |     100 |     100 |                   
  layout.type.ts         |       0 |        0 |       0 |       0 |                   
 src/lib/logo            |     100 |      100 |     100 |     100 |                   
  index.ts               |       0 |        0 |       0 |       0 |                   
  logo.style.ts          |     100 |      100 |     100 |     100 |                   
  logo.tsx               |     100 |      100 |     100 |     100 |                   
  logo.type.ts           |       0 |        0 |       0 |       0 |                   
 src/lib/title           |     100 |      100 |     100 |     100 |                   
  index.ts               |       0 |        0 |       0 |       0 |                   
  title.style.ts         |     100 |      100 |     100 |     100 |                   
  title.tsx              |     100 |      100 |     100 |     100 |                   
  title.type.ts          |       0 |        0 |       0 |       0 |                   
 src/util                |     100 |      100 |     100 |     100 |                   
  index.ts               |     100 |      100 |     100 |     100 |                   
-------------------------|---------|----------|---------|---------|-------------------

Test Suites: 9 passed, 9 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        2.685 s
Ran all test suites.
✨  Done in 3.14s.
```

# 4C Platform Frontend Technical Test

Create a `ToDoList` React application that holds a list of `ToDoItem`s ordered in chronological order. The `ToDoItem`s are added via a form. Each `ToDoItem` must have a title, timestamp and a solve button. When an item is solved, the title must appear as line through text and the item will move at the end of the list.

The application must make use of a `ToDoContext` that holds the state of the application. The state can be accessed and altered via the `useContext` hook. A `ToDoProvider` must make use of a `useReducer` hook and a reducer that helps modifying the state based on events and payload. Where appropriate, `useEffect` and `useState` hooks can be used.

**Please note:** All constructs **must** be implemented as **functional styled components** (conditional styles, etc..) and be **unit tested** using Jest and React Testing Library, with a **minimum coverage of 80%**.

All required dependencies are added in this package and are already configured.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
