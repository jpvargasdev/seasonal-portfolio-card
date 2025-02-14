
import { useEffect, useState } from 'react';

const seasons = [
  {
    name: 'winter',
    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2070&auto=format&fit=crop',
    next: 'spring'
  },
  // {
  //   name: 'spring',
  //   image: 'https://images.unsplash.com/photo-1739437455408-66aab68b5c0d?q=80&w=2070&auto=format&fit=crop',
  //   next: 'winter'
  // },
  // {
  //   name: 'summer',
  //   image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop',
  //   next: 'autumn'
  // },
  // {
  //   name: 'autumn',
  //   image: 'https://images.unsplash.com/photo-1507371341162-763b5e419408?q=80&w=2070&auto=format&fit=crop',
  //   next: 'winter'
  // }
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
          } dark:brightness-50`}
          style={{
            backgroundImage: `url(${season.image})`,
          }}
          onLoad={() => setLoading(false)}
        />
      ))}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />
    </div>
  );
};

export default SeasonalBackground;
