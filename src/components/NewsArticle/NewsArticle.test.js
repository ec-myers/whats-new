import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  let article = {
    id: 1,
    headline: 'India\'s Lost Moon Lander Is Somewhere in This Photo',
    img: 'https://cdn.mos.cms.futurecdn.net/FsUeVGmY89BWeb36U8cUj5-650-80.jpg',
    description: 'The image was captured by NASA\'s Lunar Reconnaissance Orbiter (LRO) on Sept. 17 as it flew over the targeted landing site of India\'s Chandrayaan-2 mission.',
    url: 'https://www.livescience.com/india-moon-landing-site-nasa-photo.html',
  }
  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsArticle
      key={article.id}
      headline={article.headline}
      img={article.img}
      url={article.url}
      description={article.description}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});