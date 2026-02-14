// Import custom album covers
import youreAllIWantCover from "figma:asset/0b6678a00689bcfe6d85ec3ec494190dfd870fb8.png";

export interface AlbumData {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
  albumCover: string;
  albumName?: string;
  year?: number;
}

// Playlist personal - covers loaded dynamically from iTunes API
// Te amo lauti ♥
export const ALBUMS_DATABASE: AlbumData[] = [
  {
    id: '1',
    title: 'Nothing\'s Gonna Hurt You Baby',
    artist: 'Cigarettes After Sex',
    youtubeId: 'R2LQdh42neg',
    albumName: 'Cigarettes After Sex',
    year: 2017,
    albumCover: ''
  },
  {
    id: '2',
    title: 'P.S I LOVE YOU',
    artist: 'Paul Partohap',
    youtubeId: 'n5i3QRvPA9Y',
    albumName: 'P.S I LOVE YOU',
    year: 2021,
    albumCover: 'https://img.youtube.com/vi/n5i3QRvPA9Y/hqdefault.jpg'
  },
  {
    id: '3',
    title: 'Cirugia',
    artist: 'Dillom',
    youtubeId: 'WsvYPRqSH28',
    albumName: 'Post Mortem',
    year: 2023,
    albumCover: 'https://img.youtube.com/vi/WsvYPRqSH28/hqdefault.jpg'
  },
  {
    id: '4',
    title: 'Sunsetz',
    artist: 'Cigarettes After Sex',
    youtubeId: '5-rbSNzU_b8',
    albumName: 'Cigarettes After Sex',
    year: 2017,
    albumCover: 'https://img.youtube.com/vi/5-rbSNzU_b8/hqdefault.jpg'
  },
  {
    id: '5',
    title: 'Everything is Romantic',
    artist: 'Orchestra Club',
    youtubeId: '7GrneQrzB6U',
    albumName: 'Everything is Romantic',
    year: 2022,
    albumCover: 'https://img.youtube.com/vi/7GrneQrzB6U/hqdefault.jpg'
  },
  {
    id: '6',
    title: 'You\'re All I Want',
    artist: 'Cigarettes After Sex',
    youtubeId: 'BZ6D9SEvBHs',
    albumName: 'Cry',
    year: 2019,
    albumCover: youreAllIWantCover
  },
  {
    id: '7',
    title: 'Cabildo y Juramento',
    artist: 'Conociendo Rusia',
    youtubeId: 'TiZQuWOxvKw',
    albumName: 'Cabildo y Juramento',
    year: 2019,
    albumCover: 'https://img.youtube.com/vi/TiZQuWOxvKw/hqdefault.jpg'
  },
  {
    id: '8',
    title: 'Nunca Lo Olvides',
    artist: 'Airbag',
    youtubeId: 'ue0RP3C1Brg',
    albumName: 'Una Hora a Tokyo',
    year: 2007,
    albumCover: 'https://img.youtube.com/vi/ue0RP3C1Brg/hqdefault.jpg'
  },
  {
    id: '9',
    title: 'Sweet',
    artist: 'Cigarettes After Sex',
    youtubeId: 'pZ31pyTZdh0',
    albumName: 'Cigarettes After Sex',
    year: 2017,
    albumCover: ''
  },
  {
    id: '10',
    title: 'skipping tiles',
    artist: 'julie',
    youtubeId: '2s9hiKGrBQc',
    albumName: 'my anti-aircraft friend',
    year: 2023,
    albumCover: ''
  },
  {
    id: '11',
    title: 'Francés Limón',
    artist: 'Los Enanitos Verdes',
    youtubeId: 'jIwX3YozFQ4',
    albumName: 'Habitaciones Extrañas',
    year: 1987,
    albumCover: 'https://img.youtube.com/vi/jIwX3YozFQ4/hqdefault.jpg'
  },
  {
    id: '12',
    title: 'I Wanna Be Yours',
    artist: 'Arctic Monkeys',
    youtubeId: 'nyuo9-OjNNg',
    albumName: 'AM',
    year: 2013,
    albumCover: 'https://img.youtube.com/vi/nyuo9-OjNNg/hqdefault.jpg'
  },
  {
    id: '13',
    title: 'Pretty Boy',
    artist: 'The Neighbourhood',
    youtubeId: 'Jir-WItz1OI',
    albumName: 'Hard to Imagine the Neighbourhood Ever Changing',
    year: 2018,
    albumCover: 'https://img.youtube.com/vi/Jir-WItz1OI/hqdefault.jpg'
  },
  {
    id: '14',
    title: 'After Hours',
    artist: 'The Weeknd',
    youtubeId: 'ygTZZpVkmKg',
    albumName: 'After Hours',
    year: 2020,
    albumCover: ''
  },
  {
    id: '15',
    title: 'Heavenly',
    artist: 'Cigarettes After Sex',
    youtubeId: 's1QCL9AGbO0',
    albumName: 'Cigarettes After Sex',
    year: 2017,
    albumCover: ''
  },
  {
    id: '16',
    title: 'All I Need',
    artist: 'Radiohead',
    youtubeId: 'iY4APDrl66s',
    albumName: 'In Rainbows',
    year: 2007,
    albumCover: ''
  },
  {
    id: '17',
    title: 'Sailor Song',
    artist: 'Gigi Perez',
    youtubeId: '1lrFsXkT_rM',
    albumName: 'Sailor Song',
    year: 2024,
    albumCover: 'https://img.youtube.com/vi/1lrFsXkT_rM/hqdefault.jpg'
  },
  {
    id: '18',
    title: 'He\'s My Man',
    artist: 'Luvcat',
    youtubeId: '2ROnuyg_YbA',
    albumName: 'He\'s My Man',
    year: 2023,
    albumCover: ''
  },
  {
    id: '19',
    title: 'Still With You',
    artist: 'Jung Kook',
    youtubeId: 'BksBNbTIoPE',
    albumName: 'Still With You',
    year: 2020,
    albumCover: ''
  },
  {
    id: '20',
    title: 'Stop Waiting',
    artist: 'Cigarettes After Sex',
    youtubeId: '8XjYw8Wuv6Q',
    albumName: 'X\'s',
    year: 2024,
    albumCover: 'https://img.youtube.com/vi/8XjYw8Wuv6Q/hqdefault.jpg'
  },
  {
    id: '21',
    title: 'Sparks',
    artist: 'Coldplay',
    youtubeId: 'Ar48yzjn1PE',
    albumName: 'Parachutes',
    year: 2000,
    albumCover: 'https://img.youtube.com/vi/Ar48yzjn1PE/hqdefault.jpg'
  },
  {
    id: '22',
    title: 'My Love Mine All Mine',
    artist: 'Mitski',
    youtubeId: 'CwGbMYLjIpQ',
    albumName: 'The Land Is Inhospitable and So Are We',
    year: 2023,
    albumCover: ''
  },
  {
    id: '23',
    title: 'moment',
    artist: 'Vierre Cloud',
    youtubeId: '1QMG2QjsjdA',
    albumName: 'moment',
    year: 2019,
    albumCover: ''
  },
  {
    id: '24',
    title: '220',
    artist: 'Dillom',
    youtubeId: 'J30WzfFO6vU',
    albumName: 'Post Mortem',
    year: 2023,
    albumCover: ''
  },
  {
    id: '25',
    title: 'Lovers Rock',
    artist: 'TV Girl',
    youtubeId: 'acfYQmCBsz8',
    albumName: 'French Exit',
    year: 2014,
    albumCover: ''
  },
  {
    id: '26',
    title: 'K.',
    artist: 'Cigarettes After Sex',
    youtubeId: 'L4sbDxR22z4',
    albumName: 'Cigarettes After Sex',
    year: 2017,
    albumCover: ''
  },
  {
    id: '27',
    title: 'SPIT IN MY FACE!',
    artist: 'ThxSoMch',
    youtubeId: 'ZtCOsQqrBrs',
    albumName: 'SPIT IN MY FACE!',
    year: 2022,
    albumCover: ''
  }
];

// Helper functions for database operations
export const getAlbumById = (id: string): AlbumData | undefined => {
  return ALBUMS_DATABASE.find(album => album.id === id);
};

export const getAlbumsByArtist = (artist: string): AlbumData[] => {
  return ALBUMS_DATABASE.filter(album => 
    album.artist.toLowerCase().includes(artist.toLowerCase())
  );
};

export const searchAlbums = (query: string): AlbumData[] => {
  const lowerQuery = query.toLowerCase();
  return ALBUMS_DATABASE.filter(album =>
    album.title.toLowerCase().includes(lowerQuery) ||
    album.artist.toLowerCase().includes(lowerQuery) ||
    (album.albumName && album.albumName.toLowerCase().includes(lowerQuery))
  );
};

export const getAllAlbums = (): AlbumData[] => {
  return ALBUMS_DATABASE;
};

// Get random subset of albums
export const getRandomAlbums = (count: number): AlbumData[] => {
  const shuffled = [...ALBUMS_DATABASE].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};