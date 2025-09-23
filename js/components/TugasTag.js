export default {
    props: {
        initialTags: Array,
        tagSekarang: String
    },

    template: `
        <div class="flex gap-2 mb-4">
            <button
                @click="$emit('change', tag)"
                v-for="tag in tags"
                class="border border-slate-400 rounded px-1 py-0.5 text-sm text-slate-400"
                :class="{'border-blue-500 text-blue-500': tag === tagSekarang}">
                {{ tag }}
            </button>
        </div>
    `,

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    },
}
