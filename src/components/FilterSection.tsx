import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FilterSectionProps {
  genres: any[];
  languages: any[];
  selectedGenre: string;
  selectedYear: string;
  selectedSort: string;
  selectedAdult: string;
  selectedLanguage: string;
  onGenreChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onAdultChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
}

export function FilterSection({
  genres,
  languages,
  selectedGenre,
  selectedYear,
  selectedSort,
  selectedAdult,
  selectedLanguage,
  onGenreChange,
  onYearChange,
  onSortChange,
  onAdultChange,
  onLanguageChange
}: FilterSectionProps) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);

  return (
    <section className="py-4 sm:py-6 lg:py-8 px-4 animate-fade-in">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {/* Genre Filter */}
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-xs sm:text-sm font-medium text-muted-foreground">Genre</label>
            <Select value={selectedGenre} onValueChange={onGenreChange}>
              <SelectTrigger className="bg-card/50 border-border/50 h-9 sm:h-10 text-xs sm:text-sm transition-all duration-300 hover:bg-card/70">
                <SelectValue placeholder="All Genres" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-50">
                <SelectItem value="all">All Genres</SelectItem>
                {genres.map((genre) => (
                  <SelectItem key={genre.id} value={genre.id.toString()}>
                    {genre.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Year Filter */}
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-xs sm:text-sm font-medium text-muted-foreground">Year</label>
            <Select value={selectedYear} onValueChange={onYearChange}>
              <SelectTrigger className="bg-card/50 border-border/50 h-9 sm:h-10 text-xs sm:text-sm transition-all duration-300 hover:bg-card/70">
                <SelectValue placeholder="All Years" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border max-h-60 z-50">
                <SelectItem value="all">All Years</SelectItem>
                {years.slice(0, 30).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Adult Content Filter */}
          <div className="space-y-1.5 sm:space-y-2 col-span-2 sm:col-span-1">
            <label className="text-xs sm:text-sm font-medium text-muted-foreground">Content</label>
            <Select value={selectedAdult} onValueChange={onAdultChange}>
              <SelectTrigger className="bg-card/50 border-border/50 h-9 sm:h-10 text-xs sm:text-sm transition-all duration-300 hover:bg-card/70">
                <SelectValue placeholder="All Content" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-50">
                <SelectItem value="all">All Content</SelectItem>
                <SelectItem value="false">Family Friendly</SelectItem>
                <SelectItem value="true">Adult Content</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Language Filter */}
          <div className="space-y-1.5 sm:space-y-2 col-span-2 sm:col-span-1">
            <label className="text-xs sm:text-sm font-medium text-muted-foreground">Language</label>
            <Select value={selectedLanguage} onValueChange={onLanguageChange}>
              <SelectTrigger className="bg-card/50 border-border/50 h-9 sm:h-10 text-xs sm:text-sm transition-all duration-300 hover:bg-card/70">
                <SelectValue placeholder="All Languages" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border max-h-60 z-50">
                <SelectItem value="all">All Languages</SelectItem>
                {languages.map((language) => (
                  <SelectItem key={language.iso_639_1} value={language.iso_639_1}>
                    {language.english_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Sort Filter */}
          <div className="space-y-1.5 sm:space-y-2 col-span-2 sm:col-span-1">
            <label className="text-xs sm:text-sm font-medium text-muted-foreground">Sort By</label>
            <Select value={selectedSort} onValueChange={onSortChange}>
              <SelectTrigger className="bg-card/50 border-border/50 h-9 sm:h-10 text-xs sm:text-sm transition-all duration-300 hover:bg-card/70">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-50">
                <SelectItem value="popularity.desc">Most Popular</SelectItem>
                <SelectItem value="vote_average.desc">Highest Rated</SelectItem>
                <SelectItem value="release_date.desc">Latest Release</SelectItem>
                <SelectItem value="title.asc">A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}