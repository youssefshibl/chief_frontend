<template>
  <label for="toggle_button" class="toggle__button">
    <span v-if="isActive" class="toggle__label">ar</span>
    <span v-if="!isActive" class="toggle__label">en</span>

    <input type="checkbox" id="toggle_button" v-model="currentState" />
    <span :class="['toggle__switch', classactivation]"></span>
  </label>
</template>
<script>
import master from "@/core/scripts/Scripts";
export default {
  data() {
    return {
      currentState: false,
    };
  },
  watch: {
    currentState(newValue) {
      //   console.log("new", newValue);
      if (newValue) {
        // document
        //   .querySelector(":root")
        //   .style.setProperty("--font_one", "'Amiri', serif");
        master.changeglobal("font_one", "'Amiri', serif");
        this.$i18n.locale = "ar";

        // console.log(this.$i18n.locale);
      } else {
        document;
        // .querySelector(":root")
        // .style.setProperty("--font_one", "'Oleo Script Swash Caps', cursive");
        master.changeglobal("font_one", "'Oleo Script Swash Caps', cursive");

        this.$i18n.locale = "en";
        // console.log(this.$i18n.locale);
      }
    },
  },

  computed: {
    classactivation() {
      if (this.currentState) {
        return "active";
      } else {
        return "notactive";
      }
    },
    isActive() {
      return this.currentState;
    },
  },
};
</script>
<style scoped>
.toggle__button {
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
}
.toggle__button input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
}
.toggle__button .toggle__label {
  width: 30px;
  display: inline-block;
}
.toggle__button .toggle__switch {
  display: inline-block;
  height: 12px;
  border-radius: 6px;
  width: 40px;
  background: #bfcbd9;
  box-shadow: inset 0 0 1px #bfcbd9;
  position: relative;
  margin-left: 10px;
  transition: all 0.25s;
}

.toggle__button .toggle__switch::before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  top: -3px;
  transition: 0.5s;
}

.toggle__button .toggle__switch.notactive::before {
  background: #4d4d4d;
  box-shadow: 0 0 1px #666;
  left: -2px;
  right: 22px;
}
.toggle__button .toggle__switch.active::before {
  background: #86b61f;
  box-shadow: 0 0 1px #86b61f6e;
  left: 25px;
  right: 0px;
}
</style>
