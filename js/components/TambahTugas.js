export default {
    template: `
        <form @submit.prevent="tambah" class="py-4 flex">
            <input type="text" v-model="tugasBaru" placeholder="Nama Tugas" class="border p-2 w-full" />
            <button type="submit" class="bg-blue-500 text-white p-2">+</button>
        </form>
    `,

    data() {
        return {
            tugasBaru: '',
        }
    },

    methods: {
        tambah() {
            this.$emit('tambah', this.tugasBaru);
            this.tugasBaru = '';
        }
    }
}