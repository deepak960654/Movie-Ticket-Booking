        let currentMovie = null;
        let selectedDate = null;
        let selectedShowtime = null;
        let selectedSeats = [];
        let isTrailerPlaying = false;

        const movies = [
            {
                id: 'jawan',
                title: 'Jawan',
                genre: 'Action, Thriller',
                duration: '165 min',
                rating: '7.1',
                director: 'Atlee Kumar',
                cast: ['Shah Rukh Khan', 'Nayanthara', 'Vijay Sethupathi'],
                poster: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
                background: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop',
                trailer: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Sample video
                showtimes: [
                    { time: '10:00 AM', type: '2D', price: 430 },
                    { time: '01:30 PM', type: '2D', price: 560 },
                    { time: '05:00 PM', type: '4DX', price: 800 },
                    { time: '08:30 PM', type: '4DX', price: 800 }
                ]
            },
            {
                id: 'gadar2',
                title: 'Gadar 2',
                genre: 'Action, Drama',
                duration: '170 min',
                rating: '7.0',
                director: 'Anil Sharma',
                cast: ['Sunny Deol', 'Ameesha Patel', 'Utkarsh Sharma'],
                poster: 'https://images.unsplash.com/photo-1489599511795-c6246aeb4db2?w=300&h=400&fit=crop',
                background: 'https://images.unsplash.com/photo-1489599511795-c6246aeb4db2?w=800&h=400&fit=crop',
                trailer: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', // Sample video
                showtimes: [
                    { time: '11:00 AM', type: '2D', price: 430 },
                    { time: '02:30 PM', type: '2D', price: 560 },
                    { time: '06:00 PM', type: '4DX', price: 800 },
                    { time: '09:30 PM', type: '4DX', price: 800 }
                ]
            },
            {
                id: 'topgun',
                title: 'Top Gun: Maverick',
                genre: 'Action, Drama',
                duration: '131 min',
                rating: '8.7',
                director: 'Joseph Kosinski',
                cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
                poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop',
                background: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
                trailer: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', // Sample video
                showtimes: [
                    { time: '10:30 AM', type: '2D', price: 430 },
                    { time: '02:00 PM', type: '3D', price: 560 },
                    { time: '05:30 PM', type: '4DX', price: 800 },
                    { time: '09:00 PM', type: '4DX', price: 800 }
                ]
            },
            {
                id: 'avatar',
                title: 'Avatar: The Way of Water',
                genre: 'Sci-Fi, Adventure',
                duration: '192 min',
                rating: '8.1',
                director: 'James Cameron',
                cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
                poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop',
                background: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=400&fit=crop',
                trailer: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', // Sample video
                showtimes: [
                    { time: '09:30 AM', type: '2D', price: 430 },
                    { time: '01:00 PM', type: '3D', price: 560 },
                    { time: '04:30 PM', type: '4DX', price: 800 },
                    { time: '08:00 PM', type: '4DX', price: 800 }
                ]
            },
            {
                id: 'batman',
                title: 'The Batman',
                genre: 'Action, Crime, Drama',
                duration: '176 min',
                rating: '7.8',
                director: 'Matt Reeves',
                cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
                poster: 'https://images.unsplash.com/photo-1509347528160-9329d33b2588?w=300&h=400&fit=crop',
                background: 'https://images.unsplash.com/photo-1509347528160-9329d33b2588?w=800&h=400&fit=crop',
                trailer: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', // Sample video
                showtimes: [
                    { time: '11:30 AM', type: '2D', price: 430 },
                    { time: '03:00 PM', type: '2D', price: 560 },
                    { time: '06:30 PM', type: '4DX', price: 800 },
                    { time: '10:00 PM', type: '4DX', price: 800 }
                ]
            },
            {
                id: 'spiderman',
                title: 'Spider-Man: No Way Home',
                genre: 'Action, Adventure, Sci-Fi',
                duration: '148 min',
                rating: '8.4',
                director: 'Jon Watts',
                cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
                poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=400&fit=crop',
                background: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=400&fit=crop',
                trailer: 'videos/capstone.mp4',
                showtimes: [
                    { time: '10:15 AM', type: '2D', price: 430 },
                    { time: '01:45 PM', type: '3D', price: 560 },
                    { time: '05:15 PM', type: '4DX', price: 800 },
                    { time: '08:45 PM', type: '4DX', price: 800 }
                ]
            }
        ];

        
        const bookedSeatsData = {
            '24': ['A3', 'A4', 'B7', 'C1', 'C2', 'D8', 'E5', 'F10', 'F11', 'G6', 'H12', 'J15'],
            '25': ['A1', 'B5', 'B6', 'C9', 'D12', 'E8', 'F3', 'F4', 'G18', 'H7', 'J9', 'J10'],
            '26': ['A8', 'B12', 'C15', 'D4', 'D5', 'E11', 'F18', 'G2', 'H15', 'J5', 'J6', 'J7'],
            '27': ['A12', 'B8', 'C6', 'D18', 'E2', 'F15', 'G9', 'H4', 'H5', 'J12', 'J13', 'J14'],
            '28': ['A5', 'A6', 'B15', 'C12', 'D9', 'E18', 'F7', 'G15', 'H9', 'J2', 'J3', 'J18']
        };

        
        document.addEventListener('DOMContentLoaded', function() {
            loadMovies();
            generateDates();
        });

       
        function loadMovies() {
            const moviesGrid = document.getElementById('moviesGrid');
            moviesGrid.innerHTML = '';

            movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                movieCard.onclick = () => selectMovie(movie);

                movieCard.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}">
                    <div class="movie-info">
                        <div class="movie-title">${movie.title}</div>
                        <div class="movie-genre">${movie.genre}</div>
                        <div class="movie-rating">
                            <i class="bi bi-star-fill"></i>
                            ${movie.rating}
                        </div>
                    </div>
                `;

                moviesGrid.appendChild(movieCard);
            });
        }

        
        function generateDates() {
            const dateGrid = document.getElementById('dateGrid');
            const today = new Date();
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            for (let i = 0; i < 7; i++) {
                const date = new Date(today);
                date.setDate(today.getDate() + i);
                
                const dateBtn = document.createElement('button');
                dateBtn.className = 'date-btn';
                dateBtn.onclick = () => selectDate(date.getDate().toString());

                dateBtn.innerHTML = `
                    <div class="date-day">${days[date.getDay()]}</div>
                    <div class="date-num">${date.getDate()}</div>
                `;

                dateGrid.appendChild(dateBtn);
            }
        }

        
        function selectMovie(movie) {
            currentMovie = movie;
            selectedDate = null;
            selectedShowtime = null;
            selectedSeats = [];

            document.getElementById('moviePoster').src = movie.poster;
            document.getElementById('movieTitleMain').textContent = movie.title;
            document.getElementById('movieGenre').textContent = movie.genre;
            document.getElementById('movieRating').textContent = movie.rating;
            document.getElementById('movieDirector').textContent = movie.director;
            document.getElementById('movieCast').textContent = movie.cast.join(', ');
            document.getElementById('movieDuration').textContent = movie.duration;
            document.getElementById('backgroundOverlay').style.backgroundImage = `url(${movie.background})`;
            
            // Set up trailer video
            const trailerVideo = document.getElementById('trailerVideo');
            trailerVideo.src = movie.trailer;
            
            // Reset video state
            isTrailerPlaying = false;
            document.getElementById('playIcon').className = 'bi bi-play-fill';
            document.getElementById('videoOverlay').classList.remove('playing');
            trailerVideo.style.display = 'none';

            loadShowtimes();

            showBooking();
        }

        
        function loadShowtimes() {
            const timeGrid = document.getElementById('timeGrid');
            timeGrid.innerHTML = '';

            currentMovie.showtimes.forEach(showtime => {
                const timeBtn = document.createElement('button');
                timeBtn.className = 'time-btn';
                timeBtn.onclick = () => selectShowtime(showtime);

                timeBtn.innerHTML = `
                    <div class="time-type">${showtime.type}</div>
                    <div class="time-value">${showtime.time}</div>
                `;

                timeGrid.appendChild(timeBtn);
            });
        }

        function selectDate(date) {
            selectedDate = date;
            
            document.querySelectorAll('.date-btn').forEach(btn => btn.classList.remove('active'));
            event.target.closest('.date-btn').classList.add('active');

            checkSelectionComplete();
        }

        function selectShowtime(showtime) {
            selectedShowtime = showtime;
            
            document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('active'));
            event.target.closest('.time-btn').classList.add('active');

            checkSelectionComplete();
        }

        function checkSelectionComplete() {
            if (selectedDate && selectedShowtime) {
                document.getElementById('screenSection').style.display = 'block';
                generateSeats();
            }
        }

        
        function generateSeats() {
            const seatsContainer = document.getElementById('seatsContainer');
            const rows = ['J', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
            const seatsPerRow = 24;
            const bookedSeats = bookedSeatsData[selectedDate] || [];

            seatsContainer.innerHTML = '';

            rows.forEach(row => {
                const seatRow = document.createElement('div');
                seatRow.className = 'seat-row';

                
                const leftLabel = document.createElement('div');
                leftLabel.className = 'row-label';
                leftLabel.textContent = row;
                seatRow.appendChild(leftLabel);

                
                for (let i = 1; i <= seatsPerRow; i++) {
                    const seatId = `${row}${i}`;
                    const seat = document.createElement('button');
                    seat.className = 'seat';
                    seat.id = seatId;
                    seat.textContent = getSeatPrice(row);
                    
                    if (bookedSeats.includes(seatId)) {
                        seat.classList.add('booked');
                    } else {
                        seat.onclick = () => toggleSeat(seatId);
                    }

                    seatRow.appendChild(seat);
                }

                const rightLabel = document.createElement('div');
                rightLabel.className = 'row-label';
                rightLabel.textContent = row;
                seatRow.appendChild(rightLabel);

                seatsContainer.appendChild(seatRow);
            });

            updateBookingSummary();
        }

        function getSeatPrice(row) {
            const priceMap = {
                'J': 800, 'H': 800, 'G': 560, 'F': 560,
                'E': 560, 'D': 560, 'C': 430, 'B': 430, 'A': 430
            };
            return priceMap[row] || 430;
        }

        function toggleSeat(seatId) {
            const seat = document.getElementById(seatId);
            
            if (seat.classList.contains('selected')) {
                seat.classList.remove('selected');
                selectedSeats = selectedSeats.filter(id => id !== seatId);
            } else {
                seat.classList.add('selected');
                selectedSeats.push(seatId);
            }

            updateBookingSummary();
        }

        function updateBookingSummary() {
            const summaryDiv = document.getElementById('bookingSummary');
            
            if (selectedSeats.length > 0) {
                summaryDiv.style.display = 'block';
                
                document.getElementById('selectedSeatsText').textContent = 
                    `Selected Seats: ${selectedSeats.join(', ')}`;
                
                document.getElementById('showInfo').textContent = 
                    `${currentMovie.title} • ${selectedShowtime.time} • ${selectedDate} Sep`;
                
                const totalPrice = calculateTotalPrice();
                document.getElementById('totalPrice').textContent = `₹${totalPrice}`;
            } else {
                summaryDiv.style.display = 'none';
            }
        }

        function calculateTotalPrice() {
            return selectedSeats.reduce((total, seatId) => {
                const row = seatId[0];
                return total + getSeatPrice(row);
            }, 0);
        }

        function toggleTrailer() {
            const trailerVideo = document.getElementById('trailerVideo');
            const playIcon = document.getElementById('playIcon');
            const videoOverlay = document.getElementById('videoOverlay');
            const moviePoster = document.getElementById('moviePoster');
            
            if (!isTrailerPlaying) {
                isTrailerPlaying = true;
                moviePoster.style.display = 'none';
                trailerVideo.style.display = 'block';
                videoOverlay.classList.add('playing');
                playIcon.className = 'bi bi-pause-fill';
                trailerVideo.play();
            
                trailerVideo.onended = function() {
                    stopTrailer();
                };
                
                trailerVideo.onpause = function() {
                    if (isTrailerPlaying) {
                        playIcon.className = 'bi bi-play-fill';
                        videoOverlay.classList.remove('playing');
                    }
                };
                
                trailerVideo.onplay = function() {
                    if (isTrailerPlaying) {
                        playIcon.className = 'bi bi-pause-fill';
                        videoOverlay.classList.add('playing');
                    }
                };
                
            } else {
                stopTrailer();
            }
        }

        function stopTrailer() {
            const trailerVideo = document.getElementById('trailerVideo');
            const playIcon = document.getElementById('playIcon');
            const videoOverlay = document.getElementById('videoOverlay');
            const moviePoster = document.getElementById('moviePoster');
            
            isTrailerPlaying = false;
            trailerVideo.pause();
            trailerVideo.currentTime = 0;
            trailerVideo.style.display = 'none';
            moviePoster.style.display = 'block';
            videoOverlay.classList.remove('playing');
            playIcon.className = 'bi bi-play-fill';
        }

        function showHome() {
            document.getElementById('homePage').style.display = 'block';
            document.getElementById('bookingPage').style.display = 'none';
            document.getElementById('customerForm').style.display = 'none';
            document.getElementById('confirmationPage').style.display = 'none';
        }

        function showBooking() {
            document.getElementById('homePage').style.display = 'none';
            document.getElementById('bookingPage').style.display = 'block';
            document.getElementById('customerForm').style.display = 'none';
            document.getElementById('confirmationPage').style.display = 'none';
        }

        function showCustomerForm() {
            if (selectedSeats.length === 0) {
                alert('Please select at least one seat');
                return;
            }

            const detailsGrid = document.getElementById('bookingDetailsGrid');
            detailsGrid.innerHTML = `
                <div class="detail-row">
                    <span>Movie:</span>
                    <span>${currentMovie.title}</span>
                </div>
                <div class="detail-row">
                    <span>Date & Time:</span>
                    <span>${selectedDate} Sep • ${selectedShowtime.time}</span>
                </div>
                <div class="detail-row">
                    <span>Seats:</span>
                    <span>${selectedSeats.join(', ')}</span>
                </div>
                <div class="detail-row">
                    <span>Theater:</span>
                    <span>PVR Vegus, Dwarka</span>
                </div>
                <div class="detail-row">
                    <span>Total Amount:</span>
                    <span style="color: var(--success-color);">₹${calculateTotalPrice()}</span>
                </div>
            `;

            document.getElementById('homePage').style.display = 'none';
            document.getElementById('bookingPage').style.display = 'none';
            document.getElementById('customerForm').style.display = 'block';
            document.getElementById('confirmationPage').style.display = 'none';
        }

        function confirmBooking() {
            const name = document.getElementById('customerName').value.trim();
            const email = document.getElementById('customerEmail').value.trim();
            const phone = document.getElementById('customerPhone').value.trim();

            if (!name || !email || !phone) {
                alert('Please fill in all required fields');
                return;
            }

            if (!email.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }

            
            const bookingId = 'BK' + Date.now().toString().slice(-6);

            
            generateDigitalTickets();


            document.getElementById('confirmEmail').textContent = email;
            
            const finalDetails = document.getElementById('finalBookingDetails');
            finalDetails.innerHTML = `
                <div class="booking-details">
                    <div class="detail-row">
                        <span>Booking ID:</span>
                        <span style="font-family: monospace;">${bookingId}</span>
                    </div>
                    <div class="detail-row">
                        <span>Customer:</span>
                        <span>${name}</span>
                    </div>
                    <div class="detail-row">
                        <span>Email:</span>
                        <span>${email}</span>
                    </div>
                    <div class="detail-row">
                        <span>Phone:</span>
                        <span>${phone}</span>
                    </div>
                    <div class="detail-row">
                        <span>Movie:</span>
                        <span>${currentMovie.title}</span>
                    </div>
                    <div class="detail-row">
                        <span>Show:</span>
                        <span>${selectedDate} Sep • ${selectedShowtime.time}</span>
                    </div>
                    <div class="detail-row">
                        <span>Seats:</span>
                        <span>${selectedSeats.join(', ')}</span>
                    </div>
                    <div class="detail-row" style="font-size: 1.2rem; color: var(--success-color);">
                        <span>Total Paid:</span>
                        <span>₹${calculateTotalPrice()}</span>
                    </div>
                </div>
            `;

            document.getElementById('homePage').style.display = 'none';
            document.getElementById('bookingPage').style.display = 'none';
            document.getElementById('customerForm').style.display = 'none';
            document.getElementById('confirmationPage').style.display = 'block';
        }

        function generateDigitalTickets() {
            const ticketsContainer = document.getElementById('digitalTickets');
            ticketsContainer.innerHTML = '';

            selectedSeats.forEach(seatId => {
                const row = seatId.charAt(0);
                const seatNum = seatId.slice(1);
                
                const ticket = document.createElement('div');
                ticket.className = 'digital-ticket';
                ticket.innerHTML = `
                    <div class="ticket-barcode">
                        <div class="barcode-info">
                            <div>
                                <div style="font-weight: 600; font-size: 0.7rem;">ROW ${row}</div>
                                <div style="font-size: 0.6rem;">${selectedDate} September 2025</div>
                            </div>
                            <div>
                                <div style="font-weight: 600; font-size: 0.7rem;">SEAT ${seatNum}</div>
                                <div style="font-size: 0.6rem;">${selectedShowtime.time}</div>
                            </div>
                        </div>
                        <div class="barcode-visual"></div>
                        <div class="cinema-name">VEGUS CINEMA</div>
                    </div>
                    <div class="ticket-details" style="background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${currentMovie.background}');">
                        <div class="ticket-type">4DX</div>
                        <div class="ticket-cinema">
                            <span style="color: white;">Vegus</span>
                            <span style="color: #60a5fa;"> Cinema</span>
                        </div>
                        <div class="ticket-movie-title">${currentMovie.title}</div>
                        <div class="ticket-seat-details">
                            <div class="seat-detail">
                                <div class="seat-detail-label">ROW</div>
                                <div class="seat-detail-value">${row}</div>
                            </div>
                            <div class="seat-detail">
                                <div class="seat-detail-label">SEAT</div>
                                <div class="seat-detail-value">${seatNum}</div>
                            </div>
                            <div class="seat-detail">
                                <div class="seat-detail-label">DATE</div>
                                <div class="seat-detail-value">${selectedDate} <sub>Sep</sub></div>
                            </div>
                            <div class="seat-detail">
                                <div class="seat-detail-label">TIME</div>
                                <div class="seat-detail-value">${selectedShowtime.time.split(' ')[0]} <sub>${selectedShowtime.time.split(' ')[1] || ''}</sub></div>
                            </div>
                        </div>
                    </div>
                `;
                ticketsContainer.appendChild(ticket);
            });
        }

        function resetBooking() {
        
            currentMovie = null;
            selectedDate = null;
            selectedShowtime = null;
            selectedSeats = [];
            isTrailerPlaying = false;

            
            document.getElementById('customerName').value = '';
            document.getElementById('customerEmail').value = '';
            document.getElementById('customerPhone').value = '';

            document.querySelectorAll('.date-btn.active').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.time-btn.active').forEach(btn => btn.classList.remove('active'));
            document.getElementById('screenSection').style.display = 'none';
            document.getElementById('playIcon').className = 'bi bi-play-fill';

            showHome();
        }