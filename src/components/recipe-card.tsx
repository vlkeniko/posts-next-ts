interface RecipeCardProps {
  title: string;
}

export default function RecipeCard({ title }: RecipeCardProps) {
  return (
    <div className="flex flex-col sm:basis-1/2 md:basis-1/3 lg:basis-1/4 bg-gray-200 rounded-lg shadow-md m-2">
      <img
        className="rounded-t-lg"
        src="https://placehold.co/400x200"
        alt="Placeholder image"
      />
      <div className="flex justify-between items-center bg-white p-2 rounded-b-lg">
        <div className="text-xl font-bold text-black">{title}</div>
        <div className="text-md pl-3 pr-3 text-gray-700 p bg-green-300 rounded-full">
          1hr
        </div>
      </div>
    </div>
  );
}
