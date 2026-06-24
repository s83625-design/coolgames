import React from 'react';
import { FavoriteLocation } from '../types/weather';

interface FavoritesListProps {
  favorites: FavoriteLocation[];
  onSelectFavorite: (location: FavoriteLocation) => void;
  onRemoveFavorite: (id: string) => void;
}

const FavoritesList: React.FC<FavoritesListProps> = ({
  favorites,
  onSelectFavorite,
  onRemoveFavorite,
}) => {
  if (favorites.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-3">⭐ Favorites</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {favorites.map((fav) => (
          <div
            key={fav.id}
            className="group relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-3 cursor-pointer hover:shadow-md transition-all"
          >
            <button
              onClick={() => onSelectFavorite(fav)}
              className="w-full text-left hover:text-blue-600"
            >
              <p className="font-semibold text-sm text-gray-800">{fav.name}</p>
              <p className="text-xs text-gray-600">
                {fav.latitude.toFixed(2)}, {fav.longitude.toFixed(2)}
              </p>
            </button>
            <button
              onClick={() => onRemoveFavorite(fav.id)}
              className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
