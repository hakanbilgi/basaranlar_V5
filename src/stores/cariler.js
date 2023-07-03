import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useCariStore = defineStore("cariler", {

    state: () => {
        return {
            cariler: []
        }
    }
})