export default {
    template: `
        <li>
            <label>
                {{ tugas.nama }}
                <input type="checkbox" v-model="tugas.selesai" />
            </label>
        </li>
    `,
    props: {
        tugas: Object,
    },
};