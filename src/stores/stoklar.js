import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useStokStore = defineStore("stoklar", {
    state: () => {
        return {
            stoklar: []
        }
    }
})