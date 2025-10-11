import { Star, Play, Info } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';

interface MovieCardProps {
  movie: any;
  onClick: (movie: any) => void;
  onPlay?: (movie: any) => void;
}

export function MovieCard({ movie, onClick, onPlay }: MovieCardProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick(movie);
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPlay) {
      onPlay(movie);
    }
  };

  return (
    <div className="movie-card relative group rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-muted/20">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
      
      {/* Movie Info Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 bg-gradient-to-t from-black/95 via-black/85 to-transparent transition-all duration-300">
        <h3 className="font-semibold text-white line-clamp-2 mb-1.5 sm:mb-2 text-xs sm:text-sm transition-all duration-300 group-hover:text-primary">
          {movie.title}
        </h3>
        
        <div className="flex items-center justify-between text-xs mb-2 sm:mb-3">
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-yellow-400 font-medium">
              {movie.vote_average?.toFixed(1)}
            </span>
          </div>
          
          <span className="text-gray-300">
            {movie.release_date?.split('-')[0]}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-1.5 sm:gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <EnhancedButton
            size="sm"
            variant="play"
            onClick={handlePlayClick}
            className="flex-1 h-7 sm:h-8 text-xs transition-all duration-300 hover:scale-105"
          >
            <Play className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline">Play</span>
          </EnhancedButton>
          <EnhancedButton
            size="sm"
            variant="glass"
            onClick={handleCardClick}
            className="flex-1 h-7 sm:h-8 text-xs transition-all duration-300 hover:scale-105"
          >
            <Info className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline">Info</span>
          </EnhancedButton>
        </div>
      </div>
      
      {/* Rating Badge */}
      {movie.vote_average >= 8 && (
        <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-primary text-primary-foreground text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded animate-pulse-slow">
          HOT
        </div>
      )}
    </div>
  );
}