import { use } from "react"
import { create } from "zustand"
import { persist } from "zustand/middleware"

const store = ((set, get) => ({
    news: [],
    setNews: (newNews) => {
        set(() => ({
            news: newNews
        }))
    },

    IsLoading: false,
    setIsLoading: (condition) => {
        set(() => ({
            IsLoading: condition
        }))
    },

    category: 'india',
    setCategory: (newsType) => {
        if (!newsType) return;
        set(() => ({
            category: newsType
        }))
    }

    // numOfPages: 1,
    // setNumOfPages:(pages)=>{
    //     set(()=>{

    //     })
    // }
}))

const useMyStore = create(
    persist(store, {
        name: "news-storage"
    })
);



export default useMyStore;