const movieData = {
    "September 2024": [
        {
            title: "American Gangster",
            poster: "assets/posters/american-gangster.jpg",
            rating: 4.5,
            letterboxdUrl: "https://letterboxd.com/film/american-gangster/"
        },
        {
            title: "Steve Jobs",
            poster: "assets/posters/steve-jobs.jpg",
            rating: 4.0,
            letterboxdUrl: "https://letterboxd.com/film/steve-jobs/"
        },
        {
            title: "Bram Stoker's Dracula",
            poster: "assets/posters/dracula.jpg",
            rating: 3.0,
            letterboxdUrl: "https://letterboxd.com/film/bram-stokers-dracula/"
        },
        {
            title: "Anatomy of a Fall",
            poster: "assets/posters/anatomy.jpg",
            rating: 4.0,
            letterboxdUrl: "https://letterboxd.com/film/anatomy-of-a-fall/"
        },
        {
            title: "The Fly",
            poster: "assets/posters/the-fly.jpg",
            rating: 4.5,
            letterboxdUrl: "https://letterboxd.com/film/the-fly-1986/"
        },
        {
            title: "Watcher",
            poster: "assets/posters/watcher.jpg",
            rating: 4,
            letterboxdUrl: "hhttps://letterboxd.com/film/watcher/"
        }
    ],
        "October 2024": [
        {
            title: "The Wicker Man",
            poster: "assets/posters/wicker-man.jpg",
            rating: 4.5,
            letterboxdUrl: "https://letterboxd.com/film/the-wicker-man-2006/"
        },
        {
            title: "Inside",
            poster: "assets/posters/inside.jpg",
            rating: 4.5,
            letterboxdUrl: "https://letterboxd.com/film/inside-2023/"
        },
        {
            title: "The Fall Guy",
            poster: "assets/posters/fall-guy.jpg",
            rating: 4.0,
            letterboxdUrl: "https://letterboxd.com/film/the-fall-guy-2024/"
        },
        {
            title: "Roadrunner",
            poster: "assets/posters/roadrunner.jpg",
            rating: 4.0,
            letterboxdUrl: "https://letterboxd.com/film/roadrunner-a-film-about-anthony-bourdain/"
        },
        {
            title: "Longlegs",
            poster: "assets/posters/longlegs.jpg",
            rating: 3.5,
            letterboxdUrl: "https://letterboxd.com/film/longlegs/"
        },
        {
            title: "Trap",
            poster: "assets/posters/trap.jpg",
            rating: 3.0,
            letterboxdUrl: "https://letterboxd.com/film/trap-2024/"
        },
        ]
    };

    function displayMoviePosters() {
      // Display October movies first
      const octoberContainer = document.querySelector('#october-reel');
      const octoberMovies = movieData["October 2024"];
  
      octoberMovies.forEach((movie, index) => {
          const posterElement = document.createElement('img');
          posterElement.classList.add('movie-poster');
          posterElement.src = movie.poster;
          posterElement.alt = movie.title;
          posterElement.title = movie.title;
          
          posterElement.addEventListener('click', () => {
              window.open(movie.letterboxdUrl, '_blank');
          });
  
          octoberContainer.appendChild(posterElement);
      });
  
      // Then display September movies
      const septemberContainer = document.querySelector('#september-reel');
      const septemberMovies = movieData["September 2024"];
  
      septemberMovies.forEach((movie, index) => {
          const posterElement = document.createElement('img');
          posterElement.classList.add('movie-poster');
          posterElement.src = movie.poster;
          posterElement.alt = movie.title;
          posterElement.title = movie.title;
  
          posterElement.addEventListener('click', () => {
              window.open(movie.letterboxdUrl, '_blank');
          });
          septemberContainer.appendChild(posterElement);
      });
  }
    
    // DOM Content Loaded event listener
    document.addEventListener('DOMContentLoaded', () => {
        window.scrollTo(0, 0);
        displayMoviePosters();
        
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Update scrolled class based on scroll position
            if (currentScroll > windowHeight * 0.3) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
            
            lastScrollTop = currentScroll;
        });
    });  