import { create } from 'zustand';

export const useUserStore = create((set) => ({
    user: nullstand,
    setUser: (user) => set((state) => ({user:user}))
}))





// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }