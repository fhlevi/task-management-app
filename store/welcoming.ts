import create from 'zustand';

const useWelcoming = create(set => ({
  isInitialized: false,

  setInitialized: (isInitialized: any = false) =>
    set({ isInitialized }),
}));

export default useWelcoming;
