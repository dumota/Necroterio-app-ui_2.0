"use client";
import { Badge } from "@/components/terrorui/badge";
import { Button } from "@/components/terrorui/button";
import { Input } from "@/components/terrorui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/terrorui/select";
import { useCategory } from "@/providers/CategoryProvider";
import { SearchIcon, SlidersHorizontalIcon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FiltersSection() {

    const router = useRouter();
    const { categories } = useCategory();
    const handleClearFilters = () => {
        const newIrlParamsn = new URLSearchParams(window.location.search);
        newIrlParamsn.set("page", "1");
        newIrlParamsn.set("limit", "10");
        newIrlParamsn.set("category", "");
        router.push(`/blog/blogsList?${newIrlParamsn.toString()}`);
    }

    const handleChangeCategory = (value: string) => {
        const newIrlParamsn = new URLSearchParams(window.location.search);
        newIrlParamsn.set("page", "1");
        newIrlParamsn.set("limit", "10");
        newIrlParamsn.set("category", value);
        router.push(`/blog/blogsList?${newIrlParamsn.toString()}`);
    }

    const handleChangeAuthor = (value: string) => {
        const newIrlParamsn = new URLSearchParams(window.location.search);
        newIrlParamsn.set("page", "1");
        newIrlParamsn.set("limit", "10");
        newIrlParamsn.set("author", value);
        router.push(`/blog/blogsList?${newIrlParamsn.toString()}`);
    }

    const [showFilters, setShowFilters] = useState(false);

    return (

        <section className="relative z-10 border-b border-blood/20 bg-card/50">
            <div className="container mx-auto px-4 py-4">
                {/* Search and Toggle */}
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Buscar por título, autor ou conteúdo..."
                              onChange={(e) => {
                                handleChangeAuthor(e.target.value);
                              }}
                            className="pl-10 bg-background border-blood/30 focus:border-blood font-mono"
                        />
                    </div>

                    <Button
                        variant="outline"
                        onClick={() => setShowFilters(!showFilters)}
                        className="border-blood/50 text-blood hover:bg-blood/10 font-vhs gap-2"
                    >
                        <SlidersHorizontalIcon className="w-4 h-4" />
                        FILTROS
                        {showFilters && (
                            <Badge className="bg-toxic text-black ml-1">!</Badge>
                        )}
                    </Button>
                </div>

                {/* Expanded Filters */}
                {showFilters && (
                    <div className="mt-4 p-4 border border-blood/30 rounded-lg bg-background/50 space-y-4 animate-in slide-in-from-top-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Category Filter */}
                            <div>
                                <label className="text-sm font-vhs text-blood mb-2 block">
                                    CATEGORIA
                                </label>
                                <Select
                                //   value={selectedCategory}
                                  onValueChange={(value) => {
                                    handleChangeCategory(value);
                                  }}
                                >
                                    <SelectTrigger className="border-blood/30 bg-background font-mono">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((cat) => (
                                            <SelectItem key={cat._id} value={cat._id} className="font-mono">
                                                {cat.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Sort Filter */}
                            {/* <div>
                                <label className="text-sm font-vhs text-blood mb-2 block">
                                    ORDENAR POR
                                </label>
                                <Select>
                                    <SelectTrigger className="border-blood/30 bg-background font-mono">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="3">3</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div> */}

                            {/* Clear Filters */}
                            <div className="flex items-end">
                                {showFilters && (
                                    <Button
                                        variant="ghost"
                                        onClick={handleClearFilters}
                                        className="text-toxic hover:text-toxic/80 font-vhs gap-2"
                                    >
                                        <XIcon className="w-4 h-4" />
                                        LIMPAR FILTROS
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Category Tags */}
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-blood/20">
                            {categories.map((cat) => (
                                <Badge
                                    key={cat._id}
                                    variant={showFilters ? "default" : "outline"}
                                    className={`cursor-pointer transition-all font-mono text-xs ${true
                                        ? "bg-blood text-white"
                                        : "border-blood/50 text-blood hover:bg-blood/10"
                                        }`}
                                    onClick={() => {
                                        // setSelectedCategory(cat);
                                        // setCurrentPage(1);
                                    }}
                                >
                                    {cat.name}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>

    )
}