const movieData = {
    "October 2024": [
      {
        title: "Oppenheimer",
        poster: "https://path-to-poster/oppenheimer.jpg",
        rating: 4.5,
        letterboxdUrl: "https://letterboxd.com/film/oppenheimer/"
      },
      {
        title: "Dune: Part Two",
        poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
        rating: 4.5,
        letterboxdUrl: "https://letterboxd.com/film/dune-part-two/"
      },
      {
        title: "Poor Things",
        poster: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
        rating: 4.0,
        letterboxdUrl: "https://letterboxd.com/film/poor-things/"
      },
      {
        title: "Civil War",
        poster: "https://image.tmdb.org/t/p/w500/7vHNaIGL2S7xkJ3BEEJHMvqHSMO.jpg",
        rating: 4.0,
        letterboxdUrl: "https://letterboxd.com/film/civil-war-2024/"
      },
      {
        title: "Godzilla x Kong",
        poster: "https://image.tmdb.org/t/p/w500/aZvOkdo203bm1kpcY0A0Tn074ER.jpg",
        rating: 3.5,
        letterboxdUrl: "https://letterboxd.com/film/godzilla-x-kong-the-new-empire/"
      },
      {
        title: "Drive-Away Dolls",
        poster: "https://image.tmdb.org/t/p/w500/gavGnAMTXPkpoFgG0stwgIgKb64.jpg",
        rating: 3.0,
        letterboxdUrl: "https://letterboxd.com/film/drive-away-dolls/"
      },
    ]
  };

  function displayMoviePosters() {
    const reelContainer = document.querySelector('.reel-container');
    const movies = movieData["October 2024"];
    
    movies.forEach((movie, index) => {
        const posterElement = document.createElement('img');
        posterElement.classList.add('movie-poster');
        posterElement.src = movie.poster;
        posterElement.alt = movie.title;
        posterElement.title = movie.title;
        
        posterElement.addEventListener('click', () => {
            window.open(movie.letterboxdUrl, '_blank');
        });

        reelContainer.appendChild(posterElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Display movies
    displayMoviePosters();
    
    // Make page scrollable
    document.body.style.height = '200vh';
    
    const sections = document.querySelectorAll('.landing, .content');
    let isScrolling;
    
    window.addEventListener('scroll', () => {
        // Clear the timeout
        window.clearTimeout(isScrolling);
        
        // Add scrolled class based on threshold
        if (window.scrollY > window.innerHeight * 0.9) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
        
        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(() => {
            const currentScroll = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Determine which section to snap to
            if (currentScroll > windowHeight * 0.9) {
                window.scrollTo({
                    top: windowHeight,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }, 80); // Adjust this timeout to change sensitivity
    });
});