<template>
  <div
    class="modal fade"
    ref="modalEl"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rsvp-modal-content">
        <div class="modal-header rsvp-modal-header">
          <h5 class="rsvp-modal-title">R S V P</h5>
          <button type="button" class="rsvp-close-btn" @click="close" aria-label="Close">✕</button>
        </div>

        <div class="modal-body rsvp-modal-body">
          <div class="rsvp-field">
            <label class="rsvp-label">NAME</label>
            <input
              v-model="form.name"
              type="text"
              class="rsvp-input"
              placeholder="Your full name"
            />
          </div>

          <div class="rsvp-field mt-4">
            <label class="rsvp-label">EMAIL</label>
            <input
              v-model="form.email"
              type="email"
              class="rsvp-input"
              placeholder="your@email.com"
            />
          </div>

          <div class="rsvp-field mt-4">
            <label class="rsvp-label">ATTENDING</label>
            <div class="rsvp-radio-group">
              <label class="rsvp-radio-label">
                <input type="radio" v-model="form.coming" value="yes" class="rsvp-radio" />
                Joining the celebration
              </label>
              <label class="rsvp-radio-label">
                <input type="radio" v-model="form.coming" value="no" class="rsvp-radio" />
                Unable to attend
              </label>
            </div>
          </div>


          <div v-if="form.coming == 'yes'" class="rsvp-field mt-4">
              <label class="rsvp-label">ADULTS</label>
              <select v-model="form.nAdults" class="rsvp-input rsvp-select">
                  <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
              </select>
          </div>

          <div  v-if="form.coming == 'yes'" class="rsvp-field mt-4">
              <label class="rsvp-label">CHILDREN <br/> UNDER 10 </label>
              <select v-model="form.nKids" class="rsvp-input rsvp-select">
                  <option value="0">0</option>
                  <option v-for="n in 4" :key="n" :value="n">{{ n }}</option>
              </select>
          </div>

          <div v-if="form.coming == 'yes'" class="rsvp-field mt-4">
            <label class="rsvp-label">ALLERGIES <br/>/ COMMENTS</label>
            <textarea
              v-model="form.comment"
              class="rsvp-input rsvp-textarea"
              placeholder="Any dietary requirements or notes..."
              rows="3"
            />
          </div>


          <div v-if="form.coming == 'no'" class="rsvp-field mt-4">
            <label class="rsvp-label">MESSAGE</label>
            <textarea
              v-model="form.comment"
              class="rsvp-input rsvp-textarea"
              placeholder="Feel free to leave a message..."
              rows="3"
            />
          </div>

        </div>

        <div class="modal-footer rsvp-modal-footer">
          <button class="rsvp-submit-btn" @click="submit">CONFIRM</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import { Modal } from 'bootstrap';

const modalEl = ref(null);
let modalInstance = null;



const form = ref({ name: '', email: '', coming: '', nAdults: 1, nKids: 0, comment:"" });

const getModal = () => {
  if (!modalInstance) {
    modalInstance = new Modal(modalEl.value);
  }
  return modalInstance;
};

const open = () => getModal().show();
const close = () => getModal().hide();

const submit = () => {
  // your submit logic here
  console.log(form.value);
  close();
};

onUnmounted(() => modalInstance?.dispose());
defineExpose({ open, close });
</script>

<style scoped>
.rsvp-modal-content {
  background-color: rgb(208, 206, 208);
  background-image: url('/img/bg-floral.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: none;
  border-radius: 0;
}

.rsvp-modal-header {
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
  padding: 1.8rem 2rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rsvp-modal-title {
  font-family: 'Instrument Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.4em;
  color: rgb(51, 51, 51);
  margin: 0;
}

.rsvp-close-btn {
  background: none;
  border: none;
  font-size: 0.85rem;
  color: rgb(51, 51, 51);
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.3s ease;
  padding: 4px 8px;
}

.rsvp-close-btn:hover {
  opacity: 1;
}

.rsvp-modal-body {
  padding: 2rem 2rem;
}

.rsvp-field {
  display: flex;
  flex-direction: row;   /* changed */
  align-items: center; /* changed */
  gap: 1rem;             /* changed */
}

.rsvp-label {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  color: rgb(51, 51, 51);
  opacity: 0.7;
  white-space: nowrap;   /* added */
  min-width: 100px;       /* added */
}

.rsvp-input {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(51, 51, 51, 0.4);
  border-radius: 0;
  padding: 0.5rem 0;
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: rgb(51, 51, 51);
  outline: none;
  transition: border-color 0.3s ease;
  width: 100%;
}

.rsvp-input::placeholder {
  color: rgba(51, 51, 51, 0.35);
  font-size: 0.85rem;
}

.rsvp-input:focus {
  border-bottom-color: rgb(51, 51, 51);
}

.rsvp-modal-footer {
  border-top: 1px solid rgba(51, 51, 51, 0.2);
  padding: 1.2rem 2rem 1.8rem;
  display: flex;
  justify-content: center;
}

.rsvp-submit-btn {
  background: transparent;
  border: 1px solid #2c2c2c;
  padding: 12px 45px;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 3px;
  font-size: 0.8rem;
  color: #2c2c2c;
  cursor: pointer;
  transition: all 0.4s ease;
}

.rsvp-submit-btn:hover {
  background: #2c2c2c;
  color: #fff;
}

.rsvp-select {
  appearance: none;
  cursor: pointer;
  width: auto;       /* don't stretch full width */
  min-width: 60px;
  text-align: center;
}

.rsvp-radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.rsvp-radio-label {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.85rem;
  color: rgb(51, 51, 51);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rsvp-radio {
  accent-color: rgb(51, 51, 51);
  cursor: pointer;
}

.rsvp-textarea {
  resize: none;
  line-height: 1.2;
  border: 1px solid rgba(51, 51, 51, 0.4);
  padding: 5px 10px ;
  font-size: 0.85rem;
}
</style>