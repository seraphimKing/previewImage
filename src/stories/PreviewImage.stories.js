import React from 'react';

import PreviewImage from '../index';

export default {
  title: 'Example/PreviewImage',
  component: PreviewImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <div onClick={() => PreviewImage({
  images: ['http://127.0.0.1:3000/image1', 'http://127.0.0.1:3000/image2', 'http://127.0.0.1:3000/image3', 'http://127.0.0.1:3000/image4'],
  index: 0
})}>测试</div>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'PreviewImage',
};
