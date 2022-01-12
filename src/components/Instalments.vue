<template>
  <div>
    <ul class="ec-checkout__instalments base">
      <instalment
        v-for="(item, index) in listBase"
        :key="item.term"
        v-model="selectedInstalment"
        :index="index"
        :instalment="item"
      />
    </ul>
    <ul
      class="ec-checkout__instalments extended"
      :class="listClasses"
      :style="{ 'max-height': listExtendedMaxHeight }"
    >
      <instalment
        v-for="(item, index) in listExtended"
        :key="item.term"
        v-model="selectedInstalment"
        :index="rows + index"
        :instalment="item"
      />
    </ul>
    <ul class="ec-checkout__instalments actions">
      <li
        class="more"
        :class="listClasses"
        @click="toggleList"
      >
        {{ button }}
      </li>
    </ul>
  </div>
</template>

<script>
import Instalment from './Instalment.vue'

export default {
  components: {
    Instalment
  },
  props: {
    instalments: Array,
    value: Number
  },
  data () {
    return {
      rows: 5,
      selected: null,
      collapsed: true,
      collapsing: false,
      button: 'Weitere Raten anzeigen +'      
    }
  },
  computed: {
    listBase () {
      return this.instalments.slice(0, this.rows)
    },
    listExtended () {
      return this.instalments.slice(this.rows)
    },
    listExtendedMaxHeight () {
      var maxHeight = ((this.instalments.length - this.rows) * 40) + 2
      return maxHeight + 'px'
    },
    listClasses () {
      return {
        'collapsing': this.collapsing,
        'collapsed': this.collapsed
      }
    },
    selectedInstalment: {
        get() { return this.value },
        set(instalment) {this.$emit('input', instalment)}
    }
  },
  watch: {
    value() {
      this.$emit('input', this.value);
    }
  },
  methods: {
    toggleList () {
      this.collapsing = !this.collapsing;
      setTimeout(() => this.collapsing = !this.collapsing, 350);
      setTimeout(() => this.collapsed = !this.collapsed, 350);
      this.button = !this.collapsed ? 'Weitere Raten anzeigen +' : 'Weniger Raten anzeigen -';

      
      if ( this.instalments.findIndex((item) => item.term == this.selectedInstalment) >= this.rows ) {
        this.selectedInstalment = this.instalments.find(() => true).term
      }
    }    
  }
}
</script>
