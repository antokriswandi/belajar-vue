import Tugas from './Tugas.js';
import TugasTag from './TugasTag.js';

export default {
    components: { Tugas, TugasTag },
    template:
    `
        <section v-show="tugass.length">
            <h2 class="font-bold mb-2 text-lg">
                {{ title }}
                <span>({{ tugass.length }})</span>
            </h2>

            <tugas-tag
                :initial-tags="tugass.map(tugas => tugas.tag)"
                :tag-sekarang="tagSekarang"
                @change="tagSekarang = $event"
            />

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
            tagSekarang: 'all'
        }
    },

    computed: {
        filteredTugass() {
            if (this.tagSekarang && this.tagSekarang !== 'all') {
                return this.tugass.filter(tugas => tugas.tag === this.tagSekarang);
            }
            return this.tugass;
        }
    }
}
