<template>
    <div>
        <ul class="ec-checkout__instalments base">
            <instalment
            v-for="(item, index) in listBase"
            :index="index"
            :instalment="item"
            :key="item.anzahlRaten"
            v-model="selected"
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
            v-model="selected"
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
    <div>
</template>

<script>
import Instalment from './Instalment.vue'

export default {
  components: {
    Instalment
  },
  props: ['instalments'],
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
  },
  methods: {
    toggleList () {
      this.collapsing = !this.collapsing;
      setTimeout(() => this.collapsing = !this.collapsing, 350);
      setTimeout(() => this.collapsed = !this.collapsed, 350);
      this.button = !this.collapsed ? 'Weitere Raten anzeigen +' : 'Weniger Raten anzeigen -';

      if ( this.selectedIndex >= this.rows ) {
        //bus.$emit('instalmentToggleReset')
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
