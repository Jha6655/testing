<template>
  <form
    ref="form"
    class="form"
    :class="{ hidden: isHidden }"
    autocomplete="off"
    @submit.prevent
  >
    <div class="form__inputs">
      <template
        v-for="(
          { name, placeholder, value, isError, isTextarea, isEmpty }, index
        ) in inputs"
      >
        <div
          v-if="!isTextarea"
          :key="name"
          :class="'form-input-' + (index + 1)"
        >
          <TheInput
            :value="value"
            :placeholder="placeholder"
            :name="name"
            :is-error="isError"
            :is-empty="isEmpty"
            @focus="onFocus"
            @blur="onBlur"
            @input="onInput"
          />
        </div>
        <div v-else :key="name + index" class="form-textarea">
          <TheTextarea
            :value="value"
            :placeholder="placeholder"
            :name="name"
            :is-error="isError"
            :is-empty="isEmpty"
            @focus="onFocus"
            @blur="onBlur"
          />
        </div>
      </template>
    </div>
    <div class="form__button" :class="{ disabled: isSending }">
      <CTAButton
        :is-button="true"
        :is-scroll-trigger="isButtonAnimation"
        text="Send"
        @click.native.prevent="submitForm"
      />
    </div>
  </form>
</template>

<script>
import TheInput from './TheInput.vue'
import TheTextarea from './TheTextarea.vue'
import AnimationsControlMixin from '@/plugins/mixins/AnimationsControlMixin'
import CTAButton from '@/components/buttons/CTAButton.vue'
export default {
  components: {
    TheInput,
    TheTextarea,
    CTAButton,
  },
  mixins: [AnimationsControlMixin],
  props: {
    start: {
      type: Boolean,
      default: true,
    },
    isHidden: {
      type: Boolean,
      default: false,
    },
    emptyForm: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isSending: false,
    timeline: null,
    isButtonAnimation: false,
    inputs: [
      {
        value: '',
        name: 'firstname',
        type: 'text',
        placeholder: 'First Name',
        isRequired: true,
        isEmpty: true,
        isError: false,
        isTextarea: false,
        isValid: true,
      },
      {
        value: '',
        name: 'lastname',
        type: 'text',
        placeholder: 'Last Name',
        isRequired: true,
        isEmpty: true,
        isError: false,
        isTextarea: false,
        isValid: true,
      },
      {
        value: '',
        name: 'email',
        type: 'text',
        placeholder: 'Email',
        isRequired: true,
        isEmpty: true,
        isError: false,
        isTextarea: false,
        isValid: true,
      },
      {
        value: '',
        name: 'phone',
        type: 'text',
        placeholder: 'Phone Number',
        isRequired: true,
        isEmpty: true,
        isError: false,
        isTextarea: false,
        isValid: true,
      },

      {
        value: '',
        name: 'message',
        type: 'text',
        placeholder: 'Message',
        isRequired: false,
        isEmpty: true,
        isError: false,
        isTextarea: true,
        isValid: true,
      },
    ],
  }),
  watch: {
    async start(value) {
      await this.$nextTick()
      value && this.timeline.play()
    },
    emptyForm(value) {
      if (value) {
        this.clearFields()
      }
    },
  },
  async mounted() {
    await this.animate()
  },
  methods: {
    onInput(payload) {
      const { name, value, el } = payload
      const phoneData = this.inputs.find((el) => el.name === 'phone')
      if (name !== 'phone') return

      const digits = value.replace(/[^0-9]/gi, '')
      phoneData.value = ('+' + digits).slice(0, 13)
      el.value = phoneData.value
    },
    // form methods

    async submitForm() {
      let isFormValid = true
      this.inputs.forEach((input) => {
        if (!input.isRequired) {
          input.isValid = true
          return
        }
        // is field empty

        if (input.value.trim() === '') {
          input.isEmpty = true
          input.isValid = false
          input.isError = true
        } else {
          input.isEmpty = false
          input.isValid = true
          input.isError = false
        }

        // validate email

        if (input.name === 'email') {
          input.isValid = this.validateEmail(input.value)
        }

        // validate phone

        if (input.name === 'phone') {
          input.isValid = this.validatePhone(input.value)
        }

        input.isError = input.isError || !input.isValid

        isFormValid = isFormValid && input.isValid
      })

      if (isFormValid) {
        this.isSending = true
        const data = {}
        this.inputs.forEach((el) => (data[el.name] = el.value))
        try {
          const instance = this.$axios.create({
            baseURL: window.location.origin,
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const { status, message } = await instance.$post(
            '/api/sendForm',
            data
          )

          if (status === 'success') {
            this.$emit('success')
            setTimeout(() => {
              this.clearFields()
            }, 2000)
          } else {
            console.error(message)
          }
          this.isSending = false
        } catch (error) {
          console.log('Sending from failed:', error)
          this.isSending = false
        }
      }
    },
    onFocus(e) {
      const { name } = e
      const element = this.findElement(name)
      element.isError = false
      element.isEmpty = false
    },
    onBlur(e) {
      const { value, name } = e
      const element = this.findElement(name)
      element.value = value

      if (element.value.trim() === '') {
        element.isEmpty = true
        if (element.isRequired) {
          element.isError = true
        }
      }

      // validate email
      if (name === 'email') {
        element.isError = !this.validateEmail(value)
      }

      // validate phone
      if (name === 'phone') {
        element.isError = !this.validatePhone(value)
      }
    },
    findElement(name) {
      return this.inputs.find((i) => i.name === name)
    },
    validateEmail(email) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    },
    validatePhone(phone) {
      return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(
        phone
      )
    },
    clearFields() {
      this.inputs.forEach((input) => {
        input.isEmpty = true
        input.isError = false
        input.isValid = true
        input.value = ''
      })
    },

    // animation functions

    async animate() {
      await this.$nextTick()

      const { form } = this.$refs
      const labels = form.querySelectorAll('.input-label')
      const objects = Array.from(labels).map((label) => {
        const placeholder = label.querySelector('.input-placeholder')
        const border = label.querySelector('.input-border')
        return [placeholder, border]
      })

      this.timeline = this.$gsap.timeline({
        paused: true,
        onComplete: () => {
          this.isButtonAnimation = true
        },
      })
      objects.forEach((object) => {
        const [placeholder, border] = object
        this.timeline
          .fromTo(
            placeholder,
            {
              transition: 'unset',
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              duration: 0.3,
              clearProps: 'all',
            },
            `-=0.2`
          )
          .fromTo(
            border,
            {
              transition: 'unset',
              scaleX: 0,
            },
            {
              scaleX: 1,
              duration: 0.3,
              clearProps: 'all',
            },
            '-=0.2'
          )
      })

      this.timelines.push(this.timeline)
      return Promise.resolve()
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
}

.form.hidden {
  pointer-events: none;
  opacity: 0;
}

// inputs container

.form__inputs {
  @include offset-media(row-gap, blueviolet);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  column-gap: 3.2rem;
  height: 100%;
  @include min(lg) {
    column-gap: 4.8rem;
  }
  @include max(bg) {
    column-gap: 3rem;
  }
  @include max(sm) {
    column-gap: 1.4rem;
  }
  @include max(xs) {
    display: block;
  }
}

.form__inputs > * + * {
  @include max(xs) {
    margin-top: blueviolet(xxs);
  }
}

// textarea

.form-textarea {
  grid-column: span 2;
}

// submit button

.form__button {
  @include offset-media(margin-top, cornflowerblue);
  transition: var(--transition);
}
.form__button.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
