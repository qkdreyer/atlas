<template>
  <Page>
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Image class="logo" src="~/images/logo.png" />
        <Label class="header" text="Atlas" />

        <!-- <PreviousNextView> -->
          <StackLayout class="input-field" marginBottom="25">
            <LabelTextField
              v-model="user.email"
              class="input"
              placeholder="Email"
              keyboard-type="email"
              autocorrect="false"
              autocapitalization-type="none"
              return-key-type="next"
              fontSize="18"
              @returnPress="$refs.password.nativeView.focus()"
            />
            <StackLayout class="hr-light" />
          </StackLayout>

          <StackLayout class="input-field" marginBottom="25">
            <LabelTextField
              ref="password"
              v-model="user.password"
              :secure="true"
              :returnKeyType="isLoggingIn ? 'done' : 'next'"
              class="input"
              placeholder="Password"
              fontSize="18"
              @returnPress="!isLoggingIn && $refs.confirmPassword.nativeView.focus()"
            />
            <StackLayout class="hr-light" />
          </StackLayout>

          <StackLayout v-show="!isLoggingIn" class="input-field">
            <LabelTextField
              ref="confirmPassword"
              v-model="user.confirmPassword"
              :secure="true"
              class="input"
              placeholder="Confirm password"
              fontSize="18"
              returnKeyType="done"
            />
            <StackLayout class="hr-light" />
          </StackLayout>
        <!-- </PreviousNextView> -->

        <Button
          :text="isLoggingIn ? 'Log In' : 'Sign Up'"
          @tap="submit"
          class="btn btn-primary m-t-20"
        />
        <Label
          v-show="isLoggingIn"
          text="Forgot your password?"
          class="login-label"
          @tap="forgotPassword"
        />
      </StackLayout>

      <Label class="login-label sign-up-label" @tap="toggleForm">
        <FormattedString>
          <Span :text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'" />
          <Span :text="isLoggingIn ? 'Sign up' : ''" class="bold" />
        </FormattedString>
      </Label>
    </FlexboxLayout>
  </Page>
</template>

<script>
    import Tabs from '@/views/layout/tabs';
    import LabelTextField from '@/components/label-text-field';

    // TODO update user service stub
    const userService = {
      register(user) {
        return Promise.resolve(user);
      },
      login(user) {
        return Promise.resolve(user);
      },
      resetPassword(email) {
        return Promise.resolve(email);
      }
    };

  export default {
    name: 'LoginView',
    components: {
      LabelTextField,
    },
    data() {
      return {
        isLoggingIn: true,
        user: {
          email: this.get('email', ''),
          password: this.get('password', ''),
          confirmPassword: '',
        },
      };
    },
    methods: {
      toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
      },
      submit() {
        console.log(JSON.stringify(this.user));
        if (!this.user.email || !this.user.password) {
          this.alert('Please provide both an email address and password.',);
          return;
        }
        if (this.isLoggingIn) {
          this.login();
        } else {
          this.register();
        }
      },
      login() {
        userService.login(this.user).then(() => {
          this.set('email', this.user.email);
          this.set('password', this.user.password);
          this.set('logged_in', true);
          this.$navigateTo(Tabs, {
            clearHistory: true
          });
        }).catch((error) => {
          this.alert(`Unfortunately we could not find your account. (${error})`);
        });
      },
      register() {
        if (this.user.password != this.user.confirmPassword) {
          this.alert('Your passwords do not match.');
          return;
        }

        userService.register(this.user).then(() => {
          this.alert('Your account was successfully created.');
          this.isLoggingIn = true;
        }).catch(() => {
          this.alert('Unfortunately we were unable to create your account.',);
        });
      },
      forgotPassword() {
        prompt({
          title: 'Forgot Password',
          message: 'Enter the email address you used to register for Atlas to reset your password.',
          inputType: 'email',
          defaultText: '',
          okButtonText: 'Ok',
          cancelButtonText: 'Cancel',
        }).then((data) => {
          if (data.result) {
            userService
              .resetPassword(data.text.trim())
              .then(() => {
                this.alert('Your password was successfully reset. Please check your email for instructions on choosing a new password.',);
              })
              .catch(() => {
                this.alert('Unfortunately, an error occurred resetting your password.',);
            });
          }
        });
      },
      alert(message) {
        return alert({
          title: 'Atlas',
          okButtonText: 'OK',
          message,
        });
      },
    },
  };
</script>

<style scoped>
  .page {
    align-items: center;
    flex-direction: column;
  }

  .form {
    margin-left: 30;
    margin-right: 30;
    flex-grow: 2;
    vertical-align: middle;
  }

  .logo {
    margin-bottom: 12;
    height: 90;
    font-weight: bold;
  }

  .header {
    horizontal-align: center;
    font-size: 25;
    font-weight: 600;
    margin-bottom: 70;
    text-align: center;
    color: #d51a1a;
  }

  .input-field {
    margin-bottom: 25;
  }

  .input {
    font-size: 18;
    placeholder-color: #a8a8a8;
  }

  .input-field .input {
    font-size: 54;
  }

  .btn-primary {
    height: 50;
    margin: 30 5 15 5;
    background-color: #d51a1a;
    border-radius: 5;
    font-size: 20;
    font-weight: 600;
  }

  .login-label {
    horizontal-align: center;
    color: #a8a8a8;
    font-size: 16;
  }

  .sign-up-label {
    margin-bottom: 20;
  }

  .bold {
    color: #000000;
  }
</style>
