export const useModalStore = defineStore('modal', () => {
    const modal = ref(false)

    function open(params) {
        modal.value = true 
    }

    function close(params) {
        modal.value = false 
    }

    function toggle(params) {
        modal.value = !modal.value
    }

    return { modal, open, close, toggle }
})