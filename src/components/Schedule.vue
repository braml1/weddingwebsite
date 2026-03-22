<template>
  <div class="ws-wrap mx-auto px-4 py-5 bg-white">
    <div class="ws-title text-center mb-5">Saturday</div>

    <div class="row g-0">

      <!-- LEFT COLUMN -->
      <div class="col d-flex flex-column">
        <div v-for="item in leftEvents" :key="item.time" class="d-flex align-items-center gap-3 p-3">
          <div class="ws-icon flex-shrink-0 d-flex align-items-center justify-content-center" v-html="item.icon"></div>
          <div>
            <div class="ws-time fw-bold">{{ item.time }}</div>
            <div class="ws-label text-uppercase" v-html="item.label"></div>
          </div>
        </div>
      </div>

      <!-- DIVIDER -->
      <div class="ws-divider"></div>

      <!-- RIGHT COLUMN -->
      <div class="col d-flex flex-column">
        <div
          v-for="(item, index) in rightEvents"
          :key="item.time"
          class="d-flex flex-row-reverse align-items-center gap-3 p-3 text-end"
          :class="index === 0 ? 'mt-4' : 'mt-2'"
        >
          <div class="ws-icon flex-shrink-0 d-flex align-items-center justify-content-center" v-html="item.icon"></div>
          <div>
            <div class="ws-time fw-bold">{{ item.time }}</div>
            <div class="ws-label text-uppercase" v-html="item.label"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>


const leftEvents = [
  {
    time: '11:00 AM',
    label: 'Wedding<br>Ceremony',
    icon: `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="17" cy="24" r="9"/>
      <circle cx="29" cy="24" r="9"/>
      <path d="M21 15 Q23 12 25 15" stroke-width="1.4" fill="none"/>
    </svg>`
  },
  {
    time: '1:00 PM',
    label: 'Wedding<br>Lunch',
    icon: `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="23" cy="24" r="10"/>
      <line x1="17" y1="13" x2="17" y2="35"/>
      <line x1="29" y1="13" x2="29" y2="35"/>
      <line x1="23" y1="34" x2="23" y2="38"/>
      <line x1="19" y1="38" x2="27" y2="38"/>
    </svg>`
  },
  {
    time: '4:00 PM',
    label: 'Cocktail<br>Hour',
    icon: `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 20 Q14 30 23 30 Q32 30 32 20"/>
      <line x1="23" y1="30" x2="23" y2="36"/>
      <line x1="17" y1="36" x2="29" y2="36"/>
      <circle cx="23" cy="15" r="3" fill="currentColor" stroke="none"/>
    </svg>`
  },
  {
    time: '8:00 PM',
    label: 'Buffet<br>Dinner',
    icon: `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="23" cy="32" rx="13" ry="3.5"/>
      <path d="M10 32 Q9 20 23 18 Q37 20 36 32"/>
      <path d="M15 26 Q23 23 31 26"/>
    </svg>`
  }
]

const rightEvents = [
  {
    time: '12:00 PM',
    label: 'Welcome<br>Toast',
    icon: `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 16 L13 31 Q13 34 16 34 Q19 34 19 31 L16 16"/>
      <path d="M30 16 L27 31 Q27 34 30 34 Q33 34 33 31 L30 16"/>
      <path d="M16 16 Q14 12 16 10"/>
      <path d="M30 16 Q32 12 30 10"/>
      <path d="M14 20 Q23 24 32 20"/>
    </svg>`
  },
  {
    time: '3:00 PM',
    label: 'Cake<br>Cutting',
    icon: `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="13" y="31" width="20" height="5" rx="1"/>
      <rect x="15" y="25" width="16" height="6" rx="1"/>
      <rect x="17" y="20" width="12" height="5" rx="1"/>
      <rect x="19" y="16" width="8" height="4" rx="1"/>
      <path d="M21 16 Q23 13 23 11 Q23 13 25 16" stroke-width="1.4"/>
    </svg>`
  },
  {
    time: '5:00 PM',
    label: 'First<br>Dance',
    icon: `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 32 L16 18 L32 15 L32 29"/>
      <circle cx="13" cy="34" r="3"/>
      <circle cx="29" cy="30" r="3"/>
    </svg>`
  },
  {
    time: '11:00 PM',
    label: 'Fireworks',
    icon: `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <line x1="23" y1="10" x2="23" y2="17"/>
      <line x1="30" y1="12" x2="28" y2="18"/>
      <line x1="16" y1="12" x2="18" y2="18"/>
      <line x1="34" y1="18" x2="29" y2="21"/>
      <line x1="12" y1="18" x2="17" y2="21"/>
      <path d="M15 26 Q16 32 23 34 Q30 32 31 26"/>
      <path d="M18 27 Q20 30 23 31 Q26 30 28 27"/>
      <line x1="13" y1="38" x2="33" y2="38"/>
    </svg>`
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&display=swap');

.ws-wrap {
  max-width: 540px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.ws-title {
  font-family: 'Dancing Script', cursive;
  font-size: 58px;
  font-weight: 700;
  color: #111;
  line-height: 1.1;
}

.ws-divider {
  width: 2px;
  background: #ccc;
  border-radius: 2px;
}

.ws-icon {
  width: 52px;
  height: 52px;
  color: #111;
}

.ws-icon :deep(svg) {
  width: 46px;
  height: 46px;
}

.ws-time {
  font-size: 15px;
  color: #111;
}

.ws-label {
  font-size: 11px;
  font-weight: 400;
  color: #111;
  letter-spacing: 0.1em;
  margin-top: 2px;
  line-height: 1.4;
}

.ws-footer {
  font-family: 'Dancing Script', cursive;
  font-size: 34px;
  font-weight: 500;
  color: #111;
}
</style>