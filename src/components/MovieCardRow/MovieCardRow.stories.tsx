import MovieCard from "./MovieCardRow.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { mockMovieCard } from "../MovieCard/MovieCard.mock";

export default {
  title: "Components/MovieCardRow",
  component: MovieCard,
} as Meta<typeof MovieCard>;

const Template: StoryFn<typeof MovieCard> = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  movies: [mockMovieCard.movieCard1, mockMovieCard.movieCard2],
};
