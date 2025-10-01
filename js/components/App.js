import Wadahtugas from './Wadahtugas.js';
import Card from './Card.js';
export default {
    components: { Wadahtugas, Card },
    template: `
        <div class="grid gap-4">
            <wadahtugas></wadahtugas>

            <card>
                <template #title>About</template>
                Aplikasi manajemen tugas sederhana menggunakan Vue.js 3 dan Tailwind CSS.
            </card>

            <card>
                Aplikasi manajemen tugas sederhana menggunakan Vue.js 3 dan Tailwind CSS.
            </card>

            <card>
                <template #title>About</template>
                Aplikasi manajemen tugas sederhana menggunakan Vue.js 3 dan Tailwind CSS.
                <template #footer>© 2024 Belajar Vue</template>
            </card>
        </div>
    `,
}