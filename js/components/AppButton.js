export default {
    template: `
        <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed" :disabled="isLoading">
            <slot></slot>
        </button>
        `,

    data() {
        return {
            isLoading: true,
        };
    },
};
