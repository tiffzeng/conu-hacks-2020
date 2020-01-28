# Music Video Generator

[Devpost](https://devpost.com/software/picture-video-music-generator)

## Description

ConUHacks V 2020 project, developed in 24 hours.

A user can enter a song title and artist, the web app will return a auto-generated music video corresponding to the song's lyrics as accurately as possible.

### How?

Leveraged OctaveGroup's TouchTunes API to fetch song info, such as a normalized artist name, song title, duration and a playable URL.

This information is used to scrape lyrics from http://azlyrics.com,
depending of the length of the lyrics and the duration of the song,
chunks would be stemmed and tokenized through an natural language processing library to retrieve the most meaningful keywords.

Those keywords are passed through the ShutterStock API to retrieve relevant video footage to create the music video.

The video is then displayed on the React.js front-end and played with the song.

## Demo Video

https://youtu.be/XYoatVr_w2s

## Built with / technologies

- React.js
- Node.js
- Express.js
- Natural npm package (Natural Language Processing)
- Cheerio npm package (Scraping library)

### Prerequisites

Must have installed:

- Node.js 12+

### Configuration

This project needs 2 API tokens/keys. OctaveGroup's TouchTunes and ShutterStock's.

Create a `.env` file at the root of the `backend/` folder and complete the following lines:

```
OCTAVE_GROUP=
SHUTTERSTOCK_API_TOKEN=
```

### Installing

- Clone the project
- From the root of the directory, run `npm run installall`

This will install all the npm dependencies needed to develop.

### Usage

To run the development server:

- cd to the root directory and run `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Use cases

Automatically create visual content based on text/lyrics.

Ideas for application:

- Advertising
- Content creators

## Roadmap / Todo

A couple ideas to extend this project includes:

- Display lyrics underneath and match with timestamp of the song.
- Refine algorithm and improve the timing of matching

## Authors

[Gordon Pham-Nguyen](https://github.com/gpnn)
[Mackenzie Bellemore](https://github.com/Mackbellemore)
[Tiffany Zeng](https://github.com/tiffzeng)
[Tyson Pham](https://github.com/TysonPham)

## License

[MIT License](https://choosealicense.com/licenses/mit/#)
