<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { type LucideIcon, Mail, MapPin, Phone } from 'lucide-vue-next'

import type { Contact } from '@/types/PersonalInfo'
import { useLinks } from '@/composables/useLinks'

interface ContactItem {
  icon: LucideIcon
  title: string
  value: string
  href?: string
}

const props = defineProps<{
  contact: Contact
}>()

const { t } = useI18n()

const { email, whatsapp } = useLinks(props.contact)

const contacts = computed<ContactItem[]>(() => [
  { icon: Mail, title: 'elements.email', value: props.contact.email, href: email.value },
  { icon: Phone, title: 'elements.phone', value: props.contact.phone, href: whatsapp.value },
  { icon: MapPin, title: 'elements.location', value: props.contact.location },
])
</script>

<template>
  <ul class="contacts-list">
    <li v-for="contactItem in contacts" :key="contactItem.title" class="contact-item">
      <div class="contact-icon">
        <component :is="contactItem.icon" />
      </div>
      <div class="contact-info">
        <p class="contact-title">{{ t(contactItem.title) }}</p>
        <a
          v-if="contactItem.href"
          :href="contactItem.href"
          class="contact-link contact-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ contactItem.value }}
        </a>
        <span v-else class="contact-text">{{ contactItem.value }}</span>
      </div>
    </li>
  </ul>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.contacts-list {
  @apply grid grid-cols-1 gap-4;
}

.contact-item {
  @apply flex min-w-full items-center;
}

.contact-icon {
  @apply relative flex h-12 w-12 items-center justify-center text-ember-orange;
}

.contact-info {
  @apply w-[calc(100%-56px)] max-w-[calc(100%-56px)];
}

.contact-title {
  @apply text-1 font-500 tracking-wider text-paper-dark uppercase;
}

.contact-text {
  @apply text-2 font-500 text-paper transition-colors duration-300 ease-out;
}

.contact-link {
  @apply overflow-hidden text-ellipsis whitespace-nowrap;
}

.contact-link:hover {
  @apply text-ember-orange;
}

@media (min-width: 580px) {
  .contact-icon {
    @apply h-12 w-12;
  }

  .contact-info {
    @apply w-[calc(100%-64px)] max-w-[calc(100%-64px)];
  }
}

@media (min-width: 768px) {
  .contacts-list {
    @apply grid-cols-2;
  }

  .contact-title {
    @apply text-2;
  }

  .contact-text {
    @apply text-3;
  }
}

@media (min-width: 1250px) {
  .contacts-list {
    @apply grid-cols-1;
  }

  .contact-text {
    @apply font-300;
  }
}
</style>
