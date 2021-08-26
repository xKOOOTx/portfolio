<template>
  <div class="contactMe">
    <div class="contactMe__wrapper">
      <form
        action="/"
        class="contactMe__form"
        id="form"
        v-on:submit.prevent="submitForm()"
      >
        <input
          type="text"
          class="contactMe__form_name contactMe__form_input input _req"
          placeholder="Your name?"
          name="userName"
          required
        >
        <input
          type="number"
          class="contactMe__form_name contactMe__form_input input _req"
          placeholder="Your phone number?"
          name="userPhoneNumber"
          required
        >
        <input
          type="email"
          class="contactMe__form_email contactMe__form_input input _req _email"
          placeholder="Your Email"
          name="userEmail"
          required
        >
        <textarea
          class="contactMe__form_textarea contactMe__form_input input _req"
          placeholder="Your message"
          name="userMessage"
          required
        ></textarea>
        <input type="submit" class="contactMe__form_submitBtn" value="Send message">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {
      error: 0,
      submitForm() {
        // eslint-disable-next-line
        console.log('submit');
        this.formSend();
      },

      async formSend() {
        const form = document.getElementById('form');
        this.error = this.formValidate(form);

        const formData = new FormData(form);

        if (!this.error === 0) {
          // eslint-disable-next-line
          alert('Заполните все поля');
        } else {
          form.classList.add('_sending');
          const response = await fetch('../php/sendmail.php', {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            const result = await response.json();
            alert(result.message);
            form.reset();
            form.classList.remove('_sending');
          } else {
            alert('Ошибка');
            form.classList.remove('_sending');
          }
        }
      },
      formValidate() {
        const formReq = document.querySelectorAll('._req');
        // eslint-disable-next-line
        for (let i = 0; i < formReq.length; i++) {
          const input = formReq[i];
          this.formRemoveError(input);

          if (input.classList.contains('_email')) {
            if (this.emailTest(input)) {
              this.formAddError(input);
              this.error++;
            }
          } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            this.formAddError(input);
            this.error++;
          } else {
            if (input.value === '') {
              this.formAddError(input);
              this.error++;
            }
          }
        }
      },
      formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
      },
      formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
      },
      emailTest(input) {
        // eslint-disable-next-line
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/variables';
  .contactMe {
    margin-left: 300px;
    padding: 100px;

    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 100px;
      border-radius: 10px;
      background: $grey;
    }
    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 400px;
      width: 100%;
      max-height: 400px;
      &_input {
        margin: 10px 0;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: 1px solid transparent;

        font-family: Roboto;
        &::placeholder {
          font-family: inherit;
        }
      }
      &_textarea {
        resize: vertical;
        margin-bottom: 20px;
      }
      &_submitBtn {
        padding: 10px;
        border-radius: 5px;
        background: $textHeaders;
        color: $white;
        outline: none;
        border: none;
        cursor: pointer;
      }
    }
  }
</style>
