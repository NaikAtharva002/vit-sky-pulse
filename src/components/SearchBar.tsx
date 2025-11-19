import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality with WeatherAPI
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
        <div className="glass-card rounded-2xl p-3 flex gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
          <Input
            type="text"
            placeholder="Search for any city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border-0 bg-transparent text-white/90 placeholder:text-white/40 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg"
          />
          <Button
            type="submit"
            size="lg"
            className="bg-weather-vit hover:bg-weather-vit/90 text-white rounded-xl px-6 transition-all duration-300 hover:scale-105"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
