import ListTugas from './ListTugas.js';

export default {
    components: { ListTugas },
    template: `
        <section class="space-y-4">
            <list-tugas :tugass="filters.belumSelesai" title="Tugas Belum Selesai"></list-tugas>
            <list-tugas :tugass="filters.selesai" title="Tugas Selesai"></list-tugas>
        </section>
    `,

    data() {
        return {
            tugass: [
                { id: 1, nama: 'Belajar Vue', selesai: false },
                { id: 2, nama: 'Belajar React', selesai: false },
                { id: 3, nama: 'Belajar Angular', selesai: false },
            ]
        }
    },

    computed: {
        filters() {
            return {
                belumSelesai: this.tugass.filter(tugas => ! tugas.selesai),
                selesai: this.tugass.filter(tugas => tugas.selesai),
            }
        }
    }
}