import ListTugas from './ListTugas.js';
import TambahTugas from './TambahTugas.js';
// import axios from 'axios';

export default {
    components: { ListTugas, TambahTugas },
    template: `
        <section class="flex gap-8">
            <list-tugas :tugass="filters.belumSelesai" title="Tugas Belum Selesai">
                <tambah-tugas @tambah="tambah"></tambah-tugas>
            </list-tugas>
            <list-tugas :tugass="filters.selesai" title="Tugas Selesai" can-toggle></list-tugas>
        </section>
    `,

    data() {
        return {
            tugass: [],
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

    created() {
        fetch('http://localhost:3000/tugass')
            .then(response => response.json())
            .then(data => {
                this.tugass = data;
            });
        // axios.get('http://localhost:3000/tugass')
        //     .then(response => {
        //         this.tugass = response.data;
        //     })
        //     .catch(error => {
        //         console.error('Error fetching data:', error);
        //     });
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