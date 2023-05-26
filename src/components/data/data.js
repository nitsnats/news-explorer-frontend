import Img1  from '../../images/dog_pic.png';
import Img2  from '../../images/boat_pic.png';
import Img3  from '../../images/park_pic.png';
import Img4  from '../../images/moose_pic.png';
import Img5  from '../../images/night_pic.png';

export const allCards = [
  {
    keyword: 'Nature',
    title: 'Everyone Needs a Special &#39;Sit Spot&#39; in Nature',
    text: 'Ever since I read Richard Louv&#39;s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    date: 'November 4, 2020',
    source: 'treehugger',
    link: '#',
    image: Img1,
    //owner: '#',
    isSaved: false,
    _id: Math.random().toString(),
  },
  {
    keyword: 'Nature',
    title: 'Nature makes you better',
    text: 'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.',
    date: 'February 19, 2019',
    source: 'National Geographic',
    link: '#',
    image: Img2,
    //owner: '#',
    isSaved: true,
    _id: Math.random().toString(),
  },
  {
    keyword: 'Yellowstone',
    title: 'Nostalgic Photos of Tourists in U.S. National Parks',
    text: 'Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...',
    date: 'October 19, 2020',
    source: 'national geographic',
    link: '#',
    image: Img3,
    //owner: '#',
    isSaved: true,
    _id: Math.random().toString(),
  },
  {
    keyword: 'Parks',
    title: 'Grand Teton Renews Historic Crest Trail',
    text: '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...',
    date: 'November 4, 2020',
    source: 'National parks traveler',
    link: '#',
    image: Img4,
    //owner: '#',
    isSaved: true,
    _id: Math.random().toString(),
  },
  {
    keyword: 'Photography',
    title: 'Scientists Don&#39;t Know Why Polaris Is So Weird ',
    text: 'Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them. ',
    date: 'March 16, 2020',
    source: 'treehugger',
    link: '#',
    image: Img5,
    //owner: '#',
    isSaved: false,
    _id: Math.random().toString(),
  },
];
  
export const savedCards = allCards.slice(1);
  