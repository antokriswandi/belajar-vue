import Tugas from './Tugas.js';

export default {
    components: { Tugas },
    template:
    `
        <section v-show="tugass.length">
            <h2 class="font-bold mb-2 text-lg">{{ title }}</h2>
            <ul>
                <tugas v-for="tugas in tugass" :key="tugas.id" :tugas="tugas"></tugas>
            </ul>
        </section>

    `,

    props: {
        tugass: Array,
        title: String,
    },
}
