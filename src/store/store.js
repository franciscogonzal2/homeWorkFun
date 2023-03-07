import { create } from "zustand";
import { v4 as uuid } from 'uuid';
import { persist } from "zustand/middleware";

const useHomeWorkStore = create(persist((set) => ({
    homeworks: [],
    addHomework: (details) => {
      const newHomework = {
        id: uuid(),
        title: details.title,
        description: details.description,
        assignedTo: details.personAssigned,
        dateOf: details.dateOfFinish,
        isCompleted: false,
      };
      set((state) => ({
        homeworks: [...state.homeworks, newHomework],
      }));
    },
  removefromList: (id) => {
    debugger;
    set((state) => ({
      homeworks: state.homeworks.filter((homework) => homework.id !== id),
    }));
  },
  completeHomework: (id) => {
    set((state) => {
      // Buscar la tarea por su `id` y actualizar la propiedad `isCompleted`
      const updatedHomeworks = state.homeworks.map((homework) =>
        homework.id === id ? { ...homework, isCompleted: true } : homework
      );
      return { homeworks: updatedHomeworks };
    });
  },

  unCompletedHomework: (id) => {
    set((state) => {
      // Buscar la tarea por su `id` y actualizar la propiedad `isCompleted`
      const updatedHomeworks = state.homeworks.map((homework) =>
        homework.id === id ? { ...homework, isCompleted: false } : homework
      );
      return { homeworks: updatedHomeworks };
    });
  },

  clearCart: () => {
    set({ cartItems: [] });
  },
}),
{
  name: "homeworks", 
}));


export default useHomeWorkStore;
