"use client";

import { useEffect } from "react";

export default  function Select ({ category }) {
 
  return (
    <div>
      <select name="category">
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
