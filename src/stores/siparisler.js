import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useSiparisStore = defineStore("siparisler", {
    
    state: () => {
        return {
            siparisler: []
        }
    }
})