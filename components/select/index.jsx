"use client";

export default function Select({ category }) {
  return (
    <div>
      <select id="selectOption" name="category">
        <option>בחר קטגוריה</option>
        {category?.map((categoryItem, index) => (
          <option key={index} value={categoryItem.title}>
            {categoryItem.title}
          </option>
        ))}
      </select>
    </div>
  );
}
