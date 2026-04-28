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
          <div v-if="state.submittingStage  == 2" class="rsvp-thankyou">
              Thank you for your response!
          </div>

          <div v-if="state.submittingStage < 2">
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
                  Accepts with pleasure
                </label>
                <label class="rsvp-radio-label">
                  <input type="radio" v-model="form.coming" value="no" class="rsvp-radio" />
                  Regretfully declines
                </label>
              </div>
            </div>


            <div v-if="form.coming == 'yes'" class="rsvp-field mt-4">
                <label class="rsvp-label">ADULTS</label>
                <select v-model="form.nAdults" class="rsvp-input rsvp-select">
                    <option value="0">0</option>
                    <option v-for="n in 4" :key="n" :value="n">{{ n }}</option>
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
              <label class="rsvp-label">ALLERGIES</label>
              <textarea
                v-model="form.comment"
                class="rsvp-input rsvp-textarea"
                placeholder="Any dietary requirements or notes..."
                rows="3"
              />
            </div>

            <div v-if="form.coming == 'yes'" class="rsvp-field mt-4">
              <label class="rsvp-label">SUNDAY <br/> BRUNCH</label>
              <div class="rsvp-radio-group">
                <label class="rsvp-radio-label">
                  <input type="radio" v-model="form.coming_to_brunch" value="yes" class="rsvp-radio" />
                  Will be happy to join the brunch 
                </label>
                <label class="rsvp-radio-label">
                  <input type="radio" v-model="form.coming_to_brunch" value="no" class="rsvp-radio" />
                  Cannot make it to the brunch 
                </label>
              </div>
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

        </div>

        <div class="modal-footer rsvp-modal-footer">
          <button v-if="state.submittingStage == 0" class="rsvp-submit-btn" @click="submitForm()">SEND</button>
          <button v-if="state.submittingStage == 1"  class="rsvp-submit-btn" disabled> 
            <span  class="spinner-border spinner-border-sm me-2 text" role="status"></span> SENDING...
          </button>
          <button v-if="state.submittingStage == 2" class="rsvp-submit-btn" @click="close()">CLOSE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, reactive } from 'vue';
import { Modal } from 'bootstrap';

const modalEl = ref(null);
let modalInstance = null;

const state = reactive({
  submittingStage: 0 //0 = start, 1=submitting, 2=Done
})


const form = ref( { name: '', email: '', coming: '', nAdults: 0, nKids: 0, comment: '', coming_to_brunch: '' });

const getModal = () => {
  if (!modalInstance) {
    modalInstance = new Modal(modalEl.value);
  }
  return modalInstance;
};

const resetForm = () => {
  form.value =  { name: '', email: '', coming: '', nAdults: 0, nKids: 0, comment: '', coming_to_brunch: '' }
  state.submittingStage = 0
}
const open = () => {
  resetForm()
  getModal().show();
}
const close = () => {
  getModal().hide()
};

const submitForm = async() => {
  state.submittingStage = 1

  const googleWebAppUrl = "https://script.google.com/macros/s/AKfycbyHZxSDEdl0Z7e_6LC1KRH5aUUFC8wBUtGOP1bXoMDuiUAgmi2RxesASYrRkJL67n6Z/exec"
  //const googleWebAppUrl = "https://script.google.com/macros/s/AKfycby7Xzr8b9wFKH5gveWvSkxNk-l83TwdJDH2U1nQc6DS_i3HhQVhiVkcW1N3caQTqV0m/exec"

  const payload = {
      name: form.value.name,
      email: form.value.email,
      coming: form.value.coming,
      n_adults: form.value.nAdults,
      n_kids: form.value.nKids,
      allergies: form.value.comment,
      coming_to_brunch: form.value.coming_to_brunch
    }

  const response = await fetch(googleWebAppUrl, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if(result.status == 'success') {
    state.submittingStage = 2
  }


}

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

.rsvp-thankyou {
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.1em;
  color: rgb(51, 51, 51);
  opacity: 0.7;
  white-space: nowrap;   /* added */
  min-width: 100px;       /* added */
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