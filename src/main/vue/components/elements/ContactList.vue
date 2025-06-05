<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { Mail, MapPin, Phone } from 'lucide-vue-next'
import type { PersonalInfo } from '@/types/PersonalInfo.ts'
import { useLinks } from '@/composables/useLinks.ts'

const props = defineProps<{
  personalInfo: PersonalInfo
}>()

const { whatsLink } = useLinks(props.personalInfo)

const contacts = [
  {
    icon: Mail,
    title: 'E-mail',
    value: props.personalInfo.email,
    href: `mailto:${props.personalInfo.email}`,
    isAddress: false,
  },
  {
    icon: Phone,
    title: 'elements.phone',
    value: props.personalInfo.phone,
    href: whatsLink,
    isAddress: false,
  },
  {
    icon: MapPin,
    title: 'elements.location',
    value: props.personalInfo.location,
    href: '',
    isAddress: true,
  },
]
</script>

<template>
  <ul class="contacts-list">
    <li class="contact-item" v-for="(contact, key) in contacts" :key="key">
      <div class="icon-box">
        <component :is="contact.icon" />
      </div>
      <div class="contact-info">
        <p class="contact-title">{{ t(contact.title) }}</p>
        <template v-if="contact.isAddress">
          <address>{{ t(contact.value) }}</address>
        </template>
        <template v-else>
          <a :href="contact.href" class="contact-link" target="_blank" rel="noopener noreferrer">
            {{ contact.value }}
          </a>
        </template>
      </div>
    </li>
  </ul>
</template>
