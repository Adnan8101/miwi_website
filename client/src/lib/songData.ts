import { z } from 'zod';

export interface Song {
  title: string;
  artist: string;
  duration: string;
  image: string;
}

// Collection of 10 popular songs with verified working cover art
export const popularSongs: Song[] = [
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    duration: "3:53",
    image: "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96"
  },
  {
    title: "See You Again",
    artist: "Wiz Khalifa ft. Charlie Puth",
    duration: "3:45",
    image: "https://i.scdn.co/image/ab67616d00001e02d9a129c4a656a55afff2ca02"
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:20",
    image: "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
  },
  {
    title: "Starboy",
    artist: "The Weeknd ft. Daft Punk",
    duration: "3:50",
    image: "https://i.scdn.co/image/ab67616d00001e02c33d00d81b29aba88286c8ac"
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    duration: "3:14",
    image: "https://i.scdn.co/image/ab67616d00001e02171d97004e3e311c5fb3e94e"
  },
  {
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    duration: "2:21",
    image: "https://i.scdn.co/image/ab67616d00001e02748f7c43b1c76963f8b0af72"
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    duration: "2:47",
    image: "https://i.scdn.co/image/ab67616d00001e02b46f74097655d7f353caab14"
  },
  {
    title: "Heat Waves",
    artist: "Glass Animals",
    duration: "3:59",
    image: "https://i.scdn.co/image/ab67616d00001e02712701c5e263efc8726b1464"
  },
  {
    title: "Levitating",
    artist: "Dua Lipa ft. DaBaby",
    duration: "3:23",
    image: "https://i.scdn.co/image/ab67616d00001e02bd26ede1ae69327010d49946"
  },
  {
    title: "Shivers",
    artist: "Ed Sheeran",
    duration: "3:27",
    image: "https://i.scdn.co/image/ab67616d00001e02b42b5c3ea4172c80a81f31cf"
  }
];

// Function to get a random song
export const getRandomSong = (): Song => {
  return popularSongs[Math.floor(Math.random() * popularSongs.length)];
};

// Function to get random progress
export const getRandomProgress = (): { current: string; percent: number } => {
  const minutes = Math.floor(Math.random() * 3) + 1;
  const seconds = Math.floor(Math.random() * 60);
  const current = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  const totalSeconds = minutes * 60 + seconds;
  const maxSeconds = 4 * 60;
  const percent = Math.min(100, (totalSeconds / maxSeconds) * 100);
  return { current, percent };
};