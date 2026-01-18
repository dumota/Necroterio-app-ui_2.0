import FilmStrip from "@/components/common/filmsStrip";
import { ICategory } from "@/types/Category";
import BlogsPill from "./blogsPill";

export interface iBlogsSectionProps {
    categories: ICategory[];
}
export default function BlogsSection({ categories }: iBlogsSectionProps) {

    const icons = [
        { name: "Terror Clássico", icon: "skull", count: 5 },
        { name: "Slasher", icon: "scissors", count: 8 },
        { name: "Sobrenatural", icon: "ghost", count: 6 },
        { name: "Giallo", icon: "eye", count: 4 },
        { name: "Gore", icon: "flame", count: 3 },
        { name: "Cult", icon: "film", count: 7 },
    ]

    //imagens de mock para testes
    const horrorImages = [
        "https://images.unsplash.com/photo-1519567339-0d30a8c8b5c1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1478720568477-1520d4b1139e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop"
    ];

 

    const filmImages = [ ...horrorImages];


    console.log(`filmImages::`, filmImages);
    return (
        <section className="py-16 bg-blue">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 w-full">
                    <h2 className="font-bold text-2xl md:text-4xl  mb-2">
                        EXPLORE HISTORIAS CRIADAS POR AUTOR
                    </h2>
                    <p className="font-vhs  text-muted-foreground tracking-wider">
                        Encontre seu autor de terror favorito e explore suas histórias
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category, index) => (
                        <BlogsPill
                            key={category.name}
                            name={category.name}
                            icon={icons[index].icon}
                        />
                    ))}
                </div>


                <div className="relative mx-auto bg-gradient-to-l from-background to-primary md:-mx-16">
                    <FilmStrip images={filmImages} />
                </div>
            </div>

        </section>
    );
}