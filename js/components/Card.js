export default {
    template: `
        <div class="bg-slate-100 p-4 border border-slate-300 rounded-lg">
            <h2 class="font-bold text-lg" v-if="$slots.title">
                <slot name="title" />
            </h2>

            <p class="text-gray-700"><slot /></p>

            <footer class="mt-4 text-sm text-gray-500" v-if="$slots.footer">
                <slot name="footer" />
            </footer>
        </div>
    `,
}