import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useKalemStore = defineStore("kalemler", {

    state: () => {
        return {
            kalemler: []
        }
    }
})