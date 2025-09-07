export default {
    template: `
        <button
            :class="{
                'rounded px-4 py-2 text-white mx-1': true,
                'bg-blue-500 hover:bg-blue-700': type === 'primary',
                'bg-gray-500 hover:bg-gray-700': type === 'secondary',
                'bg-green-500 hover:bg-green-700': type === 'success',
                'bg-red-500 hover:bg-red-700': type === 'danger',
                'bg-yellow-500 hover:bg-yellow-700': type === 'warning',
                'opacity-50 cursor-not-allowed': isloading,
            }"
        >
            <slot />
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary', // primary, secondary, success, danger, warning
        },

        isloading: {
            type: Boolean,
            default: false,
        },
    },
};
