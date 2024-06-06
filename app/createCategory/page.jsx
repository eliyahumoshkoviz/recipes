"use client"
import { useState } from 'react'
import AddCategory from '@/components/AddCategory'
import { Popup } from '@/components/Popup'
import { useRouter } from 'next/navigation';

export default function createCategory() {
    const router = useRouter()
    const [popup, setPopup] = useState(true);

    return (
        <div>
            {
               popup ? 
                <Popup setPopup={setPopup}>
                    <AddCategory />
                </Popup>:
                router.push('/createRecipe')
            }
        </div>
    )
}
