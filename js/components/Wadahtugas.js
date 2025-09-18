import ListTugas from './ListTugas.js';

export default {
    components: { ListTugas },
    template: `
        <section class="space-y-4">
            <list-tugas :tugass="filters.belumSelesai" title="Tugas Belum Selesai"></list-tugas>
            <list-tugas :tugass="filters.selesai" title="Tugas Selesai"></list-tugas>

            <form @submit.prevent="tambah">
                <input type="text" v-model="tugasBaru" placeholder="Nama Tugas" class="border p-2 w-full" />
                <button type="submit" class="bg-blue-500 text-white p-2 mt-2">Tambah Tugas</button>
            </form> 
        </section>
    `,

    data() {
        return {
            tugass: [
                { id: 1, nama: 'Belajar Vue', selesai: false },
                { id: 2, nama: 'Belajar React', selesai: false },
                { id: 3, nama: 'Belajar Angular', selesai: false },
            ],

            tugasBaru: '',
        }
    },

    computed: {
        filters() {
            return {
                belumSelesai: this.tugass.filter(tugas => ! tugas.selesai),
                selesai: this.tugass.filter(tugas => tugas.selesai),
            }
        }
    },

    methods: {
        tambah() {
            this.tugass.push({
                id: this.tugass.length + 1,
                nama: this.tugasBaru,
                selesai: false,
            });
            this.tugasBaru = '';
        }
    }
}