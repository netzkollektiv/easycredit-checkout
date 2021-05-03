<template>
    <div>
        <ul class="ec-checkout__instalments base">
            <instalment
              v-for="(item, index) in listBase"
              :index="index"
              :instalment="item"
              :key="item.anzahlRaten"
              v-model="selectedInstalment"
            />
        </ul>
        <ul
            class="ec-checkout__instalments extended"
            :class="listClasses"
            :style="{ 'max-height': listExtendedMaxHeight }"
        >
            <instalment
              v-for="(item, index) in listExtended"
              :index="rows + index"
              :instalment="item"
              :key="item.anzahlRaten"
              v-model="selectedInstalment"
            />
        </ul>
        <ul class="ec-checkout__instalments actions">
            <li
            @click="toggleList"
            class="more"
            :class="listClasses"
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
    value: {
      type: Number
    }
  },
  watch: {
    value() {
      this.$emit('input', this.value);
    }
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
  methods: {
    toggleList () {
      this.collapsing = !this.collapsing;
      setTimeout(() => this.collapsing = !this.collapsing, 350);
      setTimeout(() => this.collapsed = !this.collapsed, 350);
      this.button = !this.collapsed ? 'Weitere Raten anzeigen +' : 'Weniger Raten anzeigen -';

      
      if ( this.instalments.findIndex((item)=> item.zahlungsplan.anzahlRaten == this.selectedInstalment) >= this.rows ) {
        this.selectedInstalment = this.instalments.find(()=>true).zahlungsplan.anzahlRaten
      }
    }    
  },
  mounted () {
    /*
    bus.$on('instalmentToggled', (index) => {
      if (this.instalments.length == 0) {
        return;
      }
      this.selectedIndex = index
      this.totals.interest = this.instalments[index].zinsen.anfallendeZinsen
      this.totals.total = this.instalments[index].gesamtsumme
    })
    */
  }
}
</script>
