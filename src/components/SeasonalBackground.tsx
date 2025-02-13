
import { useEffect, useState } from 'react';

const seasons = [
  {
    name: 'winter',
    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2070&auto=format&fit=crop',
    next: 'spring'
  },
  {
    name: 'spring',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop',
    next: 'summer'
  },
  {
    name: 'summer',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop',
    next: 'autumn'
  },
  {
    name: 'autumn',
    image: 'https://images.unsplash.com/photo-1507371341162-763b5e419408?q=80&w=2070&auto=format&fit=crop',
    next: 'winter'
  }
];

const SeasonalBackground = () => {
  const [currentSeason, setCurrentSeason] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSeason((prev) => (prev + 1) % seasons.length);
    }, 10000); // Change season every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {seasons.map((season, index) => (
        <div
          key={season.name}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center bg-no-repeat ${
            currentSeason === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${season.image})`,
          }}
          onLoad={() => setLoading(false)}
        />
      ))}
    </div>
  );
};

export default SeasonalBackground;
