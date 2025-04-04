import React from 'react';
import { SimpleCard } from './SimpleCard';

export default {
  title: 'Example/SimpleCard',
  component: SimpleCard,
  parameters: {
    layout: 'centered',
  },
  // Add argTypes to configure controls
  argTypes: {
    title: { 
      control: 'text',
      description: 'The card title',
      defaultValue: 'Card Title'
    },
    description: { 
      control: 'text',
      description: 'Optional description text'
    },
    isActive: { 
      control: 'boolean',
      description: 'Whether the card is in active state',
      defaultValue: false
    }
  }
};

export const Basic = {
  args: {
    title: 'Simple Card',
  },
};

export const WithDescription = {
  args: {
    title: 'Card with Description',
    description: 'This is a simple description for the card.',
  },
};

export const Active = {
  args: {
    title: 'Active Card',
    description: 'This card is in the active state.',
    isActive: true,
  },
};