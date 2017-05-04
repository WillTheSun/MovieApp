import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import axios from 'axios';
import Swiper from 'react-native-swiper';

const testData = [
    {
        title: 'Going in Style',
        _year_data: '1979',
        year: 1979,
        rated: 'PG',
        released: '1979-12-25T05:00:00.000Z',
        runtime: '97 min',
        genres: 'Comedy, Crime, Drama',
        director: 'Martin Brest',
        writer: 'Martin Brest (screenplay), Edward Cannon (story by)',
        actors: 'George Burns, Art Carney, Lee Strasberg, Charles Hallahan',
        plot: 'Joe, Al, and Willie are three old men who have resigned themselves to dying. One night, Joe hatches a scheme to put a bit of excitement back into their lives: robbing a bank....',
        languages: 'English',
        country: 'USA',
        awards: '1 win & 1 nomination.',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMmZmY2E1MzYtOWViOS00MWJjLWE2OTUtMDFlNjQ1ZjY0MzQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
        ratings: [
            { Source: 'Internet Movie Database', Value: '7.2/10' },
            { Source: 'Rotten Tomatoes', Value: '89%' }
        ],
        metascore: 'N/A',
        rating: '7.2',
        votes: '2,109',
        imdbid: 'tt0079219',
        type: 'movie',
        dvd: '30 Mar 2004',
        boxoffice: 'N/A',
        production: 'Warner Bros. Pictures',
        website: 'N/A',
        response: 'True',
        series: false,
        imdburl: 'https://www.imdb.com/title/tt0079219'
    }
];

class MovieScroll extends Component {
    state = { movies: testData };

    renderMovies() {
        return this.state.movies.map(movie => (
            <Movie key={movie.title} movie={movie} />
        ));
    }

    render() {
        const { scrollStyle, imageStyle } = styles;
        console.log(this.state.movies[0].poster);
        return (
            <ScrollView horizontal={true} style={scrollStyle}>
                <Image
                    style={imageStyle}
                    source={{ uri: this.state.movies[0].poster }}
                />
                <Image
                    style={styles.imageStyle}
                    source={{ uri: this.state.movies[0].poster }}
                />
            </ScrollView>
        );
    }
}

const styles = {
    scrollStyle: {
        backgroundColor: '#414040'
    },
    imageStyle: {
        height: 300,
        // flex: 1,
        width: 200,
        margin: 30
    }
};

export default MovieScroll;
