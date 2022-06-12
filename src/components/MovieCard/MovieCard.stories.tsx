import MovieCard from "./MovieCard.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { mockMovieCard } from "./MovieCard.mock";

export default {
  title: "Components/MovieCard",
  component: MovieCard,
} as Meta<typeof MovieCard>;

const Template: StoryFn<typeof MovieCard> = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: mockMovieCard.movieCard1,
};
