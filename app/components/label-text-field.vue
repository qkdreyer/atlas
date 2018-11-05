<template>
  <GridLayout rows="30, auto" margin-bottom="5">
    <Label
      ref="label"
      :text="placeholder"
      row="1"
      opacity="0.4"
      fontSize="18"
      class="input"
    />
    <TextField
      v-bind:value="value"
      ref="textField"
      :secure="secure"
      :borderBottomColor="color"
      :hint="hint"
      :class="textFieldClass"
      :keyboardType="keyboardType"
      :autocorrect="autocorrect"
      :autocapitalizationType="autocapitalizationType"
      :returnKeyType="returnKeyType"
      :fontSize="fontSize"
      row="1"
      borderBottomWidth="3"
      padding="0"
      @textChange="log('textChange', $event.value), $emit('input', $event.value)"
      @focus="onFocus($event), $emit('focus', $event)"
      @blur="onBlur($event), $emit('blur', $event)"
      @returnPress="$emit('returnPress', $event)"
    />
  </GridLayout>
</template>

<script>
  import { Color } from 'color';

  export default {
    name: 'LabelTextFieldComponent',
    props: {
      value: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      secure: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: '#cec8c8',
      },
      focusColor: {
        type: String,
        default: '#00b47e',
      },
      hint: {
        type: String,
        default: '',
      },
      textFieldClass: {
        type: String,
        default: '',
      },
      keyboardType: {
        type: String,
        default: '',
      },
      autocorrect: {
        type: String,
        default: '',
      },
      autocapitalizationType: {
        type: String,
        default: '',
      },
      returnKeyType: {
        type: String,
        default: '',
      },
      fontSize: {
        type: String,
        default: '',
      },
    },
    methods: {
      onFocus() {
        const label = this.$refs.label.nativeView;
        const textField = this.$refs.textField.nativeView;

        label.animate({
          translate: { x: 0, y: -25 },
          opacity: 1,
        });
        console.log(this.focusColor, this.color);
        textField.borderBottomColor = new Color(this.focusColor);
      },
      onBlur() {
        const label = this.$refs.label.nativeView;
        const textField = this.$refs.textField.nativeView;

        if (!textField.text) {
          label.animate({
            translate: { x: 0, y: 0 },
            opacity: 0.4,
          });
        }

        textField.borderBottomColor = new Color(this.color);
      },
    },
  };
</script>

<style scoped>
</style>
