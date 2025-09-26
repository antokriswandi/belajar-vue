export default {
    template: `
        <div class="flex gap-2 mb-4">
            <button
                @click="$emit('update:modelValue', tag)"
                v-for="tag in tags"
                class="border border-slate-400 rounded px-1 py-0.5 text-sm text-slate-400"
                :class="{'border-blue-500 text-blue-500': tag === modelValue}">
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        modelValue: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    },
}
