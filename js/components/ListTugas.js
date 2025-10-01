import Tugas from './Tugas.js';
import TugasTag from './TugasTag.js';

export default {
    components: { Tugas, TugasTag },
    template:
    `
        <section v-show="tugass.length" class="w-1/2">
            <div class="flex justify-between align-start">
                <h2 class="font-bold mb-2 text-lg">
                    {{ title }}
                    <span>({{ tugass.length }})</span>
                </h2>

                <button v-show="canToggle" @click="$emit('toggle')">&#x2716;</button>
            </div>

            <tugas-tag
                v-model="tagSekarang"
                :initial-tags="tugass.map(tugas => tugas.tag)"
            />

            <ul>
                <tugas v-for="tugas in filteredTugass" :key="tugas.id" :tugas="tugas"></tugas>
            </ul>

            <slot></slot>
        </section>

    `,

    props: {
        tugass: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
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
