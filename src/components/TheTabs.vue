<template>
  <div class="layout__tabs">
    <div
      @click.prevent="sIdx = 1"
      :class="{'layout__tab': true, 'layout__tab-active': sIdx === 1}"
    ><div v-if="sIdx === 1" class="_step">#1</div><h3>Формат</h3>
    </div>
    <div
      @click.prevent="sIdx = 2"
      :class="{'layout__tab': true, 'layout__tab-active': sIdx === 2}"
    ><div v-if="sIdx === 2" class="_step">#2</div><h3>Количество</h3>
    </div>
    <div
      @click.prevent="sIdx = 3"
      :class="{'layout__tab': true, 'layout__tab-active': sIdx === 3}"
    ><div v-if="sIdx === 3" class="_step">#3</div><h3>Контент</h3>
    </div>
    <div
      @click.prevent="sIdx = 4"
      :class="{'layout__tab': true, 'layout__tab-active': sIdx === 4}"
    ><div v-if="sIdx === 4" class="_step">#4</div><h3>Экспорт</h3>
    </div>
  </div>
</template>
