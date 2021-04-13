<template>
  <li
    @click="toggleInstalment"
    :class="instalmentClasses"
  >
    <span>{{ instalment.months }} Monate</span> <span>{{ instalment.instalment }} € / Monat</span>
  </li>
</template>

<script>
import {bus} from '../main.js'

export default {
  name: 'Instalment',
  props: ['index', 'instalment'],
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleInstalment: function () {
      this.isActive = true;
      bus.$emit('instalmentToggled', this.index);
    },
    instalmentToggled: function () {
      this.isActive = false;
    },
    instalmentToggleIfFirst: function () {
      if ( this.index === 0 ) {
        this.toggleInstalment();
      }
    }
  },
  computed: {
    instalmentClasses: function () {
      return {
        'is-active': this.isActive
      };
    }
  },
  mounted () {
    this.instalmentToggleIfFirst();

    bus.$on('instalmentToggled', (data) => {
      if ( this.index !== data ) {
        this.instalmentToggled();
      }
    });
    bus.$on('instalmentToggleReset', () => this.instalmentToggleIfFirst());
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
