import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselItem from './CarouselItem';

const movieData = require('../movieData.json');

class CarouselScroll extends Component {
    state = { movies: movieData };

    renderMovies() {
        return this.state.movies.map(movie => (
            <CarouselItem key={movie.title} movie={movie} />
        ));
    }

    render() {
        return (
            <Carousel
                firstItem={1}
                ref={carousel => {
                    this._carousel = carousel;
                }}
                sliderWidth={370}
                itemWidth={200}
                containerCustomStyle={styles.backgroundStyle}
            >
                {this.renderMovies()}
            </Carousel>
        );
    }
}

const styles = {
    backgroundStyle: {
        paddingTop: 20,
        backgroundColor: '#414040'
    }
};

export default CarouselScroll;
