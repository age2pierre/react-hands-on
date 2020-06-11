# Hands on react + TS

This a very opiniated tutorial for react beginner.
I've chosen to _only_ speak about certain API (hooks, context, function component)
to show the expressivity and simplicity of the library.
We will also use some library of the very vast React ecosystem,
they may not be all the indsutry standards, but were chosen to be fun and usefull.
For prop typings (and more) we'll heavely rely on Typescript.

## Instalation

You'll need **Node** installed on your machine.

1. Run `npm i` to install packages
1. Run `npm start` to run dev server
1. Open `localhost:1234` and follow the steps from there.

If you use VSCode we recommend to install the following extensions for optimal DX,
it will set you up with format and lint on save, plus a few refactor action codes and graphql autocomplete :

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VSCode React Refactor](https://marketplace.visualstudio.com/items?itemName=planbcoding.vscode-react-refactor)
- [GraphQL](https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql)

# Roadmap

- What is React ? What problem does it solve ? What it is not ?
- Hello world !
  - What is the minimal app ? it's a function that has an input (state) and output a model of the UI (VDom).
  - React jobs is to render this model the most efficient way (it tries to optimize repaint call, doing the dirty imperative error-prone job for you).
  - Bootstraping aka rendering your app ? ReactDOM.render
  - The UI model aka the VDOM ? React.createElement(type: "div", props?: Props, ...children: React.ReactNode[]): React.ReactNode <==> JSX
  - Exercice 0 : Look at how this example is set-up, will not go into the bundling, setting dev tool. Mention CRA / Parcel / Gatbsy / Nextjs.
- Children !
  - Parent to children communication aka passing down props ? TS prop types, special children attribute, React.ReactNode type
  - Exercice 1 :
    You have an App component to complete, it receive a character sheet for RPG as prop (`{ characSheet: Record<string, number>, sort: 'ALPHA' | 'RANDOM' }`)
    Assets => Wireframe + label component + an number input + layout css
    Bonus : Try to make the sort feature
  - Learn about diffing + key props
  - The slot pattern aka the React.Node type.
  - Exercice 1 Bis : Go back and do the sort and thinking about perf + separating layout and cell comp (`{ renderCell: ([string, number]) => React.Node }`)
