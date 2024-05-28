export default async function Select({ category }) {
  

  return (
    <div>
      <select name='category' id="selectOption">
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