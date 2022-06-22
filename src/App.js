import React from 'react';
import DocumentMeta from 'react-document-meta';

import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';
import './App.scss';
const meta = {
  title: 'BDEV Portfolio | Frontend Developer © 2022',
  description:
    'This Portfolio belongs to Brian Ogas, professional web develper',
  canonical: 'https://brian-ogas.netlify.app/',
  meta: {
    charSet: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
    itemProp: {
      name: 'The Name or Title Here',
      description: 'This is the page description',
      image: 'https://i.postimg.cc/rsLKkgDK/OG.jpg',
    },
    property: {
      'og:title': 'BDEV Portfolio | Frontend Developer © 2022',
      'og:type': 'article',
      'og:image': 'https://i.postimg.cc/rsLKkgDK/OG.jpg',
      'og:site_name':
        'This Portfolio belongs to Brian Ogas, professional web develper',
      'og:price:amount': '19.50',
      'og:price:currency': 'USD',
      'twitter:site': '@site',
      'twitter:title': 'I am a Twitter title',
    },
  },
  auto: {
    ograph: true,
  },
  // title: 'Brian Ogas',
  // description: 'This Portfolio belongs to Brian Ogas, professional web develper',
  // canonical: 'https://brian-ogas.netlify.app/',
  // meta: [
  //   {
  //     hid: 'facebook:title',
  //     name: 'facebook:title',
  //     content: 'BDEV - Frontend Developer',
  //   },
  //   {
  //     hid: 'facebook:description',
  //     name: 'facebook:description',
  //     content: 'This Portfolio belongs to Brian Ogas, professional web develper',
  //   },
  //   {
  //     hid: 'facebook:image',
  //     name: 'facebook:image',
  //     content: { OG },
  //   },
  //   {
  //     hid: 'facebook:image:alt',
  //     name: 'facebook:image:alt',
  //     content: 'Brian Ogas Portfolio',
  //   },
  //   {
  //     hid: 'og:title',
  //     property: 'og:title',
  //     content: 'BDEV - Frontend Developer',
  //   },
  //   {
  //     hid: 'og:description',
  //     property: 'og:description',
  //     content: 'This Portfolio belongs to Brian Ogas, professional web develper',
  //   },
  //   {
  //     hid: 'og:image',
  //     property: 'og:image',
  //     content: { OG },
  //   },
  //   {
  //     hid: 'og:image:secure_url',
  //     property: 'og:image:secure_url',
  //     content: { OG },
  //   },
  //   {
  //     hid: 'og:image:alt',
  //     property: 'og:image:alt',
  //     content: 'Brian Ogas Portfolio',
  //   },
  // ],
};

const App = () => (
  <div className="app">
    <DocumentMeta {...meta}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </DocumentMeta>
  </div>
);

export default App;
