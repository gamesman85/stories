// src/stories/SimpleCard.stories.js
import { SimpleCard } from './SimpleCard';

export default {
  title: 'Components/SimpleCard',
  component: SimpleCard,
};

export const Basic = {
  args: {
    title: 'Simple Card'
  }
};

export const WithDescription = {
  args: {
    title: 'Card with Description',
    description: 'This is a simple description for the card.'
  }
};

export const Active = {
  args: {
    title: 'Active Card',
    description: 'This card is in the active state.',
    isActive: true
  }
};