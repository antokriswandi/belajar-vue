import Tugas from './Tugas.js';

export default {
    components: { Tugas },
    template:
    `
        <section v-show="tugass.length">
            <h2 class="font-bold mb-2 text-lg">
                {{ title }}
                <span>({{ tugass.length }})</span>
            </h2>

            <div class="flex gap-2 mb-4">
                <button @click="tagSekarang = tag" v-for="tag in tags" class="border border-slate-400 rounded px-1 py-0.5 text-sm text-slate-400" :class="{'border-blue-500 text-blue-500': tagSekarang === tag}">
                    {{ tag }}
                </button>
            </div>
            <ul>
                <tugas v-for="tugas in filteredTugass" :key="tugas.id" :tugas="tugas"></tugas>
            </ul>
        </section>

    `,

    props: {
        tugass: Array,
        title: String,
    },

    data() {
        return {
            tagSekarang: null,
        }
    },

    computed: {
        filteredTugass() {
            if (this.tagSekarang && this.tagSekarang !== 'all') {
                return this.tugass.filter(tugas => tugas.tag === this.tagSekarang);
            }
            return this.tugass;
        },
        tags() {
            const tags = ['all', ...this.tugass.map(tugas => tugas.tag)];
            return [...new Set(tags)];
        }
    }
}
