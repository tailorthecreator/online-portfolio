<template>
    <div id="app">
        <button @click="toggleLanguage"
            class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800">
            {{ buttonText }}
        </button>


        <div v-if="language === 'en'">
            <h1>Hello</h1>
            <p>This is a paragraph in English.</p>
        </div>

        <div v-else>
            <h1>こんにちは</h1>
            <p>これは日本語の段落です。</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const language = ref('en');

function toggleLanguage() {
    language.value = language.value === 'en' ? 'jp' : 'en';
}

const buttonText = computed(() => {
    return language.value === 'en' ? 'Translate to Japanese' : 'Translate to English';
});
</script>
