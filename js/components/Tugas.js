export default {
    template: `
        <li>
            <label class="cursor-pointer p-2 flex justify-between items-center border">
                {{ tugas.nama }}
                <input type="checkbox" v-model="tugas.selesai" class="cursor-pointer" />
            </label>
        </li>
    `,
    props: {
        tugas: Object,
    },
};