# pexchallenge

## Introduction

It’s my pleasure to submit a solution for the Pex challenge. You can find detailed information about it below.

### Analysis

The first step in any given tasks, is to thoroughly analyze the requirements before proceeding with the actual implementation. 

Looking at the example response given in the challenge, I decided to go with the following API implementation for the search movie feature.

1. Allow the user to search for an actor or for any fields.
2. Allow the user to filter the search results by a combinaison of genres and by serie.
3. Allow the user to sort the results ascending or descending by title or release date.
4. Get the list of all the genres.

I like to follow a clear separation of concern when implementing a solution. That’s why I went with a Model-View-Controller implementation. 

The Model is responsible for interacting with the API. The View is responsible for defining the visual/pure components. And the Controller is responsible to connect the Model and the View together and make the application work.

### Architecture

The project uses Vue.js, Typescript, Tailwind CSS, Storybook, Storybook Interaction  and Jest.

### Model

Located under `src/model`.

First thing was to define the domain types and interfaces for the request (`SearchMovieRequest.ts`) and the response (`SearchMovieResponse.ts`).

Then I created a request builder (`SearchMovieRequestBuilder.ts`) to construct the request with the various parameters defined during the analysis. The builder has been built with a TDD approach and the tests are in `tests/unit/SearchMovieRequestBuilder.spec.ts`

Next up, I created the api definition (`SearchMovieApi.ts`) and the mock implementation (`SearchMovieApiMock.ts`). 

The mocked response is exactly the one given in the challenge. Since the response only have two movies, I decided to return only the first movie when a filter was provided and reverse the movies order when the sort order was descending. I then document that behaviour in `tests/unit/SearchMovieApiMock.spec.ts`.

### View

Located under `src/components`.

The next step was to define the component contracts. I created the search bar view-model (`SearchBar.types.ts`). Even though some aspect of the view-model looks similar to the model one, it’s best to create a model that is closer to the components to keep a good separation of concerns. The controller will be responsible to map both models together later on.

Then I built the various pure components with Storybook. Since no design was provided, I looked at TailwindUI for some inspirations and I used HeadlessUI for basic components and HeroIcons for the icons. I implemented a responsive design as well.

As far as testing components goes, I like to use Storybook for the integration tests. An example can be found in `Checkbox.stories.tsx`. And in a real world project, I would use Chromatic to visually tests the components in the CI. 

As a little disclaimer, my Vue.js is a little bit rusty because my last experience with it was over a year ago. I was working with Vue 2 at the time so I might have missed a few newer/best practices.

### Controller

Located under `src/controller`.

The last part was to connect the View and the Model together.

I created the mapper (`SearchMovieMapper.ts`) to assemble view-model from model and model from view-model. The tests can be found in `tests/controller/SearchMovieMapper.spec.ts`

Then I created the search movie component (`SearchMovie.vue`) that connects with the model via the api to get the genres and to search for movies. The, the controller assembles the view-model with the mappers and sends the data to the props of the higher-level components of the view (SearchBar and MovieCardRow).

The interaction tests can be found in `SearchMovie.stories.tsx`.

### App

The last step was to incorporate the controller component (`SearchMovie.vue`) in `App.vue`.

## Project setup
```
yarn install
```

### Run storybook and hot-reloads for component development
```
yarn storybook
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your interactions tests
```
yarn storybook
yarn test:storybook
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
