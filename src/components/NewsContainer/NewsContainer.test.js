import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  let news = [{
    id: 1,
    headline: 'India\'s Lost Moon Lander Is Somewhere in This Photo',
    img: 'https://cdn.mos.cms.futurecdn.net/FsUeVGmY89BWeb36U8cUj5-650-80.jpg',
    description: 'The image was captured by NASA\'s Lunar Reconnaissance Orbiter (LRO) on Sept. 17 as it flew over the targeted landing site of India\'s Chandrayaan-2 mission.',
    url: 'https://www.livescience.com/india-moon-landing-site-nasa-photo.html'
  },
  {
    id: 1,
    headline: 'Man dies after getting infection linked to shellfish, North Carolina officials say',
    img: 'https://www.newsobserver.com/entertainment/restaurants/o6w6n7/picture184859643/alternates/FREE_768/MAIN%20OPTION%202:%20OYSTERS',
    description: 'A North Carolina man has died after getting an infection often associated with shellfish, state health officials say.',
    url: 'https://www.bnd.com/news/nation-world/national/article235549897.html'
  }];

  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsContainer news={news}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});