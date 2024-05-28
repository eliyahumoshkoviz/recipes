"use client"

export default function AddIngredien() {
    const arrIngredients = [1,3];
    const handleAddIngredients = () => {
        arrIngredients.push(1);
        console.log(arrIngredients[0]);
    }
    return (
        <div>
            <div>
                <button >הוסף</button>
                <input type="button" value="+" onClick={handleAddIngredients}/>
            </div>
        </div>
    )
}

