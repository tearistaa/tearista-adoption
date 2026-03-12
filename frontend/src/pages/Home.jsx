import { useState } from 'react';

// Import CSS
import '../styles/Home.css';

// Import Icons
import { FaCat, FaDog, FaFish, FaHandsHelping, FaHeart, FaHome, FaPaw, FaRegHeart, FaShieldAlt } from 'react-icons/fa';
import { GiRabbit } from 'react-icons/gi';

function Home() {
    const [likedPets, setLikedPets] = useState([]);

    const toggleLike = (id) => {
        setLikedPets(prev =>
            prev.includes(id) ? prev.filter(petId => petId !== id) : [...prev, id]
        );
    };

    // Category Mapping
    const categories = [
        { id: 1, name: 'Dogs', icon: <FaDog /> },
        { id: 2, name: 'Cats', icon: <FaCat /> },
        { id: 3, name: 'Rabbits', icon: <GiRabbit /> },
        { id: 4, name: 'Fish', icon: <FaFish /> },
        { id: 5, name: 'Others', icon: <FaHeart /> }
    ];

    // Pets Mapping
    const pets = [
        { id: 1, name: 'Mochi', type: 'Cat', age: '1 Year Old', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=500', isNew: true },
        { id: 2, name: 'Bruno', type: 'Dog', age: '2 Years Old', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500', isNew: false },
        { id: 3, name: 'Luna', type: 'Cat', age: '6 Months Old', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500', isNew: false },
        { id: 4, name: 'Snowy', type: 'Rabbit', age: '1 Year Old', img: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=500', isNew: false },
        { id: 5, name: 'Rex', type: 'Dog', age: '3 Years Old', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500', isNew: false },
    ];

    // Articles Mapping
    const articles = [
        { id: 1, title: 'Complete Guide to Caring for Your First Kitten', img: 'https://images.unsplash.com/photo-1543857778-c4da1a3e02e5?q=80&w=500', excerpt: 'Essential preparations to welcome your new family member.' },
        { id: 2, title: '5 Essential Nutrients for Your Dog', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=500', excerpt: 'Understand healthy nutrition so your dog stays active and happy.' }
    ];

    return (
        <div className='home-container'>
            <div className='hero-section'>
                <div className='hero-content'>
                    <h1 className='home-name'>Tearista Adoption</h1>
                    <p className='hero-tagline'>
                        Find Your New Best Friend and Warm Your Home.
                        Give them a second chance at happiness.
                    </p>

                    <div className='hero-btn'>
                        <button className='btn-primary'>Adopt Now</button>
                        <button className='btn-secondary'>How it Works</button>
                    </div>
                </div>

                <div className='hero-image-container'>
                    <img src='https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?q=80&w=1000' alt='Cute pets' className='hero-img' />
                </div>
            </div>

            <div className='how-it-works-section'>
                <div className='how-it-works-inner'>
                    <div className='section-title'>
                        <h2>How It Works</h2>
                        <p>Bringing home your new friend is simple</p>
                    </div>

                    <div className='steps-grid'>
                        <div className='step-card'>
                            <div className='step-number'>01</div>
                            <h3>Browse</h3>
                            <p>Find your perfect companion from our list of available pets.</p>
                        </div>

                        <div className='step-card'>
                            <div className='step-number'>02</div>
                            <h3>Meet</h3>
                            <p>Schedule a visit to meet your future best friend in person.</p>
                        </div>

                        <div className='step-card'>
                            <div className='step-number'>03</div>
                            <h3>Adopt</h3>
                            <p>Complete the process and welcome them into your home.</p>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className='category-section'>
                <div className='section-title'>
                    <h2>Browse by Category</h2>
                    <p>Select the type of pet you'd like to bring home</p>
                </div>

                <div className='category-grid small-categories'>
                    {categories.map((item) => (
                        <div key={item.id} className='category-card mini'>
                            <div className='icon-circle'>{item.icon}</div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='featured-section'>
                <div className='section-header'>
                    <div>
                        <h2>Friends Waiting for You</h2>
                        <p>These adorable pets are ready for a new home</p>
                    </div>
                    <a href='./view-pets' className='view-all'>View All <FaPaw /></a>
                </div>

                <div className='pet-grid'>
                    {pets.map((pet) => (
                        <div key={pet.id} className='pet-card'>
                            {pet.isNew && <div className='pet-badge'>New Arrival</div>}
                            <div className='like-btn' onClick={() => toggleLike(pet.id)}>
                                {likedPets.includes(pet.id) ? <FaHeart style={{ color: '#e74c3c' }} /> : <FaRegHeart />}
                            </div>

                            <img src={pet.img} alt={pet.name} />
                            <div className='pet-info'>
                                <h4>{pet.name}</h4>
                                <p>{pet.type} | {pet.age}</p>
                                <button className='btn-detail'>Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='why-section'>
                <div className='section-title'>
                    <h2>Why Choose Tearista Adoption?</h2>
                </div>

                <div className='why-grid'>
                    <div className='why-card'>
                        <FaShieldAlt className='why-icon' />
                        <h3>Verified Health</h3>
                        <p>Every pet has gone through a full health check and vaccination.</p>
                    </div>

                    <div className='why-card'>
                        <FaHome className='why-icon' />
                        <h3>Safe Environment</h3>
                        <p>We ensure a safe and loving environment for every pet.</p>
                    </div>

                    <div className='why-card'>
                        <FaHandsHelping className='why-icon' />
                        <h3>Support System</h3>
                        <p>Complete care guidance for first-time pet owners.</p>
                    </div>
                </div>
            </div>

            <div className='article-section'>
                <div className='section-title'>
                    <h2>Latest Articles & Tips</h2>
                    <p>Learn more about how to love your furry friend.</p>
                </div>

                <div className='article-grid'>
                    {articles.map(art => (
                        <div key={art.id} className='article-card'>
                            <img src={art.img} alt={art.title} />

                            <div className='article-content'>
                                <h4>{art.title}</h4>
                                <p>{art.excerpt}</p>
                                <button className='btn-read'>Read Article</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='about-section'>
                <div className='about-content'>
                    <h2>About Tearista Adoption</h2>
                    <p>
                        Tearista Adoption is more than just a platform; we are a dedicated community
                        committed to giving abandoned and rescued pets a second chance at life.
                        Our mission is to bridge the gap between loving homes and pets waiting for
                        their forever families.
                    </p>
                    <button className='btn-secondary'>Read Our Story</button>
                </div>

                <div className='about-image'>
                    <img src='https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=600' alt='About Us' />
                </div>
            </div>

            <div className='contact-section'>
                <h2>Visit Us</h2>
                <div className='contact-content'>
                    <div className='map-box'>[Google Maps Placeholder: Jurong West, Singapore]</div>
                    <div className='contact-details'>
                        <p>Jurong West, No. 123, Singapore</p>
                        <p>012-456-789</p>
                        <p>tearistaadoption@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;