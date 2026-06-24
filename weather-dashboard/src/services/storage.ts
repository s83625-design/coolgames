import { FavoriteLocation } from '../types/weather';

const FAVORITES_KEY = 'weather_favorites';

export const storageService = {
  // Get all favorite locations
  getFavorites: (): FavoriteLocation[] => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading favorites from localStorage:', error);
      return [];
    }
  },

  // Add a favorite location
  addFavorite: (location: Omit<FavoriteLocation, 'id' | 'addedAt'>): FavoriteLocation => {
    const favorites = storageService.getFavorites();
    const newFavorite: FavoriteLocation = {
      ...location,
      id: Date.now().toString(),
      addedAt: Date.now(),
    };
    favorites.push(newFavorite);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return newFavorite;
  },

  // Remove a favorite location
  removeFavorite: (id: string): void => {
    const favorites = storageService.getFavorites();
    const updated = favorites.filter(fav => fav.id !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  },

  // Check if a location is a favorite
  isFavorite: (latitude: number, longitude: number): boolean => {
    const favorites = storageService.getFavorites();
    return favorites.some(
      fav => fav.latitude === latitude && fav.longitude === longitude
    );
  },
};
