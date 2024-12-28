import { useState } from "react";
import { AddCategories, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["simposon"]);

  const onCategoryClick = (newCategory) => {
    // console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* input para busaqueda */}
      <AddCategories onNewCategory={onCategoryClick} />

      {/* Grid de Gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
