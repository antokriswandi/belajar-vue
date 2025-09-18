import ListTugas from './ListTugas.js';
import TambahTugas from './TambahTugas.js';

export default {
    components: { ListTugas, TambahTugas },
    template: `
        <section class="space-y-4">
            <list-tugas :tugass="filters.belumSelesai" title="Tugas Belum Selesai"></list-tugas>
            <list-tugas :tugass="filters.selesai" title="Tugas Selesai"></list-tugas>

            <tambah-tugas @tambah="tambah"></tambah-tugas>
            
        </section>
    `,

    data() {
        return {
            tugass: [
                { id: 1, nama: 'Belajar Vue', selesai: false },
                { id: 2, nama: 'Belajar React', selesai: false },
                { id: 3, nama: 'Belajar Angular', selesai: false },
            ],
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
        tambah(nama) {
            this.tugass.push({
                id: this.tugass.length + 1,
                nama : nama,
                selesai: false,
            });
        }
    }
}